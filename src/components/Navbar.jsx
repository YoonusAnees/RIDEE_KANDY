import React, { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="
        fixed top-0 left-0 w-full z-50
        h-16 sm:h-20 lg:h-24
        px-4 sm:px-8 lg:px-16
        text-white
        backdrop-blur-2xl
        bg-white/10
        shadow-[0_10px_40px_rgba(0,0,0,0.35)]
        overflow-hidden
      "
    >
      {/* glass highlight */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-white/40" />
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] rounded-full bg-white/10 blur-3xl opacity-40" />
      </div>

      <div className="relative flex max-w-7xl mx-auto justify-between items-center h-full">
        {/* LOGO */}
        <div className="w-12 sm:w-14 lg:w-16">
          <img src="/src/assets/logo.svg" alt="logo" className="w-full" />
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-10 text-base lg:text-lg font-extralight font-Wasted">
          <div className="hover:text-white/90 cursor-pointer">Home</div>
          <div className="hover:text-white/90 cursor-pointer">About Us</div>
          <div className="hover:text-white/90 cursor-pointer">Rooms & Suites</div>
          <div className="hover:text-white/90 cursor-pointer">Packages</div>
          <div className="hover:text-white/90 cursor-pointer">Contact Us</div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">
          {/* CALL BUTTON (desktop) */}
          <div className="hidden md:flex items-center justify-center px-6 py-2 text-base font-Wasted border-2 border-amber-50">
            Call Now
          </div>

          {/* HAMBURGER */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden text-3xl leading-none"
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div
          className="
            md:hidden fixed left-0 w-full
            top-16 sm:top-20
            h-[calc(100vh-4rem)] sm:h-[calc(100vh-5rem)]
            backdrop-blur-2xl
            bg-black/60
            border-t border-white/10
            flex flex-col justify-center items-center gap-8
            text-center z-50 font-Wasted
          "
        >
          <div className="text-2xl">Home</div>
          <div className="text-2xl">About Us</div>
          <div className="text-2xl">Rooms & Suites</div>
          <div className="text-2xl">Packages</div>
          <div className="text-2xl">Contact Us</div>

          <div className="px-8 py-3 text-xl border border-white/25 bg-white/10 backdrop-blur-xl">
            Call Now
          </div>
        </div>
      )}
    </nav>
  );
}
