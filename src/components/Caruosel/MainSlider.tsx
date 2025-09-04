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
          <div className="relative h-[300px] md:h-[450px] lg:h-[550px] w-full">
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
          <div className="relative h-[300px] md:h-[450px] lg:h-[550px] w-full">
            <Image
              src="/images/ChatGPT Image Sep 4, 2025, 07_40_37 PM.png"
              alt="Slide 2"
              className="rounded-lg"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[300px] md:h-[450px] lg:h-[550px] w-full">
            <Image
              src="/images/2.jpg"
              alt="Slide 3"
              className="rounded-lg"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[300px] md:h-[450px] lg:h-[550px] w-full">
            <Image
              src="/images/3.jpg"
              alt="Slide 4"
              className="rounded-lg"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[300px] md:h-[450px] lg:h-[550px] w-full">
            <Image
              src="/images/4.jpg"
              alt="Slide 5"
              className="rounded-lg"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[300px] md:h-[450px] lg:h-[550px] w-full">
            <Image
              src="/images/5.jpg"
              alt="Slide 6"
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
