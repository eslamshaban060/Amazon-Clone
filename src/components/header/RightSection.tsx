"use client";

import React from "react";
import Link from "next/link";
import eg from "../../../public/footer/eg.png";
import Image from "next/image";
import Cart from "./cart";
import { FaChevronDown } from "react-icons/fa";
import { useAppSelector } from "../../redux/hooks";

const RightSection = () => {
  const user = useAppSelector((state) => state.auth.user);
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  return (
    <div className="hidden lg:flex items-center space-x-6">
      {/* Language Selector */}
      <div className="flex items-center space-x-1 cursor-pointer hover:underline">
        <Image src={eg} alt="egyptFlag" />
        <span className="text-sm">Ar</span>
        <FaChevronDown className="text-xs" suppressHydrationWarning />
      </div>

      {/* Account */}
      <Link
        href={isAuthenticated ? "/account" : "/login"}
        className="cursor-pointer hover:underline"
      >
        <div className="text-xs mt-[-1px]">
          {isAuthenticated && user ? `Hello, ${user.name}` : "Hello, sign in"}
        </div>
        <div className="text-sm font-semibold">Account & Lists</div>
      </Link>

      {/* Your List - only show if authenticated */}
      {isAuthenticated && (
        <div className="text-sm font-semibold">
          <Link href="/list" className="cursor-pointer hover:underline">
            Your List
          </Link>
        </div>
      )}

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
