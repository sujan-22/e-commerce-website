import React, { useState, useEffect, useContext, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { navData, specialItems } from "../../data";
import { RiLoginBoxLine } from "react-icons/ri";
import { ShopContext } from "../../Context/ShopContext";
import "./HamburgerMenu.css";

const HamburgerMenu = () => {
  const { userData } = useContext(ShopContext);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const location = useLocation();
  const menuRef = useRef(null);
  const isLoggedIn = localStorage.getItem("auth_token");

  const buttonPosition = isLoggedIn
    ? { position: "relative", bottom: "47px", left: "40px" }
    : {};

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        hideMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
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

  var hideMenu = () => {
    var bar = document.getElementsByClassName("ham");
    var ham = document.getElementsByClassName("hamburger-menu");
    bar[0].classList.remove("first");
    bar[1].classList.remove("second");
    bar[2].classList.remove("Third");
    ham[0].classList.remove("showMenu");
  };

  return (
    <div className="hamburger" ref={menuRef}>
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
            {isLoggedIn && (
              <div className="user-info">
                <img
                  src={userData.avatarUrl}
                  alt="Avatar"
                  className="user-avatar"
                />
                <p className="user-email">{userData.email}</p>{" "}
              </div>
            )}
            <div className="nav_login_cart">
              {isLoggedIn ? (
                <>
                  <button
                    onClick={() => {
                      localStorage.removeItem("auth_token");
                      window.location.replace("/");
                    }}
                    style={buttonPosition}
                  >
                    Logout
                  </button>
                </>
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

const NavItem = ({ to, label, currentPath, onClick, icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <li className={currentPath === to ? "active" : ""} onClick={onClick}>
      <Link
        to={to}
        style={{ textDecoration: "none", color: "white" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {icon && React.createElement(icon, { className: "nav-icon" })}
        {currentPath === to || isHovered ? <span>{`{${label}}`}</span> : label}
      </Link>
    </li>
  );
};

export default HamburgerMenu;
