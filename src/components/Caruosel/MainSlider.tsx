"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

export default function Slider() {
  return (
    <div
      className="w-full "
      style={{ "--swiper-navigation-color": "#131921" } as React.CSSProperties}
    >
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className="relative h-[550px] w-full">
            <Image
              src="/images/mainsliderimg.png"
              alt="Slide 1"
              className="rounded-lg"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[550px]  w-full">
            <Image
              src="/images/mainsliderimg.png"
              alt="Slide 2"
              className="rounded-lg"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[550px]  w-full">
            <Image
              src="/images/mainsliderimg.png"
              alt="Slide 3"
              className="rounded-lg"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
