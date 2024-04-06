import React from "react";
import { GrGithub, GrMail, GrLink } from "react-icons/gr";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-copyright">
        <hr />
        <p>
          Designed & Developed by Sujan Rokad &copy; 2024 - All rights reserved.
        </p>
        <div className="social-icons">
          <a
            href="https://github.com/sujan-22"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GrGithub className="icon" />
          </a>
          <a
            href="mailto:your.email@example.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GrMail className="icon" />
          </a>
          <a
            href="https://my-portfolio-seven-ebon-10.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GrLink className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
