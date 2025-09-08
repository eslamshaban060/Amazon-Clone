import React from "react";

interface ReviewItemsProps {
  items: {
    id: number;
    title: string;
    price: number;
    quantity: number;
    image: string;
  }[];
}

const ReviewItems: React.FC<ReviewItemsProps> = ({ items }) => {
  return (
    <div className="bg-white p-4 rounded shadow-sm border border-gray-200">
      <h2
        className="text-lg font-bold mb-4 border-b border-gray-200 pb-2"
        style={{ color: "var(--black)" }}
      >
        3. Review Items
      </h2>
      <div className="flex flex-col gap-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex gap-4 border-b border-gray-200 pb-4 last:border-none"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-24 h-24 object-contain rounded border border-gray-200"
            />
            <div className="flex-1">
              <h3
                className="text-base font-medium mb-1"
                style={{ color: "var(--black)" }}
              >
                {item.title}
              </h3>
              <p
                className="text-sm font-semibold"
                style={{ color: "var(--red)" }}
              >
                EGP {item.price.toFixed(2)} × {item.quantity}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewItems;
