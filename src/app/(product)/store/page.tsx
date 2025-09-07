"use client";

import React from "react";
import { useProducts } from "../../../components/product/hooks/useProducts";
import Allproducts from "./Allproducts";
import { useState } from "react";

interface pricetype {
  min: number;
  max: number;
}
interface priceRang {
  label: string;
  valued: pricetype;
}

const StorePage = () => {
  const { products, status, error, handleAddToCart } = useProducts();
  const x = Math.ceil(Math.max(...products.map((item) => item.price))) / 4;

  const [filters, setFilters] = useState({
    deliveryDay: "",
    brands: "All",
    priceRange: { min: 0, max: 4 * x },
  });

  // Handle brand selection
  const handleBrandChange = (value) => {
    setFilters((prev) => ({
      ...prev,
      brands: value,
    }));
  };

  // Handle price range selection
  const handlePriceRangeChange = (value) => {
    setFilters((prev) => ({
      ...prev,
      priceRange: value,
    }));
  };

  const priceRanges: priceRang[] = [
    { label: "All", valued: { min: 0, max: 4 * x } },
    { label: `0 $ to ${x} $`, valued: { min: 0, max: x } },
    { label: `${x} $ to ${2 * x} $`, valued: { min: x, max: 2 * x } },
    { label: `${2 * x} $ to ${3 * x} $`, valued: { min: 2 * x, max: 3 * x } },
    { label: `${3 * x} $ to ${4 * x} $`, valued: { min: 3 * x, max: 4 * x } },
  ];
  const brands = Array.from(
    new Set(["All", ...products.map((item) => item.category)])
  );

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

  const filteredArray =
    filters.brands === "All"
      ? products.filter(
          (item) =>
            filters.priceRange.min < item.price &&
            item.price < filters.priceRange.max
        )
      : products
          .filter((item) => item.category == filters.brands)
          .filter(
            (item) =>
              filters.priceRange.min < item.price &&
              item.price < filters.priceRange.max
          );

  return (
    <div className=" bg-white grid grid-cols-5">
      <div className=" col-span-1">
        <div className="filter-container p-[20px] bg-white">
          {/* Delivery Day Section */}
          <div className="filter-section mb-[24px]">
            <h3 className=" text[16px] font-bold text-black mb-[12px]">
              Delivery Day
            </h3>
            <div className="radio-group flex flex-col gap-[8px]">
              <label className="radio-item  flex items-center cursor-pointer mr-[8px]">
                <input
                  type="radio"
                  name="delivery"
                  value="2-days"
                  checked={filters.deliveryDay === "2-days"}
                  className="radio-input  mr-[8px] cursor-pointer"
                />
                <span className="radio-label cursor-pointer text-black text-[14px]">
                  Get It in 2 Days
                </span>
              </label>
            </div>
          </div>

          {/* Customer Reviews Section */}
          <div className="filter-section  mb-[24px]">
            <h3 className=" text[16px] font-bold text-black mb-[12px]">
              Customer Reviews
            </h3>
            <div className="radio-group flex flex-col gap-[8px]">
              <label className="radio-item  flex items-center cursor-pointer mr-[8px]">
                <span className="stars text-[var(--yellow)]">★★★★☆</span>
                <span className="radio-label" style={{ marginLeft: "8px" }}>
                  {" "}
                  & up
                </span>
              </label>
            </div>
          </div>

          {/* Brands Section */}
          <div className="filter-section mb-[24px]">
            <h3 className=" text[16px] font-bold text-black mb-[12px]">
              Brands
            </h3>
            <div className="radio-group flex flex-col gap-[8px]">
              {brands.map((brand, id) => (
                <label
                  key={id}
                  className="radio-item  flex items-center cursor-pointer mr-[8px]"
                >
                  <input
                    type="radio"
                    name="brands"
                    value={brand}
                    checked={filters.brands === brand}
                    onChange={() => handleBrandChange(brand)}
                    className="radio-input  mr-[8px] cursor-pointer"
                  />
                  <span className="radio-label cursor-pointer text-black text-[14px]">
                    {brand}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Section */}
          <div className="filter-section mb-[24px]">
            <h3 className=" text[16px] font-bold text-black mb-[12px]">
              Price
            </h3>
            <div className="radio-group flex flex-col gap-[8px]">
              {priceRanges.map((range: any, id) => (
                <label
                  key={id}
                  className="radio-item  flex items-center cursor-pointer mr-[8px]"
                >
                  <input
                    type="radio"
                    name="price"
                    value={range.valued}
                    checked={filters.priceRange.max === range.valued.max}
                    onChange={() => handlePriceRangeChange(range.valued)}
                    className="radio-input  mr-[8px] cursor-pointer"
                  />
                  <span className="radio-label cursor-pointer text-black text-[14px]">
                    {range.label}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className=" col-span-4">
        <Allproducts
          products={filteredArray}
          status={status}
          error={error}
          onAddToCart={handleAddToCart}
        />
      </div>
    </div>
  );
};

export default StorePage;
