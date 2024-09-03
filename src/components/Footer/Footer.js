import React from 'react';
import './Footer.css'; // Import the CSS file
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div>
          <h3>KRITHOMEDH</h3>
          <p>CONTACT</p>
          <p>VNR VJIET, B-Block</p>
          <p>Pragathi Nagar, Nizampet, Hyderabad - 500090, Telangana, India</p>
          <p>Mobile: +91 80085 48481</p>
          <p>Email: krithomedh@gmail.com</p>
        </div>
        Vignana Jyothi Nagar,Pragathi Nagar, Nizampet(S.O, Hyderabad, Telangana 500090
        <div>
          <h3>USEFUL LINKS</h3>
          <ul>
            {['About', 'Team'].map((link) => (
              <li key={link}>{link}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3>NEWSLETTER</h3>
          <p>Subscribe to our newsletter to stay updated.</p>
          <form>
            <input 
              type="email" 
              placeholder="Enter your email" 
            />
            <button 
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright">
          COPYRIGHT © KRITHOMEDH VNRVJIET ALL RIGHTS RESERVED.
        </p>
        <div className="social-media-icons">
          <a href="https://www.instagram.com/krithomedh_vnrvjiet?igsh=eXk3eWsyY3FzcDZn" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://youtube.com/@krithomedhvnrvjiet?si=cGKOIYA3Rnn12uZc" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="mailto:krithomedh@gmail.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-google"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;