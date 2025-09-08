import React from "react";
import Link from "next/link";

const Card1 = () => {
  return (
    <div className="w-[100%] p-2 xl:p-3 h-auto flex flex-col gap-3 bg-[var(--white)]">
      <div>
        <h3 className=" text-[13px] sm:text-[19px] md:text-[14px] lg:text-[18px] xl:text-2xl font-bold ">
          Best Sellers in Toys &
        </h3>
        <h3 className=" text-[13px] sm:text-[19px] md:text-[14px]  lg:text-[18px] xl:text-2xl  font-bold ">
          Games
        </h3>
      </div>
      <Link href="/store" className=" h-[90%] mx-auto w-[85%]  overflow-hidden">
        <img src="/homecards2/2222222.jfif" alt="" />
      </Link>
    </div>
  );
};

export default Card1;
