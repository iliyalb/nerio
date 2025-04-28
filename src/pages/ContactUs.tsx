import React from "react";

const ContactUs: React.FC = () => (
  <main className="page contact-us-page">
    <section className="clean-block clean-form dark">
      <div className="container">
        <div className="block-heading">
          <h2 className="text-info">Contact Us</h2>
          <p>For further assistance, project discussion, and other requests please fill out the form below:</p>
        </div>
        <form method="POST" action="mailto:someone@example.com?subject=Contact%20Request" encType="multipart/form-data">
          <div className="mb-3">
            <label className="form-label" htmlFor="name">Name</label>
            <input className="form-control" type="text" id="name" name="name" />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="subject">Subject</label>
            <input className="form-control" type="text" id="subject" name="subject" />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="email">Email</label>
            <input className="form-control" type="email" id="email" name="email" />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="message">Message</label>
            <textarea className="form-control" id="message" name="message"></textarea>
          </div>
          <div className="mb-3">
            <input className="btn btn-primary" type="submit" value="submit" />
          </div>
        </form>
      </div>
    </section>
  </main>
);

export default ContactUs;
