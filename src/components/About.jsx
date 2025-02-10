import React from "react";
import aboutImg from "../assets/blog.jpg";
import bgImg from "../assets/Login1.jpg"; // Add your background image here

const About = () => {
  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="max-w-6xl mx-auto px-6 py-12 bg-transparent bg-opacity-80 rounded-lg shadow-lg">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
          <p className="text-lg text-gray-600">
            Learn more about the purpose and vision of our blog app.
          </p>
        </div>

        {/* About Content */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left: Image */}
          <div className="w-full md:w-1/2">
            <img
              src={aboutImg}
              alt="About Us"
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>

          {/* Right: Text */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Welcome to Our Blog
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our blog app is designed to bring people together through ideas,
              stories, and knowledge. Whether you're here to explore, learn, or
              share, we aim to create a platform that inspires creativity and
              fosters community.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              From technology insights to life hacks, sports updates to movie
              reviews, our blogs cover a wide range of categories to cater to
              everyone's interests. Join us as we continue to grow and make
              meaningful connections through words.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Thank you for being a part of our journey. We’re excited to have
              you here!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
