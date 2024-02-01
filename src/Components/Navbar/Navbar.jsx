import React, { useContext, useState } from "react";
import "./Navbar.css";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { FaShopify } from "react-icons/fa";
import { Link } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { getTotalCartItems } = useContext(ShopContext);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <FaShopify className="svg" />
        <p>SHOPPER</p>
      </div>
      <IoIosArrowDropdownCircle
        className={`drop-down ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      />
      <ul className={`nav-menu ${menuOpen ? "visible" : ""}`}>
        <li onClick={() => setMenuOpen(false)}>
          <Link to="/" style={{ textDecoration: "none", color: "#626262" }}>
            Shop
          </Link>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <Link to="/mens" style={{ textDecoration: "none", color: "#626262" }}>
            Men
          </Link>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <Link
            to="/womens"
            style={{ textDecoration: "none", color: "#626262" }}
          >
            Women
          </Link>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <Link to="/kids" style={{ textDecoration: "none", color: "#626262" }}>
            Kids
          </Link>
        </li>
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

export default Navbar;
