import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Shop from "./Pages/Shop";
import Store from "./Pages/Store";
import Cart from "./Pages/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginSignUp from "./Pages/LoginSignUp";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/store" element={<Store />}>
            <Route index element={<ShopCategory category="s" />} />
            <Route path="clothing" element={<ShopCategory category="s" />} />
            <Route
              path="/store/electronics"
              element={<ShopCategory category="Electronics" />}
            />
            <Route
              path="/store/furniture"
              element={<ShopCategory category="Furniture" />}
            />
            <Route
              path="/store/shoes"
              element={<ShopCategory category="Shoes" />}
            />
            <Route
              path="/store/all"
              element={<ShopCategory category="Miscellaneous" />}
            />
          </Route>
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignUp />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
