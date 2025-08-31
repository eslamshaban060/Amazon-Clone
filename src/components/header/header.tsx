import React from "react";
import { FaSearch, FaMapMarkerAlt, FaShoppingCart, FaChevronDown } from "react-icons/fa";
import { Menu, ChevronDown } from "lucide-react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="w-full ">
      {/* Main Header */}
      <div className="bg-[#131921] text-white px-2 sm:px-4 py-2 sm:py-3">
        <div className="w-full max-w-8xl mx-auto flex flex-col lg:flex-row items-center justify-between space-y-3 lg:space-y-0">
          {/* Left Section - Logo and Location */}
          <div className="flex items-center space-x-3 sm:space-x-6 w-full lg:w-auto justify-center lg:justify-start">
            {/* Amazon Logo */}
            <div className="flex-shrink-0">
              <Image 
                src="/Amazon-Logo-White-PNG-Image.png" 
                alt="Amazon Logo" 
                width={120} 
                height={40}
                className="h-8 sm:h-10"
              />
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

          {/* Right Section - User Actions */}
          <div className="flex items-center space-x-3 sm:space-x-6 w-full lg:w-auto justify-center lg:justify-end">
            {/* Language Selector - Hidden on mobile */}
            <div className="hidden sm:flex items-center space-x-1 cursor-pointer hover:underline">
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

            {/* Account - Hidden on mobile */}
            <div className="hidden lg:block cursor-pointer hover:underline">
              <div className="text-xs">Hello, sign in</div>
              <div className="text-sm font-semibold">Account & Lists</div>
            </div>

            {/* Returns & Orders - Hidden on mobile */}
            <div className="hidden lg:block cursor-pointer hover:underline">
              <div className="text-xs">Returns</div>
              <div className="text-sm font-semibold">& Orders</div>
            </div>

            {/* Cart */}
            <div className="flex items-center space-x-1 cursor-pointer hover:underline">
              <FaShoppingCart className="text-xl sm:text-2xl" />
              <span className="text-sm font-semibold">Cart</span>
            </div>
          </div>
        </div>
      </div>

      {/* Second Navbar */}
      <div className="bg-[#232f3e] text-white px-2 sm:px-4 py-2 shadow-md">
        <div className="w-full max-w-8xl mx-auto flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-6">
          {/* Hamburger Menu */}
          <div className="flex items-center space-x-2 cursor-pointer hover:bg-[#37475a] px-2 py-1 rounded">
            <Menu className="text-white text-lg" />
            <span className="text-sm">All</span>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-xs sm:text-sm">
            <span className="cursor-pointer hover:underline">Amazon mini TV</span>
            <span className="cursor-pointer hover:underline">Sell</span>
            <span className="cursor-pointer hover:underline">Best Sellers</span>
            <span className="cursor-pointer hover:underline">Today's Deals</span>
            <span className="cursor-pointer hover:underline">Mobiles</span>
            <span className="cursor-pointer hover:underline">Customer Service</span>
            
            {/* Prime with dropdown */}
            <div className="flex items-center space-x-1 cursor-pointer hover:underline">
              <span>Prime</span>
              <ChevronDown className="text-white text-xs" />
            </div>
            
            <span className="cursor-pointer hover:underline">Electronics</span>
            <span className="cursor-pointer hover:underline">Fashion</span>
            <span className="cursor-pointer hover:underline">New Releases</span>
            <span className="cursor-pointer hover:underline">Home & Kitchen</span>
            <span className="cursor-pointer hover:underline">Amazon Pay</span>
          </div>
        </div>
      </div>
  
    </div>
  );
};

export default Header;
