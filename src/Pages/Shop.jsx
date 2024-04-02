import React, { useEffect, useState, useContext } from "react";
import Slider from "react-slick";
import axios from "axios";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Pages/CSS/Shop.css";
import { ShopContext } from "../Context/ShopContext";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(ShopContext);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "https://api.escuelajs.co/api/v1/products"
      );
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

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
      case "un nuevo nombre":
        return "/store/clothing";
      case "Electronics":
        return "/store/electronics";
      case "Furniture":
        return "/store/furniture";
      case "Shoes":
        return "/store/shoes";
      case "miscellaneous":
        return "/store/all";
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
            {products.map((product) => (
              <div key={product.id}>
                <div className="shop-image-container">
                  <img src={product.images[0]} alt={`Product ${product.id}`} />
                  <span className="category-text">CATEGORY:</span>
                  <span className="category">{product.category.name}</span>
                  <Link
                    to={getCategoryPath(product.category.name)}
                    className="category-link"
                  >
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
