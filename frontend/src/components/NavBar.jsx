import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();

  return (
    <nav className="bg-gray-900 p-4 flex justify-between">
      <ul className="flex space-x-4">
        <li>
          <Link
            to="/"
            className={`${location.pathname === '/' ? 'font-bold text-green-500' : 'text-gray-50'}`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/donate"
            className={` ${location.pathname === '/donate' ? 'font-bold text-green-500' : 'text-gray-50'}`}
          >
            Donate
          </Link>
        </li>
      </ul>
      <div className="flex justify-between w-1/12 mr-2">

        <button className="text-white ">
          <Link to="/register" 
          className={` ${location.pathname === '/register' ? 'font-bold text-green-500' : 'text-gray-50'}`}>
            Register
          </Link>
        </button>
        
        <button className="text-white ">
          <Link to="/login" 
          className={` ${location.pathname === '/login' ? 'font-bold text-green-500' : 'text-gray-50'}`}>
            Login
          </Link>
        </button>
      </div>

    </nav>
  );
}

export default NavBar;
