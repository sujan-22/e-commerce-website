import React, { createContext, useState, useEffect } from "react";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < 300 + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [all_products, setAll_Products] = useState([]);
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [avatarUrl, setAvatarUrl] = useState("");

  const backendUrl = process.env.REACT_APP_BACKEND_URL;

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=200")
      .then((response) => response.json())
      .then((data) => setAll_Products(data.products));

    if (localStorage.getItem("auth_token")) {
      // Fetch user data including avatarUrl from the userdata endpoint
      fetch(`${backendUrl}/userdata`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          auth_token: localStorage.getItem("auth_token"),
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((userData) => {
          setCartItems(userData.cartData);
          setAvatarUrl(userData.avatarUrl); // Set the avatar URL from user data
        })
        .catch((error) => console.error("Error fetching user data:", error));
    }
  }, []);

  console.log(avatarUrl);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    if (localStorage.getItem("auth_token")) {
      fetch(`${backendUrl}/addtocart`, {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          auth_token: `${localStorage.getItem("auth_token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ itemId: itemId }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if (localStorage.getItem("auth_token")) {
      fetch(`${backendUrl}/removefromcart`, {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          auth_token: `${localStorage.getItem("auth_token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ itemId: itemId }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_products.find(
          (product) => product.id === Number(item)
        );
        if (itemInfo) {
          totalAmount += itemInfo.price * cartItems[item]; // Use the 'price' property
        }
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItems = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItems += cartItems[item];
      }
    }
    return totalItems;
  };

  const contextValue = {
    getTotalCartItems,
    getTotalCartAmount,
    all_products,
    cartItems,
    addToCart,
    removeFromCart,
    avatarUrl,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
