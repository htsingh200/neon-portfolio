import { useState } from 'react';
import { FaEnvelope, FaUser, FaCommentDots, FaPaperPlane, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }));

    // Simulate form submission
    setTimeout(() => {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: 'Message sent successfully!' }
      });
      setFormData({ name: '', email: '', message: '' });

      // Reset status after 5 seconds
      setTimeout(() => {
        setStatus({ submitted: false, submitting: false, info: { error: false, msg: null } });
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'contact@harshitsingh.dev',
      link: 'mailto:contact@harshitsingh.dev'
    },
    {
      icon: <FaGithub />,
      label: 'GitHub',
      value: '@harshitsingh',
      link: 'https://github.com'
    },
    {
      icon: <FaLinkedin />,
      label: 'LinkedIn',
      value: 'Harshit Singh',
      link: 'https://linkedin.com'
    },
    {
      icon: <FaTwitter />,
      label: 'Twitter',
      value: '@harshitsingh',
      link: 'https://twitter.com'
    }
  ];

  return (
    <div className="contact-page">
      <div className="container">
        <div className="page-header fade-in">
          <h1 className="page-title">
            <span className="title-tag neon-text">{'<'}</span>
            Get In Touch
            <span className="title-tag neon-text">{'/>'}</span>
          </h1>
          <p className="page-subtitle">
            Have a project in mind? Let's build something amazing together
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Form */}
          <div className="form-section slide-in-left">
            <div className="form-container neon-card">
              <h2 className="form-title neon-text-purple">Send Me a Message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    <FaUser /> Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input neon-border"
                    placeholder="John Doe"
                    required
                    disabled={status.submitting}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    <FaEnvelope /> Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input neon-border"
                    placeholder="john@example.com"
                    required
                    disabled={status.submitting}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    <FaCommentDots /> Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea neon-border"
                    placeholder="Your message here..."
                    rows="6"
                    required
                    disabled={status.submitting}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="submit-button neon-button"
                  disabled={status.submitting}
                >
                  {status.submitting ? (
                    <>
                      <span className="spinner"></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Message
                    </>
                  )}
                </button>

                {status.info.msg && (
                  <div className={`form-status ${status.info.error ? 'error' : 'success'}`}>
                    {status.info.msg}
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="info-section slide-in-right">
            <div className="info-container neon-card">
              <h2 className="info-title neon-text">Contact Information</h2>
              <p className="info-description">
                Feel free to reach out through any of these channels. I'm always open to 
                discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>

              <div className="contact-methods">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-method"
                  >
                    <div className="method-icon neon-text-cyan">
                      {info.icon}
                    </div>
                    <div className="method-content">
                      <div className="method-label">{info.label}</div>
                      <div className="method-value">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Response Box */}
            <div className="response-box neon-border">
              <div className="response-icon pulse">
                <FaPaperPlane />
              </div>
              <h3 className="response-title neon-text">Quick Response</h3>
              <p className="response-text">
                I typically respond within 24 hours. Looking forward to hearing from you!
              </p>
            </div>
          </div>
        </div>

        {/* Map or Additional Info Section */}
        <div className="additional-info fade-in">
          <div className="info-card neon-card">
            <h3 className="info-card-title neon-text-pink">Let's Collaborate</h3>
            <p className="info-card-text">
              I'm currently available for freelance work and exciting opportunities. 
              Whether you have a project in mind or just want to chat about technology, 
              feel free to drop me a message!
            </p>
            <div className="info-highlights">
              <div className="highlight-item">
                <div className="highlight-number neon-text">24h</div>
                <div className="highlight-label">Response Time</div>
              </div>
              <div className="highlight-item">
                <div className="highlight-number neon-text-purple">100%</div>
                <div className="highlight-label">Client Satisfaction</div>
              </div>
              <div className="highlight-item">
                <div className="highlight-number neon-text-pink">∞</div>
                <div className="highlight-label">Ideas Welcome</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
