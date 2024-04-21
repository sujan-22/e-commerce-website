import React from "react";
import { Link } from "react-router-dom";
import "./SearchResults.css";

const SearchResults = ({ product, closeMenu }) => {
  return (
    <div className="search-results" onClick={() => closeMenu()}>
      <div className="search-results-info">
        <Link
          to={`/product/${product.id}`}
          key={product.id}
          className="product-link"
        >
          <img
            src={product.images[0]}
            alt=""
            className="search-results-image"
          />
        </Link>
        <p className="search-results-title">{product.name}</p>
        <div className="search-results-prices">
          {product.onSale
            ? `$${product.saleDetails.new_price}`
            : `$${product.price}`}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
