import React, { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
<nav className="fixed top-0 left-0 w-full z-50 h-14 md:h-24 px-4 py-2 text-white bg-[#1A1A1A40] backdrop-blur-md">

  <div className="flex md:max-w-7xl md:mx-auto justify-between items-center h-full">
        <div className="hidden md:block h-5 w-5 md:h-12 md:w-20 mb-8">
          <img src="/src/assets/logo.svg" alt="logo" />
        </div>

        <div className="hidden md:flex gap-6 items-center md:text-[18px] justify-evenly font-extralight  font-wasted">
          <div className="mt-2 md:mx-8">Home</div>
          <div className="mt-2 md:mx-8">About Us</div>
          <div className="mt-2 md:mx-8">Rooms & Suites</div>
          <div className="mt-2 md:mx-8">PACKAGES</div>

          <div className="mt-2 md:mx-8">CONTACT US</div>
        </div>

        <div className=" md:flex  md:items-center md:justify-start md:mt-4  md:text-xl font-wasted">
          <div className="hidden md:flex justify-center items-center  border-2 border-white p-2  md:w-42 text-center md:h-14">
            Call Now
          </div>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden mb-2  text-xl items-end-safe ml-105"
          >
            ☰
          </button>
        </div>
      </div>
      {open && (
  <div className="md:hidden fixed top-14 left-0 w-full h-screen bg-black/90 backdrop-blur-md flex flex-col justify-center items-center space-y-6 text-center z-50">
    <div className="text-2xl">Home</div>
    <div className="text-2xl">About Us</div>
    <div className="text-2xl">Rooms & Suites</div>
    <div className="text-2xl">Packages</div>
    <div className="text-2xl">Contact Us</div>
    <div className="border border-white py-2 px-6 mt-4 text-xl">Call Now</div>
  </div>
)}

    </nav>
  );
}
