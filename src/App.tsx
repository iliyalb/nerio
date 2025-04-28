import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BlogPostList from "./pages/BlogPostList";
import BlogPost from "./pages/BlogPost";
import ContactUs from "./pages/ContactUs";
import FAQ from "./pages/FAQ";
import Slider from "./pages/Slider";
import Gallery from "./pages/Gallery";

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/blog-post-list" element={<BlogPostList />} />
      <Route path="/blog-post" element={<BlogPost />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/slider" element={<Slider />} />
      <Route path="/gallery" element={<Gallery />} />
    </Routes>
  </BrowserRouter>
);

export default App;
