import { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const CraftItemSection = () => {
  const [limitedCrafts, setLimitedCrafts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jute-craft-server.vercel.app/AllArtAndCraft"
        );
        const data = await response.json();
        const slicedCrafts = data.slice(0, 6);
        setLimitedCrafts(slicedCrafts);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className=' container mx-auto px-4 py-8 md:py-16 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-300'>
      <h2 className='text-2xl lg:text-4xl font-bold mb-4 text-center  pb-8'>
        <Fade duration={2000}>Art and Craft Items</Fade>
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {limitedCrafts.map((craft, index) => (
          <div key={index} className='relative mx-auto w-full'>
            <div className='shadow-md p-4 rounded-lg bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-300'>
              <div className='flex justify-center relative rounded-lg overflow-hidden h-52'>
                <div className='w-full'>
                  <img
                    src={craft.image}
                    alt='Image'
                    className='object-cover w-full h-52'
                  />
                </div>
              </div>
              <div className='space-y-3 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-300'>
                <p className='text-lg font-semibold'>{craft.item_name}</p>
                <p className=''>Sub Category Name : {craft.subcategory_Name}</p>
                <p className=''>
                  Stock Status :
                  <span className='italic'> {craft.stockStatus} </span>
                </p>
                <p className=' '>
                  Price : <span className='italic'>{craft.price} </span>
                </p>
                <p className='  '>
                  Rating : <span className='italic'>{craft.rating}</span>
                </p>
                <p className='flex items-center'>
                  <span className=' mr-1'>Customization : </span>
                  <span
                    className={`${
                      craft.customization === "yes"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}>
                    {craft.customization}
                  </span>
                </p>
                <div className='flex gap-2 w-full btn border border-blue-500'>
                  <Link to={`/crafts/${craft._id}`}>
                    <p className='text-blue-500 text-xl  font-bold  flex justify-center items-center w-full '>
                      View Details
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CraftItemSection;
