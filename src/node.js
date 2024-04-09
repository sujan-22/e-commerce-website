import React from "react";

function AddFurnitureProducts() {
  const handleAddProducts = async () => {
    try {
      // Fetch products from the external API
      const response = await fetch("https://api.escuelajs.co/api/v1/products");
      const products = await response.json();

      // Filter products with category 'potato'
      const potatoProducts = products.filter(
        (product) => product.category.name === "electronics"
      );

      // Map each potato product to the format expected by the backend
      const furnitureProducts = potatoProducts.map((product) => ({
        name: product.title,
        images: product.images,
        category: "electronics",
        description: product.description,
        price: product.price,
        onSale: false,
        rating: 4,
      }));

      // Add furniture products to the database by making a POST request to the backend endpoint
      const addProductRequests = furnitureProducts.map((product) =>
        fetch("http://localhost:4000/addproduct", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(product),
        })
      );

      // Wait for all the POST requests to complete
      await Promise.all(addProductRequests);

      console.log("Furniture products added successfully.");
    } catch (error) {
      console.error("Error fetching or adding furniture products:", error);
    }
  };

  return (
    <div>
      <button onClick={handleAddProducts}>Add Furniture Products</button>
    </div>
  );
}

export default AddFurnitureProducts;
