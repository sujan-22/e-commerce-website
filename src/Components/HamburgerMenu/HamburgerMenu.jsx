import React, { useState, useEffect, useRef, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import "./HamburgerMenu.css";
import { navData, specialItems } from "../../data";
import LoginSignup from "../LoginSignup/LoginSignup";
import { ShopContext } from "../../Context/ShopContext";
import SearchResults from "../SearchResults/SearchResults";

const HamburgerMenu = ({
  showNavData,
  showSpecialItems,
  showLoginSignup,
  showSearch,
  backgroundColor,
  darkMode,
  label,
}) => {
  const location = useLocation();
  const menuRef = useRef(null);
  const isLoggedIn = localStorage.getItem("auth_token");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { userData, searchProducts, searchResults, clearSearchResults } =
    useContext(ShopContext);

  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("auth_token");
    window.location.replace("/");
  };

  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchQuery(value);
    if (value.trim() !== "") {
      searchProducts(value);
    } else {
      clearSearchResults();
    }
  };

  const background = darkMode ? "#02050fde" : backgroundColor;

  return (
    <div className="hamburger" ref={menuRef}>
      <div className="ham-label" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <HoveredText text={label} />
      </div>
      <ul
        style={{ backgroundColor: background }}
        className={`hamburger-menu ${isMenuOpen ? "showMenu" : ""}`}
      >
        {showNavData &&
          navData.map((item, index) => (
            <NavItem
              key={index}
              to={item.to}
              label={item.label}
              currentPath={location.pathname}
              onClick={() => setIsMenuOpen(false)}
            />
          ))}
        {showSpecialItems &&
          specialItems.map((item, index) => (
            <NavItem
              key={index}
              to={item.to}
              label={item.label}
              currentPath={location.pathname}
              onClick={() => setIsMenuOpen(false)}
            />
          ))}
        {showSearch && (
          <>
            <input
              className="inputField"
              name="search"
              value={searchQuery}
              onChange={handleSearchChange}
              type="text"
              placeholder="TYPE TO SEARCH"
            />
            {searchQuery && searchResults.length > 0 ? (
              <div className="search-results">
                {searchResults.map((product, index) => (
                  <SearchResults
                    product={product}
                    key={index}
                    closeMenu={() => setIsMenuOpen(!isMenuOpen)}
                  />
                ))}
              </div>
            ) : (
              searchQuery && (
                <div className="no-results">No matching products found!</div>
              )
            )}
          </>
        )}

        {showLoginSignup && <LoginSignup />}
        {showLoginSignup && isLoggedIn && (
          <div className="account">
            <div className="details">
              <p>Account Details</p>
              <div className="user-details">
                <p>
                  {userData.fname} {userData.lname}
                </p>
                <p>{userData.email}</p>
              </div>
            </div>
            <p className="logout-button" onClick={handleLogout}>
              <HoveredText text={"logout"} />
            </p>
          </div>
        )}
      </ul>
    </div>
  );
};

export const HoveredText = ({ text }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ cursor: "pointer" }}
    >
      {hovered ? `{${text}}` : text}
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
        style={{ textDecoration: "none", color: "gray" }}
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
