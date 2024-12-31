import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={footerStyles}>
      <div style={containerStyles}>
        <div style={columnStyles}>
          <h3>About Us</h3>
          <p>
            We are a leading recipe-finder platform dedicated to providing the best products and services.
          </p>
        </div>
        <div style={columnStyles}>
          <h3>Follow Us</h3>
          <div style={socialMediaContainer}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={iconLinkStyles}>
              <FaFacebook size={24} /> {/* Adjust the size as needed */}
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={iconLinkStyles}>
              <FaTwitter size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={iconLinkStyles}>
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
      <div style={copyrightStyles}>
        <p>&copy; {new Date().getFullYear()} YourCompany. All rights reserved.</p>
      </div>
    </footer>
  );
};

// Styles
const footerStyles = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '20px 0',
  textAlign: 'center',
};

const containerStyles = {
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
  margin: '0 auto',
  maxWidth: '1200px',
};

const columnStyles = {
  flex: '1',
  margin: '10px',
  minWidth: '250px',
  textAlign: 'center',
};

const iconLinkStyles = {
  color: '#fff',
  textDecoration: 'none',
  margin: '0 10px',
  display: 'inline-block',
};

const socialMediaContainer = {
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
};

const copyrightStyles = {
  marginTop: '10px',
};

export default Footer;
