import React from "react";
import Link from "next/link";
import Image from "next/image";
import Section from "@/Data/home-cards";

interface Cardtype {
  card: Section;
}
const Card: React.FC<Cardtype> = ({ card }) => {
  return (
    <div className="w-[100%] p-2 xl:p-3 h-auto flex flex-col gap-3 bg-[var(--white)] ">
      <div>
        <h3 className=" text-[13px] sm:text-[19px] md:text-[14px] lg:text-[18px] xl:text-2xl font-bold ">
          {card.title}
        </h3>
        <h3 className=" text-[13px] sm:text-[19px] md:text-[14px]  lg:text-[18px] xl:text-2xl  font-bold ">
          {card.title2}
        </h3>
      </div>
      <div className=" grid  grid-cols-2 grid-rows-2 gap-1 sm:gap-3 md:gap-2 xl:gap-3 ">
        {card.items.map((item, id) => {
          return (
            <Link className=" flex flex-col gap-2" href="/store" key={id}>
              <Image
                className="w-100"
                src={
                  typeof item.image === "string" ? item.image : item.image.src
                }
                alt={item.name}
                width={100}
                height={100}
              />
              <p className="h-[30px] text-[9px] sm:text-[11px] xl:text-[12px]">
                {item.name}
              </p>
            </Link>
          );
        })}
      </div>
      <div>
        <Link
          href="/store"
          className=" text-[15px] py-4 pt-0 md:pt-2 font-medium  block text-[var(--blue-link)]"
        >
          {card.link}
        </Link>
      </div>
    </div>
  );
};

export default Card;
