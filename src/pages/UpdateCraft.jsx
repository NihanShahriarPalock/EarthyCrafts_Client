import { useEffect, useState  } from "react";
import {  useParams } from "react-router-dom";

const UpdateCraft = () => {
  const { id } = useParams();
    const [craft, setCraft] = useState({});
    

  useEffect(() => {
    fetch(`http://localhost:5000/singleCraft/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCraft(data);
      });
  }, [id]);

 
  const handleUpdateCraft = (e) => {
    e.preventDefault();
    const item_name = e.target.item_name.value;
    const subcategory_Name = e.target.subcategory_Name.value;
    const short_description = e.target.short_description.value;
    const price = e.target.price.value;
    const image = e.target.image.value;
    const rating = e.target.rating.value;
    const processing_time = e.target.processing_time.value;
    const customization = e.target.customization.value;
    const stockStatus = e.target.stockStatus.value;

    const info = {
      item_name,
      subcategory_Name,
      short_description,
      price,
      image,
      rating,
      processing_time,
      customization,
      stockStatus,
    };
    console.log(info);
    fetch(`http://localhost:5000/updateCraft/${id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(info),
    });
    
  };


 

  return (
    <div className='w-full lg:w-3/4  mx-auto my-10'>
      <h1 className='text-center font-semibold text-3xl mb-10'>Update Craft</h1>
      <form
        className='grid grid-cols-1 md:grid-cols-2 gap-3  shadow-lg p-2 lg:p-6 border-2 border-gray-200'
        onSubmit={handleUpdateCraft}>
        
        <div className='flex flex-col gap-1'>
          <label className='font-semibold'>
            Image url <span className='text-red-500'>&#42;</span>
          </label>
          <input
            className='border-[1px] border-white bg-cover bg-no-repeat image-full w-full  bg-gray-300 p-2 rounded-md'
            placeholder='Enter Image URL'
            name='image'
            type='text'
            defaultValue={craft.image}
          />
        </div>

        <div className='flex flex-col gap-1'>
          <label className='font-semibold'>
            Item Name <span className='text-red-500'>&#42;</span>
          </label>
          <input
            className='border-[1px] border-white   bg-gray-300 p-2 rounded-md'
            placeholder='Enter Item Name'
            defaultValue={craft.item_name}
            name='item_name'
            type='text'
            />
        </div>

        <div className='flex flex-col gap-1'>
          <label className='font-semibold'>
            Subcategory Name <span className='text-red-500'>&#42;</span>
          </label>
          <select
            className='border-[1px] border-white bg-gray-300 p-2 rounded-md'
            name='subcategory_Name'>
            <option value=''>Select Subcategory</option>
            <option value='Wooden Furniture & Sculptures'>
              Wooden Furniture & Sculptures
            </option>
            <option value='Wooden Home Decor'>Wooden Home Decor</option>
            <option value='Wooden Utensils and Kitchenware'>
              Wooden Utensils and Kitchenware
            </option>
            <option value='Jute Home Decor'>Jute Home Decor</option>
            <option value='Jute Kitchenware & utensils'>
              Jute Kitchenware & utensils
            </option>
            <option value='Jute and wooden jewellery'>
              Jute and wooden jewellery
            </option>
          </select>
        </div>

        <div className='flex flex-col gap-1'>
          <label className='font-semibold'>
            Price <span className='text-red-500'>&#42;</span>
          </label>
          <input
            className='border-[1px] border-white   bg-gray-300 p-2 rounded-md'
            placeholder='Enter Price'
            defaultValue={craft.price}
            name='price'
            type='text'
          />
        </div>

        <div className='flex flex-col gap-1'>
          <label className='font-semibold'>
            Rating <span className='text-red-500'>&#42;</span>
          </label>
          <input
            className='border-[1px] border-white   bg-gray-300 p-2 rounded-md'
            placeholder='Enter Rating'
            defaultValue={craft.rating}
            name='rating'
            type='text'
          />
        </div>

        <div className='flex flex-col gap-1'>
          <label className='font-semibold'>
            Processing Time <span className='text-red-500'>&#42;</span>
          </label>
          <input
            className='border-[1px] border-white   bg-gray-300 p-2 rounded-md'
            placeholder='Enter Processing Time'
            defaultValue={craft.processing_time}
            name='processing_time'
            type='text'
          />
        </div>

        <div className='flex flex-row gap-1  items-center'>
          <label className='font-semibold'>
            Customization <span className='text-red-500'>&#42;</span>
          </label>

          <label>
            <input
              type='radio'
              value='yes'
              className='input-radio mx-2'
              name='customization'
            />
            Yes
          </label>
          <label className='ml-3'>
            <input
              type='radio'
              value='no'
              className='input-radio mx-2'
              name='customization'
            />
            No
          </label>
        </div>

        <div className='flex flex-row gap-1  items-center'>
          <label className='font-semibold'>
            Stock Status <span className='text-red-500'>&#42;</span>
          </label>

          <label>
            <input
              type='radio'
              value='madeToOrder'
              className='input-radio mx-2'
              name='stockStatus'
            />
            Made to Order
          </label>
          <label className='ml-3'>
            <input
              type='radio'
              value='inStock'
              className='input-radio mx-2'
              name='stockStatus'
            />
            In Stock
          </label>
        </div>

        <div className='flex flex-col gap-1 col-span-1 md:col-span-2'>
          <label className='font-semibold'>
            Short Description <span className='text-red-500'>&#42;</span>
          </label>
          <input
            className='border-[1px] border-white   bg-gray-300 p-2 rounded-md'
            placeholder='Enter Description'
            name='short_description'
            type='text'
            defaultValue={craft.short_description}
          />
        </div>
        <div></div>
        <input
          className='btn btn-primary flex flex-col gap-1 col-span-1 md:col-span-2'
          type='submit'
          value='Update'
        />
      </form>
    </div>
  );
};

export default UpdateCraft;
