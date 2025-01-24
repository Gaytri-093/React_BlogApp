import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AddEditBlog from "./components/AddEditBlog";
import BlogDetail from "./components/BlogDetail";
import About from "./components/About";
import Contact from "./components/Contact";

const App = () => {
  return (
    <Router>
      {/* Navbar is added here */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<AddEditBlog />} />
        <Route path="/edit/:id" element={<AddEditBlog />} />
        <Route path="/details/:id" element={<BlogDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
