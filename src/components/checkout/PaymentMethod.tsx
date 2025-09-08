import React from "react";

const PaymentMethod: React.FC = () => {
  return (
    <div className="bg-white p-4 rounded shadow-sm border border-gray-200">
      <h2
        className="text-lg font-bold mb-2 border-b border-gray-200 pb-2"
        style={{ color: "var(--black)" }}
      >
        2. Payment Method
      </h2>
      <p className="text-sm" style={{ color: "var(--black)" }}>
        Cash on Delivery
      </p>
    </div>
  );
};

export default PaymentMethod;
