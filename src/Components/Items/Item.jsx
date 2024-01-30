import React from "react";
import "./Item.css";

const Item = (props) => {
  return (
    <div className="item">
      <img src={props.image} alt="" />
      <p>{props.name}</p>
      <div class="item-prices">
        <div class="item-price-new">${props.new_price}</div>
        <div class="item-price-old">${props.old_price}</div>
      </div>
    </div>
  );
};

export default Item;
