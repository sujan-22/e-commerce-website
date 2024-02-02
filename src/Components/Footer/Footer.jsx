import React from "react";
import { FaInstagramSquare, FaCopyright } from "react-icons/fa";
import { FaPinterestSquare, FaShopify } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <FaShopify />
        <p>SUBLIME</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <FaInstagramSquare />
        </div>
        <div className="footer-icons-container">
          <FaPinterestSquare />
        </div>
        <div className="footer-icons-container">
          <FaSquareWhatsapp />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>
          Copyright <FaCopyright /> 2024 - All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
