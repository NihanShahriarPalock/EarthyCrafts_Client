import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CraftItemSection = () => {
  const [limitedCrafts, setLimitedCrafts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/AllArtAndCraft");
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
    <div className='container mx-auto px-4 py-8 bg-slate-50'>
      <h2 className='text-2xl font-bold mb-4 text-center text-black py-4'>
         Art and  Craft Items
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {limitedCrafts.map((craft, index) => (
     
          <div key={index} className='relative mx-auto w-full'>
            <div className='shadow-md p-4 rounded-lg bg-white'>
              <div className='flex justify-center relative rounded-lg overflow-hidden h-52'>
                <div className='w-full'>
                  <img
                    src={craft.image}
                    alt='Image'
                    className='object-cover w-full h-52'
                  />
                </div>
              </div>
              <div className='space-y-3'>
                <h3 className='text-xl font-semibold'>{craft.item_name}</h3>
                <p className='text-gray-600'>
                  Sub Category Name: {craft.subcategory_Name}
                </p>
                <p className='text-gray-600'>Stock Status : {craft.stockStatus}</p>

                <div className='flex justify-between'>
                  <p className='text-lg text-blue-500  font-semibold '>
                    Price : {craft.price}
                  </p>
                  <p className='text-lg text-blue-500  font-semibold'>
                    Rating : {craft.rating}
                  </p>
                </div>
                <p className='flex items-center'>
                  <span className='text-gray-600 mr-1'>Customization : </span>
                  <span
                    className={`${
                      craft.customization === "yes"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}>
                    {craft.customization}
                  </span>
                </p>

                <div className='flex gap-2'>
                  <Link to={`/crafts/${craft._id}`}>
                   
                    <p className='text-blue-500 font-bold  flex justify-center items-center'>
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
