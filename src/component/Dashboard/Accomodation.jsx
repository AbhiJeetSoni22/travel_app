import React from "react";

import HotelCart from "./HotelCart";
const Accomodation = () => {
  return (
    <div className="mt-6">
      <div className="flex  justify-between items-center mb-5 ">
        <h3 className="font-medium text-[18px] text-[#0B0809]  dark:text-[#F5F5F5]">
          Accomodation
        </h3>
        <a className=" dark:text-[#D1F462]  text-[#313DDF] text-[10px] sm:text-[12px] md:text-[14px]  underline  font-[600]">
          See all
        </a>
      </div>

     <HotelCart />
    </div>
  );
};

export default Accomodation;
