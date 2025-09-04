import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { Product } from "../../store.tsx/product/types/product.types";

interface ProductSliderProps {
  products: Product[];
  status: string;
  error: string | null;
}

const ProductSlider: React.FC<ProductSliderProps> = ({
  products,
  status,
  error,
}) => {
  if (status === "loading") {
    return (
      <div className="w-full px-4 md:px-6 lg:px-8">
        <div className="flex space-x-4">
          {[...Array(5)].map((_, idx) => (
            <div key={idx} className="animate-pulse">
              <div className="w-40 h-56 bg-gray-300 rounded-lg"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (status === "failed" || error) {
    return (
      <div className="w-full px-4 md:px-6 lg:px-8 text-center text-red-600">
        Error: {error || "Failed to load products"}
      </div>
    );
  }

  if (!products || products.length === 0) {
    return (
      <div className="w-full px-4 md:px-6 lg:px-8 text-center text-gray-600">
        No products available
      </div>
    );
  }

  return (
    <div className="w-full">
      <h2
        style={{ marginLeft: "25px", marginBottom: "20px", display: "block" }}
        className="font-bold"
      >
        Best Sellers in Clothing & Accessories
      </h2>
      <Swiper
        className="px-4 md:px-6 lg:px-8"
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={2}
        pagination={{ clickable: true }}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 15,
          },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="relative group cursor-pointer">
              <Image
                src={product.image}
                alt={product.title}
                width={162}
                height={225}
                className="rounded-lg object-fill transition-transform duration-200 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <p className="text-sm font-semibold truncate">
                  {product.title}
                </p>
                <p className="text-xs">${product.price}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
