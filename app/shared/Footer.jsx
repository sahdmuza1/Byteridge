'use client';
import React from 'react'
import styles from './Footer.css'
    
const Footer = () => {
  return (
   
    
  
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-column">
              <div className="footer-logo">Byteridge</div>
              <p className="tagline">Building Excellence in Digital</p>
            </div>
    
            <div className="footer-column">
              <h4>Our offices</h4>
              <h5>United States</h5>
              <p>Byteridge INC<br />
                5109 Hollyridge Drive, Suite 108<br />
                Raleigh, NC 27612<br />
                +1 919 741 5152<br />
                info@byteridge.com</p>
            </div>
    
            <div className="footer-column">
              <h5>India</h5>
              <p>Byteridge Software Private Limited<br />
                WeWork Rajapushpa Summit, Financial District,<br />
                Hyderabad, Telangana 500032<br />
                +91 40491 74522<br />
                info@byteridge.com</p>
            </div>
    
            <div className="footer-column">
              <h4>Follow Us</h4>
              <div className="social-links">
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
              </div>
    
              <div className="subscribe">
                <input type="email" placeholder="Subscribe for updates" />
                <button>→</button>
              </div>
            </div>
    
            <div className="footer-column">
              <ul className="footer-links">
                <li>Case Studies</li>
                <li>About Us</li>
                <li>Careers</li>
                <li>Blogs</li>
                <li>Events</li>
              </ul>
            </div>
          </div>
    
          <div className="footer-bottom">
            <p>Byteridge™ | All rights reserved.</p>
          </div>
        </footer>
      );
    };
    
    export default Footer;
    
