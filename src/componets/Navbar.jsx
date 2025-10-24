import { useContext } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router";
import { AuthContext } from "../Provider/Authprovider";
import logo from "../assets/logo.png";
import userIcon from "../assets/image.png";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const location = useLocation();

  const handleLogout = () => {
    logOut()
      .then(() => toast.warning("Logout successful!"))
      .catch((error) => alert(error));
  };

  const navLinks = (
    <>
      <Link
        to="/"
        className={`px-2 py-1 border-b-2 transition-colors duration-300 ${
          location.pathname === "/"
            ? "border-amber-500 text-amber-400"
            : "border-transparent text-white hover:border-amber-500 hover:text-amber-400"
        }`}
      >
        Home
      </Link>
      <Link
        to="/discover"
        className={`px-2 py-1 border-b-2 transition-colors duration-300 ${
          location.pathname === "/discover"
            ? "border-amber-500 text-amber-400"
            : "border-transparent text-white hover:border-amber-500 hover:text-amber-400"
        }`}
      >
        Discover
      </Link>
      <Link
        to="/blog"
        className={`px-2 py-1 border-b-2 transition-colors duration-300 ${
          location.pathname === "/blog"
            ? "border-amber-500 text-amber-400"
            : "border-transparent text-white hover:border-amber-500 hover:text-amber-400"
        }`}
      >
        Blog
      </Link>
    </>
  );

  return (
    <div className="navbar bg-[#001931] shadow-md sticky top-0 z-50">
      {/* Left side */}
      <div className="navbar-start">
        {/* Mobile dropdown */}
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn text-amber-50 btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-[#001931] rounded-box z-50 mt-3 w-52 p-2 shadow text-white"
          >
            {navLinks}
          </ul>
        </div>

        {/* Logo */}
        <Link to="/" className="flex items-center gap-0 lg:gap-2">
          <img src={logo} alt="Logo" className="w-10 h-10" />
          <h3 className="text-xl lg:text-2xl font-semibold text-[hsl(200,80%,50%)]">
            Zero3Quest
          </h3>
        </Link>
      </div>

      {/* Center links (hidden on mobile) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-5 font-medium text-white">{navLinks}</ul>
      </div>

      {/* Right side */}
      <div className="navbar-end gap-3">
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full border-2 border-amber-400">
                <img
                  src={user.photoURL ? user.photoURL : userIcon}
                  alt="User"
                  title={user.displayName || "Profile"}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-[#001931] rounded-box w-52"
            >
              <li>
                <Link
                  to="/auth/profile"
                  className="text-white hover:text-amber-400"
                >
                  My Profile
                </Link>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="text-red-400 hover:text-red-500"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <div className="flex gap-2">
            <Link to="/auth/login">
              <button className="btn btn-outline btn-success btn-sm sm:btn-md">
                Login
              </button>
            </Link>
            <Link to="/auth/register">
              <button className="btn btn-outline btn-primary btn-sm sm:btn-md">
                Register
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
