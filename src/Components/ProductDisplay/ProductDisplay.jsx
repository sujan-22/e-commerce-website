import React, { useContext } from "react";
import "./ProductDisplay.css";
import { MdOutlineStar } from "react-icons/md";
import { MdOutlineStarBorder } from "react-icons/md";
import { MdOutlineStarHalf } from "react-icons/md";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="productdisplay">
      <div class="productdisplay-left">
        <div class="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div class="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div class="productdisplay-right">
        <h1>{product.name}</h1>
        <div class="productdisplay-right-stars">
          <MdOutlineStar />
          <MdOutlineStar />
          <MdOutlineStar />
          <MdOutlineStarHalf />
          <MdOutlineStarBorder />
          <p>(122)</p>
        </div>
        <div class="productdisplay-right-prices">
          <div class="productdisplay-right-price-old">${product.old_price}</div>
          <div class="productdisplay-right-price-new">${product.new_price}</div>
        </div>
        <div class="productdisplay-right-description">
          Discover unmatched comfort and style with our premium black hoodie.
          Crafted from high-quality, breathable fabric, this hoodie is perfect
          for your everyday casual look. Elevate your wardrobe with this
          essential piece that seamlessly blends fashion and comfort.
        </div>
        <div class="productdisplay-right-size">
          <h1>Select Size</h1>
          <div class="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
        >
          ADD TO CART
        </button>
        <p className="product-display-right-category">
          <span>Category: </span>Women, T-Shirt, Crop Top
        </p>
        <p className="product-display-right-category">
          <span>Tags: </span>Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
