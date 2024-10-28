// ContactUs.js
import React, { useState } from 'react';
import './Contact.css';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // You can add logic to send the data to your backend or API here
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        <h1>Contact Us</h1>
        <p>
          We’re here to help! Whether you have a question about your order, our products, or any other inquiries, feel free to reach out to us. Our team is dedicated to providing excellent customer service and will respond to your queries as soon as possible.
        </p>
        <h2>Get in Touch</h2>
        <ul>
          <li><strong>Email:</strong> support@yourwebsitename.com</li>
          <li><strong>Phone:</strong> +1 234 567 8900</li>
          <li><strong>Address:</strong> 123 Fashion St, Trendy City, TC 45678</li>
        </ul>

        <h2>Send Us a Message</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
