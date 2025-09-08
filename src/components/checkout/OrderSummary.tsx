import React from "react";
import { Check } from "lucide-react";

interface OrderSummaryProps {
  itemCount: number;
  subtotal: number;
  freeShipping: boolean;
  onPlaceOrder: () => void;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({
  itemCount,
  subtotal,
  freeShipping,
  onPlaceOrder,
}) => {
  return (
    <div className="bg-white p-4 rounded shadow-md border border-gray-200 h-fit">
      {freeShipping && (
        <div className="flex items-start gap-2 mb-4">
          <div
            className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: "var(--green)" }}
          >
            <Check size={12} color="white" />
          </div>
          <p className="text-sm font-medium" style={{ color: "var(--green)" }}>
            Your order qualifies for FREE Shipping. Choose this option at
            checkout.
          </p>
        </div>
      )}

      <h2
        className="text-lg font-bold mb-4 border-b border-gray-200 pb-2"
        style={{ color: "var(--black)" }}
      >
        Order Summary
      </h2>

      <div className="flex justify-between mb-2 text-sm">
        <span style={{ color: "var(--black)" }}>Items:</span>
        <span style={{ color: "var(--black)" }}>EGP {subtotal.toFixed(2)}</span>
      </div>
      <div className="flex justify-between mb-2 text-sm">
        <span style={{ color: "var(--black)" }}>Delivery:</span>
        <span style={{ color: "var(--black)" }}>
          {freeShipping ? "FREE" : "EGP 50.00"}
        </span>
      </div>
      <div className="flex justify-between font-bold text-base border-t border-gray-200 pt-2">
        <span style={{ color: "var(--black)" }}>
          Order Total ({itemCount} items):
        </span>
        <span style={{ color: "var(--red)" }}>
          EGP {(subtotal + (freeShipping ? 0 : 50)).toFixed(2)}
        </span>
      </div>

      <button
        onClick={onPlaceOrder}
        className="w-full mt-4 py-2 rounded font-bold text-sm hover:opacity-90"
        style={{
          backgroundColor: "var(--yellow)",
          color: "var(--black)",
          border: "1px solid #a88734",
        }}
      >
        Place your order
      </button>
    </div>
  );
};

export default OrderSummary;
