import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const ArtCraftCategories = () => {
    const [crafts, setCrafts] = useState([]);
    const [control, setControl] = useState(false);
   const {subcategory_Name}=useParams() 
    

    useEffect(() => {     
        fetch(`http://localhost:5000/MyCraft/${subcategory_Name}`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            
          });
      
    }, []);
    //   const handleDelete = (_id) => {
    //     // console.log(_id);
      
          
    //         fetch(`http://localhost:5000/MyCraft/${_id}`, {
    //           method: "DELETE",
    //         })
    //           .then((res) => res.json())
    //           .then((data) => {
               
    //           });
          
        
    //   };
    return (
        <div>
            
        </div>
    );
};

export default ArtCraftCategories;