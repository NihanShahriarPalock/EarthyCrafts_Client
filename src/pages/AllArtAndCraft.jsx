
import { useLoaderData } from "react-router-dom";

const AllArtAndCraft = () => {
  const crafts = useLoaderData();

  return (
    <div className='container mx-auto px-4 py-8'>
      <h2 className='text-2xl font-bold mb-4'>All Art and Craft Items</h2>
      <div className='overflow-x-auto'>
        <table className='table-auto w-full border-collapse'>
          <thead>
            <tr className='bg-gray-200'>
              <th className='px-4 py-2'>Item Name</th>
              <th className='px-4 py-2'>Price</th>
              <th className='px-4 py-2'>Ratings</th>
              <th className='px-4 py-2'></th>
            </tr>
            
          </thead>
          <tbody>
            {crafts.map((craft, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                <td className='border px-4 py-2'>{craft.item_name}</td>
                <td className='border px-4 py-2'>{craft.price}</td>
                <td className='border px-4 py-2'>{craft.ratings}</td>
                <td className='border px-4 py-2'>
                  <button>View Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllArtAndCraft;
