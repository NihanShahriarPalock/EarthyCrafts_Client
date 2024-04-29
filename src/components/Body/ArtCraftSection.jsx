import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const ArtCraftSection = () => {
  const [crafts, setCrafts] = useState([]);

  const { subcategory_Name } = useParams();

  useEffect(() => {
   
    fetch(`http://localhost:5000/subCategory/${subcategory_Name}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Data:", data);
        setCrafts(data);
      });
  }, [subcategory_Name]); 

  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8'>
        {crafts.map((p, index) => (
          <div key={index} className='relative mx-auto w-full'>
            <div className='shadow-md p-4 rounded-lg bg-white'>
              <div className='flex justify-center relative rounded-lg overflow-hidden h-52'>
                <div className='w-full'>
                  <img
                    src={p.image}
                    alt='Image'
                    className='object-cover w-full h-52'
                  />
                </div>
              </div>
              <div className='space-y-3'>
                <h3 className='text-xl font-semibold'>{p.item_name}</h3>
                <p className='text-gray-600'>
                  Sub Category Name: {p.subcategory_Name}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtCraftSection;
