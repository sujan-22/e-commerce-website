import React from "react";
import "./Navbar.css";
import { GiOwl } from "react-icons/gi";
import { useContext, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import { CiLight, CiDark } from "react-icons/ci";
import { navData } from "../../data";

const Navbar = ({ toggleDarkMode, darkMode, backgroundColor }) => {
  const { getTotalCartItems } = useContext(ShopContext);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [navbarColor, setNavbarColor] = useState("transparent");
  const loginCartBackgroundColor = darkMode ? "white" : "black";
  const loginCartColor = darkMode ? "black" : "white";
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

  useEffect(() => {
    if (darkMode) {
      setNavbarColor("#02050fde");
    } else {
      setNavbarColor(backgroundColor);
    }
  }, [backgroundColor, darkMode]);

  return (
    <div className="navbar" style={{ backgroundColor: navbarColor }}>
      <div className="nav-row">
        <div className="nav-left">
          {windowWidth > 1000 ? (
            navData.map((item, index) => (
              <NavItem
                key={index}
                to={item.to}
                label={item.label}
                currentPath={location.pathname}
              />
            ))
          ) : (
            <div>
              <HamburgerMenu
                showNavData={true}
                darkMode={darkMode}
                backgroundColor={backgroundColor}
                showLoginSignup={true}
                label={"menu"}
              />
            </div>
          )}
        </div>
        <div className="nav-right">
          <div className="nav-search">
            <HamburgerMenu
              backgroundColor={backgroundColor}
              showSearch={true}
              showLoginSignup={false}
              darkMode={darkMode}
              label={"search"}
            />
          </div>
          <div
            className="nav-login-cart"
            style={{
              backgroundColor: loginCartBackgroundColor,
              color: loginCartColor,
            }}
          >
            <Link to="/cart">CART {getTotalCartItems()}</Link>
          </div>
          {windowWidth > 1000 && (
            <div>
              <HamburgerMenu
                backgroundColor={backgroundColor}
                showLoginSignup={true}
                label={"account"}
                darkMode={darkMode}
              />
            </div>
          )}
          <div onClick={toggleDarkMode} style={{ cursor: "pointer" }}>
            {darkMode ? <CiLight size={16} /> : <CiDark size={16} />}
          </div>
        </div>
      </div>
      <div className="nav-center">
        <div className="logo-wrapper">
          <Link to="/" style={{ textDecoration: "none" }}>
            <GiOwl className="svg" size={"26"} />
            <p>NIGHT OWL</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

const NavItem = ({ to, label, currentPath }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <li className={currentPath === to ? "active" : ""}>
      <Link
        to={to}
        style={{ textDecoration: "none", color: "gray" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {currentPath === to || isHovered ? <span>{`{${label}}`}</span> : label}
      </Link>
    </li>
  );
};

export default Navbar;
