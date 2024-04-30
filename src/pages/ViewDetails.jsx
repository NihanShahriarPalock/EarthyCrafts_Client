import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

const ViewDetails = () => {
  const { id } = useParams();
  const [craft, setCraft] = useState({});

  console.log(id);
  useEffect(() => {
    fetch(`https://jute-craft-server.vercel.app/singleCraft/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCraft(data);
      });
  }, [id]);
  return (
    <>
      <Helmet>
        <title>Earthly | Details</title>
      </Helmet>
      <div className='flex flex-col md:flex-row gap-4 mt-6 p-6'>
        <div className='w-full md:w-1/2 flex justify-center items-center'>
          <img
            className='w-full rounded-xl h-full '
            src={craft.image}
            alt='Image'
          />
        </div>
        <div className='w-full md:w-1/2 space-y-4'>
          <div className='collapse collapse-arrow bg-base-200'>
            <input type='radio' name='my-accordion-2' />
            <div className='collapse-title text-xl font-medium'>Item Name</div>
            <div className='collapse-content'>
              <h1>{craft.item_name}</h1>
            </div>
          </div>
          <div className='collapse collapse-arrow bg-base-200'>
            <input type='radio' name='my-accordion-2' />
            <div className='collapse-title text-xl font-medium'>
              Sub category Name
            </div>
            <div className='collapse-content'>
              <h1> {craft.subcategory_Name}</h1>
            </div>
          </div>
          <div className='collapse collapse-arrow bg-base-200'>
            <input type='radio' name='my-accordion-2' />
            <div className='collapse-title text-xl font-medium'>
              Short Description
            </div>
            <div className='collapse-content'>
              <h1> {craft.short_description}</h1>
            </div>
          </div>

          <div className='collapse collapse-arrow bg-base-200'>
            <input type='radio' name='my-accordion-2' />
            <div className='collapse-title text-xl font-medium'>Price</div>
            <div className='collapse-content'>
              <h1>{craft.price}</h1>
            </div>
          </div>
          <div className='collapse collapse-arrow bg-base-200'>
            <input type='radio' name='my-accordion-2' />
            <div className='collapse-title text-xl font-medium'>Rating</div>
            <div className='collapse-content'>
              <h1> {craft.rating}</h1>
            </div>
          </div>
          <div className='collapse collapse-arrow bg-base-200'>
            <input type='radio' name='my-accordion-2' />
            <div className='collapse-title text-xl font-medium'>
              Customization
            </div>
            <div className='collapse-content'>
              <h1> {craft.customization}</h1>
            </div>
          </div>
          <div className='collapse collapse-arrow bg-base-200'>
            <input type='radio' name='my-accordion-2' />
            <div className='collapse-title text-xl font-medium'>
              Processing Time
            </div>
            <div className='collapse-content'>
              <h1> {craft.processing_time}</h1>
            </div>
          </div>
          <div className='collapse collapse-arrow bg-base-200'>
            <input type='radio' name='my-accordion-2' />
            <div className='collapse-title text-xl font-medium'>
              Stock Status
            </div>
            <div className='collapse-content'>
              <h1> {craft.stockStatus}</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewDetails;
