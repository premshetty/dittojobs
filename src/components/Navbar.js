import React from "react";
import logo from "../data/logo.png";
function Navbar() {
  return (
    <div className="bg-[#2a2a2a]  px-[40px]">
      <img src={logo} alt="logo" className="py-4" />
    </div>
  );
}

export default Navbar;
