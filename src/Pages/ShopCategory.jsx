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
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const handleSortChange = (e) => {
    setSortOption(e.value);
  };

  const filteredProducts = all_products.filter(
    (item) =>
      item.category.name === props.category && item.description.length > 5
  );

  const sortedProducts = filteredProducts;

  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    setTimeout(scrollToTop, 100);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    setTimeout(scrollToTop, 100);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Add smooth scrolling behavior
    });
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const cities = [
    { label: "Default", value: null },
    { label: "Price: Low to High", value: "lowToHigh" },
    { label: "Price: High to Low", value: "highToLow" },
  ];

  return (
    <div className="shop-category">
      <div className="shopcategory-indexSort">
        <p>
          <span>
            Showing {indexOfFirstProduct + 1}-{indexOfLastProduct}
          </span>{" "}
          out of {sortedProducts.length} products
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
        {currentProducts.map((product, i) => (
          <Item key={product.id} product={product} />
        ))}
      </div>
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Prev
        </button>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ShopCategory;
