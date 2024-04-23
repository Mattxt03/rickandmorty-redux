import { useState } from "react";
import { useGetCharactersQuery } from "../../redux/ramApi"
import { Link } from "react-router-dom";
import { addFavoriteCharacter } from "../../redux/favSlice";
import { useDispatch } from "react-redux";
import { FavChar } from "../../models/Character";

export const CharList = () => {

    const dispatch = useDispatch();
    
    const [page, setPage] = useState(1)
    const {data, error, isLoading} = useGetCharactersQuery(page);

    const handleAddCharToFav = (character: FavChar) => {
        dispatch(addFavoriteCharacter(character));
    };


    if (isLoading) return <>Loading...</>
    if (error) return <>{error}</>
    if (!data) return <>No data Provided</>

    const charData = data.results;


    return (
        <>
            <header>
                <div className="hero">
                    <div className="hero-content text-center flex-col">
                        <div className="max-w-md">
                            <h1 className="text-5xl font-bold">Character List</h1>
                        </div>
                        <div className="join border-neutral border-2">
                            <button className="join-item btn text-2xl font-normal" onClick={() => setPage(page - 1)} disabled={page === 1}>«</button>
                            <button className="join-item btn text-2xl font-normal">Page {page}</button>
                            <button className="join-item btn text-2xl font-normal" onClick={() => setPage(page + 1)} disabled={page === data.info.pages}>»</button>
                        </div>
                    </div>
                </div>
            </header>
            
            <div>
                <div className="flex flex-wrap mx-4">
                {charData && charData.map(({id, name, status, gender, image}) => (
                    <div key={id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-4">
                            <div className="card bg-base-100 border-2 border-gray-300 shadow-xl">
                                <Link to={`/character/${id}`} className="no-underline">
                                <figure className="p-4">
                                <img src={image} alt={name} className="rounded-xl" />
                                </figure>
                                </Link>
                                <div className="card-body items-center text-center">
                                <h2 className="card-title font-normal text-3xl">{name}</h2>
                                <div className="card-actions ">
                                    <button onClick={() => handleAddCharToFav({ id, name, status, gender, image })} className="btn btn-accent font-normal">Add to Favorites</button>
                                </div>
                                </div>
                            </div>
                    </div>
                ))}
                </div>
            </div>
        </>
    );
}