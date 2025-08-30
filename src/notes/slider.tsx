"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

export default function Slider() {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <img src="/images/slide1.jpg" alt="Slide 1" className="rounded-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/slide2.jpg" alt="Slide 2" className="rounded-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/slide3.jpg" alt="Slide 3" className="rounded-lg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
