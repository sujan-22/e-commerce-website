import React from "react";
import "./Navbar.css";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { GiOwl } from "react-icons/gi";
import { useContext, useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import { ShopContext } from "../../Context/ShopContext";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import { specialItems, navData } from "../../data";
import SearchSidebar from "../SearchResults/SearchResults";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { getTotalCartItems, searchProducts, clearSearchResults } =
    useContext(ShopContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [navbarColor, setNavbarColor] = useState("transparent");
  const [showSidebar, setShowSidebar] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSearchButtonClick = () => {
    setShowSidebar(true); // Open the sidebar when the search button is clicked
  };

  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchQuery(value);
    if (value.trim() !== "") {
      searchProducts(value);
      navigate("/store");
    } else {
      clearSearchResults();
    }
  };

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
      <div className="nav-row">
        <div className="nav-left">
          {windowWidth > 1000 ? (
            navData.map((item, index) => (
              <NavItem
                key={index}
                to={item.to}
                label={item.label}
                currentPath={location.pathname}
                setMenuOpen={setMenuOpen}
              />
            ))
          ) : (
            <div>
              <HamburgerMenu
                showNavData={true}
                showLoginSignup={true}
                label={"category"}
              />
            </div>
          )}
        </div>
        <div className="nav-right">
          <div className="nav-search">
            <HamburgerMenu showSearch={true} label={"search"} />
          </div>
          <div className="nav-login-cart">
            <Link to="/cart">CART {getTotalCartItems()}</Link>
          </div>
          {windowWidth > 1000 && (
            <div>
              <HamburgerMenu showLoginSignup={true} label={"account"} />
            </div>
          )}
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
