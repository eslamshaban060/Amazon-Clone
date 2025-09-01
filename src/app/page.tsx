import React from "react";
<<<<<<< HEAD
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import MainSlider from "../components/Caruosel/MainSlider";
import FirstSlider from "../app/fristSlider/page";
import SecondtSlider from "../app/secondSlider/page";
const page = () => {
  return (
    <div>
      <Header />
      <MainSlider />
      <FirstSlider />
      <SecondtSlider />
      <Footer />
=======
import CardsRow from "@/components/homeCards/row";

const page = () => {
  return (
    <div className=" bg-[var(--bg)]">
      {/* top  cards section  */}
      <section>
        <CardsRow />
      </section>
>>>>>>> aa17eade7c663ab8095a898d0b96d45bf2d21a38
    </div>
  );
};

export default page;
