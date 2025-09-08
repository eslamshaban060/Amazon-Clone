"use client";
import React from "react";
import { Menu } from "lucide-react";
import Sidebar from "./sideBar";
import { useState } from "react";

const HumborgerMenue = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      <div className=" items-center  flex space-x-2 cursor-pointer hover:bg-[#37475a] px-2 py-1 rounded">
        <Menu
          onClick={() => setSidebarOpen(true)}
          className="text-white text-lg"
          suppressHydrationWarning
        />
        <span className="text-sm hidden sm:block">All</span>
      </div>
      <div>
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      </div>
    </div>
  );
};

export default HumborgerMenue;
