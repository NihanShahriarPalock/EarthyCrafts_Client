
import { Link, useLoaderData } from "react-router-dom";

const AllArtAndCraft = () => {
  const crafts = useLoaderData();

  // Slice the crafts array to only include the first 2 items
  const limitedCrafts = crafts.slice(0, 2);

  return (
    <div className='container mx-auto px-4 py-8 bg-slate-50'>
      <h2 className='text-2xl font-bold mb-4 text-center text-black py-4'>
        All Art and Craft Items
      </h2>
      <div className='overflow-x-auto'>
        <table className='w-full table-auto'>
          <thead>
            <tr className='bg-gray-200'>
              <th className='py-2 text-black'>Item Name</th>
              <th className='py-2 text-black'>Subcategory Name</th>
              <th className='py-2 text-black'>Customization</th>
              <th className='py-2 text-black'>View Details</th>
            </tr>
          </thead>
          <tbody>
            {limitedCrafts.map((craft, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-300" : "bg-white"}>
                <td className='border py-2 text-black text-center'>
                  {craft.item_name}
                </td>
                <td className='border py-2 text-black text-center'>
                  {craft.subcategory_Name}
                </td>
                <td className='border py-2 text-black text-center'>
                  {craft.customization}
                </td>
                <td className='border py-2 text-black'>
                  <Link to={`/crafts/${craft._id}`}>
                    <p className='text-blue-500 font-bold  flex justify-center items-center'>
                      View Details
                    </p>
                  </Link>
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
