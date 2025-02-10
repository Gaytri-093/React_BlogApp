import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
// Default avatar

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
          <Link to="/">BLOG</Link>
        </h1>

        {/* Navigation Links (Right-aligned) */}
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

          {/* User Info & Logout */}
          {loggedInUser ? (
            <div className="flex items-center space-x-3">
              {/* Profile Image */}
              <FaRegUserCircle className="text-xl"/>

              {/* Logged-in User Name */}
              <span className="text-gray-800 font-medium">
                {loggedInUser.name || "User"}
              </span>

              {/* Logout Button (Text in Red) */}
              <button
                onClick={handleLogout}
                className="text-red-500 font-medium hover:underline"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="text-green-500 font-medium hover:underline"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
