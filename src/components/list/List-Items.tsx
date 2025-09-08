"use client";
import React from "react";
import {FaList } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { removeItem } from "@/redux/slices/listSlice";
import { addCartItem } from "@/redux/slices/cartSlice";
import { ShoppingCart, Trash2 } from "lucide-react";

import Link from "next/link";
import Image from "next/image";
const ListItems: React.FC = () => {
  const dispatch = useAppDispatch();
  const { list, searchQuery } = useAppSelector((state) => state.list);

  // Filter items based on search query
  const filteredItems = list.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (filteredItems.length === 0) {
    return (
      <p className="text-gray-500 italic text-center">
        <FaList className="inline-block mb-1 mr-2" />
        There are no items in your list
        <Link className=" font-bold text-[var(--blue-link)]" href="store">
          store
        </Link>
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-4 w-full ">
      {filteredItems.map((item) => (
        <div
          key={item.id}
          className="flex py-5 border-b border-gray-200 p-3 gap-5"
        >
          {/* Product Image */}
          <div
            className="w-30 h-30 rounded flex items-center justify-center text-gray-600"
            style={{ backgroundColor: "var(--bg-light)" }}
          >
            <Image
              width="208"
              height="208"
              src={item.image}
              alt={item.title}
              className="rounded-lg object-cover w-52 px-1.5"
            />
          </div>

          {/* Product Details */}
          <div className=" flex-1 ">
            <h3
              className=" mb-2 font-normal leading-tight cursor-pointer text-xl hover:underline"
              style={{ color: "var(--blue-link)" }}
            >
              {item.title}
            </h3>
            <p className=" text-[var(--bg)]">{item.description}</p>
            <div className="mt-1 block md:hidden font-bold text-[var(--blue)] md:text-center text-right   w-full  md:w-fit  ">
              {item.price} EGP
            </div>
            {/* Actions */}
            <div className="mt-8 pt-6 ">
              <div className="flex gap-3 p-4 bg-gradient-to-r from-orange-50 to-amber-50  rounded-xl">
                <button
                  onClick={() => dispatch(addCartItem(item))}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3
                       bg-white/70 backdrop-blur-sm border border-white/50
                       text-gray-800 font-medium rounded-lg
                       hover:bg-white/90 hover:shadow-lg
                       active:scale-98 transform transition-all duration-200
                       focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                >
                  <ShoppingCart className="w-4 h-4" />
                  Add to Cart
                </button>

                <button
                  className="flex items-center justify-center p-3
                       bg-red-500/80 backdrop-blur-sm border border-red-400/50
                       text-white font-medium rounded-lg
                       hover:bg-red-600/90 hover:shadow-lg
                       active:scale-95 transform transition-all duration-200
                       focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                  onClick={() => dispatch(removeItem(item.id))}
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
          <div className="mt-1 hidden md:block font-bold text-[var(--blue)] md:text-center text-right   w-full  md:w-fit  ">
            {item.price} EGP
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListItems;
