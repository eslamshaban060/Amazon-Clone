import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "@/redux/slices/productSlice";
import { RootState, AppDispatch } from "@/redux/store";
import { Product } from "../types/product.types";

export const useProducts = () => {
  const dispatch: AppDispatch = useDispatch();
  const { products, status, error } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  const handleAddToCart = (product: Product) => {
    // TODO: Implement add to cart functionality
    console.log("Adding to cart:", product);
  };

  return {
    products,
    status,
    error,
    handleAddToCart,
  };
};
