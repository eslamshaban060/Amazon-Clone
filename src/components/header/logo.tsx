import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";
import HumborgerMenue from "./humborgerMenue";
import { FaRegUser } from "react-icons/fa6";

import Cart from "./cart";

const Logo = () => {
  return (
    <div>
      <div className="flex items-center  sm:space-x-6 w-[100vw] px-3 lg:w-auto justify-between">
        <div className="flex items-center w-full justify-between">
          <div className=" flex mt-2 gap-1">
            <div className=" flex sm:hidden">
              <HumborgerMenue />
            </div>

            {/* Amazon Logo */}

            <Link className="mt-2 flex justify-center items-center" href="/">
              <Image
                src="/Amazon-Logo-White-PNG-Image.png"
                alt="Amazon Logo"
                width={120}
                height={40}
                className="w-full items-center h-10 sm:h-10"
                suppressHydrationWarning
              />
            </Link>
          </div>
        </div>
        <Link href="/login" className=" lg:hidden flex gap-1 px-2 text-2xl">
          <FaRegUser />
        </Link>
        {/* Cart - Show on mobile beside logo */}
        <div className="lg:hidden flex  space-x-1 cursor-pointer hover:underline">
          <Cart />
          <span className="hidden  sm:text-sm font-semibold">Cart</span>
        </div>

        {/* Location - Hidden on mobile */}
        <div className="hidden lg:flex items-center space-x-2 text-sm">
          <FaMapMarkerAlt
            className="text-white text-lg"
            suppressHydrationWarning
          />
          <div className="w-[150px] ">
            <p className="text-xs font-lighter text-[#AAB5B6]">
              Delivering to Surat 394210
            </p>
            <p className="text-white cursor-pointer hover:underline text-sm">
              Update location
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logo;
