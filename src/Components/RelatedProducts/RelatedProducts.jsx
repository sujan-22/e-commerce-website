import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./RelatedProducts.css";
import data_product from "../Assets/all_product";
import Item from "../Items/Item";

const RelatedProducts = () => {
  const { productId } = useParams();
  const [currentCategory, setCurrentCategory] = useState("all");

  useEffect(() => {
    const id = parseInt(productId, 10);

    if (id >= 1 && id <= 12) {
      setCurrentCategory("women");
    } else if (id >= 13 && id <= 24) {
      setCurrentCategory("men");
    } else if (id >= 25 && id <= 36) {
      setCurrentCategory("kid");
    } else if (id >= 37 && id <= 49) {
      setCurrentCategory("accessory");
    } else {
      setCurrentCategory("all");
    }
  }, [productId]);

  const relatedProducts = data_product.filter(
    (item) => item.category === currentCategory
  );

  const MAX_RELATED_PRODUCTS = 4;

  return (
    <div className="relatedproducts">
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-item">
        {relatedProducts.slice(0, MAX_RELATED_PRODUCTS).map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
