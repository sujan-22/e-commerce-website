import React, { useContext } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Pages/CSS/Shop.css";
import { ShopContext } from "../Context/ShopContext";

const Shop = () => {
  const { all_products } = useContext(ShopContext);

  if (!all_products) {
    return <div>Loading...</div>;
  }

  // Custom left arrow component
  const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          left: 10,
          zIndex: 1,
          fontSize: "24px !important",
          display: "block",
        }} // Position the arrow to the left
        onClick={onClick}
      />
    );
  };

  // Custom right arrow component
  const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, right: 25, zIndex: 2, fontSize: "30px !important" }} // Position the arrow to the right
        onClick={onClick}
      />
    );
  };

  const settings = {
    infinite: true,
    speed: 1000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  // Adjust slidesToShow and slidesToScroll based on screen width
  if (window.innerWidth < 800) {
    settings.slidesToShow = 2;
    settings.slidesToScroll = 2;
    settings.centerMode = true; // Enable center mode
    settings.centerPadding = "50px"; // Add padding to center slide
  }

  if (window.innerWidth <= 550) {
    settings.slidesToShow = 1;
    settings.slidesToScroll = 1;
    settings.centerMode = false; // Disable center mode for smaller screens
  }

  if (window.innerWidth >= 800) {
    settings.slidesToShow = 3;
    settings.slidesToScroll = 3;
  }

  const getCategoryPath = (categoryName) => {
    switch (categoryName) {
      case "smartphones":
        return "/store/smartphones";
      case "home-decoration":
        return "/store/home-decoration";
      case "furniture":
        return "/store/furniture";
      case "laptops":
        return "/store/laptops";
      case "lighting":
        return "/store/lighting";
      default:
        return "/";
    }
  };

  return (
    <>
      <div className="shop-carousel-container">
        {" "}
        {/* Container div */}
        <div className="shop-carousel">
          <Slider {...settings}>
            {all_products.map((product) => (
              <div key={product.id}>
                <div className="shop-image-container">
                  <Link
                    to={getCategoryPath(product.category)}
                    className="category-link"
                  >
                    <img
                      src={product.thumbnail}
                      alt={`Product ${product.id}`}
                    />
                    <span className="category-text">CATEGORY:</span>
                    <span className="category">{product.category}</span>

                    <button className="goto">EXPLORE MORE</button>
                  </Link>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Shop;
