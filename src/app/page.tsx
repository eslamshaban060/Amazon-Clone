import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import MainSlider from "../components/Caruosel/MainSlider";
import FirstSlider from "../app/fristSlider/page";
import SecondtSlider from "../app/secondSlider/page";
import CardsRow from "@/components/homeCards/row";
const page = () => {
  return (
    <div className=" bg-[var(--bg)]">
      {/* header  */}
      <div>
        <Header />
      </div>

      {/* hero slider  */}
      <main>
        <MainSlider />
      </main>

      {/* top cards  */}
      <section>
        <CardsRow />
      </section>
      {/* first slider   */}
      <section>
        <FirstSlider />
      </section>

      {/* secound section  */}
      <section>
        <SecondtSlider />
      </section>

      {/* footer section  */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default page;
