import { useEffect, useState } from "react";
import UseAuth from "../hooks/UseAuth";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

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
            toast.success("Delete Successfully");
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
      <h2>My Craft List</h2>
      
      <select value={filterValue} onChange={handleFilterChange}>
        <option value='all'>All</option>
        <option value='yes'>Customized</option>
        <option value='no'>Non-customized</option>
      </select>
      
      {filteredCrafts.map((p, index) => (
        <div className='border-2 border-red-600' key={index}>
          <div className='flex flex-col gap-4'>
            <h1>Item name : {p.item_name}</h1>
            <h1>Price : {p.price}</h1>
            <h1>Rating name : {p.rating}</h1>
            <h1>Customization : {p.customization}</h1>
          </div>
          <div>
            <button
              onClick={() => handleDelete(p._id)}
              className='btn btn-error'>
              Delete
            </button>
            <Link to={`/updateCraft/${p._id}`}>
              <button className='btn btn-warning'>Update</button>{" "}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyCraft;
