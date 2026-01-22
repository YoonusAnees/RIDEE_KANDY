import React from "react";

export default function Navbar() {
  return (
    <nav
      className="md:sticky md:top-0 md:z-50 
      h-80 md:h-32 p-4 md:px-2 py-6 text-white
      bg-[##1A1A1A40] backdrop-blur-md"
    >
      <div className="md:max-w-7xl md:mx-auto md:flex justify-between items-center mt-3">
        <div className="h-5 w-5 md:h-10 md:w-20 md:mt-4">
          <img src="./vite.svg" alt="logo" />
        </div>

        <div className="md:flex gap-6 items-center md:text-[18px] justify-evenly font-extralight  font-serif">
          <div className="mt-2 md:mx-8">Home</div>
          <div className="mt-2 md:mx-8">About Us</div>
          <div className="mt-2 md:mx-8">Rooms & Suites</div>
          <div className="mt-2 md:mx-8">PACKAGES</div>

          <div className="mt-2 md:mx-8">CONTACT US</div>
        </div>

        <div className="flex items-center justify-start mt-4 md:mt-1 md:text-xl font-serif">
          <div className="flex justify-center items-center  border-2 border-white p-2  md:w-42 text-center md:h-14">
            Call Now
          </div>
        </div>
      </div>
    </nav>
  );
}
