import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Item.css";

const Item = ({ product, addToCart }) => {
  const [isHovered, setIsHovered] = useState(false);

  const settings = {
    customPaging: function (i) {
      return (
        <div>
          <img src={product.images[i]} alt="" />
        </div>
      );
    },
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    fade: true,
    dotsClass: "slick-dots slick-thumb",
  };

  const handleAddToCart = () => {
    addToCart(product.id); // Call the addToCart function with the product ID
  };

  return (
    <div
      className="item"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Slider {...settings}>
        {product.images.map((image, index) => (
          <div
            key={index}
            style={{ width: "100%", height: "auto" }}
            className="div-image"
          >
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="product-link"
            >
              <img
                src={image}
                alt=""
                className="item-image"
                style={{ width: "100%", height: "400px", objectFit: "cover" }}
              />
            </Link>
          </div>
        ))}
      </Slider>
      <div className="item-info">
        <p className="item-title">{product.name}</p>
        {window.innerWidth > 1024 && (
          <>
            {isHovered && (
              <div className="item-prices">
                <button
                  className="add-to-cart-button"
                  onClick={handleAddToCart}
                >
                  {"{ADD TO CART}"}
                </button>
              </div>
            )}
            {!isHovered && (
              <div className="item-prices">
                {product.onSale && (
                  <div className="item-price-new">
                    ${product.saleDetails.new_price}
                  </div>
                )}
                <div
                  className="item-price-old"
                  style={{
                    textDecoration: product.onSale ? "line-through" : "none",
                    color: product.onSale ? "gray" : "inherit",
                  }}
                >
                  ${product.price}
                </div>
              </div>
            )}
          </>
        )}
        {window.innerWidth <= 1024 && (
          <div className="item-prices">
            {product.onSale && (
              <div className="item-price-new">
                ${product.saleDetails.new_price}
              </div>
            )}
            <div
              className="item-price-old"
              style={{
                textDecoration: product.onSale ? "line-through" : "none",
                color: product.onSale ? "gray" : "inherit",
              }}
            >
              ${product.price}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Item;
