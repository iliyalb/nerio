import React from "react";

const BlogPost: React.FC = () => (
  <main className="page blog-post">
    <section className="clean-block clean-post dark">
      <div className="container">
        <div className="block-content">
          <div
            className="post-image"
            style={{ backgroundImage: 'url("/assets/img/scenery/image3.jpg")' }}
          ></div>
          <div className="post-body">
            <h3>Lorem Ipsum dolor</h3>
            <div className="post-info">
              <span>By John Smith</span>
              <span>Jan 27, 2018</span>
            </div>
            <div className="row">
              <div className="col">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo. Integer euismod, sem eget pulvinar hendrerit, augue elit sollicitudin lorem, vitae aliquam lacus lacus vel eros. Pellentesque nec sapien quis sem convallis tempor. Suspendisse potenti. Etiam euismod, velit vel dictum euismod, sapien orci faucibus orci, eu dictum sem velit a erat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default BlogPost;
