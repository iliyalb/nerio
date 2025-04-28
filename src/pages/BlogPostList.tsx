import React from "react";

const BlogPostList: React.FC = () => (
  <main className="page blog-post-list">
    <section className="clean-block clean-blog-list dark">
      <div className="container">
        <div className="block-heading">
          <h2 className="text-info">Blog Post List</h2>
          <p>Latest from us and our partners</p>
        </div>
        <div className="clean-blog-post">
          <div className="row">
            <div className="col-lg-5">
              <img className="rounded img-fluid" src="/assets/img/tech/image4.jpg" alt="Blog Post" />
            </div>
            <div className="col-lg-7">
              <h3>Website launched</h3>
              <div className="info">
                <span className="text-muted">
                  Feb 3, 2023 by&nbsp;
                  <a href="https://twitter.com/iliyalb">Iliya Lesani</a>
                </span>
              </div>
              <p>
                We humbly invite you to take a look at our website and blogposts, today marks the first business day of our company. Celebrations are in order! 🎊
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default BlogPostList;
