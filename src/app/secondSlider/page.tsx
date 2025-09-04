"use client";

import React from "react";
import SecondProductSlider from "./components/SecondProductSlider";
import { useSecondSliderProducts } from "./hooks/useSecondSliderProducts";

export default function SecondSliderPage() {
  const { products, status, error } = useSecondSliderProducts();

  return (
    <>
      <SecondProductSlider products={products} status={status} error={error} />
    </>
  );
}
