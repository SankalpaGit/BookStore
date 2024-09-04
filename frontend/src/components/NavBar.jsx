import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

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
            <a href="#" className="text-white hover:text-gray-300">Home</a>
          </li>
          <li className="py-2">
            <a href="#" className="text-white hover:text-gray-300">About</a>
          </li>
          <li className="py-2">
            <a href="#" className="text-white hover:text-gray-300">Shop</a>
          </li>
          <li className="py-2">
            <a href="#" className="text-white hover:text-gray-300">Contact</a>
          </li>
        </ul>
        {/* Mobile Menu */}
        <div className={`md:hidden fixed inset-y-0 right-0 bg-blue-800 w-11/12 max-w-sm z-40 ${isOpen ? 'flex' : 'hidden'} flex-col items-center justify-center transition-transform duration-300 ease-in-out`}>
          <button onClick={toggleMenu} className="absolute top-4 right-4">
            <FaTimes className="h-8 w-8 text-white" />
          </button>
          <ul className="flex flex-col space-y-4">
            <li>
              <a href="#" className="text-white text-xl hover:text-gray-300" onClick={toggleMenu}>Home</a>
            </li>
            <li>
              <a href="#" className="text-white text-xl hover:text-gray-300" onClick={toggleMenu}>About</a>
            </li>
            <li>
              <a href="#" className="text-white text-xl hover:text-gray-300" onClick={toggleMenu}>Shop</a>
            </li>
            <li>
              <a href="#" className="text-white text-xl hover:text-gray-300" onClick={toggleMenu}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
