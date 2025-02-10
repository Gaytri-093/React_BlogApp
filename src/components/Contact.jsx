import React from "react";
import bgImg from "../assets/Login1.jpg"; // Same background image as About

const Contact = () => {
  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="max-w-4xl mx-auto px-6 py-4 bg-gray-300 bg-opacity-90 rounded-lg shadow-lg">
        {/* Header */}
        <div className="text-center mb-4">
          <h1 className="text-4xl font-bold text-gray-800 mb-1">Contact Us</h1>
          <p className="text-lg text-gray-600">
            We'd love to hear from you! Feel free to reach out anytime.
          </p>
        </div>

        {/* Contact Form */}
        <form className="space-y-4">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="Your Message"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button type="submit" className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-500">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
