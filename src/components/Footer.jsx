import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title neon-text">Harshit Singh</h3>
            <p className="footer-text">Full Stack Developer | AI Enthusiast</p>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-subtitle">Quick Links</h4>
            <div className="footer-links">
              <a href="/" className="footer-link">Home</a>
              <a href="/experience" className="footer-link">Experience</a>
              <a href="/projects" className="footer-link">Projects</a>
              <a href="/contact" className="footer-link">Contact</a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Connect</h4>
            <div className="social-links">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaGithub />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaTwitter />
              </a>
              <a href="mailto:contact@example.com" className="social-link">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <p className="copyright">
            © {currentYear} Harshit Singh. All rights reserved. | Crafted with{' '}
            <span className="neon-text-pink">❤</span> and{' '}
            <span className="neon-text">React</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
