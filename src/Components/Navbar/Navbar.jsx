import React, { useContext, useState } from "react";
import "./Navbar.css";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { FaShopify } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { getTotalCartItems } = useContext(ShopContext);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <Link to="/">
          <FaShopify className="svg" />
        </Link>
        <p>SUBLIME</p>
      </div>
      <IoIosArrowDropdownCircle
        className={`drop-down ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      />
      <ul className={`nav-menu ${menuOpen ? "visible" : ""}`}>
        <NavItem
          to="/"
          label="Shop"
          currentPath={location.pathname}
          setMenuOpen={setMenuOpen}
        />
        <NavItem
          to="/mens"
          label="Men"
          currentPath={location.pathname}
          setMenuOpen={setMenuOpen}
        />
        <NavItem
          to="/womens"
          label="Women"
          currentPath={location.pathname}
          setMenuOpen={setMenuOpen}
        />
        <NavItem
          to="/kids"
          label="Kids"
          currentPath={location.pathname}
          setMenuOpen={setMenuOpen}
        />
        <NavItem
          to="/accessories"
          label="Accessories"
          currentPath={location.pathname}
          setMenuOpen={setMenuOpen}
        />
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <PiShoppingCartSimpleBold className="cart-icon" />
        </Link>
        <Badge pill variant="danger" className="nav-cart-count">
          {getTotalCartItems()}
        </Badge>
      </div>
    </div>
  );
};

const NavItem = ({ to, label, currentPath, setMenuOpen }) => (
  <li
    onClick={() => setMenuOpen(false)}
    className={currentPath === to ? "active" : ""}
  >
    <Link to={to} style={{ textDecoration: "none", color: "#626262" }}>
      {label}
    </Link>
  </li>
);

export default Navbar;
