import React from "react";

const FAQ: React.FC = () => (
  <main className="page faq-page">
    <section className="clean-block clean-faq dark">
      <div className="container">
        <div className="block-heading">
          <h2 className="text-info">FAQ</h2>
          <p>Frequently Asked Questions</p>
        </div>
        <div className="accordion" id="faqAccordion">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                What is Nerio?
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                Nerio is a business technology and infrastructure optimization startup company.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                How can I contact you?
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                You can use the contact form on our Contact Us page.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default FAQ;
