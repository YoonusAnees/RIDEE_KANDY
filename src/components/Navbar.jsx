import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <>
      {/* NAVBAR FRAME */}
      <nav
        className="
          fixed top-0 left-0 w-full z-50
          h-[122px]
          backdrop-blur-2xl
          bg-white/10
          shadow-[0_20px_60px_rgba(0,0,0,0.35)]
          border-b border-white/20
          text-white
        "
      >
        {/* glass light */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-x-0 top-0 h-px bg-white/40" />
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[70vw] h-[70vw] rounded-full bg-white/10 blur-3xl opacity-40" />
        </div>

        {/* NAVBAR CONTENT */}
        <div
          className="
            relative
            max-w-[1250px]
            mx-auto
            h-full
            flex items-center justify-between
            px-6
          "
        >
          {/* LOGO */}
          <div className="w-14 lg:w-16">
            <img
              src="/src/assets/images/logo.svg"
              alt="Ridee Boutique"
              className="w-full object-contain"
            />
          </div>

          {/* LINKS */}
          <div
            className="
              hidden md:flex
              items-center
              gap-12
font-source-pro             font-normal
              text-[16px]
              leading-[24px]
              uppercase
            "
          >
            <span className="tracking-[3px] cursor-pointer hover:text-white/80">Home</span>
            <span className="tracking-[3px] cursor-pointer hover:text-white/80">About Us</span>
            <span className="tracking-[3px] cursor-pointer hover:text-white/80">
              Rooms & Suites
            </span>
            <span className="tracking-[3px] cursor-pointer hover:text-white/80">Packages</span>
            <span className="tracking-[3px] cursor-pointer hover:text-white/80">Contact Us</span>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">
            {/* CALL BUTTON */}
            <div
              className="
                hidden md:flex
                items-center justify-center
                h-[55px]
                px-[30px]
                border-2 border-white/60
                font-Wasted
                text-[18px]
                leading-[24px]
                hover:bg-white/10
                transition
                cursor-pointer
                font-source-pro
                tracking-[3px]
              "
            >
              Call Now
            </div>

            {/* MOBILE TOGGLE */}
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

      {/* MOBILE MENU */}
      <div
        className={`
          fixed inset-0 z-40 md:hidden
          transition-opacity duration-300
          ${open ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
      >
        <div
          className="
            absolute inset-0
            bg-black/70
            backdrop-blur-2xl
            flex flex-col items-center justify-center
            gap-8
            text-white
            font-Wasted
          "
        >
          {[
            "Home",
            "About Us",
            "Rooms & Suites",
            "Packages",
            "Contact Us",
          ].map((item) => (
            <div
              key={item}
              onClick={() => setOpen(false)}
              className="text-2xl cursor-pointer"
            >
              {item}
            </div>
          ))}

          <div className="mt-6 px-12 py-4 border border-white/40 text-xl">
            Call Now
          </div>
        </div>
      </div>
    </>
  );
}
