"use client";

import React from "react";
import ProductCard from "./components/ProductCard";
import { useProducts } from "./hooks/useProducts";

const ProductPage = () => {
  const { products, status, error, handleAddToCart } = useProducts();

  if (status === "loading") {
    return <div>Loading products...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="bg-gray-100 p-4 min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
