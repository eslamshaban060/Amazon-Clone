import React from "react";
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
    </div>
  );
};

export default page;
