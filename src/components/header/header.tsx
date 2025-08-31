"use client";
import React from "react";
import { FaSearch, FaMapMarkerAlt, FaChevronDown } from "react-icons/fa";
import { Menu, ChevronDown } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const Header = () => {
  const swiperSettings = {
    modules: [Navigation, Mousewheel],
    spaceBetween: 0,
    slidesPerView: 'auto' as const,
    freeMode: true,
    mousewheel: {
      forceToAxis: true,
      sensitivity: 1,
      releaseOnEdges: true,
    },
    breakpoints: {
      480: {
        slidesPerView: 'auto' as const,
        spaceBetween: 0,
      },
      600: {
        slidesPerView: 'auto' as const,
        spaceBetween: 0,
      },
      1024: {
        slidesPerView: 'auto' as const,
        spaceBetween: 0,
      },
    },
  };


  return (
    <div className="w-full">
      {/* Main Header */}
      <div className="bg-[#131921] text-white px-2 sm:px-4 py-2 sm:py-3">
        <div className="w-full max-w-8xl mx-auto  flex flex-col lg:flex-row items-center justify-between space-y-3 lg:space-y-0">
          {/* Left Section - Logo, Cart (mobile), and Location */}
          <div className="flex items-center  space-x-3 sm:space-x-6 w-full lg:w-auto justify-between lg:justify-start">
            <div className="flex items-center space-x-3">
              {/* Amazon Logo */}
              <div className="flex-shrink-0 pt-4 ps-4 ">
                <Image 
                  src="/Amazon-Logo-White-PNG-Image.png" 
                  alt="Amazon Logo" 
                  width={120} 
                  height={40}
                  className="w-full h-10 sm:h-10"
                />
              </div>
              
           
            </div> 
              {/* Cart - Show on mobile beside logo */}
              <div className="lg:hidden flex  space-x-1 cursor-pointer hover:underline">
                  <Image 
                  src="/Vector.png" 
                  alt="cart" 
                  width={120} 
                  height={40}
                  className="w-full h-8 sm:h-10"
                />  <span className="hidden  sm:text-sm font-semibold">Cart</span>
              </div>
            
            {/* Location - Hidden on mobile */}
            <div className="hidden sm:flex items-center space-x-2 text-sm">
              <FaMapMarkerAlt className="text-white text-lg" />
              <div>
                <div className="text-xs font-lighter text-[#AAB5B6]">Delivering to Surat 394210</div>
                <div className="text-white cursor-pointer hover:underline text-sm">Update location</div>
              </div>
            </div>
          </div>

          {/* Center Section - Search Bar */}
          <div className="flex-1 max-w-md w-full lg:mx-8 px-2 lg:px-0">
            <div className="flex">
              <select className="w-1/4 sm:w-1/6 bg-gray-200 text-gray-700 px-2 sm:px-3 py-2 rounded-l-md border-r border-gray-300 text-xs sm:text-sm cursor-pointer hover:bg-gray-200 transition-colors">
                <option>All</option>
                <option>Electronics</option>
                <option>Fashion</option>
                <option>Books</option>
                <option>Home & Kitchen</option>
                <option>Sports</option>
              </select>
              <input
                type="text"
                placeholder="Search Amazon.in"
                className="flex-1 px-2 sm:px-4 bg-white py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#ff9900] focus:ring-opacity-50 text-sm"
              />
              <button className="bg-[#FBCC02] hover:bg-[#febd69] px-3 sm:px-6 py-2 rounded-r-md transition-colors duration-200">
                <FaSearch className="text-gray-900 text-base sm:text-lg" />
              </button>
            </div>
          </div>

          {/* Right Section - User Actions (Desktop only) */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Language Selector */}
            <div className="flex items-center space-x-1 cursor-pointer hover:underline">
              <div className="w-6 h-4 bg-gradient-to-r from-orange-500 via-white to-green-600 rounded-sm flex items-center justify-center relative">
                {/* Indian Flag with Ashoka Chakra */}
                <div className="w-full h-full flex flex-col">
                  <div className="h-1/3 bg-orange-500"></div>
                  <div className="h-1/3 bg-white flex items-center justify-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full border border-blue-800"></div>
                  </div>
                  <div className="h-1/3 bg-green-600"></div>
                </div>
              </div>
              <span className="text-sm">EN</span>
              <FaChevronDown className="text-xs" />
            </div>

            {/* Account */}
            <div className="cursor-pointer hover:underline">
              <div className="text-xs">Hello, sign in</div>
              <div className="text-sm font-semibold">Account & Lists</div>
            </div>

            {/* Returns & Orders */}
            <div className="cursor-pointer hover:underline">
              <div className="text-xs">Returns</div>
              <div className="text-sm font-semibold">& Orders</div>
            </div>

            {/* Cart - Desktop version */}
            <div className="flex items-center space-x-1 cursor-pointer hover:underline">
                <Image 
                  src="/Vector.png" 
                  alt="cart" 
                  width={120} 
                  height={40}
                  className="w-full h-8 sm:h-8"
                />
              <span className="text-sm font-semibold">Cart</span>
            </div>
          </div>
        </div>
      </div>

      {/* Second Navbar */}
      <div className="bg-[#232f3e] text-white px-2 sm:px-4 py-2 shadow-md">
        <div className="w-full max-w-8xl mx-auto flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-6">
          {/* Hamburger Menu */}
          <div className="hidden sm:flex items-center space-x-2 cursor-pointer hover:bg-[#37475a] px-2 py-1 rounded">
            <Menu className="text-white text-lg" />
            <span className="text-sm">All</span>
          </div>

          {/* Navigation Links Swiper */}
          <div className="flex-1 w-full overflow-hidden relative">
            <Swiper {...swiperSettings} className="w-full">
              <SwiperSlide className="!w-auto">
                <span className="text-sm cursor-pointer hover:underline whitespace-nowrap px-3">Amazon mini TV</span>
              </SwiperSlide>
              <SwiperSlide className="!w-auto">
                <span className="text-sm cursor-pointer hover:underline whitespace-nowrap px-3">Sell</span>
              </SwiperSlide>
              <SwiperSlide className="!w-auto">
                <span className="text-sm cursor-pointer hover:underline whitespace-nowrap px-3">Best Sellers</span>
              </SwiperSlide>
              <SwiperSlide className="!w-auto">
                <span className="text-sm cursor-pointer hover:underline whitespace-nowrap px-3">Today's Deals</span>
              </SwiperSlide>
              <SwiperSlide className="!w-auto">
                <span className="text-sm cursor-pointer hover:underline whitespace-nowrap px-3">Mobiles</span>
              </SwiperSlide>
              <SwiperSlide className="!w-auto">
                <span className="text-sm cursor-pointer hover:underline whitespace-nowrap px-3">Customer Service</span>
              </SwiperSlide>
              
              {/* Prime with dropdown */}
              <SwiperSlide className="!w-auto">
                <div className="flex items-center space-x-1 cursor-pointer hover:underline px-3">
                  <span className="text-sm whitespace-nowrap">Prime</span>
                  <ChevronDown className="text-white text-xs" />
                </div>
              </SwiperSlide>
              
              <SwiperSlide className="!w-auto">
                <span className="text-sm cursor-pointer hover:underline whitespace-nowrap px-3">Electronics</span>
              </SwiperSlide>
              <SwiperSlide className="!w-auto">
                <span className="text-sm cursor-pointer hover:underline whitespace-nowrap px-3">Fashion</span>
              </SwiperSlide>
              <SwiperSlide className="!w-auto">
                <span className="text-sm cursor-pointer hover:underline whitespace-nowrap px-3">New Releases</span>
              </SwiperSlide>
              <SwiperSlide className="!w-auto">
                <span className="text-sm cursor-pointer hover:underline whitespace-nowrap px-3">Home & Kitchen</span>
              </SwiperSlide>
              <SwiperSlide className="!w-auto">
                <span className="text-sm cursor-pointer hover:underline whitespace-nowrap px-3">Amazon Pay</span>
              </SwiperSlide>
            </Swiper>
            

          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
