import React from "react";
<<<<<<< HEAD
import CardsRow from "@/components/homeCards/row";

const page = () => {
  return (
    <div className=" bg-[var(--bg)]">
      {/* top  cards section  */}
      <section>
        <CardsRow />
      </section>
=======
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import MainSlider from "../components/Caruosel/MainSlider";
const page = () => {
  return (
    <div>
      <Header />
      <MainSlider />
      <Footer />
>>>>>>> Feature/carousel
    </div>
  );
};

export default page;
