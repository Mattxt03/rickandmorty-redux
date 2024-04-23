import { Link } from "react-router-dom"

export const Home = () => {
    return <>
    <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
            <div className="max-w-md">
                <h1 className="text-5xl font-bold">Hello there</h1>
                <p className="py-6">:D</p>
                <Link to="/characters" className="btn btn-ghost text-xl"> Character list {">"} </Link>
            </div>
        </div>
    </div>
    </>
}