import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrums from "../Components/Breadcrums/Breadcrums";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts";

const Product = () => {
  const { all_products } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_products.find((e) => e.id === Number(productId));

  console.log(productId);
  console.log(product);

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
