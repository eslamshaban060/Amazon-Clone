import React from "react";
import { Product } from "@/Data/ApiData/product";
import Image from "next/image";
import Link from "next/link";

interface SearchResultCardProps {
  product: Product;
}

const SearchResultCard: React.FC<SearchResultCardProps> = ({ product }) => {
  return (
    <Link
      href={`/store/${product.id}`}
      className="flex items-center gap-4 p-3  border-[var(--gray-light)] bg-[var(--white)] rounded-md border mb-2 cursor-pointer hover:shadow-md transition-all"
    >
       {/* صورة المنتج */}
       <div className="w-16 h-16 flex-shrink-0 relative">
         <Image
           src={product.image}
           alt={product.title}
           fill
           className="object-contain"
           sizes="64px"
         />
       </div>

      {/* تفاصيل المنتج */}
      <div className="flex flex-col flex-grow">
        <h3
          className="text-sm font-medium line-clamp-2"
          style={{ color: "var(--black)" }}
        >
          {product.title}
        </h3>
        <span
          className="text-base font-semibold"
          style={{ color: "var(--red)" }}
        >
          ${product.price}
        </span>
      </div>

      {/* زرار إضافة للعربة */}
      <button
        className="px-3 py-1 rounded-md text-sm font-medium"
        style={{
          backgroundColor: "var(--yellow)",
          color: "var(--black)",
        }}
      >
        open
      </button>
    </Link>
  );
};

export default SearchResultCard;
