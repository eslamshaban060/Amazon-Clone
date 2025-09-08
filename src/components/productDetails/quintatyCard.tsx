import React, { useState } from "react";
import { ChevronDown, MapPin, Check } from "lucide-react";
import Product from "@/Data/ApiData/productDetails";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addItem } from "@/redux/slices/listSlice";
import { addCartItem } from "@/redux/slices/cartSlice";

interface ProductType {
  productDetails: Product;
}

const Toast = ({ message, isVisible, onClose, type }) => {
  React.useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed top-4 right-[50%] transform translate-x-[50%] ${
        type === "error" ? "bg-red-600" : "bg-green-600"
      } text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-2 z-50 animate-in slide-in-from-right duration-300`}
    >
      <Check size={16} />
      <span>{message}</span>
    </div>
  );
};

const QuintatyCard: React.FC<ProductType> = ({ productDetails }) => {
  const dispatch = useAppDispatch();
  const [quantity, setQuantity] = useState(1);
  const itmlist = useAppSelector((state) => state.list.list);
  const [toast, setToast] = useState({
    isVisible: false,
    message: "",
    type: "success",
  });

  const showToast = (message, type = "success") => {
    setToast({ isVisible: true, message, type });
  };

  const hideToast = () => {
    setToast({ isVisible: false, message: "", type: "success" });
  };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      dispatch(addCartItem(productDetails));
    }
    showToast("Added to Cart!", "success");
  };

  const handleBuyNow = () => {
    dispatch(addCartItem(productDetails));
    showToast("Proceeding to checkout...", "success");
  };

  const handleAddToList = () => {
    const alreadyInList = itmlist.some((item) => item.id === productDetails.id);
    if (alreadyInList) {
      showToast("⚠️ Item already in your List!", "error");
    } else {
      dispatch(addItem(productDetails));
      showToast("Added to List!", "success");
    }
  };

  return (
    <>
      <Toast
        message={toast.message}
        isVisible={toast.isVisible}
        onClose={hideToast}
        type={toast.type}
      />

      <div className="border rounded-lg p-4 w-full max-w-sm bg-white shadow-sm">
        {/* Price Section */}
        <div className="mb-3">
          <div className="flex items-baseline">
            <span className="text-xs text-gray-600 mr-1">EGP</span>
            <span className="text-2xl font-normal text-black">
              {productDetails.price}
            </span>
            <span className="text-xs text-gray-600 ml-1 relative top-0">
              00
            </span>
          </div>
        </div>

        {/* FREE Returns */}
        <div className="mb-3">
          <div className="flex items-center text-sm text-blue-600 cursor-pointer hover:underline">
            <span className="font-medium">FREE Returns</span>
            <ChevronDown size={14} className="ml-1" />
          </div>
        </div>

        {/* Delivery Info */}
        <div className="mb-3 space-y-1">
          <p className="text-sm text-black">
            <span className="font-medium">
              FREE delivery Wednesday, 10 September
            </span>
            <span className="text-gray-600"> on your first order</span>
          </p>

          <p className="text-sm text-black">
            Or fastest delivery{" "}
            <span className="font-medium">Tomorrow, 9 September</span>. Order
            within{" "}
            <span className="text-green-700 font-medium">10 hrs 34 mins</span>
          </p>
        </div>

        {/* Location */}
        <div className="mb-3 flex items-center text-sm text-gray-600">
          <MapPin size={14} className="mr-1" />
          <span className="text-blue-600 hover:underline cursor-pointer">
            Deliver to Egypt
          </span>
        </div>

        {/* Stock Status */}
        <div className="mb-4">
          <span className="text-green-700 font-medium text-sm">In Stock</span>
        </div>

        {/* Quantity Selector */}
        <div className="mb-4">
          <div className="relative">
            <select
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm bg-white appearance-none cursor-pointer hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value={1}>Quantity: 1</option>
              <option value={2}>Quantity: 2</option>
              <option value={3}>Quantity: 3</option>
              <option value={4}>Quantity: 4</option>
              <option value={5}>Quantity: 5</option>
            </select>
            <ChevronDown
              size={16}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2 mb-4">
          <button
            onClick={handleAddToCart}
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2.5 px-4 rounded-full transition-colors duration-200 text-sm"
          >
            Add to Cart
          </button>

          <button
            onClick={handleBuyNow}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2.5 px-4 rounded-full transition-colors duration-200 text-sm"
          >
            Buy Now
          </button>
        </div>

        {/* Fulfillment Info */}
        <div className="text-xs text-gray-600 mb-3">
          <div className="flex items-center justify-between">
            <span>Fulfilled by</span>
            <span className="font-medium text-black">Amazon</span>
          </div>
        </div>

        {/* See More Button */}
        <div className="mb-4">
          <button className="text-blue-600 text-xs hover:underline flex items-center">
            <ChevronDown size={12} className="mr-1" />
            See more
          </button>
        </div>

        {/* Add to List Button */}
        <button
          onClick={handleAddToList}
          className="w-full border border-gray-300 rounded-full py-2 px-4 text-sm text-black hover:bg-gray-50 transition-colors duration-200"
        >
          Add to List
        </button>
      </div>
    </>
  );
};

export default QuintatyCard;
