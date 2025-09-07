import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Product } from "../../product/types/product.types";
import Link from "next/link";
import { Scrollbar } from "swiper/modules";
import "swiper/css/scrollbar";

export default interface ProductSliderProps {
  products: Product[];
  status: string;
  error: string | null;
}

export const ProductSlider: React.FC<ProductSliderProps> = ({
  products,
  status,
  error,
}) => {
  if (status === "loading" || status === "idle") {
    return (
      <div className="w-full px-4 bg-white md:px-6 lg:px-8">
        <h2
          style={{ marginLeft: "25px", marginBottom: "20px", display: "block" }}
          className="font-bold"
        >
          Best Sellers in Clothing & Accessories
        </h2>
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
    <div className="w-full p-5 h-[340px] sm:h-[300px] bg-white">
      <h2 className="font-bold  text-[22px]  mb-[20px] block">
        Best Sellers in Clothing & Accessories
      </h2>
      <Swiper
        className="px-4 h-[220px]   producSlider  bg-white w-[100%] md:px-6 lg:px-8"
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={0}
        navigation
        slidesPerView={2}
        loop={false}
        scrollbar={{ draggable: true }}
        slidesPerGroup={2}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 10,
            slidesPerGroup: 3,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 10,
            slidesPerGroup: 3,
          },
          1024: {
            slidesPerView: 8,
            spaceBetween: 15,
            slidesPerGroup: 3,
          },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <Link
              href={`/store/${product.id}`}
              className="relative h-[100%] group gap-5 flex justify-center items-center w-[90% ]cursor-pointer"
            >
              <img
                src={product.image}
                alt={product.title}
                className="rounded-lg h-[100%] w-[90%]   py-5 transition-transform duration-200 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <p className="text-sm font-semibold truncate">
                  {product.title}
                </p>
                <p className="text-xs">${product.price}</p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
