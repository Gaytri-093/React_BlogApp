import React, { useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // ✅ Import useLocation
import blogImg from "../assets/blog.jpg";
import defaultImg from "../assets/default.jpg";
import Illusion from "../assets/HeroImage.svg";
import FooterImg from "../assets/CtaImage.jpg";

const categories = ["All Categories", "Music", "Movies", "Sports", "Technology", "Education"];

const HomePage = () => {
  const navigate = useNavigate();
  const location = useLocation(); // ✅ Get navigation state
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [blogToDelete, setBlogToDelete] = useState(null);

  const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  
  const blogSectionRef = useRef(null);

  // ✅ Check if "My Blogs" is clicked
  const showMyBlogs = location.state?.showMyBlogs || false;

  // ✅ Scroll to blogs when "View Blogs" or "My Blogs" is clicked
  const scrollToBlogs = () => {
    if (blogSectionRef.current) {
      setTimeout(() => {
        blogSectionRef.current.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  };

  // ✅ Filter blogs based on category & "My Blogs"
  const filteredBlogs = blogs.filter((blog) => {
    const categoryMatch = selectedCategory === "All Categories" || blog.category === selectedCategory;
    const myBlogsMatch = !showMyBlogs || blog.author === loggedInUser?.name;
    return categoryMatch && myBlogsMatch;
  });

  const handleDeleteClick = (id) => {
    setBlogToDelete(id);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    if (blogToDelete) {
      const updatedBlogs = blogs.filter((blog) => blog.id !== blogToDelete);
      localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
      setShowDeleteModal(false);
      setBlogToDelete(null);
      window.location.reload();
    }
  };

  return (
    <div className="font-sans bg-gray-100 min-h-screen">
      <section className="bg-white px-6 lg:px-20 pt-20 pb-12 shadow-md">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2">
            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              Read the most <br /> interesting Blogs
            </h1>
            <p className="text-gray-600 mt-4 text-lg">
              Discover insightful blogs across various topics and stay updated with the latest trends.
            </p>
            <div className="mt-6 flex items-center bg-gray-100 p-1 rounded-lg w-full max-w-md">
              <input
                type="text"
                placeholder="Search article"
                className="bg-transparent flex-1 p-3 outline-none text-lg"
              />
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg text-lg">
                Search
              </button>
            </div>
            <div className="flex justify-start gap-4">
              <button
                onClick={() => navigate("/create")}
                className="mt-6 bg-blue-200 text-blue-700 hover:bg-blue-300 px-6 py-3 rounded-lg font-medium text-lg transition-all"
              >
                Create Blog
              </button>
              <button
                onClick={scrollToBlogs}
                className="mt-6  px-6 py-3 bg-blue-200 text-blue-700 hover:bg-blue-300 rounded-lg font-medium text-lg transition-all"
              >
                View Blogs
              </button>
              {loggedInUser && (
                <button
                  onClick={() => {
                    navigate("/", { state: { showMyBlogs: true } });
                    scrollToBlogs();
                  }}
                  className="mt-6 bg-blue-200 text-blue-700 hover:bg-blue-300 px-6 py-3 rounded-lg font-medium text-lg transition-all"
                >
                  My Blogs
                </button>
              )}
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center mt-10 lg:mt-0">
            <img src={Illusion} alt="Illustration" className="w-full max-w-xl" />
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-20 py-8 text-center">
        <p className="text-gray-500 italic text-lg">Popular Categories:</p>
        <div className="flex justify-center gap-5 mt-4 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-8 py-3 rounded-lg text-lg font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-blue-200 text-blue-700 hover:bg-blue-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section ref={blogSectionRef} className="px-6 lg:px-20 py-10">
        <h2 className="text-4xl font-bold mb-6 text-center">
          {showMyBlogs ? "My Blogs" : selectedCategory === "All Categories" ? "Latest Blogs" : `${selectedCategory} Blogs`}
        </h2>
        {filteredBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog) => (
              <div
                key={blog.id}
                className="relative bg-white shadow-lg rounded-xl p-6 flex flex-col gap-3 transition-all duration-300 hover:shadow-2xl overflow-hidden"
              >
                <div className="relative w-full h-48 rounded-lg overflow-hidden">
                  <img
                    src={blog.image || defaultImg}
                    alt={blog.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <span className="absolute top-2 left-3 bg-pink-500 text-white px-3 py-1 text-xs font-semibold rounded-full">
                    {blog.category}
                  </span>
                </div>
                <div className="mt-2">
                  <h2 className="text-xl font-bold text-gray-900">{blog.title}</h2>
                  <p className="text-gray-600 text-sm">By {blog.author} | {new Date(blog.date).toDateString()}</p>
                  <p className="text-gray-700 mt-2">
                    {blog.content.slice(0, 120)}...
                    <span
                      onClick={() => navigate(`/details/${blog.id}`)}
                      className="text-blue-700 cursor-pointer hover:underline ml-2"
                    >
                      Read More
                    </span>
                  </p>
                  {loggedInUser?.name === blog.author && (
                    <div className="flex justify-between mt-2">
                      <button onClick={() => navigate(`/edit/${blog.id}`)} className="text-orange-600 hover:underline">Edit</button>
                      <button onClick={() => handleDeleteClick(blog.id)} className="text-red-600 hover:underline">Delete</button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600 text-center text-lg">No blogs available.</p>
        )}
      </section>

            
 {/* footer */}
 <div className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <h2 className="text-2xl font-bold">MyBlog<span className="text-blue-500">•</span></h2>
            <p className="mt-2 text-gray-400">
              Build a modern and creative website with Crealand.
            </p>
            <div className="flex space-x-4 mt-4">
              <span className="cursor-pointer">🌐</span>
              <span className="cursor-pointer">📹</span>
              <span className="cursor-pointer">📸</span>
              <span className="cursor-pointer">🔗</span>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-lg">Product</h3>
            <ul className="mt-2 space-y-2 text-gray-400">
              <li>Landingpage</li>
              <li>Features</li>
              <li>Documentation</li>
              <li>Referral Program</li>
              <li>Pricing</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg">Services</h3>
            <ul className="mt-2 space-y-2 text-gray-400">
              <li>Documentation</li>
              <li>Design</li>
              <li>Themes</li>
              <li>Illustrations</li>
              <li>UI Kit</li>
            </ul>
          </div>
        {/* Image Section */}
          <div className="bg-white shadow-lg rounded-xl p-4 w-72">
      <img
        src={FooterImg} 
        alt="Future of Work"
        className="rounded-lg w-full"
      />
      <h3 className="font-semibold text-lg mt-3">Future of Work</h3>
      <p className="text-gray-600 text-sm mt-1">
        Majority of people will work in jobs that don’t exist today.
      </p>
    </div>
      </div>
       {/* Copyright */}
       <div className="mt-8 flex flex-col items-center">
          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
            ❤️
          </div>
          <p className="text-gray-400 text-sm mt-2">
            Copyright © 2025.
          </p>
        </div>
    </div>
    </div>
    </div>
  );
};

export default HomePage;
