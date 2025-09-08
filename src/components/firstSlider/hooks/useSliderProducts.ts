"use client";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchProducts } from "@/redux/slices/productSlice";
import { RootState, AppDispatch } from "@/redux/store";

export const useSliderProducts = () => {
  const dispatch: AppDispatch = useDispatch();
  const { products, status, error } = useSelector(
    (state: RootState) => state.products
  );

  // Dispatch fetchProducts if status is idle (only on client side)
  useEffect(() => {
    if (typeof window !== "undefined" && status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  // Filter products for slider (you can customize this)
  // Get first 10 products, or all products if less than 10
  const sliderProducts =
    products.length > 0 ? products.slice(0, Math.min(15, products.length)) : [];

  return {
    products: sliderProducts,
    status,
    error,
  };
};
