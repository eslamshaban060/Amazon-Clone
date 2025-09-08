"use client";
import React, { useState } from "react";
import { Check } from "lucide-react";
import { useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";

const CheckoutSummary = () => {
  const { list } = useAppSelector((state) => state.cart);
  const router = useRouter();

  const itemCount = list.reduce((total, item) => total + item.quantity, 0);

  const subtotal = list.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const freeShipping = subtotal >= 1000;

  const [isProcessing, setIsProcessing] = useState(false);

  const handleProceedToBuy = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      router.push("/checkout");
    }, 1500);
  };

  return (
    <div>
      <div className="w-[100%] mx-auto ">
        <div className="p-4 bg-white rounded ">
          {/* Free Shipping Notice */}

          {freeShipping && (
            <div className="flex items-start gap-2 mb-4">
              <div
                className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "var(--green)" }}
              >
                <Check size={12} color="white" />
              </div>

              <div className="text-sm">
                <p className="font-bold mb-1" style={{ color: "var(--green)" }}>
                  Your order qualifies for FREE Shipping
                </p>
                <p style={{ color: "var(--black)" }}>
                  Choose this option at checkout.
                  <span
                    className="underline cursor-pointer ml-1"
                    style={{ color: "var(--blue-link)" }}
                  >
                    See details
                  </span>
                </p>
              </div>
            </div>
          )}

          <div className="mb-4">
            <p className="text-lg" style={{ color: "var(--black)" }}>
              <span className="font-bold">
                Subtotal ({itemCount} items): $ {subtotal.toFixed(2)}
              </span>
            </p>
          </div>

          <button
            onClick={handleProceedToBuy}
            disabled={isProcessing}
            className={`w-full py-2 rounded font-bold text-sm transition-opacity ${
              isProcessing
                ? "opacity-70 cursor-not-allowed"
                : "hover:opacity-90"
            }`}
            style={{
              backgroundColor: "var(--yellow)",
              color: "var(--black)",
              border: "1px solid #a88734",
            }}
          >
            {isProcessing ? "Processing..." : "Proceed to Buy"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSummary;
