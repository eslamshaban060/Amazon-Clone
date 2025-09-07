import React from "react";
import Link from "next/link";
import eg from "../../../public/footer/eg.png";
import Image from "next/image";
import Cart from "./cart";
import { FaChevronDown } from "react-icons/fa";

const RightSection = () => {
  return (
    <div className="hidden lg:flex items-center space-x-6">
      {/* Language Selector */}
      <div className="flex items-center space-x-1 cursor-pointer hover:underline">
        <Image src={eg} alt="egyptFlag" />
        <span className="text-sm">Ar</span>
        <FaChevronDown className="text-xs" suppressHydrationWarning />
      </div>

      {/* Account */}
      <Link href="/login" className="cursor-pointer hover:underline">
        <div className="text-xs mt-[-1px]">Hello, sign in</div>
        <div className="text-sm font-semibold">Account & Lists</div>
      </Link>

      {/* Returns & Orders */}
      <Link href="/checkout" className="cursor-pointer hover:underline">
        <div className="text-xs">Returns</div>
        <div className="text-sm font-semibold">& Orders</div>
      </Link>

      <Cart />
    </div>
  );
};

export default RightSection;
