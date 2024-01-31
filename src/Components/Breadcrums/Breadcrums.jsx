import React from "react";
import "./Breadcrum.css";
import { TfiArrowCircleRight } from "react-icons/tfi";

const Breadcrums = (props) => {
  const { product } = props;
  return (
    <div className="breadcrum">
      HOME <TfiArrowCircleRight style={{ fontSize: "25px" }} /> SHOP{" "}
      <TfiArrowCircleRight style={{ fontSize: "25px" }} /> {product.category}{" "}
      <TfiArrowCircleRight style={{ fontSize: "25px" }} /> {product.name}
    </div>
  );
};

export default Breadcrums;
