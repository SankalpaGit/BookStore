import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-800 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Bookstore</div>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes className="h-8 w-8" /> : <FaBars className="h-8 w-8" />}
          </button>
        </div>
        {/* Desktop Menu */}
        <ul className="hidden md:flex md:space-x-6">
          <li className="py-2">
            <Link to="/">
              <a className="text-white hover:text-gray-300">Home</a>
            </Link>
          </li>
          <li className="py-2">
            <Link to="/about">
              <a className="text-white hover:text-gray-300">About</a>
            </Link>
          </li>
          <li className="py-2">
            <Link to="/shop">
              <a className="text-white hover:text-gray-300">Shop</a>
            </Link>
          </li>
          <li className="py-2">
            <Link to="/contact">
              <a className="text-white hover:text-gray-300">Contact</a>
            </Link>
          </li>
          <li className="py-2">
            <Link to="/cart">
              <a className="text-white hover:text-gray-300">Cart</a>
            </Link>
          </li>
          <li className="py-2">
            <Link to="/profile">
              <a className="text-white hover:text-gray-300">Profile</a>
            </Link>
          </li>
        </ul>

        {/* Mobile Menu */}
        <div className={`md:hidden fixed inset-y-0 right-0 bg-blue-800 w-11/12 max-w-sm z-40 ${isOpen ? 'flex' : 'hidden'} flex-col items-center justify-center transition-transform duration-300 ease-in-out`}>
          <button onClick={toggleMenu} className="absolute top-4 right-4">
            <FaTimes className="h-8 w-8 text-white" />
          </button>
          <ul className="flex flex-col space-y-4">
            <li>
              <Link to="/">
                <a href="#" className="text-white text-xl hover:text-gray-300" onClick={toggleMenu}>Home</a>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <a href="#" className="text-white text-xl hover:text-gray-300" onClick={toggleMenu}>About</a>
              </Link>
            </li>
            <li>
              <Link to="/shop">
                <a href="#" className="text-white text-xl hover:text-gray-300" onClick={toggleMenu}>Shop</a>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <a href="#" className="text-white text-xl hover:text-gray-300" onClick={toggleMenu}>contact</a>
              </Link>
            </li>
            <li>
              <Link to="/profile">
                <a href="#" className="text-white text-xl hover:text-gray-300" onClick={toggleMenu}>profile</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
