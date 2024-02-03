import React from "react";
import "./Breadcrum.css";
import { Link } from "react-router-dom";
import { TfiArrowCircleRight } from "react-icons/tfi";

const Breadcrums = (props) => {
  const { product } = props;

  // Define a function to generate the link based on the category
  const getCategoryLink = (category) => {
    switch (category) {
      case "women":
        return "/womens";
      case "men":
        return "/mens";
      case "kid":
        return "/kids";
      case "accessory":
        return "/accessories";
      default:
        return "/";
    }
  };

  return (
    <div className="breadcrum">
      <Link to="/">HOME</Link>{" "}
      <TfiArrowCircleRight style={{ fontSize: "18px" }} />{" "}
      <Link to="/">SHOP</Link>{" "}
      <TfiArrowCircleRight style={{ fontSize: "18px" }} />{" "}
      <Link to={getCategoryLink(product.category)}>{product.category}</Link>{" "}
      <TfiArrowCircleRight style={{ fontSize: "18px" }} /> {product.name}
    </div>
  );
};

export default Breadcrums;
