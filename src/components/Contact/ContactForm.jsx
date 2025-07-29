import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;
    if (!name || !email || !subject || !message) {
      alert("Please fill out all fields.");
      return;
    }

    emailjs
      .send(
        "service_19f7j29",     // ✅ Your Service ID
        "template_6yrr10j",    // ✅ Your Template ID
        {
          from_name: name,
          from_email: email,
          subject: subject,
          message: message,
        },
        "ft9CZba4ioD0-n326"    // ✅ Your Public Key
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.error("❌ EmailJS Error:", error);
          alert("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <section className="contact-section" id="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="6"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default ContactForm;
