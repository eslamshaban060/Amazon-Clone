import React from "react";
import Cart from "@/components/cart/shopping-cart";
import CheckoutSummary from "@/components/cart/total";
const page = () => {
  return (
    <div className="bg-[#EAEDED] p-2 md:p-5 grid grid-cols-1 lg:grid-cols-5 gap-5">
      <div className=" rounded-5 lg:col-span-4">
        <Cart />
      </div>
      <div className=" rounded-5 lg:col-span-1">
        <CheckoutSummary />
      </div>
    </div>
  );
};

export default page;
