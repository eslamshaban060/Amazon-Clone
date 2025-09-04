"use client";
import React, { useState, useEffect } from "react";
import ProducData from "@/components/productDetails/producData";

export default interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  description: string;
}
interface ProductID {
  id: number;
}

export const ApiData: React.FC<ProductID> = ({ id }) => {
  const [productDetails, setproductDetails] = useState<Product>({});

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        if (!response.ok) {
          return { message: "Failed to git data of product " };
        } else {
          return response.json();
        }
      })
      .then((data: Product) => setproductDetails(data));
  });

  return (
    <div>
      <ProducData productDetails={productDetails} />
    </div>
  );
};
