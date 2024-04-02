import React, { useState, useEffect } from "react";
import axios from "axios";
import Item from "../Components/Items/Item";

const DummyProduct = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  console.log(products);

  return (
    <div className="dummy-product">
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
};

export default DummyProduct;
