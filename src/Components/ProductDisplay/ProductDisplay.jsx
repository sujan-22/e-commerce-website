import React, { useContext, useState } from "react";
import "./ProductDisplay.css";
import {
  MdOutlineStar,
  MdOutlineStarBorder,
  MdOutlineStarHalf,
} from "react-icons/md";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = ({ product }) => {
  const { addToCart } = useContext(ShopContext);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="productdisplay">
      <div className="productdisplay-images">
        {product.images.map((image, index) => (
          <img key={index} src={image} alt="" />
        ))}
      </div>
      <div className="productdisplay-details">
        <h1>{product.title}</h1>
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
        <div className="productdisplay-description">
          Discover unmatched comfort and style with our premium black hoodie.
          Crafted from high-quality, breathable fabric, this hoodie is perfect
          for your everyday casual look. Elevate your wardrobe with this
          essential piece that seamlessly blends fashion and comfort.
        </div>
        <div className="productdisplay-size">
          <h2>Select Size</h2>
          <div className="productdisplay-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
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
