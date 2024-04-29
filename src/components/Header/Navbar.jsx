import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import UseAuth from "../../hooks/UseAuth";
import { MdLogout } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import { FaBarsStaggered } from "react-icons/fa6";
import ThemeController from "../ThemeController";

const Navbar = () => {
  const { user, logOut } = UseAuth() || {};
   const navigate = useNavigate();
  // const [theme, setTheme] = useState(
  //   localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  // );
  // const handleToggle = (e) => {
  //   if (e.target.checked) {
  //     setTheme("dark");
  //   } else {
  //     setTheme("light");
  //   }
  // };
  // useEffect(() => {
  //   localStorage.setItem("theme", theme);
  //   const localTheme = localStorage.getItem("theme");
  //   document.querySelector("html").setAttribute("data-theme", localTheme);
  // }, [theme]);
 

  const handleLogOut = () => {
    logOut()
      .then((result) => toast.success("successfully Logout"))
      .catch((err) => toast.error(err));
  };
  const allLink = (
    <>
      <NavLink
        to='/'
        className={({ isActive }) =>
          isActive
            ? "text-lg mr-4 text-gray-900 dark:text-gray-300 underline underline-offset-8  font-semibold    px-5 py-3"
            : "text-gray-900 dark:text-gray-300 text-lg mr-4 hover:underline hover:underline-offset-8    rounded-lg font-normal px-5 py-3"
        }>
        <span>Home</span>
      </NavLink>

      <NavLink
        to='/AllArtAndCraft'
        className={({ isActive }) =>
          isActive
            ? "text-lg mr-4 text-gray-900 dark:text-gray-300 underline underline-offset-8  font-semibold    px-5 py-3"
            : "text-gray-900 dark:text-gray-300 text-lg mr-4 hover:underline hover:underline-offset-8    rounded-lg font-normal px-5 py-3"
        }>
        <span>All Art and Craft</span>
      </NavLink>

      <NavLink
        to='/AddCraft'
        className={({ isActive }) =>
          isActive
            ? "text-lg mr-4 text-gray-900 dark:text-gray-300 underline underline-offset-8  font-semibold    px-5 py-3"
            : "text-gray-900 dark:text-gray-300 text-lg mr-4 hover:underline hover:underline-offset-8    rounded-lg font-normal px-5 py-3"
        }>
        <span>Add Craft</span>
      </NavLink>

      <NavLink
        to='/MyCraft'
        className={({ isActive }) =>
          isActive
            ? "text-lg mr-4 text-gray-900 dark:text-gray-300 underline underline-offset-8  font-semibold    px-5 py-3"
            : "text-gray-900 dark:text-gray-300 text-lg mr-4 hover:underline hover:underline-offset-8    rounded-lg font-normal px-5 py-3"
        }>
        <span>My Added Product</span>
      </NavLink>
    </>
  );
  return (
    <>
      <div className='navbar bg-gray-100 dark:bg-gray-900 '>
        <div className='navbar-start'>
          <div className='dropdown'>
            <div tabIndex={0} role='button' className='lg:hidden'>
              <span className='text-4xl'>
                <FaBarsStaggered />
              </span>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-50  shadow bg-blue-500 rounded-box w-52 text-black'>
              {allLink}
            </ul>
          </div>
          <button>
            <NavLink
              to='/'
              className='text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 dark:text-gray-300 '>
              Earthy Crafts
            </NavLink>
          </button>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal px-1'>{allLink}</ul>
        </div>
        <div className='navbar-end'>
          {/* 
            <input
              type='checkbox'
              onChange={handleToggle}
              checked={theme === "light" ? false : true}
            />

             sun icon 
            <svg
              className='swap-on fill-current w-10 h-10'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'>
              <path d='M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z' />
            </svg>

            
            <svg
              className='swap-off fill-current w-10 h-10'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'>
              <path d='M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z' />
            </svg>
          </label> */}
          <ThemeController></ThemeController>
          {user ? (
            <div className='dropdown dropdown-end flex justify-center items-center'>
              <div
                className='tooltip tooltip-left size-14 mr-6'
                data-tip={user?.displayName || "User Name not Available"}>
                <span className=''>
                  {" "}
                  <img
                    src={
                      user?.photoURL || "https://i.ibb.co/9cZ7vD2/user-icon.jpg"
                    }
                    alt='Profile'
                    className='w-full h-full object-cover rounded-full'
                  />
                </span>
              </div>

              <div>
                <button
                  onClick={() => handleLogOut()}
                  className=' hover:before:bg-red rounded-lg  relative h-[50px] w-full border-2 bg-red-400 border-red-500  px-5 py-3 text-black transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:h-full before:w-0 before:bg-red-600 before:transition-all before:duration-500 hover:text-white  hover:before:left-0 hover:before:w-full'>
                  <div className='flex'>
                    {" "}
                    <span className='z-50 relative'>Logout</span>
                    <span className='z-50 relative pl-2 pt-1 text-xl'>
                      <MdLogout />
                    </span>
                  </div>
                </button>
              </div>
            </div>
          ) : (
            <div className='flex flex-row gap-2'>
              <button
                onClick={() => navigate("/login")}
                className=' hover:before:bg-red rounded-lg  relative h-[50px] w-full border-2 bg-green-400 border-green-500  px-5 py-3 text-black transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:h-full before:w-0 before:bg-green-600 before:transition-all before:duration-500 hover:text-white  hover:before:left-0 hover:before:w-full'>
                <div className='flex'>
                  {" "}
                  <span className='z-50 relative'>Login</span>
                  {/* <span className='z-50 relative pl-2 pt-1 text-xl'>
                    <VscAccount />
                  </span> */}
                </div>
              </button>

              <button
                onClick={() => navigate("/registration")}
                className=' hover:before:bg-red rounded-lg  relative h-[50px] w-full border-2 bg-green-400 border-green-500  px-5 py-3 text-black transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:h-full before:w-0 before:bg-green-600 before:transition-all before:duration-500 hover:text-white  hover:before:left-0 hover:before:w-full'>
                <div className='flex'>
                  {" "}
                  <span className='z-50 relative'>Registration</span>
                  {/* <span className='z-50 relative pl-2 pt-1 text-xl'>
                    <VscAccount />
                  </span> */}
                </div>
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
