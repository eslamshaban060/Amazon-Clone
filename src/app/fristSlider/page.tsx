"use client";

import React from "react";
import ProductSlider from "./components/ProductSlider";
import { useSliderProducts } from "./hooks/useSliderProducts";

export default function FirstSliderPage() {
  const { products, status, error } = useSliderProducts();

  return (
    <>
      <ProductSlider products={products} status={status} error={error} />
    </>
  );
}
