import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";

const Product = () => {
  const { all_products } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_products.find((e) => e.id === Number(productId));

  // Check if product is undefined before rendering ProductDisplay
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ProductDisplay product={product} />
    </div>
  );
};

export default Product;
