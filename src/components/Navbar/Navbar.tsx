import { useLocation, Link } from "react-router-dom";
import { Theme } from "../Theme/Theme"


export const Navbar = () => {

    const {pathname} = useLocation();
    const links = [
        {root: 'characters', name: 'Characters'},
      ]

    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <Link to="/" className="btn btn-ghost text-xl"> Home </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    {links.map(({root, name}, index) => 
                            <li key={index}><Link to={root} className={pathname === root ? "selected" : ""}> {name} </Link></li>
                        )}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Theme />
                </div>
            </div>
        </>
    )
}