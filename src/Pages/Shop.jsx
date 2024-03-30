import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Shop.css"; // Import your custom CSS file

const Shop = () => {
  const [products, setProducts] = useState([]);

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
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  const getCategoryPath = (categoryName) => {
    switch (categoryName.toLowerCase()) {
      case "nuevo":
        return "/clothing";
      case "electronics":
        return "/electronics";
      case "kawaii":
        return "/furniture";
      case "shoes":
        return "/shoes";
      case "miscellaneous":
        return "/all";
      default:
        return "/";
    }
  };

  return (
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
  );
};

export default Shop;
