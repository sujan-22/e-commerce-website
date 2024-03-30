import React from "react";
import { FaInstagramSquare, FaCopyright } from "react-icons/fa";
import { FaPinterestSquare, FaShopify } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
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
