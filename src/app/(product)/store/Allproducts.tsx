import React from "react";
import ProductCard from "@/components/product/productCard";
import { Product } from "@/components/product/types/product.types";

interface ProductListProps {
  products: Product[];
  status: string;
  error: string | null;
  onAddToCart: (product: Product) => void;
}
const Allproducts: React.FC<ProductListProps> = ({
  products,
  status,
  error,
  onAddToCart,
}) => {
  return (
    <div>
      <div className="bg-white p-4 min-h-screen">
        <div className="w-[100%] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Allproducts;
