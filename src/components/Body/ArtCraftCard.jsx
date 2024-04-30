import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const ArtCraftCard = () => {
  return (
    <div className='bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-300'>
      <h2 className='text-center  font-bold text-2xl lg:text-4xl'>
        <Fade duration={2000}>Art & Craft Categories</Fade>
      </h2>
      <div className='relative   min-h-screen'>
        <div className='bg-cover w-full flex justify-center items-center'>
          <div className='w-full p-5  bg-opacity-40 '>
            <div className='w-12/12 mx-auto rounded-2xl bg-white dark:bg-gray-900 p-5 bg-opacity-40 '>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-center p-5 mx-auto border-2 dark:border-none rounded-2xl '>
                {/* Wooden Furniture & Sculptures */}
                <Link to='/ArtCraftSection/WoodenFurnitureSculptures'>
                  <article className='bg-white dark:bg-gray-900  p-6 mb-6 shadow transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer border'>
                    <div className='relative mb-4 rounded-2xl'>
                      <img
                        className='max-h-80 rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105'
                        src='https://i.ibb.co/YNMxWLJ/Wooden-Furniture-Sculptures.jpg'
                        alt=''
                      />

                      <span className='flex justify-center items-center bg-gray-500 bg-opacity-80 z-10 absolute top-0 left-0 w-full h-full text-white  rounded-2xl opacity-0 transition-all duration-300 transform group-hover:scale-105 text-xl group-hover:opacity-100'>
                        Click to visit this category
                        <svg
                          className='ml-2 w-6 h-6'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                          xmlns='http://www.w3.org/2000/svg'>
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M13 5l7 7-7 7M5 5l7 7-7 7'></path>
                        </svg>
                      </span>
                    </div>

                    <h3 className='font-medium text-xl leading-8'>
                      <span className='block relative group-hover:text-blue-500 transition-colors duration-200 '>
                        Wooden Furniture & Sculptures
                      </span>
                    </h3>
                  </article>
                </Link>
                {/* Wooden Home Decor */}
                <Link to='/ArtCraftSection/WoodenHomeDecor'>
                  <article className='bg-white dark:bg-gray-900  p-6 mb-6 shadow transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer border'>
                    <div className='relative mb-4 rounded-2xl'>
                      <img
                        className='max-h-80 rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105'
                        src='https://i.ibb.co/MZWdMfy/wooden-home-decor-1.jpg'
                        alt=''
                      />

                      <span className='flex justify-center items-center bg-gray-500 bg-opacity-80 z-10 absolute top-0 left-0 w-full h-full text-white rounded-2xl opacity-0 transition-all duration-300 transform group-hover:scale-105 text-xl group-hover:opacity-100'>
                        Click to visit this category
                        <svg
                          className='ml-2 w-6 h-6'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                          xmlns='http://www.w3.org/2000/svg'>
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M13 5l7 7-7 7M5 5l7 7-7 7'></path>
                        </svg>
                      </span>
                    </div>

                    <h3 className='font-medium text-xl leading-8'>
                      <span className='block relative group-hover:text-blue-500 transition-colors duration-200 '>
                        Wooden Home Decor
                      </span>
                    </h3>
                  </article>
                </Link>
                {/* Wooden Utensils and Kitchenware  */}
                <Link to='/ArtCraftSection/WoodenUtensilsKitchenware'>
                  <article className='bg-white dark:bg-gray-900   p-6 mb-6 shadow transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer border'>
                    <div className='relative mb-4 rounded-2xl'>
                      <img
                        className='max-h-80 rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105'
                        src='https://i.ibb.co/wNyW27X/Wooden-Utensils-and-Kitchenware.webp'
                        alt=''
                      />

                      <span className='flex justify-center items-center bg-gray-500 bg-opacity-80 z-10 absolute top-0 left-0 w-full h-full text-white rounded-2xl opacity-0 transition-all duration-300 transform group-hover:scale-105 text-xl group-hover:opacity-100'>
                        Click to visit this category
                        <svg
                          className='ml-2 w-6 h-6'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                          xmlns='http://www.w3.org/2000/svg'>
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M13 5l7 7-7 7M5 5l7 7-7 7'></path>
                        </svg>
                      </span>
                    </div>

                    <h3 className='font-medium text-xl leading-8'>
                      <span className='block relative group-hover:text-blue-500 transition-colors duration-200 '>
                        Wooden Utensils and Kitchenware
                      </span>
                    </h3>
                  </article>
                </Link>
                {/* Jute Home Decor  */}
                <Link to='/ArtCraftSection/JuteHomeDecor'>
                  <article className='bg-white dark:bg-gray-900   p-6 mb-6 shadow transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer border'>
                    <div className='relative mb-4 rounded-2xl'>
                      <img
                        className='max-h-80 rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105'
                        src='https://i.ibb.co/TPCBW1h/Jute-Home-Decor.jpg'
                        alt=''
                      />

                      <span className='flex justify-center items-center bg-gray-500 bg-opacity-80 z-10 absolute top-0 left-0 w-full h-full text-white rounded-2xl opacity-0 transition-all duration-300 transform group-hover:scale-105 text-xl group-hover:opacity-100'>
                        Click to visit this category
                        <svg
                          className='ml-2 w-6 h-6'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                          xmlns='http://www.w3.org/2000/svg'>
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M13 5l7 7-7 7M5 5l7 7-7 7'></path>
                        </svg>
                      </span>
                    </div>

                    <h3 className='font-medium text-xl leading-8'>
                      <span className='block relative group-hover:text-blue-500 transition-colors duration-200 '>
                        Jute Home Decor
                      </span>
                    </h3>
                  </article>
                </Link>
                {/* Jute Kitchenware & utensils */}
                <Link to='/ArtCraftSection/JuteKitchenwareUtensils'>
                  <article className='bg-white dark:bg-gray-900  p-6 mb-6 shadow transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer border'>
                    <div className='relative mb-4 rounded-2xl'>
                      <img
                        className='max-h-80 rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105'
                        src='https://i.ibb.co/k54XRRV/jute-kitchen.jpg'
                        alt=''
                      />

                      <span className='flex justify-center items-center bg-gray-500 bg-opacity-80 z-10 absolute top-0 left-0 w-full h-full text-white rounded-2xl opacity-0 transition-all duration-300 transform group-hover:scale-105 text-xl group-hover:opacity-100'>
                        Click to visit this category
                        <svg
                          className='ml-2 w-6 h-6'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                          xmlns='http://www.w3.org/2000/svg'>
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M13 5l7 7-7 7M5 5l7 7-7 7'></path>
                        </svg>
                      </span>
                    </div>

                    <h3 className='font-medium text-xl leading-8'>
                      <span className='block relative group-hover:text-blue-500 transition-colors duration-200 '>
                        Jute Kitchenware & Utensils
                      </span>
                    </h3>
                  </article>
                </Link>
                {/* Jute and wooden jewellery */}
                <Link to='/ArtCraftSection/JuteWoodenJewellery'>
                  <article className='bg-white dark:bg-gray-900  p-6 mb-6 shadow transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer border'>
                    <div className='relative mb-4 rounded-2xl'>
                      <img
                        className='max-h-80 rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105'
                        src='https://i.ibb.co/brxPLr8/wood.jpg'
                        alt=''
                      />

                      <span className='flex justify-center items-center bg-gray-500 bg-opacity-80 z-10 absolute top-0 left-0 w-full h-full text-white rounded-2xl opacity-0 transition-all duration-300 transform group-hover:scale-105 text-xl group-hover:opacity-100'>
                        Click to visit this category
                        <svg
                          className='ml-2 w-6 h-6'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                          xmlns='http://www.w3.org/2000/svg'>
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M13 5l7 7-7 7M5 5l7 7-7 7'></path>
                        </svg>
                      </span>
                    </div>

                    <h3 className='font-medium text-xl leading-8'>
                      <span className='block relative group-hover:text-blue-500 transition-colors duration-200 '>
                        Jute and Wooden Jewellery
                      </span>
                    </h3>
                  </article>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtCraftCard;
