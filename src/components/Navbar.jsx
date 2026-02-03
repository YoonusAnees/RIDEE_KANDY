import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo.svg";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isLightBg, setIsLightBg] = useState(false);

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/about" },
    { label: "Rooms & Suites", to: "/rooms" },
    { label: "Packages", to: "/packages" },
    { label: "Contact Us", to: "/contact" },
  ];

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll('[data-nav="light"]'),
    );

    if (!sections.length) {
      setIsLightBg(false);
      return;
    }

    const NAV_H = 122;
    const visibleSet = new Set();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          if (entry.isIntersecting) visibleSet.add(el);
          else visibleSet.delete(el);
        });
        setIsLightBg(visibleSet.size > 0);
      },
      {
        root: null,
        rootMargin: `-${NAV_H}px 0px -60% 0px`,
        threshold: 0.01,
      },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Glassmorphism base classes – feel free to tweak blur / opacity
  const glassBase = `
    bg-white/15               // lower opacity = stronger glass feel
    backdrop-blur-xl          // or backdrop-blur-2xl / backdrop-blur-lg
    backdrop-saturate-150     // subtle boost in color vibrancy (optional but nice)
    border border-white/20
    shadow-[0_8px_32px_rgba(0,0,0,0.15)]
    transition-all duration-500
  `;

  const glassLight = `
    bg-white/75
    backdrop-blur-lg
    border-black/10
    shadow-[0_8px_32px_rgba(31,38,135,0.07)]
  `;

  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 w-full z-50
          h-[122px]
          ${isLightBg ? glassLight : glassBase}
        `}
      >
        {/* Optional subtle highlight / shine effect on top edge */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className={`
              absolute inset-x-0 top-0 h-[1px]
              bg-gradient-to-r from-transparent via-white/30 to-transparent
              ${isLightBg ? "via-black/20" : "via-white/30"}
            `}
          />
          {/* Optional soft radial glow (common in modern glassmorphism) */}
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] rounded-full bg-white/5 blur-3xl opacity-60 pointer-events-none" />
        </div>

        <div className="relative max-w-[1250px] mx-auto h-full flex items-center justify-between px-6">
          {/* LOGO */}
          <NavLink to="/" className="w-14 lg:w-16 flex-shrink-0">
            <img
              src={logo}
              alt="Ridee Boutique"
              className="w-full object-contain"
            />
          </NavLink>

          {/* DESKTOP LINKS */}
          <div
            className="
              hidden md:flex items-center gap-12
              font-source-pro font-normal text-[16px] leading-[24px] uppercase tracking-[3px]
            "
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) => `
                  relative transition-colors duration-300
                  ${
                    isLightBg
                      ? "text-black hover:text-black/70"
                      : "text-white hover:text-white/80"
                  }
                  ${isActive && (isLightBg ? "text-black" : "text-white")}
                `}
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    <span
                      className={`
                        absolute left-1/2 -translate-x-1/2 -bottom-2
                        h-[2px] rounded-full
                        transition-all duration-400 ease-out
                        ${isActive ? "w-6 opacity-100" : "w-0 opacity-0"}
                        ${isLightBg ? "bg-black/70" : "bg-white"}
                      `}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-5">
            <div
              className={`
                hidden md:flex items-center justify-center
                h-[52px] px-8
                border font-source-pro text-[15px] tracking-[3px] uppercase
                transition-all duration-300 cursor-pointer
                ${
                  isLightBg
                    ? "border-black/30 text-black hover:bg-black/5"
                    : "border-white text-white hover:bg-white/10"
                }
              `}
            >
              Call Now
            </div>

            <button
              onClick={() => setOpen(!open)}
              className={`md:hidden text-3xl transition-colors ${
                isLightBg ? "text-black" : "text-white"
              }`}
              aria-label="Toggle menu"
            >
              {open ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU – also with glass effect */}
      <div
        className={`
    fixed inset-0 z-40 md:hidden
    transition-opacity duration-500
    ${open ? "opacity-100" : "opacity-0 pointer-events-none"}
  `}
      >
        <div
          className="
      absolute inset-0
      bg-black/60 backdrop-blur-2xl
      flex flex-col items-center justify-center gap-2
      text-white font-Wasted text-[20px]
      overflow-y-auto
      overscroll-contain
    "
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `relative transition-all duration-300
           ${
             isActive
               ? "opacity-100 scale-110"
               : "opacity-80 hover:opacity-100 hover:scale-105"
           }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  <span
                    className={`
                block mx-auto mt-3 h-[3px] rounded-full bg-white/70
                transition-all duration-400
                ${isActive ? "w-16 opacity-100" : "w-0 opacity-0"}
              `}
                  />
                </>
              )}
            </NavLink>
          ))}

          <div className="mt-10 px-10 py-5 border border-white/30 text-[20px] tracking-wider hover:bg-white/10 transition">
            Call Now
          </div>
        </div>
      </div>
    </>
  );
}
