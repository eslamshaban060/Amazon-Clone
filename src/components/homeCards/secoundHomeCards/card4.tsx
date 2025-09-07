/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

interface Category {
  id: number;
  title: string;
  image: string;
}

const categories: Category[] = [
  {
    id: 1,
    title: "Kurta & sets",
    image: "/homecards2/1.png",
  },
  { id: 2, title: "Tops", image: "/homecards2/2.png" },
  { id: 3, title: "Dresses", image: "/homecards2/3.png" },
  { id: 4, title: "Sarees", image: "/homecards2/4.png" },
];

const Card4 = () => {
  return (
    <div className="w-[100%] p-2 xl:p-3 h-auto flex flex-col gap-3 bg-[var(--white)]">
      <div>
        <h3 className=" text-[13px] sm:text-[19px] md:text-[14px] lg:text-[18px] xl:text-2xl font-bold ">
          Latest styles | Dresses,
        </h3>
        <h3 className=" text-[13px] sm:text-[19px] md:text-[14px]  lg:text-[18px] xl:text-2xl  font-bold ">
          kurta & more | 50% off
        </h3>
      </div>
      <Link href="/store" className=" h-[90%] mx-auto w-[82%]">
        <img src="/homecards2/Frame 63.png" alt="" />
      </Link>
    </div>
  );
};

export default Card4;
