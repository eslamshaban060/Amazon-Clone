"use client"
import React from "react";
import { FaTrash, FaShoppingCart, FaList } from "react-icons/fa";
import { useAppDispatch ,useAppSelector } from "@/redux/hooks";
import { removeItem } from "@/redux/slices/listSlice";

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
        There are no items matching your search.
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-4 w-full p-2">
      {filteredItems.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center md:items-start md:flex-row gap-4 py-6 border-b border-gray-300  rounded-xl overflow-hidden bg-white hover:shadow-lg transition"
        >
          {/* Product Image */}
          <div className="flex-shrink-0">
            <img
              src={item.image}
              alt={item.title}
              className="rounded-lg object-cover w-52 px-1.5"
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col flex-1 gap-1 ">
              <h3 className="font-semibold text-lg text-gray-800"> 
                <span className="font-bold" >
                {item.title} 
                </span> 
                <span>
                {item.description} 
                </span>
              </h3>
              <span className="text-sm text-gray-500">{item.shipping}</span>
              {/* Actions */}
              <div className="flex gap-2 mt-4">
                <button
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[var(--yellow)] text-white hover:bg-[var(--orange)] transition flex-7"
                  onClick={() => alert(`${item.title} added to cart!`)}
                >
                  <FaShoppingCart /> Add
                </button>
                <button
                  className="flex items-center gap-2 px-3 py-2 rounded-lg flex-2 bg-[var(--red)] text-white hover:bg-red-600 transition"
                  onClick={() => dispatch(removeItem(item.id))}
                >
                  <FaTrash /> Delete
                </button>
              </div>
            
          </div>
          <div className="mt-1 font-bold text-[var(--blue)] md:text-center text-right   w-full  md:w-fit  ">
            {item.price} EGP
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListItems;
