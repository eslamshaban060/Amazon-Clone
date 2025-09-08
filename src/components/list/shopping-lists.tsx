// src/components/Lists.tsx
import React from "react";
import SearchBar from "./searchBar";
import ListItems from "./List-Items";

const Lists: React.FC = () => {
  return (
    <div className="container max-w-[1200px] mx-auto p-0 md:p-5 bg-white">
      <h2
        className="text-3xl font-normal pb-3 mb-5 border-b border-gray-200"
        style={{ color: "var(--black)" }}
      >
        Your list
      </h2>
      <div className="all-lists gap-5 border-[var(--bg)] sm:p-5">
        <div className="items flex flex-col items-center gap-5 pt-4">
          <SearchBar />
          <ListItems />
        </div>
      </div>
    </div>
  );
};

export default Lists;
