// import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import UseAuth from "../hooks/UseAuth";
import { toast } from "react-hot-toast";

const AddCraft = () => {
  const { user } = UseAuth() || {};

  const handleAddCraft = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const item_name = form.item_name.value;
    const subcategory_Name = form.subcategory_Name.value;
    const short_description = form.short_description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const processing_time = form.processing_time.value;
    const stockStatus = form.stockStatus.value;
    const email = user.email;
    const displayName = user.displayName;

    const newCraft = {
      image,
      item_name,
      subcategory_Name,
      short_description,
      price,
      rating,
      customization,
      processing_time,
      stockStatus,
      email,
      displayName,
    };
    console.log(newCraft);
    fetch("http://localhost:5000/addcraft", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCraft),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data?.insertedId) {
          toast.success(`${item_name} is inserted`);
        }
        form.reset();
      });
  };
  return (
    <div className='w-full lg:w-3/4  mx-auto'>
      <Helmet>
        <title>Earthly | Add Craft</title>
      </Helmet>
      <h2 className='my-5 text-center font-bold text-2xl md:text-4xl '>
        Add A New Item
      </h2>
      <form
        onSubmit={handleAddCraft}
        className='grid grid-cols-1 md:grid-cols-2 gap-3  shadow-lg p-2 lg:p-6 border-2 border-gray-200'>
        <div className='flex flex-col gap-1'>
          <label className='font-semibold'>
            Image url <span className='text-red-500'>&#42;</span>
          </label>
          <input
            className='border-[1px] border-white   bg-gray-300 p-2 rounded-md'
            placeholder='Enter Image URL'
            required
            name='image'
            type='text'
          />
        </div>

        <div className='flex flex-col gap-1'>
          <label className='font-semibold'>
            Item Name <span className='text-red-500'>&#42;</span>
          </label>
          <input
            className='border-[1px] border-white   bg-gray-300 p-2 rounded-md'
            placeholder='Enter Item Name'
            required
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
            required
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
            required
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
            required
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
            required
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
            required
            name='short_description'
            type='text'
          />
        </div>
        <div></div>

        <div className='col-span-1 md:col-span-2'>
          <input
            className='btn btn-primary w-full '
            type='submit'
            value='Submit'
          />
        </div>
      </form>
    </div>
  );
};

export default AddCraft;
