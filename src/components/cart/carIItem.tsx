"use client";
import React from "react";
import { FaList } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import {
  removeItem,
  addCartItem,
  decreaseQuantity,
} from "@/redux/slices/cartSlice";

const CartItems: React.FC = () => {
  const dispatch = useAppDispatch();
  const { list, searchQuery } = useAppSelector((state) => state.cart);

  // Filter items based on search query
  const filteredItems = list.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (filteredItems.length === 0) {
    return (
      <p className="text-gray-500 italic text-center">
        <FaList className="inline-block mb-1 mr-2" />
        There are no items in your cart go to{" "}
        <Link className=" font-bold text-[var(--blue-link)]" href="store">
          store
        </Link>
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-4 w-full ">
      {filteredItems.map((item) => (
        <div key={item.id} className="flex py-5 border-b border-gray-200 gap-5">
          {/* Product Image */}
          <div
            className="w-30 h-30 rounded flex items-center justify-center text-gray-600"
            style={{ backgroundColor: "var(--bg-light)" }}
          >
            <img
              src={item.image}
              alt={item.title}
              className="rounded-lg object-cover w-52 px-1.5"
            />
          </div>

          {/* Item Details */}
          <div className="flex-1">
            {/* Product Name */}
            <div className="text-base mb-2 font-normal leading-tight cursor-pointer hover:underline">
              <span style={{ color: "var(--blue-link)" }} className="block">
                {item.title}
              </span>
              <span className=" text-[var(--bg)] block">
                {item.description}
              </span>
            </div>

            {/* Delivery Info */}
            <div className="text-sm mb-2" style={{ color: "var(--black)" }}>
              <span className="font-bold">FREE delivery </span> available at
              checkout
            </div>

            {/* Product Specs */}
            <div
              className="text-sm mb-3"
              style={{ color: "var(--black)" }}
            ></div>

            {/* Quantity Controls */}
            <div className="flex items-center gap-3 mb-3">
              <button
                className="w-8 h-8 rounded-full flex items-center justify-center text-base border border-gray-300 hover:bg-gray-200 cursor-pointer"
                style={{
                  backgroundColor: "var(--bg-light)",
                  color: "var(--black)",
                }}
                onClick={() => dispatch(decreaseQuantity(item.id))}
              >
                −
              </button>
              <span
                className="min-w-10 text-center text-base"
                style={{ color: "var(--black)" }}
              >
                {item.quantity}
              </span>
              <button
                className="w-8 h-8 rounded-full flex items-center justify-center text-base border border-gray-300 hover:bg-gray-200 cursor-pointer"
                style={{
                  backgroundColor: "var(--bg-light)",
                  color: "var(--black)",
                }}
                onClick={() => dispatch(addCartItem(item))}
              >
                +
              </button>
            </div>

            {/* Item Actions */}
            <div className="flex gap-4 text-xs">
              <span
                className="cursor-pointer hover:underline"
                style={{ color: "var(--red)" }}
                onClick={() => dispatch(removeItem(item.id))}
              >
                Delete
              </span>
            </div>
          </div>

          {/* Item Price */}
          <div className="text-right min-w-30">
            <div
              className="text-lg font-bold"
              style={{ color: "var(--black)" }}
            >
              ${(item.price * item.quantity).toFixed(2)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItems;
