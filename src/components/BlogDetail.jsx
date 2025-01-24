import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import defaultImg from "../assets/default.jpg"; // Default image import

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-xl font-semibold text-gray-700">Blog not found.</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen">
     
      {/* Blog Detail */}
      <div>
        {/* Full-Width Blog Image */}
        <div className="w-[80%] m-auto">
          <img
            src={blog.image || defaultImg}
            alt={blog.title}
            className="w-full h-[300px] object-fit " // Full-width and proportional height
          />
        </div>

        {/* Content Section */}
        <div className="max-w-5xl mx-auto p-6">
          {/* Blog Title */}
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            {blog.title}
          </h1>

          {/* Author and Date */}
          <div className="flex justify-between text-gray-600 text-sm mb-6">
            <p>
              <span className="font-semibold">Author:</span> {blog.author}
            </p>
            <p>{new Date(blog.date || Date.now()).toDateString()}</p>
          </div>

          {/* Blog Content */}
          <p className="text-lg text-gray-800 leading-relaxed">
            {blog.content}
          </p>

          {/* Back to Home Button */}
          <div className="mt-8">
            <button
              onClick={() => navigate("/")}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 shadow-md"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
