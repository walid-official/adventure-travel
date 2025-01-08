import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate() 
  const handleSignOut = () => {
    signOutUser().then(() => {
      console.log("User is Signed out");
      navigate("/Form/Login")
      toast.success("Successfully logged out")
    });
  };

  const Links = (
    <>
      <NavLink to="/" className="px-3 font-normal md:text-white text-[17px]">
        <li>Home</li>
      </NavLink>
      <NavLink to="/Update" className="px-3 font-normal md:text-white text-[17px]">
        <li>Update Profile</li>
      </NavLink>
      <NavLink to="/myProfile" className="px-3 font-normal md:text-white text-[17px]">
        <li>User Profile</li>
      </NavLink>
    </>
  );
  return (
    <div className="">
      <div className="navbar sm:p-8">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn text-white btn-ghost lg:hidden">
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
              className="menu menu-sm  dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {Links}
            </ul>
          </div>
          <a className="btn btn-ghost text-[18px] sm:text-[26px] text-white">EcoVentura</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{Links}</ul>
        </div>
        <div className="navbar-end space-x-2">
          {user ? (
            <div className="bg-white flex justify-center items-center w-12 h-12 rounded-full tooltip tooltip-bottom"  data-tip={user?.displayName}>
              <img src={user?.photoURL} className="w-full h-full rounded-full" alt="" />
            </div>
          ) : (
            <div className="bg-white flex justify-center items-center w-12 h-12 rounded-full">
              <i class="fa-solid fa-user text-xl"></i>
            </div>
          )}

          <div className="">
            {user ? (
              <Link onClick={handleSignOut} className="md:px-7 md:py-3 hover:bg-transparent bg-white text-black hover:text-white font-semibold duration-500 md:rounded-md  border py-2 px-4 rounded-sm">
                logout
              </Link>
            ) : (
              <Link className="md:px-7 md:py-3 hover:bg-transparent bg-white text-black hover:text-white font-semibold duration-500 md:rounded-sm  border py-2 px-4 rounded-xl" to="/Form/Login">
                login
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
