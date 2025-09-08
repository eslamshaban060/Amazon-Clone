// src/components/Lists.tsx
"use client";
import React from "react";
import CartItems from "./carIItem";
import { useAppSelector } from "@/redux/hooks";

const Cart: React.FC = () => {
  const { list } = useAppSelector((state) => state.cart);

  const totalQuantity = list.reduce((total, item) => total + item.quantity, 0);

  const subtotal = list.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="w-[100%] mx-auto p-2  font-sans">
      <div
        className="text-3xl font-normal pb-3 mb-5 border-b border-gray-200"
        style={{ color: "var(--black)" }}
      >
        Shopping Cart
      </div>
      <div className="all-lists gap-5 border-[var(--bg)] sm:p-5">
        <div className="items flex flex-col items-center gap-5 pt-4">
          <CartItems />
          <div className="text-right flex items-center justify-end">
            <p className="text-lg" style={{ color: "var(--black)" }}>
              Subtotal ({totalQuantity} items):{" "}
              <span className="font-bold">$ {subtotal.toFixed(2)}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
