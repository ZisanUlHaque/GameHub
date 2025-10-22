import { useLocation } from "react-router";
import logo from "../assets/logo.png";
import { Link } from "react-router";

const Navbar = () => {
  const location = useLocation();

  const Links = (
    <>
      <Link
        to="/"
        className={`px-2 py-1 border-b-2 transition-colors duration-300 ${
          location.pathname === "/" ? "border-amber-500 text-amber-400" : "border-transparent text-white hover:border-amber-500 hover:text-amber-400"
        }`}
      >
        Home
      </Link>
      <Link
        to="/discover"
        className={`px-2 py-1 border-b-2 transition-colors duration-300 ${
          location.pathname === "/discover" ? "border-amber-500 text-amber-400" : "border-transparent text-white hover:border-amber-500 hover:text-amber-400"
        }`}
      >
        Discover
      </Link>
      <Link
        to="/blog"
        className={`px-2 py-1 border-b-2 transition-colors duration-300 ${
          location.pathname === "/blog" ? "border-amber-500 text-amber-400" : "border-transparent text-white hover:border-amber-500 hover:text-amber-400"
        }`}
      >
        Blog
      </Link>
    </>
  );

  return (
    <div className="navbar bg-[#001931] shadow-sm mb-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn text-amber-50 btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {Links}
          </ul>
        </div>
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="w-10 h-10" />
          <h3 className="ml-2 text-2xl font-semibold text-[hsl(200,80%,50%)]">Zero3Quest</h3>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-4 font-medium text-white">{Links}</ul>
      </div>
      <div className="navbar-end gap-1 lg:gap-3">
        <Link to='/auth/login'><button className="btn btn-outline btn-success">Login</button></Link>
        <Link to='/auth/register'> <button className="btn btn-outline btn-primary">Register</button></Link>
      </div>
    </div>
  );
};

export default Navbar;
