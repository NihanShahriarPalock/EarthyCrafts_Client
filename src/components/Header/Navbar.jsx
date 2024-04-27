import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import UseAuth from "../../hooks/UseAuth";


const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light")
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark")
    }
    else {
      setTheme("light")
    }
  }
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  },[theme])
  const navigate = useNavigate();


  const { user, logOut } = UseAuth() || {};

  const handleLogOut = () => {
    logOut()
      .then((result) => toast.success("successfully Logout"))
      .catch((err) => toast.error(err));
    
  };

  return (
    <div className='max-w-[1920px] mx-auto'>
      <header className='bg-white shadow-lg  flex w-full dark:bg-[#120505] px-5 md:px-[50px] lg:px-[80px] xl:px-[120px] 2xl:px-[150px]'>
        <Link to='/' className='md:border-r flex flex-shrink-0 items-center'>
          <img
            className='md:w-[200px] w-[150px] h-[70px]  object-cover'
            src={logo}
            alt=''
          />
        </Link>
        {/* middle */}
        <nav className='header-links md:contents font-medium text-base  hidden '>
          <ul className='flex gap-8 items-center ml-4 xl:ml-8 mr-auto w-full justify-center dark:text-white'>
            <li>
              <NavLink
                to='/'
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#FF497C] border-b-4 border-[#FF497C]"
                    : "hover:text-[#FF497C]"
                }>
                <span>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/AllArtAndCraft'
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#FF497C] border-b-4 border-[#FF497C]"
                    : "hover:text-[#FF497C]"
                }>
                <span>All Art and Craft</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/AddCraft'
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#FF497C] border-b-4 border-[#FF497C]"
                    : "hover:text-[#FF497C]"
                }>
                <span>Add Craft</span>
              </NavLink>
            </li>
            <li>
              <Link to='/MyCraft'>My Added Product</Link>
            </li>
          </ul>
        </nav>

        {/* End */}
        <div className='relative md:border-l flex items-center  justify-end w-full md:w-auto pl-5 '>
          <label className='swap swap-rotate'>
            {/* this hidden checkbox controls the state */}
            <input type='checkbox' onChange={handleToggle} checked={theme==="light"? false:true} />

            {/* sun icon */}
            <svg
              className='swap-on fill-current w-10 h-10'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'>
              <path d='M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z' />
            </svg>

            {/* moon icon */}
            <svg
              className='swap-off fill-current w-10 h-10'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'>
              <path d='M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z' />
            </svg>
          </label>
          <div className=' w-[50px]'>
           
          </div>

          {user ? (
            <button
              
              className='border-2 border-[#FF497C] rounded-full w-[40px]'>
              <img
                src={user?.photoURL}
                alt=''
                className='w-full h-full rounded-full'
              />
            </button>
          ) : (
            <div className='flex flex-row'>
              <button
                onClick={() => navigate("/login")}
                className='bg-[#FF497C] hover:bg-[#ab3154]  duration-200 text-white font-bold px-4 xl:px-6 py-1 rounded mr-2'>
                Login
              </button>
              <button
                onClick={() => navigate("/registration")}
                className='bg-[#FF497C] hover:bg-[#ab3154]  duration-200 text-white font-bold px-4 xl:px-6 py-1 rounded'>
                Register
              </button>
            </div>
          )}

          {/* user Menu */}
          <div
            className={`absolute text-center 
            } flex flex-col justify-center items-center gap-4  shadow-lg bg-white dark:bg-[#120505] px-8 py-4 top-16 dark:text-white z-50`}>
            <p className='text-lg font-semibold'>{user?.displayName}</p>

            <button
              onClick={() => handleLogOut()}
              className='bg-[#FF497C] hover:bg-[#ab3154] duration-200 text-white font-bold px-4 xl:px-6 py-1 rounded cursor-pointer'>
              logout
            </button>
          </div>
        </div>

  
      </header>

      {/* Side Menu */}
      {/* transition-transform transform -translate-x-full */}
      <div
        className={`absolute  md:hidden  bg-white shadow-lg  w-56 min-h-screen overflow-y-auto top-0 left-0 ease-in-out duration-300 dark:bg-[#120505] dark:text-white z-50`}>
        <div className='p-4'>
          <a href='' className=' flex-shrink-0 flex items-center '>
            <img
              className='w-[200px]  h-[70px] object-cover'
              src={logo}
              alt=''
            />
          </a>
          <ul className='mt-6 flex flex-col gap-4 ml-5'>
            <li>
              <NavLink
                
                to='/'
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#FF497C] border-b-4 border-[#FF497C]"
                    : "hover:text-[#FF497C]"
                }>
                <span>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
               
                to='/AddCraft'
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#FF497C] border-b-4 border-[#FF497C]"
                    : "hover:text-[#FF497C]"
                }>
                <span>Add Product</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                
                to='/AllArtAndCraft'
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#FF497C] border-b-4 border-[#FF497C]"
                    : "hover:text-[#FF497C]"
                }>
                <span>All Art and Cart</span>
              </NavLink>
            </li>
          </ul>
        </div>

        <div className='ml-8 mt-8'>
          {user ? (
            <div className={`flex flex-col gap-2 top-16 pr-5`}>
              <button className='border-2 mx-auto border-[#FF497C] rounded-full w-[40px]'>
                <img
                  src={user?.photoURL}
                  alt=''
                  className='w-full h-full rounded-full'
                />
              </button>
              <p className='text-lg font-semibold text-center'>
                {user?.displayName}
              </p>
              <button
                onClick={() => handleLogOut()}
                className='bg-[#FF497C] hover:bg-[#ab3154] duration-200 text-white font-bold px-4  py-1 rounded '>
                logout
              </button>
            </div>
          ) : (
            <div className='flex flex-row'>
              <button
                onClick={() => navigate("/login")}
                className='bg-[#FF497C] hover:bg-[#ab3154] duration-200 text-white font-bold px-4 xl:px-6 py-1 rounded'>
                Login
              </button>
              <button
                onClick={() => navigate("/registration")}
                className='bg-[#FF497C] hover:bg-[#ab3154] duration-200 text-white font-bold px-4 xl:px-6 py-1 rounded'>
                Register
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;