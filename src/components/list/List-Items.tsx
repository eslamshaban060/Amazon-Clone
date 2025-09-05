// src/components/ListItems.tsx
import React from "react";
import { useList } from "./context/ListContext"; // Import hook
import ListItem from "./context/ListContext"; // Import type
import { FaTrash, FaShoppingCart, FaList } from "react-icons/fa";

const ListItems: React.FC = () => {
  // Grab needed values from context
  const { list, searchQuery, removeItem } = useList();

  // Filter items based on search query
  const filteredItems = list.filter((item: ListItem) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (filteredItems.length === 0) {
    return (
      <p className="text-gray-500 italic text-center">
        <FaList className="inline-block mb-1 mr-2" />
        There are no items matching your search.
      </p>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full p-2">
      {filteredItems.map((item) => (
        <div
          key={item.id}
          className="flex flex-col  rounded-xl overflow-hidden  bg-white hover:shadow-lg transition"
        >
          {/* Product Image */}
          <div className="h-44 bg-gray-50 flex items-center justify-center">
            <img
              src={typeof item.image === "string" ? item.image : item.image.src}
              alt={item.title}
              className="h-full w-full object-contain p-3"
            />
          </div>

          {/* Product Details */}
          <div className="p-4 flex flex-col flex-1">
            <h3 className="font-semibold text-lg text-gray-800 line-clamp-1">
              {item.title}
            </h3>
            <span className="mt-1 font-bold text-[var(--blue)]">
              {item.price} EGP
            </span>
            <span className="text-sm text-gray-500">{item.shipping}</span>

            {/* Actions */}
            <div className="flex gap-2 mt-4">
              <button
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[var(--yellow)] text-white hover:bg-[var(--orange)] transition flex-1"
                onClick={() => alert(`${item.title} added to cart!`)}
              >
                <FaShoppingCart /> Add
              </button>
              <button
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[var(--red)] text-white hover:bg-red-600 transition"
                onClick={() => removeItem(item.id)}
              >
                <FaTrash /> Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListItems;
