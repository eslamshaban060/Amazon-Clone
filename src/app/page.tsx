import CardsRow from "@/components/homeCards/row";
import FirstSlider from "@/app/fristSlider/page";
import SecondtSlider from "@/app/secondSlider/page";
import MainSlider from "@/components/Caruosel/MainSlider";
const page = () => {
  return (
    <div className="bg-[var(--bg)]">
      {/* <Header /> */}
      <main>
        {" "}
        {/* New: Main content area */}
        <section>
          {" "}
          {/*  MainSlider is a distinct section */}
          <MainSlider />
        </section>
        <section>
          {" "}
          {/* Existing: Cards section */}
          <CardsRow />
        </section>
        <section>
          {" "}
          {/*   FirstSlider is a distinct section */}
          <FirstSlider />
        </section>
        <section>
          {" "}
          {/*  SecondtSlider is a distinct section */}
          <SecondtSlider />
        </section>
      </main>
    </div>
  );
};

export default page;
