import React from "react";
import Card1 from "./card1";
import Card2 from "./card2";
import Card3 from "./card3";
import Card4 from "./card4";

const SecoundHoeCards = () => {
  return (
    <div className=" grid p-2 sm:p-3 sm:gap-3 md:p-[8px] grid-cols-2 grid-rows-2 gap-2 md:gap-[8px] md:grid-cols-4 md:grid-rows-1 xl:p-[33px] xl:gap-[25px] lg:p-[23px] lg:gap-[15px]">
      <div>
        <Card1 />
      </div>
      <div>
        <Card2 />
      </div>
      <div>
        <Card3 />
      </div>
      <div>
        <Card4 />
      </div>
    </div>
  );
};

export default SecoundHoeCards;
