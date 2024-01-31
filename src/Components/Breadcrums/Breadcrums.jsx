import React from "react";
import "./Breadcrum.css";
import { TfiArrowCircleRight } from "react-icons/tfi";

const Breadcrums = (props) => {
  const { product } = props;
  return (
    <div className="breadcrum">
      HOME <TfiArrowCircleRight style={{ fontSize: "18px" }} /> SHOP{" "}
      <TfiArrowCircleRight style={{ fontSize: "18px" }} /> {product.category}{" "}
      <TfiArrowCircleRight style={{ fontSize: "18px" }} /> {product.name}
    </div>
  );
};

export default Breadcrums;
