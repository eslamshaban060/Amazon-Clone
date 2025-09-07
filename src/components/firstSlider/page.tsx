"use client";

import React from "react";
import { ProductSlider } from "./components/ProductSlider";
import { useSliderProducts } from "./hooks/useSliderProducts";

const FirstSlider = () => {
  const { products, status, error } = useSliderProducts();

  return (
    <div>
      <ProductSlider products={products} status={status} error={error} />
    </div>
  );
};

export default FirstSlider;
