import React, { useContext, useState } from "react";
import "./ProductDisplay.css";
import { MdStar, MdStarHalf, MdStarOutline } from "react-icons/md"; // Updated imports for star icons
import { ShopContext } from "../../Context/ShopContext";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ProductDisplay = ({ product }) => {
  const { addToCart } = useContext(ShopContext);
  const [isHovered, setIsHovered] = useState(false);

  // Calculate number of filled, half-filled, and empty stars
  const calculateStars = (rating) => {
    const filledStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const totalStars = 5;
    const emptyStars = totalStars - filledStars - (hasHalfStar ? 1 : 0);
    return { filledStars, hasHalfStar, emptyStars };
  };

  const renderStars = (filledStars, hasHalfStar, emptyStars) => {
    const stars = [];
    // Render filled stars
    for (let i = 0; i < filledStars; i++) {
      stars.push(<MdStar key={i} className="filled" />);
    }
    // Render half-filled star
    if (hasHalfStar) {
      stars.push(<MdStarHalf key="half" className="half-filled" />);
    }
    // Render empty stars
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<MdStarOutline key={i + filledStars} className="empty" />);
    }
    return stars;
  };

  const { filledStars, hasHalfStar, emptyStars } = calculateStars(
    product.rating
  );

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
          <p>{product.rating} </p>
          {renderStars(filledStars, hasHalfStar, emptyStars)}
        </div>
        <div className="productdisplay-prices">
          <div
            className="productdisplay-price-old"
            style={{
              textDecoration: product.onSale ? "line-through" : "none",
              color: product.onSale ? "gray" : "inherit",
            }}
          >
            ${product.price}
          </div>
          {product.onSale && (
            <div className="productdisplay-price-new">
              ${product.saleDetails.new_price}
            </div>
          )}
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
          {product.category}
        </p>
        <p className="productdisplay-tags">
          <span>Tags: </span>Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
