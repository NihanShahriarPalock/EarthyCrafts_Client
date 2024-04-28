import { Link, useLoaderData } from "react-router-dom";

const AllArtAndCraft = () => {
  const crafts = useLoaderData();

  return (
    <div className='container mx-auto px-4 py-8'>
      <h2 className='text-2xl font-bold mb-4 text-center py-4'>All Art and Craft Items</h2>
      <div className='overflow-x-auto'>
        <table className='w-full table-auto'>
          <thead>
            <tr className='bg-gray-200'>
              <th className='py-2'>Item Name</th>
              <th className='py-2'>Subcategory Name</th>
              <th className='py-2'>Customization</th>
              <th className='py-2'>View Details</th>
            </tr>
          </thead>
          <tbody>
            {crafts.map((craft, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                <td className='border py-2 text-center'>{craft.item_name}</td>
                <td className='border py-2 text-center'>{craft.subcategory_Name}</td>
                <td className='border py-2 text-center'>{craft.customization}</td>
                <td className='border py-2'>
                  <Link to={`/crafts/${craft._id}`}>
                    <p className='btn btn-primary flex justify-center items-center'>
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
