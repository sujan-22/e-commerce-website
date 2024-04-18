import React from "react";
import "./Navbar.css";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { GiOwl } from "react-icons/gi";
import { useContext, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import { ShopContext } from "../../Context/ShopContext";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import { specialItems } from "../../data";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { getTotalCartItems } = useContext(ShopContext);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [navbarColor, setNavbarColor] = useState("transparent");
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
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const isTop = scrolled === 0;
      const isHomePage = location.pathname === "/";

      if (isHomePage && isTop) {
        setNavbarColor("#020308");
      } else if (!isHomePage && isTop) {
        setNavbarColor("transparent");
      } else {
        setNavbarColor("#02050fed");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  return (
    <div className="navbar" style={{ backgroundColor: navbarColor }}>
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
        <Link to="/" style={{ textDecoration: "none", display: "contents" }}>
          <GiOwl className="svg" />
          <p>NIGHT OWL</p>
        </Link>
      </div>
      <div className="nav-login-cart">
        <Link to="/cart">
          <PiShoppingCartSimpleBold className="cart-icon" />
        </Link>
        <Badge pill variant="danger" className="nav-cart-count">
          {getTotalCartItems()}
        </Badge>
      </div>
      {windowWidth <= 800 && !location.pathname.includes("/store") && (
        <div className="hamb">
          <HamburgerMenu />
        </div>
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
