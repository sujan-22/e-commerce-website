import React, { useContext } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Pages/CSS/Shop.css";
import { ShopContext } from "../Context/ShopContext";
import fullWidthImage from "../assets/bg2.jpeg";

const Shop = () => {
  const { all_products } = useContext(ShopContext);

  if (!all_products) {
    return <div>Loading...</div>;
  }

  const getRandomProductForEachCategory = () => {
    const uniqueCategories = [
      ...new Set(all_products.map((product) => product.category)),
    ];
    const randomProducts = uniqueCategories.map((category) => {
      const categoryProducts = all_products.filter(
        (product) => product.category === category
      );
      return categoryProducts[
        Math.floor(Math.random() * categoryProducts.length)
      ];
    });
    return randomProducts;
  };

  const randomProducts = getRandomProductForEachCategory();

  // Custom left arrow component
  const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          left: "5%",
          zIndex: 2,
        }}
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
        style={{ ...style, right: "9%", zIndex: 2 }} // Position the arrow to the right
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
      case "electronics":
        return "/electronics";
      case "home-decoration":
        return "/home-decoration";
      case "furniture":
        return "/furniture";
      case "sports":
        return "/sports";
      case "lighting":
        return "/lighting";
      default:
        return "/";
    }
  };

  return (
    <>
      <div className="full-width-image-container">
        <img src={fullWidthImage} alt="" className="background-image" />
      </div>
      <div className="shop-carousel-container">
        {" "}
        <div className="shop-carousel">
          <Slider {...settings}>
            {randomProducts.map((product) => (
              <div key={product.id}>
                <div className="shop-image-container">
                  <Link
                    to={getCategoryPath(product.category)}
                    className="category-link"
                  >
                    <img
                      src={product.images[0]}
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
