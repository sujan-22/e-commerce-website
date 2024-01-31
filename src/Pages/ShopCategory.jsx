import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import { IoIosArrowDropdown } from "react-icons/io";
import Item from "../Components/Items/Item";

const ShopCategory = (props) => {
  const { all_products } = useContext(ShopContext);

  return (
    <div className="shop-category">
      <img className="shopcategory-banner" src={props.banner} alt="" />
      <div class="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div class="shopcategory-sort">
          Sort by <IoIosArrowDropdown style={{ fontSize: "22px" }} />
        </div>
      </div>
      <div class="shopcategory-products">
        {all_products.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div class="shopcategory-loadmore">Explore More</div>
    </div>
  );
};

export default ShopCategory;
