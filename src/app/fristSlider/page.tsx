"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

export default function page() {
  return (
    <>
      <div className=" container w-[100%] mx-auto py-4 px-4 md:px-6 lg:px-8 bg-white mb-0.5">
        <h2
          style={{ marginLeft: "25px", marginBottom: "20px", display: "block" }}
          className="font-bold "
        >
          Best Sellers in Clothing & Accessories
        </h2>
        <Swiper
          className="px-4 md:px-6 lg:px-8"
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
            { src: "/slider/1.png", alt: "slide 1" },
            { src: "/slider/2.png", alt: "slide 2" },
            { src: "/slider/3.png", alt: "slide 3" },
            { src: "/slider/4.png", alt: "slide 4" },
            { src: "/slider/5.png", alt: "slide 5" },
            { src: "/slider/6.png", alt: "slide 6" },
            { src: "/slider/7.png", alt: "slide 7" },
            { src: "/slider/8.png", alt: "slide 8" },
            { src: "/slider/9.png", alt: "slide 9" },
            { src: "/slider/10.png", alt: "slide 10" },
            { src: "/slider/11.png", alt: "slide 11" },
            { src: "/slider/12.png", alt: "slide 12" },
            { src: "/slider/13.png", alt: "slide 13" },
            { src: "/slider/14.png", alt: "slide 14" },
            { src: "/slider/15.png", alt: "slide 15" },
            { src: "/slider/16.png", alt: "slide 16" },
            { src: "/slider/17.png", alt: "slide 17" },
            { src: "/slider/18.png", alt: "slide 18" },
            { src: "/slider/19.png", alt: "slide 19" },
            { src: "/slider/20.png", alt: "slide 20" },
          ].map((img, idx) => (
            <SwiperSlide key={idx}>
              <Image
                src={img.src}
                alt={img.alt}
                width={162}
                height={225}
                className="rounded-lg object-fill w-full h-[300px] px-1.5"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
