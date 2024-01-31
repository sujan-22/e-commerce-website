import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div className="item">
      <Link to={`/product/${props.id}`}>
        {" "}
        <img src={props.image} alt="" />
      </Link>

      <p>{props.name}</p>
      <div class="item-prices">
        <div class="item-price-new">${props.new_price}</div>
        <div class="item-price-old">${props.old_price}</div>
      </div>
    </div>
  );
};

export default Item;
