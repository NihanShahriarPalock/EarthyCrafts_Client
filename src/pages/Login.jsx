// import signIn from "../assets/signIn.jpg";
// import logo from "../assets/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import useAuth from "../hooks/useAuth";
import toast, { Toaster } from "react-hot-toast";
import Spinner from "../components/Spinner";
import UseAuth from "../hooks/UseAuth";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const navigate = useNavigate();
  const {
    user,
    signInWithEmailPassword,
    googleSignIn,
    githubSignIn,
    setLoading,
    loading,
  } = UseAuth();
  console.log(user);
  const location = useLocation();
  // google sign in
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result);
        setLoading(false);
        navigate(location?.state ? location.state : "/");
        toast.success("Login successful");
      })
      .catch((err) => {
        setLoading(false);
        toast.error(err.message);
      });
  };
  // github sign in
  const handleGithubSignIn = () => {
    githubSignIn()
      .then((result) => {
        console.log(result);
        setLoading(false);
        navigate(location?.state ? location.state : "/");
        toast.success("Login successful");
      })
      .catch((err) => {
        // console.log(err)
        setLoading(false);
        toast.error(err.message);
      });
  };

  // Handle Login
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form?.email.value;
    const password = form?.password.value;

    // Sign In
    signInWithEmailPassword(email, password)
      .then((result) => {
        console.log(result);
        setLoading(false);
        navigate(location?.state ? location.state : "/");
        toast.success("Login successful");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        toast.error(err.message);
      });
  };

  return (
    <div className='gadgetContainer'>
      <Helmet>
        <title>Earthly | Login</title>
      </Helmet>
      {loading && <Spinner />}

      <div className='border shadow-lg mt-10'>
        <div className='w-full  flex'>
          <div className='w-full lg:w-1/2 mx-auto bg-white p-5 rounded-lg lg:rounded-l-none'>
            <div className=' p-5 '>
              <form onSubmit={handleLogin} className='space-y-3 w-full '>
                <div className='flex justify-between mb-5'>
                  <div className='size-40 flex justify-center items-center'>
                    <img
                      className='w-full'
                      src='https://i.ibb.co/z7HF4gZ/logo.png'
                      alt=''
                    />
                  </div>
                  <div className='ml-8 divider lg:divider-horizontal'></div>
                  <div className='flex flex-col justify-center items-center'>
                    <h1 className='backdrop-blur-sm text-4xl text-center pb-5'>
                      Login Form
                    </h1>
                    <p className='pb-10 text-center text-gray-400'>
                      Sign in with your authorized email and password
                    </p>
                  </div>
                </div>
                <div>
                  <fieldset className='border border-solid border-gray-300 p-3 w-full rounded'>
                    <legend className=' font-medium text-black/60'>
                      Email
                    </legend>
                    <input
                      type='email'
                      name='email'
                      id=''
                      placeholder='Email'
                      className='px-4 py-1 w-full focus:outline-0'
                    />
                  </fieldset>
                </div>
                <div>
                  <fieldset className='border border-solid border-gray-300 p-3 w-full rounded'>
                    <legend className=' font-medium text-black/60'>
                      Password
                    </legend>
                    <input
                      type='password'
                      name='password'
                      id=''
                      placeholder='password'
                      className='px-4 py-1 w-full focus:outline-0'
                    />
                  </fieldset>
                </div>

                <button className='mt-6  hover:before:bg-red border-blue-500 relative h-[50px] w-full  border bg-white px-3 text-blue-500  transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:h-full before:w-0 before:bg-blue-500 before:transition-all before:duration-1000 hover:text-white  hover:before:left-0 hover:before:w-full'>
                  <span className='z-50 relative'>Login</span>
                </button>
              </form>

              <div className='mt-4 flex items-center space-x-1'>
                <div className='flex-1 h-px sm:w-16 bg-gray-300'></div>
                <p className='px-3 text-sm text-gray-600'>
                  Login with social accounts
                </p>
                <div className='flex-1 h-px sm:w-16 bg-gray-300'></div>
              </div>

              <div className='flex flex-col gap-4 md:flex-row justify-center my-4'>
                <button
                  onClick={() => handleGoogleSignIn()}
                  aria-label='Login with Google'
                  type='button'
                  className='flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-600 focus:ring-default-600'>
                  <svg className='w-4' viewBox='0 0 533.5 544.3'>
                    <path
                      d='M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z'
                      fill='#4285f4'
                    />
                    <path
                      d='M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z'
                      fill='#34a853'
                    />
                    <path
                      d='M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z'
                      fill='#fbbc04'
                    />
                    <path
                      d='M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z'
                      fill='#ea4335'
                    />
                  </svg>
                  <p>Login with Google</p>
                </button>

                <button
                  onClick={() => handleGithubSignIn()}
                  aria-label='Login with GitHub'
                  role='button'
                  className='flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-600 focus:ring-default-600'>
                  <svg className='w-6' viewBox='0 0 32 32'>
                    <path
                      fillRule='evenodd'
                      d='M16 4C9.371 4 4 9.371 4 16c0 5.3 3.438 9.8 8.207 11.387.602.11.82-.258.82-.578 0-.286-.011-1.04-.015-2.04-3.34.723-4.043-1.609-4.043-1.609-.547-1.387-1.332-1.758-1.332-1.758-1.09-.742.082-.726.082-.726 1.203.086 1.836 1.234 1.836 1.234 1.07 1.836 2.808 1.305 3.492 1 .11-.777.422-1.305.762-1.605-2.664-.301-5.465-1.332-5.465-5.93 0-1.313.469-2.383 1.234-3.223-.121-.3-.535-1.523.117-3.175 0 0 1.008-.32 3.301 1.23A11.487 11.487 0 0116 9.805c1.02.004 2.047.136 3.004.402 2.293-1.55 3.297-1.23 3.297-1.23.656 1.652.246 2.875.12 3.175.77.84 1.231 1.91 1.231 3.223 0 4.61-2.804 5.621-5.476 5.922.43.367.812 1.101.812 2.219 0 1.605-.011 2.898-.011 3.293 0 .32.214.695.824.578C24.566 25.797 28 21.3 28 16c0-6.629-5.371-12-12-12z'
                    />
                  </svg>
                  <p>Login with GitHub</p>
                </button>
              </div>
              <p className='text-sm text-center sm:px-6 text-gray-600'>
                Don&#x27;t have an account?
                <Link
                  to='/registration'
                  className='ml-2 text-blue-800 hover:underline underline-offset-4'>
                  Click to Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Toaster
        toastOptions={{
          duration: 3000,
        }}
      />
    </div>
  );
};

export default Login;
