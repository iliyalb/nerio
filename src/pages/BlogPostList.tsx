import React from "react";

const BlogPostList: React.FC = () => (
  <main className="page blog-post-list">
    {/* ...blog post list content here... */}
    <section className="clean-block clean-blog-list dark">
      <div className="container">
        <div className="block-heading">
          <h2 className="text-info">Blog Post List</h2>
          <p>Latest from us and our partners</p>
        </div>
        {/* ...rest of blog post list... */}
      </div>
    </section>
  </main>
);

export default BlogPostList;
