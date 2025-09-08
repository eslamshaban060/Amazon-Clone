"use client";
import React from "react";
import SearchResultCard from "./SearchResultCard";
import ProductSliderProps from "@/components/firstSlider/components/ProductSlider";
import { SearchX } from "lucide-react";

const SearchResultList: React.FC<ProductSliderProps> = ({
  products,
  status,
  error,
}) => {
  if (status === "loading" || status === "idle") {
    return (
      <div className="w-full p-5 px-4 bg-white md:px-6 lg:px-8">
        <div className="flex w-[100%] space-x-4">
          {[...Array(5)].map((_, idx) => (
            <div key={idx} className="animate-pulse">
              <div className="w-[20%] h-56 bg-gray-300 rounded-lg"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (status === "failed" || error) {
    return (
      <div className="w-full px-4 md:px-6 lg:px-8 text-center text-red-600">
        Error: {error || "Failed to load products"}
      </div>
    );
  }

  if (!products || products.length === 0) {
    return (
      <div className="absolute py-3 w-[100%]  text-black text-center  border-[1px] border-[var(--gray-light)] bg-[var(--white)] px-2 mt-2 max-h-96 overflow-y-auto rounded-md shadow-lg z-50">
        <div className=" mx-auto w-fit  text-amber-500">
          <SearchX size={150} />
        </div>
        <h2 className=" text-2xl py-3">No products available</h2>
      </div>
    );
  }

  return (
    <div className="absolute py-3 w-[100%]  border-[1px] border-[var(--gray-light)] bg-[var(--white)] px-2 mt-2 max-h-96 overflow-y-auto rounded-md shadow-lg z-50">
      {products.map((product) => (
        <div key={product.id}>
          <SearchResultCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default SearchResultList;
