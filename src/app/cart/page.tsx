"use client";
import React from "react";
import { CheckCircle, Star } from "lucide-react";
import Image from "next/image";
import { SlTrash } from "react-icons/sl";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

const ShoppingCart = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 bg-gray-50 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main Cart Section */}
        <div className="lg:col-span-3">
          <div className="bg-white shadow-sm p-6">
            <h1 className="text-3xl font-mono mb-3">Shopping Cart</h1>
            <p className="text-end border-b border-gray-300 text-gray-800 ">
              Price
            </p>

            {/* Product Item */}
            <div className="flex flex-col md:flex-row gap-4 py-6 border-b border-gray-300">
              {/* Product Image */}
              <div className="flex-shrink-0">
                <Image
                  src="/Cart/smartWatch.jpg"
                  alt="smartWatch"
                  width={162}
                  height={225}
                  className="rounded-lg object-cover w-52 px-1.5"
                />
              </div>

              {/* Product Details */}
              <div className="flex-1  ">
                <h3 className="font-semibold text-lg mb-2">
                  Fitbit Versa 3 Health and Fitness Smartwatch, Amazon Exclusive
                  Color, GPS, 24/7 Heart Rate, Alexa Built-in, 6+ Days Battery,
                  Thistle/Gold, One Size (S & L Bands Included)
                </h3>

                <div className="flex items-center gap-2 text-green-800 text-sm ">
                  <CheckCircle size={16} />
                  <span>In Stock</span>
                </div>

                <div className="text-lg text-black mb-3">
                  FREE delivery{" "}
                  <span className="font-semibold">Thu, 4 Sep</span> available at
                  checkout
                </div>

                {/* Quantity and Actions */}
                <div className="flex items-center gap-4 mb-3 flex-wrap">
                  <div className="flex items-center border-4 border-yellow-400 rounded-4xl">
                    <button className="px-3 py-0.5 hover:bg-gray-100 transition-colors">
                      <SlTrash className=" text-lg cursor-pointer" />
                      <FaMinus className=" text-lg cursor-pointer hidden" />
                    </button>
                    <span className="py-0.5 bg-gray-50 min-w-[30px] text-center font-semibold">
                      1
                    </span>
                    <button className="px-3 py-0.5 hover:bg-gray-100 transition-colors">
                      <FaPlus className=" text-lg cursor-pointer" />
                    </button>
                  </div>

                  <button className="text-cyan-900 border-s border-gray-200 ps-3 hover:underline text-sm">
                    Delete
                  </button>
                  <button className="text-cyan-900 border-s border-gray-200 ps-3 hover:underline text-sm">
                    Save for later
                  </button>
                  <button className="text-cyan-900 border-s border-gray-200 ps-3 hover:underline text-sm">
                    Share
                  </button>
                </div>
              </div>

              {/* Price */}
              <div className="text-right">
                <div className="text-xl font-bold">EGP 8,888.00</div>
              </div>
            </div>

            {/* Subtotal */}
            <div className="pt-4 text-right">
              <div className="text-lg">
                <span className="text-xl">Subtotal (1 item):</span>
                <span className="font-bold ml-2 text-xl ">EGP 8,888.00</span>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="text-sm mt-4 leading-relaxed">
            The price and availability of items at amazon.eg are subject to
            change. The Cart is a temporary place to store a list of your items
            and reflects each item's most recent price.
            <br /> Do you have a gift card or promotional code? We'll ask you to
            enter your claim code when it's time to pay.
          </div>
        </div>
        {/* ********************************************************************************* */}
        {/* Sidebar */}
        <div className="space-y-6">
          {/* Free Shipping Notice */}
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex flex-col items-start ">
              <div className="flex items-center gap-2 text-green-800 text-sm">
                <CheckCircle size={20} />
                <p className="text-xs">
                  Your order qualifies for FREE Shipping
                </p>
              </div>

              <div className="text-sm text-gray-600">
                <p className="ms-7">Choose this option at checkout.</p>
                <span className="text-cyan-900 underline cursor-pointer ms-7 ml-1">
                  See details
                </span>
              </div>
              {/*  */}
              <div className="text-lg mt-6 mb-2">
                <span className="text-black font-medium text-lg">
                  Subtotal (1 item):
                </span>
                <span className="font-bold ml-2">EGP 8,888.00</span>
              </div>

              <button className="w-full bg-yellow-300 hover:bg-yellow-400 text-black font-semibold py-1.5 px-4 rounded-3xl transition-colors">
                Proceed to Buy
              </button>
            </div>
          </div>

          {/* Recommendations */}
          <div className="bg-white rounded-lg shadow-sm p-4">
            <h3 className="font-semibold mb-4 text-sm leading-tight">
              Customers who shopped for Fitbit Versa 3 Health and Fitness
              Smartwatch, Amazon... also shopped for:
            </h3>

            {/* Recommendation Item 1 */}
            <div className="flex gap-3 mb-4 pb-4 border-b">
              <img
                src="https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=60&h=60&fit=crop"
                alt="Amazon portable..."
                className="w-15 h-15 object-cover rounded flex-shrink-0"
              />

              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium mb-1">Amazon portable...</h4>

                <div className="flex items-center gap-1 mb-1">
                  <div className="flex">
                    <Star
                      size={12}
                      className="fill-yellow-400 text-yellow-400"
                    />
                    <Star
                      size={12}
                      className="fill-yellow-400 text-yellow-400"
                    />
                    <Star
                      size={12}
                      className="fill-yellow-400 text-yellow-400"
                    />
                    <Star size={12} className="text-gray-300" />
                    <Star size={12} className="text-gray-300" />
                  </div>
                  <span className="text-xs text-gray-500">22</span>
                </div>

                <div className="flex items-center gap-2 mb-1">
                  <span className="bg-red-100 text-red-800 text-xs px-1 rounded">
                    -3%
                  </span>
                  <span className="text-sm font-bold">EGP 188.00</span>
                </div>

                <div className="text-xs text-gray-500 mb-2">
                  List: <span className="line-through">EGP 194.00</span>
                </div>

                <div className="text-xs text-gray-600 mb-2">
                  Get it as soon as <strong>Thursday, September 4</strong>
                </div>

                <div className="text-xs text-gray-600 mb-3">
                  Fulfilled by Amazon - FREE Shipping
                </div>

                <button className="bg-yellow-300 hover:bg-yellow-400 text-black text-xs px-3 py-1 rounded-3xl transition-colors">
                  Add to cart
                </button>
              </div>
            </div>

            {/*  Recommendation Item 2 */}
            <div className="flex gap-3">
              <img
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=60&h=60&fit=crop"
                alt="Amazfit Pop 3S Smart Watch"
                className="w-15 h-15 object-cover rounded flex-shrink-0"
              />

              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium mb-1">
                  Amazfit Pop 3S Smart Watch with 1.96"...
                </h4>

                <div className="flex items-center gap-1 mb-1">
                  <div className="flex">
                    <Star
                      size={12}
                      className="fill-yellow-400 text-yellow-400"
                    />
                    <Star
                      size={12}
                      className="fill-yellow-400 text-yellow-400"
                    />
                    <Star
                      size={12}
                      className="fill-yellow-400 text-yellow-400"
                    />
                    <Star
                      size={12}
                      className="fill-yellow-400 text-yellow-400"
                    />
                    <Star size={12} className="text-gray-300" />
                  </div>
                  <span className="text-xs text-gray-500">5,405</span>
                </div>

                <div className="flex items-center gap-2 mb-1">
                  <span className="bg-red-100 text-red-800 text-xs px-1 rounded">
                    -7%
                  </span>
                  <span className="text-sm font-bold">EGP 2,499.00</span>
                </div>

                <div className="text-xs text-gray-500 mb-2">
                  List: <span className="line-through">EGP 2,699.00</span>
                </div>

                <div className="text-xs text-gray-600 mb-2">
                  EGP 26.00 shipping
                </div>

                <div className="text-xs text-gray-600 mb-3">
                  Only 1 left in stock - order soon
                </div>

                <button className="bg-yellow-300 hover:bg-yellow-400 text-black text-xs px-3 py-1 rounded-3xl transition-colors">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
