import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./HamburgerMenu.css";
import { navData, specialItems } from "../../data";

const HamburgerMenu = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const location = useLocation();
  const menuRef = useRef(null);
  const isLoggedIn = localStorage.getItem("auth_token");
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [showContainer, setShowContainer] = useState(true);
  const [isLogin, setIsLogin] = useState(true);

  const backendUrl = process.env.REACT_APP_BACKEND_URL;

  const changeHandler = (e) => {
    const { name, value } = e.target;
    const transformedValue = name === "email" ? value.toLowerCase() : value;
    setFormData({ ...formData, [name]: transformedValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowContainer(false);
    let url = isLogin ? `${backendUrl}/login` : `${backendUrl}/signup`;
    console.log(url);
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const responseData = await response.json();
      if (responseData.success) {
        localStorage.setItem("auth_token", responseData.token);
        window.location.replace("/");
        toggleForm();
      } else {
        alert(responseData.errors);
        setShowContainer(true);
      }
    } catch (error) {
      console.error("Error:", error);
      setShowContainer(true);
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

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
            <li></li>
          </>
        )}
        {!isLoggedIn && (
          <div className="FormContainer">
            <div className="loginSignupButtons">
              <button
                className={isLogin ? "active" : ""}
                onClick={() => setIsLogin(true)}
              >
                LOGIN
              </button>
              <button
                className={!isLogin ? "active" : ""}
                onClick={() => setIsLogin(false)}
              >
                SIGNUP
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              {!isLogin && (
                <>
                  <input
                    className="inputField"
                    name="firstname"
                    value={formData.firstname}
                    onChange={changeHandler}
                    type="text"
                    placeholder="First Name"
                  />
                  <input
                    className="inputField"
                    name="lastname"
                    value={formData.lastname}
                    onChange={changeHandler}
                    type="text"
                    placeholder="Last Name"
                  />
                </>
              )}
              <input
                className="inputField"
                name="email"
                value={formData.email}
                onChange={changeHandler}
                type="email"
                placeholder="Email"
              />
              <input
                className="inputField"
                name="password"
                value={formData.password}
                onChange={changeHandler}
                type="password"
                placeholder="Password"
                autoCapitalize="none"
              />
              <button type="submit" disabled={!showContainer}>
                SUBMIT
              </button>
            </form>
          </div>
        )}
        {isLoggedIn && (
          <div className="account">
            <Link to="/account">
              <button>ACCOUNT</button>
            </Link>
          </div>
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
