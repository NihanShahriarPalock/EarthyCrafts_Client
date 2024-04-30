import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ArtCraftSection = () => {
  const [crafts, setCrafts] = useState([]);

  const { subcategory_Name } = useParams();

  useEffect(() => {
    fetch(
      `https://jute-craft-server.vercel.app/subCategory/${subcategory_Name}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCrafts(data);
      });
  }, [subcategory_Name]);

  return (
    <div className=' '>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-8'>
        {crafts.map((craft, index) => (
          <div key={index} className='relative mx-auto w-full'>
            <div className='shadow-2xl p-4 rounded-lg bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-300'>
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

                <p className=' '>
                  Price : <span className='italic'>{craft.price} </span>
                </p>

                <div className='flex gap-2 w-full btn border border-blue-500'>
                  <Link to={`/categoriesCraftsDetails/${craft._id}`}>
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

export default ArtCraftSection;
