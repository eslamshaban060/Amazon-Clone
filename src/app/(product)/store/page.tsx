"use client";

import React from "react";
import ProductCard from "../../store.tsx/product/components/ProductCard";
import { useProducts } from "../../store.tsx/product/hooks/useProducts";

const StorePage = () => {
  const { products, status, error, handleAddToCart } = useProducts();

  if (status === "loading") {
    return (
      <div className="bg-gray-100 p-4 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">Loading products...</p>
        </div>
      </div>
    );
  }

  if (status === "failed") {
    return (
      <div className="bg-gray-100 p-4 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg text-red-600">Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 p-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
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
    </div>
  );
};

export default StorePage;
