import React from "react";
import { ApiData } from "@/Data/ApiData/productDetails";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

const ProductDetails = (Props: any) => {
  console.log(Props.params.id);
  return (
    <div>
      {/* header  */}
      <header>
        <Header />
      </header>

      {/* top section  */}
      <section className=" p-5">
        <div>
          <ApiData id={Props.params.id} />
        </div>
      </section>

      {/* commints section and reviews  */}
      <section></section>

      {/* footer  */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default ProductDetails;
