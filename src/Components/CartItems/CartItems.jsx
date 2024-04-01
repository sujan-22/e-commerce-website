import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import { MdRemoveCircleOutline, MdAddCircleOutline } from "react-icons/md";

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
        <p>Title</p>
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
                <p>{product.title}</p>
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
          <h1>Cart Total</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
