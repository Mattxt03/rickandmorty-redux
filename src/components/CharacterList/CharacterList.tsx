import { useState } from "react";
import { useGetCharactersQuery } from "../../redux/ramApi"
import { Link } from "react-router-dom";

export const CharList = () => {
    const [page, setPage] = useState(1)
    const {data, error, isLoading} = useGetCharactersQuery(page);

    if (isLoading) return <>Loading...</>
    if (error) return <>{error}</>
    if (!data) return <>No data Provided</>

    const charData = data.results;

    return (
        <>
            <header>
                <div className="hero">
                    <div className="hero-content text-center">
                        <div className="max-w-md">
                            <h1 className="text-5xl font-bold">Character List</h1>
                        </div>
                    </div>
                </div>
            </header>
            <div className="join">
               <button className="join-item btn" onClick={() => setPage(page - 1)}>«</button>
               <button className="join-item btn">Page {page}</button>
               <button className="join-item btn" onClick={() => setPage(page + 1)}>»</button>
           </div>
            <div>
                <div className="flex flex-wrap mx-4">
                {charData && charData.map(({id, name, status, gender, image}) => (
                    <div key={id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-4">
                        <Link to={`/character/${id}`} className="no-underline">
                            <div className="card bg-base-100 border-2 border-gray-300 shadow-xl">
                                <figure className="p-4">
                                <img src={image} alt={name} className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                <h2 className="card-title">{name}</h2>
                                <p>{gender}</p>
                                <p>{status}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
                </div>
            </div>
        </>
    );
}


/* {charData && charData.map(({id, name, status, gender}) => (
    <li key={id}>{id}: {name}<br />{status}<br />{gender}</li>
))}  */ 