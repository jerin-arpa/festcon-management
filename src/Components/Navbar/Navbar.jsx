import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

    const navLink = <>
        <li>
            <NavLink to='/' className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-bold underline" : ""
            }>Home</NavLink>
        </li>
        <li>
            <NavLink to='/about' className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-bold underline" : ""
            }>About</NavLink>
        </li>
    </>



    return (
        <div className="bg-base-300">
            <div className="navbar container mx-auto px-5 mb-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>
                    <a className="text-2xl font-extrabold">FestCon Management</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-7 px-1">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to='/login'>
                        <button className="btn">Login</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;