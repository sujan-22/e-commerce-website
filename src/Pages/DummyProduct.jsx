import React, { useState, useEffect } from "react";
import Item from "../Components/Items/Item";

const DummyProduct = () => {
  // Dummy product data state
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  // Fetch products from new API endpoint
  const fetchProducts = async () => {
    try {
      const response = await fetch("https://api.escuelajs.co/api/v1/products");
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <div className="grid grid-cols-4 gap-4">
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
};

export default DummyProduct;
