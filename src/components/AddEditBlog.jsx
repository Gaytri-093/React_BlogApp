import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "./Navbar";

const AddEditBlog = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const blogs = JSON.parse(localStorage.getItem("blogs")) || [];

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    content: "",
    category: "",
    image: null, // Store the uploaded image file
  });

  useEffect(() => {
    if (id) {
      const blogToEdit = blogs.find((blog) => blog.id === id);
      if (blogToEdit) {
        setFormData({
          title: blogToEdit.title,
          author: blogToEdit.author,
          content: blogToEdit.content,
          category: blogToEdit.category,
          image: blogToEdit.image || null,
        });
      }
    }
  }, [id, blogs]);

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedBlogs = id
      ? blogs.map((blog) =>
          blog.id === id ? { ...blog, ...formData, id: blog.id } : blog
        )
      : [
          ...blogs,
          { ...formData, id: Date.now().toString() }, // Assign a unique ID
        ];

    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
    navigate("/");
  };

  return (
    <>
      <div className="h-screen flex justify-center items-start bg-gray-100 p-4">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl relative mt-2">
          {/* Close Button */}
          <button
            onClick={() => navigate("/")}
            className="absolute top-4 right-4 text-red-500 text-xl font-bold"
          >
            &times;
          </button>

          <h1 className="text-2xl font-bold mb-6">
            {id ? "Edit Blog" : "Create Blog"}
          </h1>

          <form onSubmit={handleSubmit}>
            {/* Title */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                required
              />
            </div>

            {/* Author */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Author</label>
              <input
                type="text"
                name="author"
                value={formData.author}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                required
              />
            </div>

            {/* Content */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Content</label>
              <textarea
                name="content"
                value={formData.content}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                rows="6"
                required
              />
            </div>

            {/* Category */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                required
              >
                <option value="">Select a category</option>
                <option value="Music">Music</option>
                <option value="Movies">Movies</option>
                <option value="Sports">Sports</option>
                <option value="Technology">Technology</option>
                <option value="Education">Education</option>
              </select>
            </div>

            {/* Image Upload */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              />
              {formData.image && (
                <img
                  src={formData.image}
                  alt="Uploaded Preview"
                  className="w-full h-40 object-cover mt-4 rounded-lg"
                />
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              {id ? "Update Blog" : "Create Blog"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddEditBlog;
