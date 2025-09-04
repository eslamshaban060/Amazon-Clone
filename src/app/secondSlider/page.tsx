"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

export default function page() {
  return (
    <>
      <div className="container w-full mx-auto py-4 px-4 md:px-6 lg:px-8 bg-white ">
        <h2
          style={{ marginLeft: "25px", marginBottom: "20px", display: "block" }}
          className="font-bold "
        >
          Min. 50% off | Unique kitchen finds | Amazon Brands & more
        </h2>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={2}
          // navigation
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
          {[
            { src: "/slider2/1.png", alt: "slide 1" },
            { src: "/slider2/2.png", alt: "slide 2" },
            { src: "/slider2/3.png", alt: "slide 3" },
            { src: "/slider2/4.png", alt: "slide 4" },
            { src: "/slider2/5.png", alt: "slide 5" },
            { src: "/slider2/6.png", alt: "slide 6" },
          ].map((img, idx) => (
            <SwiperSlide key={idx}>
              <Image
                src={img.src}
                alt={img.alt}
                width={162}
                height={225}
                className="rounded-lg object-contain w-full h-[250px] px-1.5"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
