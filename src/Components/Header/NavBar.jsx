import { Link, NavLink } from "react-router-dom";

const NavBar = () => {

    const links = <>
        <li><NavLink to="/" className={({isActive}) => isActive ? 'text-primary font-bold rounded-lg border border-green-500 p-4' : 'font-bold '}>Home</NavLink></li>
        <li><NavLink to="/listed" className={({isActive})  => isActive ? 'text-primary font-bold rounded-lg border border-green-500 p-4' : 'font-bold'}>Listed Books</NavLink></li>
        <li><NavLink to="/pagestoread" className={({isActive}) => isActive ? 'text-primary font-bold rounded-lg border border-green-500 p-4' : 'font-bold'}>Pages to Read</NavLink></li>
        <li><NavLink to="/testimonial" className={({isActive}) => isActive ? 'text-primary font-bold rounded-lg border border-green-500 p-4' : 'font-bold'}>Testimonial</NavLink></li>
        <li><NavLink to="/OurTeam" className={({isActive})  => isActive ? 'text-primary font-bold rounded-lg border border-green-500 p-4' : 'font-bold'}>Pricing</NavLink></li>
    </>

    return(
        <div>
            {/* <h3>Hello React!</h3> */}

            <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    {links}
                </ul>
                </div>
                <a className="btn btn-ghost text-3xl font-bold text-[#131313] ">Book Vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-[#131313CC] text-gray-700 text-opacity-80 text-center font-work-sans text-base font-normal">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-6">
                <Link  to='/signIn'  className="btn inline-flex p-4 justify-center items-center gap-4 rounded-lg bg-green-500">Sign In</Link>
                <Link to='/signUp' className="btn inline-flex p-4 justify-center items-center gap-4 rounded-lg bg-blue-400">Sign Up</Link>
            </div>
            </div>
        </div>
    );
}

export default NavBar; 