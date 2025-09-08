"use client";

import React, { useState } from "react";
import { useProducts } from "../../../components/product/hooks/useProducts";
import Allproducts from "./Allproducts";
import { useEffect } from "react";

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

  const maxPrice = Math.max(...products.map((item) => item.price), 0);
  const step = Math.ceil(maxPrice / 4);

  // Handle brand selection
  const handleBrandChange = (value: string) => {
    setFilters((prev) => ({
      ...prev,
      brands: value,
    }));
  };

  // Handle price range selection
  const handlePriceRangeChange = (value: pricetype) => {
    setFilters((prev) => ({
      ...prev,
      priceRange: value,
    }));
  };

  const priceRanges: priceRang[] = [
    { label: "All", valued: { min: 0, max: maxPrice } },
    { label: `0 $ to ${step} $`, valued: { min: 0, max: step } },
    {
      label: `${step} $ to ${2 * step} $`,
      valued: { min: step, max: 2 * step },
    },
    {
      label: `${2 * step} $ to ${3 * step} $`,
      valued: { min: 2 * step, max: 3 * step },
    },
    {
      label: `${3 * step} $ to ${4 * step} $`,
      valued: { min: 3 * step, max: 4 * step },
    },
  ];

  const [filters, setFilters] = useState({
    deliveryDay: "",
    brands: "All",
    priceRange: priceRanges[0].valued,
  });

  useEffect(() => {
    if (products.length > 0) {
      const newMaxPrice = Math.max(...products.map((item) => item.price), 0);
      setFilters((prev) => ({
        ...prev,
        priceRange: { min: 0, max: newMaxPrice },
      }));
    }
  }, [products]);

  // Brands
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
            filters.priceRange.min <= item.price &&
            item.price <= filters.priceRange.max
        )
      : products
          .filter((item) => item.category === filters.brands)
          ?.filter(
            (item) =>
              filters.priceRange.min <= item.price &&
              item.price <= filters.priceRange.max
          );

  return (
    <div className="bg-white grid grid-cols-5">
      <div className="col-span-1">
        <div className="filter-container p-[20px] bg-white">
          {/* Delivery Day Section */}
          <div className="filter-section mb-[24px]">
            <h3 className="text[16px] font-bold text-black mb-[12px]">
              Delivery Day
            </h3>
            <div className="radio-group flex flex-col gap-[8px]">
              <label className="radio-item flex items-center cursor-pointer mr-[8px]">
                <input
                  type="radio"
                  name="delivery"
                  value="2-days"
                  checked={filters.deliveryDay === "2-days"}
                  className="radio-input mr-[8px] cursor-pointer"
                />
                <span className="radio-label cursor-pointer text-black text-[14px]">
                  Get It in 2 Days
                </span>
              </label>
            </div>
          </div>

          {/* Customer Reviews Section */}
          <div className="filter-section mb-[24px]">
            <h3 className="text[16px] font-bold text-black mb-[12px]">
              Customer Reviews
            </h3>
            <div className="radio-group flex flex-col gap-[8px]">
              <label className="radio-item flex items-center cursor-pointer mr-[8px]">
                <span className="stars text-[var(--yellow)]">★★★★☆</span>
                <span className="radio-label" style={{ marginLeft: "8px" }}>
                  & up
                </span>
              </label>
            </div>
          </div>

          {/* Brands Section */}
          <div className="filter-section mb-[24px]">
            <h3 className="text[16px] font-bold text-black mb-[12px]">
              Brands
            </h3>
            <div className="radio-group flex flex-col gap-[8px]">
              {brands.map((brand, id) => (
                <label
                  key={id}
                  className="radio-item flex items-center cursor-pointer mr-[8px]"
                >
                  <input
                    type="radio"
                    name="brands"
                    value={brand}
                    checked={filters.brands === brand}
                    onChange={() => handleBrandChange(brand)}
                    className="radio-input mr-[8px] cursor-pointer"
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
            <h3 className="text[16px] font-bold text-black mb-[12px]">Price</h3>
            <div className="radio-group flex flex-col gap-[8px]">
              {priceRanges.map((range, id) => (
                <label
                  key={id}
                  className="radio-item flex items-center cursor-pointer mr-[8px]"
                >
                  <input
                    type="radio"
                    name="price"
                    value={range.label}
                    checked={
                      filters.priceRange.min === range.valued.min &&
                      filters.priceRange.max === range.valued.max
                    }
                    onChange={() => handlePriceRangeChange(range.valued)}
                    className="radio-input mr-[8px] cursor-pointer"
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

      {/* Products Section */}
      <div className="col-span-4">
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
