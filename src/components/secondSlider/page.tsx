"use client";

import React from "react";
import SecondProductSlider from "./components/SecondProductSlider";
import { useSecondSliderProducts } from "./hooks/useSecondSliderProducts";

const SecondSlider = () => {
  const { products, status, error } = useSecondSliderProducts();

  return (
    <SecondProductSlider products={products} status={status} error={error} />
  );
};

export default SecondSlider;
