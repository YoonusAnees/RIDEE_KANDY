import React, { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="
        fixed top-0 left-0 w-[100vw] z-50
        h-[14vw] md:h-[8vw] max-h-30  px-[4vw]
        text-white
        backdrop-blur-2xl
        bg-gradient-to from-white/18 via-white/10 to-white/5
        
        shadow-[0_10px_40px_rgba(0,0,0,0.35)]
      "
    >
      {/* glass highlight + subtle glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-white/40" />
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] rounded-full bg-white/10 blur-3xl opacity-40" />
      </div>

      {/* MAIN BAR */}
      <div className="relative flex max-w-[90vw] mx-auto justify-between items-center h-full">
        {/* LOGO */}
        <div className="block w-[6vw] max-w-20">
          <img src="/src/assets/logo.svg" alt="logo" className="w-full" />
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-[3vw] text-[1.2vw] font-extralight font-Wasted">
          <div className="hover:text-white/90 cursor-pointer">Home</div>
          <div className="hover:text-white/90 cursor-pointer">About Us</div>
          <div className="hover:text-white/90 cursor-pointer">Rooms & Suites</div>
          <div className="hover:text-white/90 cursor-pointer">Packages</div>
          <div className="hover:text-white/90 cursor-pointer">Contact Us</div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center">
          {/* CALL BUTTON */}
          <div
            className="
              hidden md:flex items-center justify-center
              px-[2vw] py-[0.8vw] text-[1.2vw] font-Wasted
              border-2 border-amber-50
            "
          >
            Call Now
          </div>

          {/* HAMBURGER */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-[6vw] relative"
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE MENU (Liquid Glass) */}
      {open && (
        <div
          className="
            md:hidden fixed top-[14vw] left-0 w-[100vw] h-[100vh]
            backdrop-blur-2xl
            bg-gradient-to-b from-black/60 via-black/50 to-black/40
            border-t border-white/10
            flex flex-col justify-center items-center gap-[6vw]
            text-center z-50 font-Wasted
          "
        >
          <div className="text-[6vw]">Home</div>
          <div className="text-[6vw]">About Us</div>
          <div className="text-[6vw]">Rooms & Suites</div>
          <div className="text-[6vw]">Packages</div>
          <div className="text-[6vw]">Contact Us</div>

          <div
            className="
              px-[6vw] py-[2vw] text-[5vw]
              border border-white/25
              bg-white/10
              backdrop-blur-xl
              shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]
            "
          >
            Call Now
          </div>
        </div>
      )}
    </nav>
  );
}
