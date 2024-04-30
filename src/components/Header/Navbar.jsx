
import { NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import UseAuth from "../../hooks/UseAuth";
import { MdLogout } from "react-icons/md";
import { FaBarsStaggered } from "react-icons/fa6";
import ThemeController from "../ThemeController";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const { user, logOut } = UseAuth() || {};
   const navigate = useNavigate();

 
  const handleLogOut = () => {
    logOut()
      .then(() => toast.success("Logout Successfully"))
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
          <ThemeController></ThemeController>
          {user ? (
            <div className='ml-4 dropdown dropdown-end flex justify-center items-center'>
              <a
                data-tooltip-id='my-tooltip'
                data-tooltip-content={
                  user?.displayName || "User Name not Available"
                }
                data-tooltip-place='bottom'
                className=' size-14 mr-6'>
                <Tooltip
                  id='my-tooltip'
                  style={{
                    backgroundColor: "white", 
                    color: "black", 
                    border: "1px solid black", 
                    zIndex: 100,
                    fontWeight: "bold",
                  }}
                />
                <span className=''>
                  <img
                    src={
                      user?.photoURL || "https://i.ibb.co/9cZ7vD2/user-icon.jpg"
                    }
                    alt='Profile'
                    className='w-full h-full object-cover rounded-full'
                  />
                </span>
              </a>

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
                className=' hover:before:bg-red rounded-lg  relative h-[50px] w-full border-2 bg-green-400 border-green-500 sm:px-2 md:px-5 py-3 text-black transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:h-full before:w-0 before:bg-green-600 before:transition-all before:duration-500 hover:text-white  hover:before:left-0 hover:before:w-full'>
                <div className='flex'>
                  {" "}
                  <span className='z-50 relative'>Login</span>
                 
                </div>
              </button>

              <button
                onClick={() => navigate("/registration")}
                className=' hover:before:bg-red rounded-lg  relative h-[50px] w-full border-2 bg-green-400 border-green-500 px-2 md:px-5 py-3 text-black transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:h-full before:w-0 before:bg-green-600 before:transition-all before:duration-500 hover:text-white  hover:before:left-0 hover:before:w-full'>
                <div className='flex'>
                  {" "}
                  <span className='z-50 relative'>Register</span>
                  
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
