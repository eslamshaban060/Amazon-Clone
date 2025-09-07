import React from "react";
import { ApiData } from "@/Data/ApiData/productDetails";

interface ProductDetailsProps {
  params: {
    id: string;
  };
}

const ProductDetails = (Props: ProductDetailsProps) => {
  console.log(Props.params.id);
  return (
    <div className=" bg-white">
      {/* top section  */}
      <section className=" p-5">
        <div>
          <ApiData id={parseInt(Props.params.id)} />
        </div>
      </section>

      {/* commints section and reviews  */}
      <section></section>
    </div>
  );
};

export default ProductDetails;
