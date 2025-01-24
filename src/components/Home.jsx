import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import blogImg from "../assets/blog.jpg";
import defaultImg from "../assets/default.jpg";

const categories = ["All Categories", "Music", "Movies", "Sports", "Technology", "Education"];

const Home = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [isCategoriesVisible, setIsCategoriesVisible] = useState(false); // Toggle for small screen
  const blogs = JSON.parse(localStorage.getItem("blogs")) || [];

  // Filter blogs by category
  const filteredBlogs =
    selectedCategory === "All Categories"
      ? blogs
      : blogs.filter((blog) => blog.category === selectedCategory);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="relative">
        <img
          src={blogImg}
          alt="Hero Background"
          className="w-full h-72 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl font-bold mb-2">BLOG</h1>
          <p className="text-lg">Code for Interview</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row p-6 gap-6">
        {/* Sidebar */}
        <div
          className={`w-full md:w-1/4 bg-white shadow-md rounded-lg p-4 ${
            isCategoriesVisible || "md:sticky"
          } md:top-16 h-max`}
        >
          <button
            onClick={() => navigate("/create")}
            className="w-full mb-6 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Create Blog
          </button>
          <h2 className="text-xl font-bold mb-4 flex items-center justify-between">
            Categories
            {/* Toggle Button for Small Screens */}
            <button
              onClick={() => setIsCategoriesVisible(!isCategoriesVisible)}
              className="text-gray-700 focus:outline-none md:hidden"
            >
              {isCategoriesVisible ? "▲" : "▼"}
            </button>
          </h2>
          {/* Categories List - Hidden on Small Screens Initially */}
          {isCategoriesVisible || !isCategoriesVisible ? (
            <div className={`space-y-2 ${isCategoriesVisible ? "block" : "hidden md:block"}`}>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`block w-full text-left px-4 py-2 rounded-lg ${
                    selectedCategory === category
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  } hover:bg-blue-400 hover:text-white`}
                >
                  {category}
                </button>
              ))}
            </div>
          ) : null}
        </div>

        {/* Main Content */}
        <div className="w-full md:w-3/4">
          <h1 className="text-2xl font-bold mb-6">Blogs</h1>
          {filteredBlogs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBlogs.map((blog) => (
                <div
                  key={blog.id}
                  className="bg-white shadow-lg rounded-lg overflow-hidden"
                >
                  <img
                    src={blog.image || defaultImg} // Fallback to default image
                    alt={blog.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-lg font-bold mb-2">{blog.title}</h2>
                    <p className="text-sm text-gray-600 mb-4">
                      Author: {blog.author}
                    </p>
                    <p className="text-sm text-gray-700 mb-4">
                      {blog.content.slice(0, 100)}...
                      <span
                        onClick={() => navigate(`/details/${blog.id}`)}
                        className="text-blue-500 cursor-pointer hover:underline ml-2"
                      >
                        Read More
                      </span>
                    </p>
                    <div className="flex justify-between">
                      <button
                        onClick={() => navigate(`/edit/${blog.id}`)}
                        className="text-orange-500 hover:underline"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => {
                          const updatedBlogs = blogs.filter(
                            (b) => b.id !== blog.id
                          );
                          localStorage.setItem(
                            "blogs",
                            JSON.stringify(updatedBlogs)
                          );
                          window.location.reload();
                        }}
                        className="text-red-500 hover:underline"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">No blogs available. Create one!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
