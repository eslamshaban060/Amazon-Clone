"use client";

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "@/redux/slices/productSlice";
import { RootState, AppDispatch } from "@/redux/store";
import Image from "next/image";

const ProductPage = () => {
  const dispatch: AppDispatch = useDispatch();
  const { products, status, error } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

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
          <div
            key={product.id}
            className="bg-white border border-gray-200 rounded-lg shadow-md p-4 flex flex-col justify-between transform transition-transform duration-200 hover:scale-105 min-h-[400px]"
          >
            <div className="relative w-full h-48 mb-4">
              <Image
                src={product.image}
                alt={product.title}
                layout="fill"
                objectFit="contain"
                className="rounded-md"
              />
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2 truncate">
              {product.title}
            </h2>
            <p className="text-lg font-bold text-gray-700 mb-2">
              ${product.price}
            </p>
            <p className="text-sm text-gray-600 mb-4 overflow-hidden line-clamp-3">
              {product.description.substring(0, 100)}...
            </p>
            <button className="mt-4 w-1/2 self-start bg-yellow-400 text-gray-800 py-1 text-sm rounded-full font-medium hover:bg-yellow-500 transition-colors duration-200">
              Add to the card
            </button>
            <div className="text-xs text-gray-500 mt-auto">
              <p>Category: {product.category}</p>
              <p>
                Rating: {product.rating.rate} ({product.rating.count})
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
