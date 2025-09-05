"use client";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "@/redux/slices/productSlice";
import { RootState, AppDispatch } from "@/redux/store";
import { Product } from "../../../app/store.tsx/product/types/product.types";

export const useSecondSliderProducts = () => {
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

  // Filter products for second slider (you can customize this)
  // If we have more than 10 products, get 10-20, otherwise get all products
  let secondSliderProducts: Product[] = [];
  if (products.length > 10) {
    secondSliderProducts = products.slice(10, Math.min(20, products.length));
  } else if (products.length > 0) {
    // If we have 10 or fewer products, just use all of them
    secondSliderProducts = products;
  }

  return {
    products: secondSliderProducts,
    status,
    error,
  };
};
