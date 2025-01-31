import React from "react";
import Navbar from "./Navbar";

const Contact = () => {
  return (
    <>
   
    <div className="bg-gray-100 min-h-screen">
    
      {/* Contact Section */}
      <div className="max-w-6xl mx-auto px-6 py-4">
        {/* Header */}
        <div className="text-center mb-4">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Contact Us</h1>
          <p className="text-lg text-gray-600">
            We'd love to hear from you! Feel free to reach out to us anytime.
          </p>
        </div>

        {/* Contact Content */}
        <div className="flex flex-col items-center">
          {/* Form Section */}
          <div className="w-full md:w-1/2 bg-white shadow-lg rounded-lg p-4 mb-2">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              Get in Touch
            </h2>
            <form>
              {/* Name Field */}
              <div className="mb-3">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-1"
                >
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
              <div className="mb-3">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-1"
                >
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
              <div className="mb-3">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-1"
                >
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
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;
