import React from "react";
import Lists from "@/components/list/shopping-lists";

const page = () => {
  return (
    <div className="bg-[#EAEDED] p-2 md:p-5   gap-5">
      <div className=" rounded-5 lg:col-span-4">
        <Lists />
      </div>
    </div>
  );
};

export default page;
