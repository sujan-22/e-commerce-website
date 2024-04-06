import React from "react";
import "./Navbar.css";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { GiOwl } from "react-icons/gi";
import { useContext, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import { ShopContext } from "../../Context/ShopContext";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import { specialItems } from "../../data";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { getTotalCartItems, avatarUrl } = useContext(ShopContext);
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

  return (
    <div className="navbar">
      <ul className={`nav-menu ${menuOpen ? "visible" : ""}`}>
        {specialItems.map((item, index) => (
          <NavItem
            key={index}
            to={item.to}
            label={item.label}
            currentPath={location.pathname}
            setMenuOpen={setMenuOpen}
          />
        ))}
      </ul>
      <div className="nav-logo">
        <Link to="/">
          <GiOwl className="svg" />
        </Link>
        <p>NIGHT OWL</p>
      </div>
      <div className="nav-login-cart">
        {localStorage.getItem("auth_token") ? (
          <>
            {windowWidth > 800 && (
              <img src={avatarUrl} alt="Avatar" className="avatar" />
            )}
            <button
              onClick={() => {
                localStorage.removeItem("auth_token");
                window.location.replace("/");
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}
        <Link to="/cart">
          <PiShoppingCartSimpleBold className="cart-icon" />
        </Link>
        <Badge pill variant="danger" className="nav-cart-count">
          {getTotalCartItems()}
        </Badge>
      </div>
      {windowWidth <= 800 && !location.pathname.includes("/store") && (
        <HamburgerMenu />
      )}
    </div>
  );
};

const NavItem = ({ to, label, currentPath, setMenuOpen }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <li
      onClick={() => setMenuOpen(false)}
      className={currentPath === to ? "active" : ""}
    >
      <Link
        to={to}
        style={{ textDecoration: "none", color: "#626262" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {currentPath === to || isHovered ? <span>{`{${label}}`}</span> : label}
      </Link>
    </li>
  );
};

export default Navbar;
