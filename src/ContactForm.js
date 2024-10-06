import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await axios.post('/send-email', formData);
      alert('Message sent successfully!');
      

      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      alert(`Failed to send message: ${error.response?.data.message || error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Contact Me</h1>
      <p className='texti'>Please feel free to reach out whenever you require assistance. I am available to support you and will be there to address any needs or concerns you may have.</p>
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <FontAwesomeIcon icon={faUser} className="icon-user" />
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              onChange={handleChange}
              value={formData.name}
              required
            />
          </div>
          <div className="form-group">
            <FontAwesomeIcon icon={faEnvelope} className="icon-email" />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              onChange={handleChange}
              value={formData.email}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              id="message"
              placeholder="Message..."
              onChange={handleChange}
              value={formData.message}
              required
            ></textarea>
            <FontAwesomeIcon icon={faPaperPlane} className="icon-message" />
          </div>
          <button type="submit" className="send-button" disabled={loading}>
            {loading ? 'Sending...' : 'Send Message'} <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
