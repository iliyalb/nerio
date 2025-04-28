import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Index: React.FC = () => (
  <>
    <Navbar />
    <main className="page landing-page">
      {/* Hero Section */}
      <section
        className="clean-block clean-hero"
        style={{
          backgroundImage: 'url("/assets/img/tech/image4.jpg")',
          color: 'rgba(9, 162, 255, 0.85)',
        }}
      >
        <div className="text">
          <h2><br />“Powering businesses with strength”</h2>
          <p>We are a coherent IT infrastructure and DevOps company</p>
          <button
            className="btn btn-outline-light btn-lg"
            type="button"
            onClick={() => window.location.href = '#info'}
          >
            Learn More
          </button>
        </div>
      </section>
      {/* Info Section */}
      <section id="info" className="clean-block clean-info dark">
        <div className="container">
          <div className="block-heading">
            <h2 className="text-info">Info</h2>
            <p style={{maxWidth: 900, textAlign: 'justify'}}>
              Nerio is an IT DevOps startup that specializes in helping businesses optimize their technology systems and infrastructure. With a talented team of developers, engineers, and operations experts, Nerio provides end-to-end solutions to help organizations deliver reliable, secure, and cost-effective services. Our DevOps experts use the latest technologies to automate processes, reduce costs, and increase productivity. We also specialize in cloud computing, containerization, CI/CD pipelines, and more. Let Nerio help you take your business to the next level.
            </p>
          </div>
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-6 col-lg-5 col-xl-4 col-xxl-6">
              <img
                className="img-thumbnail"
                src="/assets/img/scenery/image5.jpg"
                width={620}
                height={417}
                alt="Info"
              />
            </div>
            <div className="col-md-6 col-xl-7 col-xxl-5">
              <h3>Need assistance? We are here for you</h3>
              <div className="getting-started-info">
                <p style={{textAlign: 'justify'}}>
                  Nerio provides tech consultation services to help businesses optimize their technology systems and infrastructure. Our team of experienced developers, engineers, and operations experts can provide customized solutions to help you achieve your goals. We specialize in cloud computing, containerization, CI/CD pipelines, and more. Let us help you take your business to the next level with our expert advice and technical expertise.
                </p>
              </div>
              <button
                className="btn btn-outline-primary btn-lg"
                type="button"
                onClick={() => window.location.href = '/contact-us'}
              >
                Request service
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section id="features" className="clean-block features">
        <div className="container">
          <div className="block-heading">
            <h2 className="text-info">Features</h2>
            <p style={{textAlign: 'center'}}>
              Our expert team can help create compelling content that highlights your unique offerings, while also helping you build your online presence and reach new customers. With our services, you can create an effective marketing strategy to help you stand out from the competition and maximize your business’s potential.
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-5 feature-box">
              <i className="icon-power icon"></i>
              <h4>Orchestration provisioning</h4>
              <p>
                Installing and configuring the hardware, operating system, networking, and other components of servers to ensure everything is optimized for performance.
              </p>
            </div>
            <div className="col-md-5 feature-box">
              <i className="icon-puzzle icon"></i>
              <h4>Custom content</h4>
              <p>
                Quick prototyping and custom content creation for better visibility of your products and services.
              </p>
            </div>
            <div className="col-md-5 feature-box">
              <i className="icon-lock icon"></i>
              <h4>Hardened security</h4>
              <p>
                Attack mitigation from cyber threats by deploying IDS/IPS and regularly monitoring server systems to ensure they are secure and up to date.
              </p>
            </div>
            <div className="col-md-5 feature-box">
              <i className="icon-refresh icon"></i>
              <h4>High availability</h4>
              <p>
                Ensuring server systems remain up and running at all times, even in the event of a failure, by introducing failover clusters and redundant backup measures.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Gallery/Slider Section */}
      <section className="clean-block slider dark">
        <div className="container">
          <div className="block-heading">
            <h2 className="text-info">Gallery</h2>
            <p>Grow your business with confidence</p>
          </div>
          <div id="carousel-1" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="w-100 d-block" src="/assets/img/scenery/image1.jpg" alt="Slide 1" />
              </div>
              <div className="carousel-item">
                <img className="w-100 d-block" src="/assets/img/scenery/image4.jpg" alt="Slide 2" />
              </div>
              <div className="carousel-item">
                <img className="w-100 d-block" src="/assets/img/scenery/image6.jpg" alt="Slide 3" />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carousel-1" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carousel-1" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
            <ol className="carousel-indicators">
              <li data-bs-target="#carousel-1" data-bs-slide-to="0" className="active"></li>
              <li data-bs-target="#carousel-1" data-bs-slide-to="1"></li>
              <li data-bs-target="#carousel-1" data-bs-slide-to="2"></li>
            </ol>
          </div>
        </div>
      </section>
      {/* About Us Section */}
      <section id="about-us" className="clean-block about-us">
        <div className="container">
          <div className="block-heading">
            <h2 className="text-info">About Us</h2>
            <p>Meet our enthusiastic team</p>
          </div>
          <div className="row justify-content-center">
            <div className="col-sm-6 col-lg-4">
              <div className="card text-center clean-card">
                <img className="card-img-top w-100 d-block" src="/assets/img/avatars/avatar1.jpg" alt="Mehrshad Javid" />
                <div className="card-body info">
                  <h4 className="card-title">Mehrshad Javid</h4>
                  <p className="card-text">IT Consultant, DevOps</p>
                  <div className="icons">
                    <a href="#"><i className="icon-social-facebook"></i></a>
                    <a href="#"><i className="icon-social-instagram"></i></a>
                    <a href="#"><i className="icon-social-twitter"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="card text-center clean-card">
                <img className="card-img-top w-100 d-block" src="/assets/img/avatars/avatar2.jpg" alt="Iliya Lesani" />
                <div className="card-body info">
                  <h4 className="card-title">Iliya Lesani</h4>
                  <p className="card-text">Project Manager</p>
                  <div className="icons">
                    <a href="#"><i className="icon-social-facebook"></i></a>
                    <a href="#"><i className="icon-social-instagram"></i></a>
                    <a href="#"><i className="icon-social-twitter"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="card text-center clean-card">
                <img className="card-img-top w-100 d-block" src="/assets/img/avatars/avatar3.jpg" alt="Aryan Esmayili" />
                <div className="card-body info">
                  <h4 className="card-title">Aryan Esmayili</h4>
                  <p className="card-text">Developer, Data Analyst</p>
                  <div className="icons">
                    <a href="#"><i className="icon-social-facebook"></i></a>
                    <a href="#"><i className="icon-social-instagram"></i></a>
                    <a href="#"><i className="icon-social-twitter"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default Index;
