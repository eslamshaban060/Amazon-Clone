"use client";
import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { resetItems } from "@/redux/slices/cartSlice";

import ShippingForm from "@/components/checkout/ShippingForm";
import PaymentMethod from "@/components/checkout/PaymentMethod";
import ReviewItems from "@/components/checkout/ReviewItems";
import OrderSummary from "@/components/checkout/OrderSummary";

const CheckoutPage = () => {
  const { list } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const itemCount = list.reduce((total, item) => total + item.quantity, 0);
  const subtotal = list.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const freeShipping = subtotal >= 1000;

  const [shippingData, setShippingData] = useState({
    name: "",
    address: "",
    city: "",
    postalCode: "",
    phone: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShippingData({ ...shippingData, [name]: value });
  };

  const handlePlaceOrder = () => {
    if (
      !shippingData.name ||
      !shippingData.address ||
      !shippingData.city ||
      !shippingData.postalCode ||
      !shippingData.phone
    ) {
      setErrorMessage("⚠️ Please fill in all shipping details.");
      return;
    }

    setErrorMessage("");
    dispatch(resetItems([]));
    setOrderPlaced(true);
  };

  if (orderPlaced) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[var(--bg-light)] px-4">
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 max-w-md w-full text-center">
          {/* Success Icon */}
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
            style={{ backgroundColor: "var(--green)" }}
          >
            <span className="text-white text-3xl">✓</span>
          </div>

          {/* Title */}
          <h2
            className="text-2xl font-bold mb-2"
            style={{ color: "var(--green)" }}
          >
            Your order has been shipped!
          </h2>

          {/* Subtitle */}
          <p className="mb-4 text-base" style={{ color: "var(--black)" }}>
            Thank you <span className="font-semibold">{shippingData.name}</span>
            , your package is on the way 🚚
          </p>

          {/* Extra info */}
          <div className="bg-[var(--bg-light)] rounded-lg p-3 text-sm mb-4 border border-gray-200">
            <p style={{ color: "var(--black)" }}>
              Estimated delivery:{" "}
              <span className="font-semibold">2–4 business days</span>
            </p>
            <p style={{ color: "var(--black)" }}>
              Order Number: <span className="font-mono">#123456</span>
            </p>
          </div>

          {/* Button */}
          <button
            className="w-full py-2 rounded-lg font-bold text-sm hover:opacity-90 transition"
            style={{
              backgroundColor: "var(--yellow)",
              color: "var(--black)",
              border: "1px solid #a88734",
            }}
            onClick={() => (window.location.href = "/store")}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[var(--bg-light)] min-h-screen p-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 flex flex-col gap-6">
          <ShippingForm
            shippingData={shippingData}
            onChange={handleInputChange}
            errorMessage={errorMessage}
          />
          <PaymentMethod />
          <ReviewItems items={list} />
        </div>

        <OrderSummary
          itemCount={itemCount}
          subtotal={subtotal}
          freeShipping={freeShipping}
          onPlaceOrder={handlePlaceOrder}
        />
      </div>
    </div>
  );
};

export default CheckoutPage;
