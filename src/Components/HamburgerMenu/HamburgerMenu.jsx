import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { navData, specialItems } from "../../data";
import { RiLogoutBoxLine, RiLoginBoxLine } from "react-icons/ri";
import "./HamburgerMenu.css";

var hideMenu = () => {
  var bar = document.getElementsByClassName("ham");
  var ham = document.getElementsByClassName("hamburger-menu");
  bar[0].classList.remove("first");
  bar[1].classList.remove("second");
  bar[2].classList.remove("Third");
  ham[0].classList.remove("showMenu");
};

const HamburgerMenu = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  var showMenu = () => {
    var bar = document.getElementsByClassName("ham");
    var ham = document.getElementsByClassName("hamburger-menu");
    bar[0].classList.toggle("first");
    bar[1].classList.toggle("second");
    bar[2].classList.toggle("Third");
    ham[0].classList.toggle("showMenu");
  };

  return (
    <div className="hamburger">
      <div className="Hamburger" onClick={showMenu}>
        <span className="ham"></span>
        <span className="ham"></span>
        <span className="ham"></span>
      </div>
      <ul className="hamburger-menu">
        {windowWidth > 800 ? (
          navData.map((item, index) => (
            <NavItem
              key={index}
              to={item.to}
              label={item.label}
              currentPath={location.pathname}
              onClick={hideMenu}
              icon={item.icon}
            />
          ))
        ) : (
          <>
            {specialItems.map((item, index) => (
              <NavItem
                key={index}
                to={item.to}
                label={item.label}
                currentPath={location.pathname}
                onClick={hideMenu}
                icon={item.icon}
              />
            ))}
            <li>
              <span style={{ display: "none" }}>Store</span>
              <ul>
                {navData.map((item, index) => (
                  <NavItem
                    key={index}
                    to={item.to}
                    label={item.label}
                    currentPath={location.pathname}
                    onClick={hideMenu}
                    icon={item.icon}
                  />
                ))}
              </ul>
            </li>
            <div className="nav_login_cart">
              {localStorage.getItem("auth_token") ? (
                <button
                  onClick={() => {
                    localStorage.removeItem("auth_token");
                    window.location.replace("/");
                  }}
                >
                  <RiLogoutBoxLine className="icon" />
                  Logout
                </button>
              ) : (
                <Link to="/login">
                  <button>
                    <RiLoginBoxLine className="icon" />
                    Login
                  </button>
                </Link>
              )}
            </div>
          </>
        )}
      </ul>
    </div>
  );
};

const NavItem = ({ to, label, currentPath, onClick, icon }) => (
  <li className={currentPath === to ? "active" : ""} onClick={onClick}>
    <Link to={to} style={{ textDecoration: "none", color: "white" }}>
      {icon && React.createElement(icon, { className: "nav-icon" })}
      {label}
    </Link>
  </li>
);

export default HamburgerMenu;
