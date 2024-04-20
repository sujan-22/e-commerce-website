import React, { useContext } from "react";
import { useSpring, animated } from "react-spring";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Items/Item";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

const ShopCategory = (props) => {
  const { all_products, searchResults, addToCart, searchQuery, loading } =
    useContext(ShopContext);

  const noResultsAnimation = useSpring({
    opacity: searchQuery && !searchResults.length ? 1 : 0,
    transform:
      searchQuery && !searchResults.length
        ? "translateY(0%)"
        : "translateY(-100%)",
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  const filteredProducts = all_products.filter(
    (item) => item.category === props.category
  );
  const productsToDisplay = searchQuery ? searchResults : filteredProducts;

  return (
    <div className="shop-category">
      {searchQuery && !productsToDisplay.length ? (
        <animated.div style={noResultsAnimation} className="no-results">
          No matching products found!
        </animated.div>
      ) : null}
      {productsToDisplay.length === 0 ? null : (
        <>
          <div className="shopcategory-products">
            {productsToDisplay.map((product, i) => (
              <Item product={product} addToCart={addToCart} key={i} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ShopCategory;
