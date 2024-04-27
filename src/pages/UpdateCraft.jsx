import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateCraft = () => {
  const { id } = useParams();
    console.log(id);

     const [craft, setCraft] = useState({});

     console.log(id);
     useEffect(() => {
       fetch(`http://localhost:5000/singleCraft/${id}`)
         .then((res) => res.json())
         .then((data) => {
           setCraft(data);
         });
     }, [id]);


  const handleUpdateCraft = (e) => {
    e.preventDefault();
    const price = e.target.price.value;
    const rating = e.target.rating.value;
    const info = { price, rating };
    console.log(info);
       fetch(`http://localhost:5000/updateCraft/${id}`, {
         method: "PUT",
         headers: { "Content-type": "application/json" },
         body: JSON.stringify(info),
       });
  };

  return (
    <div>
      <h1 className='text-center font-semibold text-3xl'>Update Craft</h1>
      <form
        className='flex flex-col gap-2 w-1/2 mx-auto'
        onSubmit={handleUpdateCraft}>
        Price{" "}
        <input
          className='input input-bordered'
          type='text'
          name='price'
                  id=''
                  defaultValue={craft.price}
        />
        Rating{" "}
        <input
          className='input input-bordered'
          type='text'
          name='rating'
                  id=''
                  defaultValue={craft.rating}
        />
        <input className="btn btn-primary" type='submit' value='Submit' />
      </form>
    </div>
  );
};

export default UpdateCraft;
