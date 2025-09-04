// src/components/Lists.tsx
import React from "react";
import SearchBar from "@/components/list/searchBar";
import ListItems from "@/components/list/List-Items";

const Lists: React.FC = () => {
  return (
    <div className="container max-w-[1200px] mx-auto p-0 sm:p-4">
      <h2 className="text-2xl sm:text-3xl leading-[32px] inline-block font-[700] text-[var(--blue)] pb-2 border-b-[3px]">
        Your list
      </h2>
      <div className="all-lists gap-5 border-[var(--bg)] border sm:p-5">
        <div className="items flex flex-col items-center gap-5 pt-4">
          <SearchBar />
          <ListItems />
        </div>
      </div>
    </div>

    // <div>
    //   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat quod,
    //   odit impedit eum sapiente dicta ratione necessitatibus! Praesentium eaque
    //   dignissimos voluptatibus aliquam reprehenderit asperiores sapiente error
    //   obcaecati recusandae. Rerum, molestiae.
    // </div>
  );
};

export default Lists;
