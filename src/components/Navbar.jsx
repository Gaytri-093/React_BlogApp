import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser"); // Clear user data
    navigate("/login"); // Redirect to login page
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold text-gray-800">
          <Link to="/"><h2 className="text-2xl font-bold">MyBlog<span className="text-blue-500">•</span></h2></Link>
        </h1>

        {/* Navigation Links */}
        <div className="flex items-center space-x-6">
          <Link to="/" className="text-gray-600 hover:text-blue-700 hover:underline">
            Home
          </Link>
          <Link to="/about" className="text-gray-600 hover:text-blue-700 hover:underline">
            About
          </Link>
          <Link to="/contact" className="text-gray-600 hover:text-blue-700 hover:underline">
            Contact
          </Link>
        </div>

        {/* User Info & Logout (Right-aligned) */}
        <div className="flex items-center space-x-6">
          {loggedInUser ? (
            <>
              {/* User Icon with Hover Effect */}
              <div className="relative group">
                <FaRegUserCircle className="text-2xl cursor-pointer text-gray-700" />
                <div className="absolute left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                  {loggedInUser.name || "User"}
                </div>
              </div>

              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="text-red-500 font-medium hover:underline ml-4"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="text-green-500 font-medium hover:underline">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
