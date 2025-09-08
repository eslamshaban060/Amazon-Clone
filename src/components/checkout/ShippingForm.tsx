import React from "react";

interface ShippingFormProps {
  shippingData: {
    name: string;
    address: string;
    city: string;
    postalCode: string;
    phone: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage: string;
}

const ShippingForm: React.FC<ShippingFormProps> = ({
  shippingData,
  onChange,
  errorMessage,
}) => {
  return (
    <div className="bg-white p-4 rounded shadow-sm border border-gray-200">
      <h2
        className="text-lg font-bold mb-4 border-b border-gray-200 pb-2"
        style={{ color: "var(--black)" }}
      >
        1. Delivery Address
      </h2>

      {errorMessage && (
        <div className="mb-4 p-3 rounded bg-red-100 text-red-700 text-sm font-medium">
          {errorMessage}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          value={shippingData.name}
          onChange={onChange}
          placeholder="Full Name"
          className="border border-gray-200 p-2 rounded w-full"
        />
        <input
          type="text"
          name="address"
          value={shippingData.address}
          onChange={onChange}
          placeholder="Address"
          className="border border-gray-200 p-2 rounded w-full"
        />
        <input
          type="text"
          name="city"
          value={shippingData.city}
          onChange={onChange}
          placeholder="City"
          className="border border-gray-200 p-2 rounded w-full"
        />
        <input
          type="text"
          name="postalCode"
          value={shippingData.postalCode}
          onChange={onChange}
          placeholder="Postal Code"
          className="border border-gray-200 p-2 rounded w-full"
        />
        <input
          type="text"
          name="phone"
          value={shippingData.phone}
          onChange={onChange}
          placeholder="Phone Number"
          className="border border-gray-200 p-2 rounded w-full"
        />
      </div>
    </div>
  );
};

export default ShippingForm;
