"use client";
import React, { EventHandler, ReactEventHandler, useState } from "react";
import SearchResultList from "./SearchResultList";
import { FaSearch } from "react-icons/fa";
import { SearchData } from "./data";

const Serchbar = () => {
  const [categore, setcategore] = useState<string>("All");
  const [name, setname] = useState<string>("");
  const { products, status, error } = SearchData();
  const categores = Array.from(
    new Set(["All", ...products.map((item) => item.category)])
  );

  const catFilteredProducts =
    categore === "All"
      ? products.filter((item) => item.title.includes(name))
      : products
          .filter((item) => item.category === categore)
          .filter((item) => item.title.includes(name));

  // console.log(catFilteredProducts);

  return (
    <div>
      <div className="flex-1 relative max-w-md w-full lg:mx-8 px-2 lg:px-0">
        <div className="flex">
          <select
            value={categore}
            onChange={(e) => {
              setcategore(e.target.value);
            }}
            className="w-1/4 sm:w-1/6 bg-gray-200 text-gray-700 px-2 sm:px-3 py-2 rounded-l-md border-r border-gray-300 text-xs sm:text-sm cursor-pointer hover:bg-gray-200 transition-colors"
          >
            {categores.map((item, id) => {
              return (
                <option value={item} key={id}>
                  {item}
                </option>
              );
            })}
          </select>
          <input
            type="text"
            placeholder="Search Amazon.in"
            value={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
            className="flex-1 px-2 sm:px-4 bg-white py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#ff9900] focus:ring-opacity-50 text-sm"
          />
          <button className="bg-[#FBCC02] hover:bg-[#febd69] px-3 sm:px-6 py-2 rounded-r-md transition-colors duration-200">
            <FaSearch
              className="text-gray-900 text-base sm:text-lg"
              suppressHydrationWarning
            />
          </button>
        </div>
        <div
          className={`absolute  z-50 w-[95%] md:w-[100%] ${
            name.trim() !== "" ? "blok" : "hidden"
          }`}
        >
          <SearchResultList
            products={catFilteredProducts}
            status={status}
            error={error}
          />
        </div>
      </div>
    </div>
  );
};

export default Serchbar;
