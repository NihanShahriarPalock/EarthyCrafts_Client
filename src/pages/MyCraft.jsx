import { useEffect, useState } from "react";
import UseAuth from "../hooks/UseAuth";
import Swal from "sweetalert2";
import {  NavLink } from "react-router-dom";

const MyCraft = () => {
  const [crafts, setCrafts] = useState([]);
  const [control, setControl] = useState(false);
  const [filterValue, setFilterValue] = useState("all");
  const { user } = UseAuth() || {};

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/MyCraft/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setCrafts(data);
        });
    }
  }, [user, control]);

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/MyCraft/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            //  console.log(data);
            if (data.deleteCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }

            setControl(!control);
          });
      }
    });
  };

  const handleFilterChange = (e) => {
    setFilterValue(e.target.value);
  };

  const filteredCrafts =
    filterValue === "all"
      ? crafts
      : crafts.filter((craft) => craft.customization === filterValue);

  return (
    <div>
      <h2 className='my-10 text-center font-bold text-2xl lg:text-4xl'>
        My Added Craft Product List
      </h2>

      <div className='flex justify-center items-center mb-8'>
        <select
          className='select select-bordered w-full max-w-xs  '
          value={filterValue}
          onChange={handleFilterChange}>
          <option value='all'>Show All Product</option>
          <option value='yes'>Customized</option>
          <option value='no'>Non-customized</option>
        </select>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8'>
        {filteredCrafts.map((p, index) => (
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
                <p className='text-gray-600'>Stock Status : {p.stockStatus}</p>

                <div className='flex justify-between'>
                  <p className='text-lg text-blue-500  font-semibold '>
                    Price : {p.price}
                  </p>
                  <p className='text-lg text-blue-500  font-semibold'>
                    Rating : {p.rating}
                  </p>
                </div>
                <p className='flex items-center'>
                  <span className='text-gray-600 mr-1'>Customization : </span>
                  <span
                    className={`${
                      p.customization === "yes"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}>
                    {p.customization}
                  </span>
                </p>

                <div className='flex gap-2'>
                  <NavLink
                    to={`/updateCraft/${p._id}`}
                    className='btn btn-warning w-1/2'>
                    <span>Update</span>
                  </NavLink>
                  <button
                    onClick={() => handleDelete(p._id)}
                    className='btn btn-error w-1/2'>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCraft;
