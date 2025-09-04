import React from "react";
import Product from "@/Data/ApiData/productDetails";

interface ProductType {
  productDetails: Product;
}
const QuintatyCard: React.FC<ProductType> = ({ productDetails }) => {
  return (
    <div className="border rounded-md p-4 w-[100%] xl:w-[90%] shadow-sm">
      <div className="text-2xl ">
        <span className="text-[33px] mt-1">
          <span className="pe-1">$</span>
          {productDetails.price}
        </span>
      </div>
      <p className="text-[16px]  text-[var(--bg)] mt-1">
        $9.99 delivery 6-9 October.
      </p>

      <p className="text-[var(--blue-link)] text-sm hover:underline mt-1">
        Details
      </p>
      <p className="text-[var(--blue-link)] text-sm mt-2 cursor-pointer">
        Delivery to New York - Update Location
      </p>
      <p className="text-red-600 text-sm mt-2">
        Usually ships within 4 to 5 days
      </p>

      <select className="w-full border rounded-md p-2 mt-3 text-sm">
        <option>Quantity: 1</option>
        <option>Quantity: 2</option>
        <option>Quantity: 3</option>
      </select>

      <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 rounded-md mt-3">
        Add to Cart
      </button>
      <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 rounded-md mt-2">
        Buy Now
      </button>

      <div className="text-sm text-gray-600 mt-3">
        <p>
          Ships from <span className="font-medium">Monatik LLC</span>
        </p>
        <p>
          Sold by{" "}
          <span className="text-blue-600 cursor-pointer">Monatik LLC</span>
        </p>
        <p>
          Payment{" "}
          <span className="text-blue-600 cursor-pointer">
            Secure transaction
          </span>
        </p>
      </div>

      <button className="w-full border rounded-md py-2 mt-3 text-sm hover:bg-gray-50">
        Add to List
      </button>
    </div>
  );
};

export default QuintatyCard;
