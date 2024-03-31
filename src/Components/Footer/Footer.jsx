import React from "react";
import { FaCopyright } from "react-icons/fa";
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
