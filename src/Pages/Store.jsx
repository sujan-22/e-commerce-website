import React from "react";
import { Outlet } from "react-router-dom";
import "./CSS/Store.css";
import HamburgerMenu from "../Components/HamburgerMenu/HamburgerMenu";

const Store = () => {
  return (
    <div className="store">
      <div className="categories"></div>
      <div className="shop-category">
        <Outlet />
      </div>
    </div>
  );
};

export default Store;
