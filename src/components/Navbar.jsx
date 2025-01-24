import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold text-gray-800">
          <Link to="/">BLOG</Link>
        </h1>

        {/* Navigation Links */}
        <div className="space-x-6">
          <Link to="/" className="text-gray-600 hover:text-blue-500">
            Home
          </Link>
          <Link to="/about" className="text-gray-600 hover:text-blue-500">
            About
          </Link>
          <Link to="/contact" className="text-gray-600 hover:text-blue-500">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
