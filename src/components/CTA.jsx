import React from "react";

export default function CTA() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 md:px-12">

        {/* Rotated Figma Rectangle (1804x633, 109.316936deg) */}
        <div
          className="
            pointer-events-none
            absolute
            w-[94vw] h-[33vw]
            max-w-[1804px] max-h-[633px]
            min-w-[360px] min-h-[140px]
            bg-[url('/src/assets/Rectangle-4.png')]
            bg-no-repeat bg-center bg-contain
            rotate-[109.316936deg]
            -top-[12vh] -right-[18vw]
            md:-top-[8vh] md:-right-[10vw]
            z-0
          "
        />

        {/* Light overlay */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-[45vw] bg-gray-500/10 z-0" />

        {/* Decorative lines */}
        <div className="pointer-events-none absolute top-[35%] w-full z-0">
          <div className="ml-auto w-[60vw] border-t-[3px] border-gray-200/70 mr-6 md:mr-16" />
        </div>

        <div className="pointer-events-none absolute right-6 md:right-12 top-[35%] z-0">
          <div className="h-[18vh] md:h-[30vh] border-r-[3px] border-gray-200/70" />
        </div>

        {/* CONTENT */}
        <div
          className="
            relative z-10
            w-[74.2vw] h-[16.9vw]
            max-w-[1068px] max-h-[244px]
            min-w-[300px] min-h-[180px]
            mx-auto
            text-center
            mt-10 md:mt-20
            flex flex-col justify-center
          "
        >
          <h1
            className="
              font-wasted
              font-normal
              text-[22px] sm:text-[26px] md:text-[30px]
              leading-[38px]
              tracking-normal
              text-black
            "
          >
            Discover the Soul of Sri Lankan Serenity
          </h1>

          <div
            className="
              mx-auto
              w-[74.2vw] h-[5vw]
              max-w-[1068.259px] max-h-[72px]
              min-w-[300px] min-h-[72px]
              text-center
              flex items-center justify-center
            "
          >
            <p className="font-jacques font-normal text-[18px] leading-[24px] text-gray-800 text-center">
              Step into Ridee Boutique Hotel, where modern comfort embraces the soul of
              old Sri Lankan charm. Set in the heart of Kandy, our serene retreat invites
              you to discover authentic hospitality, rich traditions, and the gentle
              beauty of a place that feels like home, yet unlike anywhere else.
            </p>
          </div>
        </div>

        {/* CTA BUTTON */}
        <div className="relative z-10 mt-10 flex justify-center">
          <button
            className="
              font-wasted font-normal
              text-[16px] sm:text-[18px] md:text-[20px]
              leading-[24px]
              tracking-[0.2em]
              text-white

              bg-black border-2 border-black
              px-8 sm:px-10 md:px-[30px]
              py-4 sm:py-[18px] md:py-[20px]

              min-w-[180px] md:w-[222px]
              h-[56px] md:h-[65px]

              flex items-center justify-center
              transition
              hover:bg-white hover:text-black
            "
          >
            Call to Book
          </button>
        </div>

        {/* Bottom graphic */}
        <div className="absolute -bottom-4 md:-bottom-12 left-0 right-0 z-10 mt-16 flex justify-center bg-gray-500/5">
          <div
            className="
              w-[31.7vw] h-[6.8vw]
              max-w-[456px] max-h-[98px]
              min-w-[220px] min-h-[48px]
              bg-[url('/src/assets/SECTION-5.svg')]
              bg-no-repeat bg-center bg-contain
            "
          />
        </div>
      </div>
    </section>
  );
}
