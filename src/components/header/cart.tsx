"use client";
import React from "react";
import Link from "next/link";
import { BiCart } from "react-icons/bi";
import { useAppSelector } from "@/redux/hooks";

const Cart = () => {
  const { list } = useAppSelector((state) => state.cart);
  const totalQuantity = list.reduce((total, item) => total + item.quantity, 0);

  return (
    <Link
      href="/cart"
      className="flex items-center space-x-1 cursor-pointer hover:underline"
    >
      <div className="relative">
        <BiCart className=" text-4xl cursor-pointer" suppressHydrationWarning />
        <p className="w-[18px] md:w-[20px] h-[18px] md:h-[20px] text-[14px] md:text-[20px] text-center text-orange-500 rounded-md font-semibold absolute -top-1 start-2.5">
          {totalQuantity}
        </p>
      </div>
      <span className="text-sm hidden sm:flex font-bold">Cart</span>
    </Link>
  );
};

export default Cart;
