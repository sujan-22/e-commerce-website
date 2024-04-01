import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import "./CSS/Store.css";
import Badge from "react-bootstrap/Badge";
import { ShopContext } from "../Context/ShopContext";

var hideMenu = () => {
  var bar = document.getElementsByClassName("bar");
  var ham = document.getElementsByClassName("NavbarLinks");
  bar[0].classList.remove("barOne");
  bar[1].classList.remove("barTwo");
  bar[2].classList.remove("barThree");
  ham[0].classList.remove("showNavbar");
};

const Store = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { getTotalCartItems } = useContext(ShopContext);
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
    var bar = document.getElementsByClassName("bar");
    var ham = document.getElementsByClassName("NavbarLinks");
    bar[0].classList.toggle("barOne");
    bar[1].classList.toggle("barTwo");
    bar[2].classList.toggle("barThree");
    ham[0].classList.toggle("showNavbar");
  };

  return (
    <div className="store">
      <div className="categories">
        <div className="Hamburger" onClick={showMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className="NavbarLinks">
          {windowWidth > 800 ? (
            <>
              <NavItem
                to="/store/clothing"
                label="Clothing"
                currentPath={location.pathname}
                onClick={hideMenu}
              />
              <NavItem
                to="/store/electronics"
                label="Electronics"
                currentPath={location.pathname}
                onClick={hideMenu}
              />
              <NavItem
                to="/store/furniture"
                label="Furniture"
                currentPath={location.pathname}
                onClick={hideMenu}
              />
              <NavItem
                to="/store/shoes"
                label="Shoes"
                currentPath={location.pathname}
                onClick={hideMenu}
              />
              <NavItem
                to="/store/all"
                label="All"
                currentPath={location.pathname}
                onClick={hideMenu}
              />
            </>
          ) : (
            <>
              <NavItem
                to="/"
                label="Home"
                currentPath={location.pathname}
                onClick={hideMenu}
              />
              <NavItem
                to="/store"
                label="Store"
                currentPath={location.pathname}
                onClick={hideMenu}
              />
              <NavItem
                to="/store/clothing"
                label="Clothing"
                currentPath={location.pathname}
                onClick={hideMenu}
              />
              <NavItem
                to="/store/electronics"
                label="Electronics"
                currentPath={location.pathname}
                onClick={hideMenu}
              />
              <NavItem
                to="/store/furniture"
                label="Furniture"
                currentPath={location.pathname}
                onClick={hideMenu}
              />
              <NavItem
                to="/store/shoes"
                label="Shoes"
                currentPath={location.pathname}
                onClick={hideMenu}
              />
              <NavItem
                to="/store/all"
                label="All"
                currentPath={location.pathname}
                onClick={hideMenu}
              />
              <div className="nav_login_cart">
                {localStorage.getItem("auth_token") ? (
                  <button
                    onClick={() => {
                      localStorage.removeItem("auth_token");
                      window.location.replace("/");
                    }}
                  >
                    Logout
                  </button>
                ) : (
                  <Link to="/login">
                    <button>Login</button>
                  </Link>
                )}
                <Link to="/cart">
                  <PiShoppingCartSimpleBold className="cart_icon" />
                </Link>
                <Badge pill variant="danger" className="nav_cart_count">
                  {getTotalCartItems()}
                </Badge>
              </div>
            </>
          )}
        </ul>
      </div>
      <div className="shop-category">
        <Outlet />
      </div>
    </div>
  );
};

const NavItem = ({ to, label, currentPath, onClick }) => (
  <li className={currentPath === to ? "active" : ""} onClick={hideMenu}>
    <Link to={to} style={{ textDecoration: "none", color: "white" }}>
      {label}
    </Link>
  </li>
);

export default Store;
