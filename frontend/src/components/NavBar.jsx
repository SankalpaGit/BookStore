import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();

  return (
    <nav className="bg-gray-900 p-4">
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
            to="/about" 
            className={` ${location.pathname === '/about' ? 'font-bold text-green-500' : 'text-gray-50'}`}
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
