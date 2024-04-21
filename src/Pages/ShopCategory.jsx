import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Items/Item";

const ShopCategory = (props) => {
  const { all_products, addToCart } = useContext(ShopContext);

  const filteredProducts = all_products.filter(
    (item) => item.category === props.category
  );

  return (
    <div className="shop-category">
      <div className="shopcategory-products">
        {filteredProducts.map((product, i) => (
          <Item product={product} addToCart={addToCart} key={i} />
        ))}
      </div>
    </div>
  );
};

export default ShopCategory;
