import CardsRow from "@/components/homeCards/row";
import FirstSlider from "@/app/fristSlider/page";
import SecondtSlider from "@/app/secondSlider/page";
import MainSlider from "@/components/Caruosel/MainSlider";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
const page = () => {
  return (
    <div className="bg-[var(--bg)]">
      <Header />
      <main>
        {" "}
        {/* New: Main content area */}
        <section>
          {" "}
          {/* Optional: If MainSlider is a distinct section */}
          <MainSlider />
        </section>
        <section>
          {" "}
          {/* Existing: Cards section */}
          <CardsRow />
        </section>
        <section>
          {" "}
          {/* Optional: If FirstSlider is a distinct section */}
          <FirstSlider />
        </section>
        <section>
          {" "}
          {/* Optional: If SecondtSlider is a distinct section */}
          <SecondtSlider />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default page;
