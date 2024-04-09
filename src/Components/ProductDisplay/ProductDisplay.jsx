import React, { useContext, useState } from "react";
import "./ProductDisplay.css";
import {
  MdOutlineStar,
  MdOutlineStarBorder,
  MdOutlineStarHalf,
} from "react-icons/md";
import { ShopContext } from "../../Context/ShopContext";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ProductDisplay = ({ product }) => {
  const { addToCart } = useContext(ShopContext);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="productdisplay">
      <div className="productdisplay-images">
        <Carousel
          showArrows={true}
          showThumbs={false}
          transitionTime={500} // Adjust transition time (in milliseconds)
          interval={4000} // Adjust interval between slides (in milliseconds)
          infiniteLoop={true} // Enable infinite loop
          emulateTouch={true} // Enable touch swipe emulation for desktop
          swipeable={true} // Enable swipe gestures
        >
          {product.images.map((image, index) => (
            <div key={index}>
              <img src={image} alt="" />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="productdisplay-details">
        <h1>{product.name}</h1>
        <div className="productdisplay-stars">
          <MdOutlineStar />
          <MdOutlineStar />
          <MdOutlineStar />
          <MdOutlineStarHalf />
          <MdOutlineStarBorder />
          <p>(122)</p>
        </div>
        <div className="productdisplay-prices">
          <div className="productdisplay-price-old">${product.price}</div>
        </div>
        <div className="productdisplay-description">{product.description}</div>

        <button
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => addToCart(product.id)}
          className="add-to-cart"
        >
          {isHovered ? "{ ADD TO CART }" : "ADD TO CART"}
        </button>
        <p className="productdisplay-category">
          <span>Category: </span>
          {product.category.name}
        </p>
        <p className="productdisplay-tags">
          <span>Tags: </span>Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
