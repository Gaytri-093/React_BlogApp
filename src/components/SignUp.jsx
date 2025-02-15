import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import bgImage from "../assets/Login1.jpg"; // Ensure correct path

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignup = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    localStorage.setItem("registeredUser", JSON.stringify(formData));
    toast.success("Account created successfully!");

    navigate("/login");
  };

  return (
    <>
      <ToastContainer position="top-center" />
      <div
        className="h-screen flex justify-center items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div
          className="p-6 rounded-lg w-full max-w-md"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.3)", 
            boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
          }}
        >
          <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Sign Up</h2>
          <form onSubmit={handleSignup}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-300 text-blue-700 hover:bg-blue-400 font-bold px-4 py-2 rounded-lg"
             
            >
              Sign Up
            </button>
          </form>
          <p className="mt-4 text-center text-gray-700">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-700 font-bold hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
