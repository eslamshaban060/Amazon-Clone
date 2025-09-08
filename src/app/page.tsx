import React from "react";
import MainSlider from "../components/Caruosel/MainSlider";
import FirstSlider from "../components/firstSlider/page";
import SecondSlider from "../components/secondSlider/page";
import CardsRow from "@/components/homeCards/row";
import SecoundHoeCards from "@/components/homeCards/secoundHomeCards/secoundHoeCards";

const page = () => {
  return (
    <div>
      <main className=" bg-[var(--bg)]">
        <MainSlider />
      </main>
      {/* top  cards section  */}
      <section className="relative z-20   mt-[-20vh] lg:mt-[-35vh]">
        <CardsRow />
      </section>

      <section className="xl:px-[30px] xl:pb-[0px]  xl:pt-[0px]  lg:p-[23px] md:p-[8px] p-2  ">
        <FirstSlider />
      </section>

      <section>
        <SecoundHoeCards />
      </section>

      <section className="xl:px-[30px] xl:pb-[33px]  xl:pt-0 lg:p-[23px] md:p-[8px] mb- p-2  ">
        <SecondSlider />
      </section>
    </div>
  );
};

export default page;
