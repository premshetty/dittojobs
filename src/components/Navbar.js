import React from "react";

function Navbar() {
  return (
    <div className="bg-[#2a2a2a]  px-[40px]">
      <div className="flex items-baseline gap-1 p-[10px]">
        <h1 className="text-[32px] text-white font-[500]"> ditto</h1>
        <div className="h-[10px] w-[10px] bg-[blue] rounded-full"></div>
        <h1 className="text-[32px] text-white font-[500]"> jobs</h1>
      </div>
    </div>
  );
}

export default Navbar;
