import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <section className="contact-section">
      <h2 className="contact-title">STAY IN TOUCH</h2>
      <form className="contact-form">
        <div className="form-left">
          <input type="text" placeholder="Full Name*" required />
          <input type="email" placeholder="Email address*" required />
          <input type="tel" placeholder="Mobile number*" required />
        </div>
        <div className="form-right">
          <select required>
            <option value="">I am looking for*</option>
            <option value="service">A Service</option>
            <option value="partnership">A Partnership</option>
            <option value="job">A Job</option>
          </select>
          <textarea placeholder="Message*" required></textarea>
        </div>
      </form>
      <button className="submit-btn">Submit →</button>
    </section>
  );
};

export default ContactForm;
