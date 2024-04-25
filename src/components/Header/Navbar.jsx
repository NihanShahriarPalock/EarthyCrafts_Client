import { Link } from "react-router-dom";


const Navbar = () => {
    return (
      <div>
        <Link to='/'>
          <button className='btn btn-success'>Home</button>{" "}
        </Link>
        <Link to='/AddCraft'>
          <button className='btn btn-success'>Add Craft</button>{" "}
        </Link>
        <Link to='/AllArtAndCraft'>
          <button className='btn btn-success'>All Art & craft Items</button>{" "}
        </Link>
      </div>
    );
};

export default Navbar;