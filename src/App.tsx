import React from "react";
import Index from "./pages/Index";
import BlogPostList from "./pages/BlogPostList";
import BlogPost from "./pages/BlogPost";
import ContactUs from "./pages/ContactUs";
import FAQ from "./pages/FAQ";
import Slider from "./pages/Slider";
import Gallery from "./pages/Gallery";

const routes: Record<string, React.FC> = {
  index: Index,
  "blog-post-list": BlogPostList,
  "blog-post": BlogPost,
  "contact-us": ContactUs,
  faq: FAQ,
  slider: Slider,
  gallery: Gallery,
};

function getPageFromLocation(): keyof typeof routes {
  const url = new URL(window.location.href);
  const hash = url.hash.replace(/^#/, "");
  const queryPage = url.searchParams.get("page");
  if (queryPage && routes[queryPage]) return queryPage as keyof typeof routes;
  if (hash && routes[hash]) return hash as keyof typeof routes;
  return "index";
}

const App: React.FC = () => {
  const PageComponent = routes[getPageFromLocation()] || Index;
  return <PageComponent />;
};

export default App;
