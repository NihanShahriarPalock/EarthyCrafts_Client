import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const ViewDetails = () => {
    const { id } = useParams();
    const [craft, setCraft] = useState({});

    console.log(id);
    useEffect(() => {
        fetch(`http://localhost:5000/singleCraft/${id}`)
            .then(res => res.json())
            .then((data) => {
            setCraft(data);
        })
    },[id])
    return (
      <div>
        <h1>Item Name - {craft.item_name}</h1>
        <img src={`craft.image`} alt='kk' />
        <h1>Short Description - {craft.short_description}</h1>
        <h1>Sub category Name - {craft.subcategory_Name}</h1>
        <h1>Price -  {craft.price}</h1>
        <h1>Rating -  {craft.rating}</h1>
  
      </div>
    );
};

export default ViewDetails;