import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  //  input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  //  form submission
  const handleLogin = (e) => {
    e.preventDefault();

    //  stored user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem("registeredUser"));

    if (!storedUser || storedUser.email !== formData.email || storedUser.password !== formData.password) {
      alert("Invalid email or password!");
      return;
    }

    // Store logged-in user data
    localStorage.setItem("loggedInUser", JSON.stringify(storedUser));

    // Redirect to intended page or home
    const redirectTo = location.state?.redirectTo || "/";
    navigate(redirectTo);
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white shadow-lg p-6 rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleLogin}>
          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Login
          </button>
        </form>

        {/* Signup Link */}
        <p className="mt-4 text-center text-gray-600">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
