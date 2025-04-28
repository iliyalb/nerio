import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => (
  <nav className="navbar navbar-light navbar-expand-lg fixed-top bg-white clean-navbar">
    <div className="container">
      <Link className="navbar-brand logo" to="/">Nerio</Link>
      <button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1">
        <span className="visually-hidden">Toggle navigation</span>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navcol-1">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
          <li className="nav-item"><a className="nav-link" href="/#features">Features</a></li>
          <li className="nav-item"><Link className="nav-link" to="/faq">FAQ</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/blog-post-list">Blog</Link></li>
          <li className="nav-item"><a className="nav-link" href="/#about-us">About Us</a></li>
          <li className="nav-item"><Link className="nav-link" to="/contact-us">Contact Us</Link></li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
