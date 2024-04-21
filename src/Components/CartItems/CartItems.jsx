import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import { MdRemoveCircleOutline, MdAddCircleOutline } from "react-icons/md";
import { HoveredText } from "../HamburgerMenu/HamburgerMenu";

const CartItems = () => {
  const {
    getTotalCartAmount,
    all_products,
    cartItems,
    removeFromCart,
    addToCart,
  } = useContext(ShopContext);

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Name</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
      </div>
      <hr />
      {all_products.map((product) => {
        if (cartItems[product.id] > 0) {
          return (
            <div key={product.id}>
              <div className="cartitems-format cartitems-format-main">
                <img
                  src={product.images[0]}
                  alt=""
                  className="carticon-product-icon"
                />
                <p>{product.name}</p>
                <p>${product.price}</p>
                <div className="quantity-controls">
                  <MdRemoveCircleOutline
                    onClick={() => {
                      removeFromCart(product.id);
                    }}
                    style={{ fontSize: "24px" }}
                  />
                  <p className="cartitems-quantity">{cartItems[product.id]}</p>
                  <MdAddCircleOutline
                    onClick={() => {
                      addToCart(product.id);
                    }}
                    style={{ fontSize: "24px" }}
                  />
                </div>
                <p className="totalPrice">
                  ${product.price * cartItems[product.id]}
                </p>
              </div>
              <hr />
            </div>
          );
        }
        return null; // Ensure you have a return statement
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <p>Cart Total</p>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Total</p>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <HoveredText text={"proceed to checkout"} />
        </div>
      </div>
    </div>
  );
};

export default CartItems;
