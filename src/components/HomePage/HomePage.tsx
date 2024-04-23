import { Link, useLocation } from "react-router-dom"

export const Home = () => {

    const {pathname} = useLocation();
    const links = [
        {root: 'characters', name: 'Characters'},
        {root: 'locations', name: 'Locations'},
        {root: 'episodes', name: 'Episodes'},
        {root: 'favorites', name: 'Favorite Characters Page'},
      ]
      
    return <>
    <div className="hero flex  min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div>
                <h1 className="text-5xl font-bold mb-10">Welcome! Navigate with the options below:</h1>
                <div>
                    {links.map(({root, name}, index) => 
                        <p key={index} className="pt-2 pb-2"><Link to={root} className={` text-2xl ${pathname === root ? "selected" : ""}`}> {name} -{">"} </Link></p>
                    )}
                </div>    
            </div>
        </div>
    </div>
    </>
}