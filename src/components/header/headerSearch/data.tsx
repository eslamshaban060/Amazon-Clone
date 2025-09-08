"use client";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchProducts } from "@/redux/slices/productSlice";
import { RootState, AppDispatch } from "@/redux/store";

export const SearchData = () => {
  const dispatch: AppDispatch = useDispatch();
  const { products, status, error } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    if (typeof window !== "undefined" && status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  const sliderProducts = products.length > 0 ? products : [];

  return {
    products: sliderProducts,
    status,
    error,
  };
};
