import React from "react";
import Link from "next/link";

const Card2 = () => {
  return (
    <div className="w-[100%]  p-2 xl:p-3 h-auto flex flex-col gap-3 bg-[var(--white)]">
      <div>
        <h3 className=" text-[13px] sm:text-[19px] md:text-[14px] lg:text-[18px] xl:text-2xl font-bold ">
          Customers' Most-Loved
        </h3>
        <h3 className=" text-[13px] sm:text-[19px] md:text-[14px]  lg:text-[18px] xl:text-2xl  font-bold ">
          Products
        </h3>
      </div>
      <Link href="/store" className=" h-[90%] mx-auto w-[80%]">
        <img src="/homecards2/Frame 62.png" alt="" />
      </Link>
    </div>
  );
};

export default Card2;
