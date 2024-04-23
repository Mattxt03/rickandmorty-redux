import { useState } from "react";
import { useGetLocationsQuery } from "../../redux/ramApi"
import { Link } from "react-router-dom";

export const LocationList = () => {
    const [page, setPage] = useState(1)
    const {data, error, isLoading} = useGetLocationsQuery(page);

    if (isLoading) return <>Loading...</>
    if (error) return <>{error}</>
    if (!data) return <>No data Provided</>

    const locData = data.results;
    return <>
        <header>
            <div className="hero">
                <div className="hero-content text-center flex-col">
                    <div className="max-w-md">
                        <h1 className="text-5xl">Location List</h1>
                    </div>
                    <div className="join border-neutral border-2">
                        <button className="join-item btn" onClick={() => setPage(page - 1)} disabled={page === 1}>«</button>
                        <button className="join-item btn">Page {page}</button>
                        <button className="join-item btn" onClick={() => setPage(page + 1)} disabled={page === data.info.pages}>»</button>
                    </div>
                </div>
            </div>
        </header>

        <div className="flex justify-center flex-wrap mx-4">
            {locData && locData.map(({id, name, type, dimension}) => (
                <div className="card w-96 bg-base-100 border-neutral border-2 m-4">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title"> { name } </h2>
                        <p>{ type }</p>
                        <p>{ dimension }</p>
                    </div>
                </div>
            ))}    
        </div> 
    </>
}