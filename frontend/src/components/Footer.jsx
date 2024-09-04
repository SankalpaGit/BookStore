import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1 */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-300">About Us</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">Careers</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">Press</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">Blog</a>
            </li>
          </ul>
        </div>
        {/* Column 2 */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Support</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-300">Help Center</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">Contact Us</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">Terms of Service</a>
            </li>
          </ul>
        </div>
        {/* Column 3 */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-300">Shipping & Returns</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">Order Status</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">Payment Options</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">Gift Cards</a>
            </li>
          </ul>
        </div>
        {/* Column 4 */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-300">Facebook</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">Twitter</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">Instagram</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8 text-gray-400">
        &copy; 2024 Bookstore. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
