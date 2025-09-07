import React from "react";
import HeaderLink from "./headerLink";
import HumborgerMenue from "./humborgerMenue";
import Logo from "./logo";
import Serchbar from "./headerSearch/serchbar";

import RightSection from "./RightSection";

const Header = () => {
  return (
    <div className="w-full" suppressHydrationWarning>
      {/* Main Header */}
      <div
        className="bg-[#131921] text-white px-2 sm:px-4 py-2 sm:py-3"
        suppressHydrationWarning
      >
        <div className="w-full max-w-8xl mx-auto  flex flex-col lg:flex-row items-center justify-between space-y-3 lg:space-y-0">
          <div>
            <Logo />
          </div>

          <div>
            <Serchbar />
          </div>

          <div>
            <RightSection />
          </div>
        </div>
      </div>

      <div
        className="bg-[#232f3e] text-white px-2 sm:px-4 py-2 shadow-md"
        suppressHydrationWarning
      >
        <div className="w-full max-w-8xl mx-auto flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-6">
          {/* Hamburger Menu */}
          <div className=" hidden sm:flex">
            <HumborgerMenue />
          </div>
          {/* Navigation Links Swiper */}
          <div className="flex-1 w-full overflow-hidden relative">
            <HeaderLink />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
