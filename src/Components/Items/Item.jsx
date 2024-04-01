import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Item.css";

const Item = ({ product, addToCart }) => {
  if (!product) {
    return null;
  }

  const settings = {
    customPaging: function (i) {
      return (
        <div>
          <img src={product.images[i]} alt={product.name} />
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
    <div className="item">
      <Slider {...settings}>
        {product.images.map((image, index) => (
          <div
            key={index}
            style={{ width: "100%", height: "auto" }}
            className="div-image"
          >
            <img
              src={image}
              alt=""
              className="item-image"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        ))}
      </Slider>
      <div className="item-info">
        <p className="item-title">{product.title}</p>
        <p className="item-category">Category: {product.category.name}</p>
        <p className="item-description">{product.description}</p>
        <div className="item-prices">
          <div className="item-price-new">${product.price}</div>
        </div>
        <button className="add-to-cart-button" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Item;
