import React from "react";
import MainSlider from "../components/Caruosel/MainSlider";
import FirstSlider from "../components/firstSlider/page";
import SecondSlider from "../components/secondSlider/page";
import CardsRow from "@/components/homeCards/row";

const page = () => {
  return (
    <div suppressHydrationWarning>
      <MainSlider />
      {/* top  cards section  */}
      <section suppressHydrationWarning>
        <CardsRow />
      </section>

      <section suppressHydrationWarning>
        <FirstSlider />
      </section>

      <section suppressHydrationWarning>
        <SecondSlider />
      </section>
    </div>
  );
};

export default page;
