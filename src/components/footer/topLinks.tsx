import React from "react";

const TopLinks = () => {
  return (
    <div className="foot-services max-w-[1024px] mx-auto p-10">
      <div className="row flex flex-wrap justify-between gap-10">
        {/* Column 1 */}
        <div className="col w-40 flex flex-col gap-1">
          <h3 className="font-[700] text-[16px] whitespace-nowrap">
            Get to Know Us
          </h3>
          <ul className="flex flex-col gap-0 text-[14px] font-[300]">
            <li className="cursor-pointer hover:underline">About us</li>
            <li className="cursor-pointer hover:underline">Careers</li>
            <li className="cursor-pointer hover:underline">Blog</li>
            <li className="cursor-pointer hover:underline">Press releases</li>
            <li className="cursor-pointer hover:underline">Amazon Science</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="col w-40 flex flex-col gap-1">
          <h3 className="font-[700] text-[16px] whitespace-nowrap">
            Connect with Us
          </h3>
          <ul className="flex flex-col gap-0 text-[14px] font-[300]">
            <li className="cursor-pointer hover:underline">Facebook</li>
            <li className="cursor-pointer hover:underline">Twitter</li>
            <li className="cursor-pointer hover:underline">Instagram</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="col w-40 flex flex-col gap-1">
          <h3 className="font-[700] text-[16px] whitespace-nowrap">
            Make Money with Us
          </h3>
          <ul className="flex flex-col gap-0 text-[14px] font-[300]">
            <li className="cursor-pointer hover:underline">Sell on Amazon</li>
            <li className="cursor-pointer hover:underline">
              Sell under Amazon Accelerator
            </li>
            <li className="cursor-pointer hover:underline">
              Protect and Build Your Brand
            </li>
            <li className="cursor-pointer hover:underline">
              Amazon Global Selling
            </li>
            <li className="cursor-pointer hover:underline">
              Become an Affiliate
            </li>
            <li className="cursor-pointer hover:underline">
              Fulfilment by Amazon
            </li>
            <li className="cursor-pointer hover:underline">
              Advertise Your Products
            </li>
            <li className="cursor-pointer hover:underline">
              Amazon Pay on Merchants
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="col w-40 flex flex-col gap-1">
          <h3 className="font-[700] text-[16px] whitespace-nowrap">
            Let Us Help You
          </h3>
          <ul className="flex flex-col gap-0 text-[14px] font-[300]">
            <li className="cursor-pointer hover:underline">Your Account</li>
            <li className="cursor-pointer hover:underline">Returns Centre</li>
            <li className="cursor-pointer hover:underline">
              Recalls and Products Safety Alerts
            </li>
            <li className="cursor-pointer hover:underline">
              100% Purchase Protection
            </li>
            <li className="cursor-pointer hover:underline">
              Amazon App Download
            </li>
            <li className="cursor-pointer hover:underline">Help</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopLinks;
