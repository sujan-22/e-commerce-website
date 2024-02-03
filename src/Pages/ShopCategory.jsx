import React, { useContext, useState } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Items/Item";
import { Dropdown } from "primereact/dropdown";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

const ShopCategory = (props) => {
  const { all_products } = useContext(ShopContext);
  const [sortOption, setSortOption] = useState(null);

  const handleSortChange = (e) => {
    setSortOption(e.value);
  };

  const filteredProducts = all_products.filter(
    (item) => item.category === props.category
  );

  const sortProducts = (products) => {
    switch (sortOption) {
      case "lowToHigh":
        return products.slice().sort((a, b) => a.new_price - b.new_price);
      case "highToLow":
        return products.slice().sort((a, b) => b.new_price - a.new_price);
      default:
        return products;
    }
  };

  const cities = [
    { label: "Default", value: null },
    { label: "Price: Low to High", value: "lowToHigh" },
    { label: "Price: High to Low", value: "highToLow" },
  ];

  return (
    <div className="shop-category">
      <img className="shopcategory-banner" src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-{filteredProducts.length}</span> out of{" "}
          {filteredProducts.length} products
        </p>
        <div className="custom-dropdown">
          <Dropdown
            value={sortOption}
            options={cities}
            onChange={handleSortChange}
            optionLabel="label"
            placeholder="Filter"
          />
        </div>
      </div>
      <div className="shopcategory-products">
        {sortProducts(all_products).map((item, i) => {
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
      <div className="shopcategory-loadmore">Explore More</div>
    </div>
  );
};

export default ShopCategory;
