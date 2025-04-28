import React from "react";

const Gallery: React.FC = () => (
  <main className="page gallery-page">
    <section className="clean-block clean-gallery dark">
      <div className="container">
        <div className="block-heading">
          <h2 className="text-info">Gallery</h2>
          <p>Grow your business with confidence</p>
        </div>
        <div className="row gallery">
          <div className="col-md-6 col-lg-4 item">
            <img className="img-fluid" src="/assets/img/scenery/image6.jpg" alt="Gallery 1" />
          </div>
          <div className="col-md-6 col-lg-4 item">
            <img className="img-fluid" src="/assets/img/scenery/image3.jpg" alt="Gallery 2" />
          </div>
          <div className="col-md-6 col-lg-4 item">
            <img className="img-fluid" src="/assets/img/tech/image4.jpg" alt="Gallery 3" />
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default Gallery;
