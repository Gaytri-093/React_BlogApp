import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 flex flex-col p-6">
      <h2 className="text-2xl font-bold mb-6">Blogger</h2>
      <nav className="space-y-4">
        <Link
          to="/"
          className="block py-2 px-4 rounded hover:bg-gray-700"
        >
          Home
        </Link>
        <Link
          to="/add"
          className="block py-2 px-4 rounded hover:bg-gray-700"
        >
          Add Post
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
