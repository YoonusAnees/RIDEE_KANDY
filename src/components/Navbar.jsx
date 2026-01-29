import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo.svg";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isLightBg, setIsLightBg] = useState(false);

  // lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  // Section-based switching using IntersectionObserver
  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll('[data-nav="light"]'),
    );

    // if no marked sections, just default to dark mode
    if (!sections.length) {
      setIsLightBg(false);
      return;
    }

    const NAV_H = 122; // your navbar height
    const visibleSet = new Set(); // track visible light sections

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;

          if (entry.isIntersecting) visibleSet.add(el);
          else visibleSet.delete(el);
        });

        // if ANY light section is visible behind navbar -> switch to light mode
        setIsLightBg(visibleSet.size > 0);
      },
      {
        root: null,
        // this makes "in view" consider the area just under navbar
        rootMargin: `-${NAV_H}px 0px -60% 0px`,
        threshold: 0.01,
      },
    );

    sections.forEach((s) => observer.observe(s));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* NAVBAR FRAME */}
      <nav
        className={`
          fixed top-0 left-0 w-full z-50
          h-[122px]
          backdrop-blur-2xl
          shadow-[0_20px_60px_rgba(0,0,0,0.35)]
          transition-colors duration-300
          ${isLightBg ? "bg-white/80 text-black border-b border-black/20" : "bg-white/10 text-white border-b border-white/20"}
        `}
      >
        {/* glass light */}
        <div className="pointer-events-none absolute inset-0">
          <div
            className={`
              absolute inset-x-0 top-0 h-px
              ${isLightBg ? "bg-black/25" : "bg-white/40"}
            `}
          />
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
              src={logo}
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
              font-source-pro font-normal
              text-[16px]
              leading-[24px]
              uppercase
            "
          >
            {[
              "Home",
              "About Us",
              "Rooms & Suites",
              "Packages",
              "Contact Us",
            ].map((item) => (
              <span
                key={item}
                className={`
                  tracking-[3px] cursor-pointer transition
                  ${isLightBg ? "hover:text-black/70" : "hover:text-white/80"}
                `}
              >
                {item}
              </span>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">
            {/* CALL BUTTON */}
            <div
              className={`
                hidden md:flex
                items-center justify-center
                h-[55px]
                px-[30px]
                border-2
                font-Wasted
                text-[18px]
                leading-[24px]
                transition
                cursor-pointer
                font-source-pro
                tracking-[3px]
                ${isLightBg ? "border-black/40 hover:bg-black/5" : "border-white/60 hover:bg-white/10"}
              `}
            >
              Call Now
            </div>

            {/* MOBILE TOGGLE */}
            <button
              onClick={() => setOpen(!open)}
              className={`md:hidden text-3xl ${isLightBg ? "text-black" : "text-white"}`}
              aria-label="Toggle menu"
            >
              {open ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU (always dark overlay so keep text white) */}
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
          {["Home", "About Us", "Rooms & Suites", "Packages", "Contact Us"].map(
            (item) => (
              <div
                key={item}
                onClick={() => setOpen(false)}
                className="text-2xl cursor-pointer"
              >
                {item}
              </div>
            ),
          )}

          <div className="mt-6 px-12 py-4 border border-white/40 text-xl">
            Call Now
          </div>
        </div>
      </div>
    </>
  );
}
