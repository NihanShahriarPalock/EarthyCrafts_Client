import { toast } from "react-toastify";
import UseAuth from "../hooks/UseAuth";


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
      fetch('http://localhost:5000/addcraft', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(newCraft)
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
             if (data?.insertedId) {
               toast.success("Data Inserted")
          }
          form.reset();
        }); 

  };
  return (
    <div>
      <h2>Add Craft</h2>
      <form onSubmit={handleAddCraft}>
        <div>
          Image url
          <input
            type='text'
            placeholder='Image URL'
            className='input input-bordered '
            name='image'
          />
        </div>
        <div>
          item_name
          <input
            type='text'
            placeholder='item_name'
            className='input input-bordered '
            name='item_name'
          />
        </div>
        <div>
          subcategory_Name
          <input
            type='text'
            placeholder='subcategory_Name'
            className='input input-bordered '
            name='subcategory_Name'
          />
        </div>
        <div>
          short description
          <input
            type='text'
            placeholder='short description'
            className='input input-bordered '
            name='short_description'
          />
        </div>
        <div>
          price
          <input
            type='text'
            placeholder='price'
            className='input input-bordered '
            name='price'
          />
        </div>
        <div>
          rating
          <input
            type='text'
            placeholder='rating'
            className='input input-bordered '
            name='rating'
          />
        </div>
        <div>
          customization
          <input
            type='text'
            placeholder='customization-'
            className='input input-bordered '
            name='customization'
          />
        </div>
        <div>
          processing_time
          <input
            type='text'
            placeholder='processing_time'
            className='input input-bordered '
            name='processing_time'
          />
        </div>
        <div>
          stockStatus
          <input
            type='text'
            placeholder='stockStatus'
            className='input input-bordered '
            name='stockStatus'
          />
        </div>
    
    
        <div>
       
          <input className="btn btn-primary" type='submit' value='Submit' />
        </div>
      </form>
    </div>
  );
};

export default AddCraft;
