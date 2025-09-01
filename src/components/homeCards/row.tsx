import React from "react";
import Card from "./card";
import { cardsData } from "@/Data/home-cards";

const CardsRow = () => {
  return (
    <div className=" grid p-2 sm:p-3 sm:gap-3 md:p-[8px] grid-cols-2 grid-rows-4 gap-2 md:gap-[8px] md:grid-cols-4 md:grid-rows-2 xl:p-[33px] xl:gap-[25px] lg:p-[23px] lg:gap-[15px]">
      {cardsData.map((item, id) => {
        return (
          <div key={id}>
            <Card card={item} />
          </div>
        );
      })}
    </div>
  );
};

export default CardsRow;
