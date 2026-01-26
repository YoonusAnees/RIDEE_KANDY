import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <>
      <nav
        className="
          fixed top-0 left-0 w-[100vw] z-50
          h-16 sm:h-20 lg:h-24
          px-4 sm:px-8 lg:px-16
          text-white
          backdrop-blur-2xl
          bg-white/10
          shadow-[0_10px_40px_rgba(0,0,0,0.35)]
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
            <div className="cursor-pointer hover:text-white/80">Home</div>
            <div className="cursor-pointer hover:text-white/80">About Us</div>
            <div className="cursor-pointer hover:text-white/80">Rooms & Suites</div>
            <div className="cursor-pointer hover:text-white/80">Packages</div>
            <div className="cursor-pointer hover:text-white/80">Contact Us</div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex px-6 py-2 border border-amber-50 font-Wasted">
              Call Now
            </div>

            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-3xl"
              aria-label="Toggle menu"
            >
              {open ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`
          fixed inset-0 z-40
          md:hidden
          transition-opacity duration-300
          ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      >
        <div
          className="
            absolute inset-0
            bg-black/70
            backdrop-blur-2xl
            flex flex-col justify-center items-center
            gap-8 text-center
            font-Wasted
          "
        >
          <div className="text-2xl" onClick={() => setOpen(false)}>Home</div>
          <div className="text-2xl" onClick={() => setOpen(false)}>About Us</div>
          <div className="text-2xl" onClick={() => setOpen(false)}>Rooms & Suites</div>
          <div className="text-2xl" onClick={() => setOpen(false)}>Packages</div>
          <div className="text-2xl" onClick={() => setOpen(false)}>Contact Us</div>

          <div className="mt-6 px-10 py-3 border border-white/30 text-xl">
            Call Now
          </div>
        </div>
      </div>
    </>
  );
}
