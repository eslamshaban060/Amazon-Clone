import React from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import MainSlider from "../components/Caruosel/MainSlider";
import FirstSlider from "../components/fristSlider/page";
import SecondtSlider from "../components/secondSlider/page";
import CardsRow from "@/components/homeCards/row";

const page = () => {
  return (
    <div className=" bg-[var(--bg)]">
      <header>
        <Header />
      </header>

      <main>
        <MainSlider />
      </main>
      {/* top  cards section  */}
      <section>
        <CardsRow />
      </section>

      <section>
        <FirstSlider />
      </section>

      <section>
        <SecondtSlider />
      </section>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default page;
