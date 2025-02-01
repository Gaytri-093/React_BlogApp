import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const categories = ["Music", "Movies", "Sports", "Technology", "Education"];

const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    content: "",
    category: "",
    image: "",
  });

  useEffect(() => {
    const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
    const blogToEdit = blogs.find((blog) => blog.id === id);

    if (!blogToEdit) {
      alert("Blog not found!");
      navigate("/");
      return;
    }

    setFormData(blogToEdit);
  }, [id, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

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

  const handleUpdate = (e) => {
    e.preventDefault();

    const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
    const updatedBlogs = blogs.map((blog) =>
      blog.id === id ? { ...blog, ...formData } : blog
    );

    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
    alert("Blog updated successfully!");
    navigate("/");
  };
 nm
  return (
    <div className="h-screen flex justify-center items-start bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl relative mt-2">
        {/* Close Button */}
        <button
          onClick={() => navigate("/")}
          className="absolute top-4 right-4 text-red-500 text-xl font-bold"
        >
          &times;
        </button>

        <h1 className="text-2xl font-bold mb-6">Edit Blog</h1>

        <form onSubmit={handleUpdate}>
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
              readOnly // Author should not be editable
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
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
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
            Update Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditBlog;
