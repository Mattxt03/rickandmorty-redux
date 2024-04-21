import { useGetMoviesQuery } from "../../redux/testApi"

export const MovieList = () => {
    const {data, error, isLoading} = useGetMoviesQuery();

    if (isLoading) return <>Loading...</>
    if (error) return <>{error}</>
    if (!data) return <>No data Provided</>
    console.log(data)
    return (
        <>
            <header>
                <div className="hero">
                    <div className="hero-content text-center">
                        <div className="max-w-md">
                            <h1 className="text-5xl font-bold">Movie List</h1>
                        </div>
                    </div>
                </div>
            </header>
                <div>
                    <div className="flex">
                    {data && data.map(({ id, poster_path, title, release_date, vote_average }) => (
                        <div key={id} className="card w-4/12 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={poster_path} alt="movie_poster" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{title}</h2>
                                <p>{release_date}</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary">{vote_average}</button>
                                </div>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
        </>
    );
}

{/* <li key={id}>{id}: {title}<br />{release_date}</li> */}