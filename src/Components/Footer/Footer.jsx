import React from "react";
import { FaInstagramSquare, FaCopyright } from "react-icons/fa";
import { FaPinterestSquare, FaShopify } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div class="footer-logo">
        <FaShopify style={{ fontSize: "40px" }} />
        <p>SHOPPER</p>
      </div>
      <ul class="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div class="footer-social-icon">
        <div class="footer-icons-container">
          <FaInstagramSquare style={{ fontSize: "30px" }} />
        </div>
        <div class="footer-icons-container">
          <FaPinterestSquare style={{ fontSize: "30px" }} />
        </div>
        <div class="footer-icons-container">
          <FaSquareWhatsapp style={{ fontSize: "30px" }} />
        </div>
      </div>
      <div class="footer-copyright">
        <hr />
        <p>
          Copyright <FaCopyright /> 2024 - All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
