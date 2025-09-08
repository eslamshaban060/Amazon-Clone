import React from "react";
import Product from "@/Data/ApiData/productDetails";
import QuintatyCard from "./quintatyCard";

interface ProductType {
  productDetails: Product;
}
const ProducData: React.FC<ProductType> = ({ productDetails }) => {
  const cond = productDetails.title?.length;
  return (
    <div>
      {cond > 2 ? (
        <div className=" grid  md:grid-cols-5 gap-1 grid-cols-1">
          <div className="col-span-2 p-5 flex justify-center items-center ">
            <img src={productDetails?.image} className="mx-auto" alt="" />
          </div>

          <div className="card  col-span-3  p-3 mb-4">
            <div className=" grid grid-cols-1 gap-5 lg:grid-cols-3">
              <div className=" col-span-2">
                {/* Brand */}
                <p className="text-[var(--blue-link)] mb-1">
                  Brand:{" "}
                  <span className=" font-normal text-[16px] uppercase">
                    {productDetails.category}
                  </span>
                </p>

                {/* Title */}
                <h5 className=" text-[25px] text-[var(--bg)]">
                  {productDetails.title}
                </h5>

                {/* Rating */}
                <div className="d-flex text-[22px] align-items-center mb-2">
                  <span className="me-2 text-[28px]  text-[var(--yellow)] ">
                    ★ ★ ★ ★ ☆
                  </span>
                  <span className="text-muted small text-[var(--blue-link)]">
                    4.1 | 67 ratings
                  </span>
                </div>

                <div className=" w-[100%] my-3 opacity-25 h-[1px] bg-[var(--gray-light)]"></div>
                {/* Price */}
                <h3 className=" text-[33px] mb-1">$ {productDetails.price}</h3>
                <p className="text-[18px] mb-2">All price include VAT.</p>

                {/* Discount */}
                <div className="mb-3 text-[18px]">
                  <span className="text-[var(--bg)]">Sign in to redeem.</span>
                  <span className=" bg-[#71ed58] px-2  py-1 me-2">
                    Extra 20% off
                  </span>
                  <span className="text-muted small">
                    with meem credit cards
                  </span>
                  <p className="small mt-1 mb-0">
                    Enter code <strong>DevWave</strong> at checkout. Discount by
                    DevWave.
                  </p>
                </div>

                {/* Icons Section */}
                <div className="flex  text-[var(--blue-link)]  gap-5 text-center border-top border-bottom py-2 mb-3">
                  <div>
                    <img
                      src="/productDetails/proddet1.png"
                      alt="Electronic payment Only"
                      width={40}
                      className=" mx-auto"
                    />

                    <p className="small mb-0">
                      Electronic <br /> payment Only
                    </p>
                  </div>
                  <div>
                    <img
                      src="/productDetails/proddet2.png"
                      alt="30 days Returnable"
                      width={40}
                      className=" mx-auto"
                    />
                    <p className="small mb-0">
                      30 days <br /> Returnable
                    </p>
                  </div>
                  <div>
                    <img
                      src="/productDetails/proddet3.png"
                      alt="Secure transaction"
                      width={40}
                      className=" mx-auto"
                    />
                    <p className="small mb-0">
                      Secure <br /> transaction
                    </p>
                  </div>
                </div>

                <div className=" w-[100%] my-3 opacity-25 h-[1px] bg-[var(--gray-light)]"></div>

                {/* About Item */}
                <h6 className="font-bold text-[17px] pb-2">About this item</h6>
                <p className="text-[17px] font-light">
                  {productDetails.description}
                </p>
              </div>
              <div className=" col-span-1">
                <QuintatyCard productDetails={productDetails} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>not found page</div>
      )}
    </div>
  );
};

export default ProducData;
