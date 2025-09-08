"use client";
import React from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel } from "swiper/modules";

const HeaderLink = () => {
  const swiperSettings = {
    modules: [Navigation, Mousewheel],
    spaceBetween: 0,
    slidesPerView: "auto" as const,
    freeMode: true,
    mousewheel: {
      forceToAxis: true,
      sensitivity: 1,
      releaseOnEdges: true,
    },
    breakpoints: {
      480: {
        slidesPerView: "auto" as const,
        spaceBetween: 0,
      },
      600: {
        slidesPerView: "auto" as const,
        spaceBetween: 0,
      },
      1024: {
        slidesPerView: "auto" as const,
        spaceBetween: 0,
      },
    },
  };
  return (
    <Swiper {...swiperSettings} className="w-full">
      <SwiperSlide className="!w-auto">
        <Link href="/store">
          <span className="text-sm cursor-pointer hover:underline whitespace-nowrap px-3">
            Amazon mini TV
          </span>
        </Link>
      </SwiperSlide>
      <SwiperSlide className="!w-auto">
        <Link href="/store">
          <span className="text-sm cursor-pointer hover:underline whitespace-nowrap px-3">
            Sell
          </span>
        </Link>
      </SwiperSlide>
      <SwiperSlide className="!w-auto">
        <span className="text-sm cursor-pointer hover:underline whitespace-nowrap px-3">
          <Link href="/store">Best Sellers</Link>{" "}
        </span>
      </SwiperSlide>
      <SwiperSlide className="!w-auto">
        <Link href="/store">
          <span className="text-sm cursor-pointer hover:underline whitespace-nowrap px-3">
            Today&apos;s Deals
          </span>
        </Link>
      </SwiperSlide>
      <SwiperSlide className="!w-auto">
        <Link href="/store">
          <span className="text-sm cursor-pointer hover:underline whitespace-nowrap px-3">
            Mobiles
          </span>
        </Link>
      </SwiperSlide>
      <SwiperSlide className="!w-auto">
        <Link href="/store">
          <span className="text-sm cursor-pointer hover:underline whitespace-nowrap px-3">
            Customer Service
          </span>
        </Link>
      </SwiperSlide>

      {/* Prime with dropdown */}
      <SwiperSlide className="!w-auto">
        <Link href="/store">
          <div className="flex items-center space-x-1 cursor-pointer hover:underline px-3">
            <span className="text-sm whitespace-nowrap">Prime</span>
            <ChevronDown
              className="text-white text-xs"
              suppressHydrationWarning
            />
          </div>
        </Link>
      </SwiperSlide>

      <SwiperSlide className="!w-auto">
        <Link href="/store">
          <span className="text-sm cursor-pointer hover:underline whitespace-nowrap px-3">
            Electronics
          </span>
        </Link>
      </SwiperSlide>
      <SwiperSlide className="!w-auto">
        <Link href="/store">
          <span className="text-sm cursor-pointer hover:underline whitespace-nowrap px-3">
            Fashion
          </span>
        </Link>
      </SwiperSlide>
      <SwiperSlide className="!w-auto">
        <Link href="/store">
          <span className="text-sm cursor-pointer hover:underline whitespace-nowrap px-3">
            New Releases
          </span>
        </Link>
      </SwiperSlide>
      <SwiperSlide className="!w-auto">
        <Link href="/store">
          <span className="text-sm cursor-pointer hover:underline whitespace-nowrap px-3">
            Home & Kitchen
          </span>
        </Link>
      </SwiperSlide>
      <SwiperSlide className="!w-auto">
        <Link href="/store">
          <span className="text-sm cursor-pointer hover:underline whitespace-nowrap px-3">
            Amazon Pay
          </span>
        </Link>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeaderLink;
