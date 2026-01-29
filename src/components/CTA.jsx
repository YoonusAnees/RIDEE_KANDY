import React from "react";

export default function CTA() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative h-[63vh] flex flex-col justify-center items-center px-4 sm:px-6 md:px-12">
        {/* Rotated Figma Rectangle (1804x633, 109.316936deg) */}
        <div
          className="
            pointer-events-none
            absolute
            w-[157vw] h-[50vw]
            max-w-[1804px] max-h-[633px]
            min-w-[360px] min-h-[140px]
            bg-[url('/src/assets/images/Rectangle-4.png')]
            bg-no-repeat bg-center bg-contain
            rotate-[310deg]
            -top-[12vh] -right-[18vw]
            md:-top-[19vh] md:-right-[45vw]
            z-0
            opacity-20
          "
        />

        {/* Light overlay */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-[46vw] bg-gray-200/10 z-0" />

        {/* Decorative lines */}
        <div className="pointer-events-none absolute top-[15%] w-full z-0">
          <div className="ml-auto w-[49vw] border-t-[3px] border-gray-200/10 mr-6 md:mr-15" />
        </div>

        <div className="pointer-events-none absolute right-6 md:right-15 top-[15%] z-0">
          <div className="h-[18vh] md:h-[47vh] border-r-[3px] border-gray-200/10" />
        </div>

        {/* CONTENT */}
        <div
          className="
            relative z-10
            w-[74.2vw] h-[16.9vh]
            max-w-[1068px] max-h-[244px]
            min-w-[300px] min-h-[180px]
            mx-auto
            text-center
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
              mb-10 md:mb-0
              
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
              Step into Ridee Boutique Hotel, where modern comfort embraces the
              soul of old Sri Lankan charm. Set in the heart of Kandy, our
              serene retreat invites you to discover authentic hospitality, rich
              traditions, and the gentle beauty of a place that feels like home,
              yet unlike anywhere else.
            </p>
          </div>
        </div>

        {/* CTA BUTTON */}
        <div className="relative z-10 flex mb-10 mt-20 md:mt-0 md:mb-35 justify-center">
          <button
            className="
              font-wasted font-normal
              text-[16px] sm:text-[18px] md:text-[20px]
              leading-[24px]
              tracking-[0.2em]
              text-white

              bg-[#1e1e1f] border-2 border-black
              px-8 sm:px-10 md:px-[30px]
              py-4 sm:py-[18px] md:py-[20px]

              min-w-[180px] md:w-[222px]
              h-[56px] md:h-[65px]

              flex items-center justify-center
              transition
              hover:bg-white hover:text-black
            "
          >
            <a href="/contact">Call to Book</a>
          </button>
        </div>

        {/* Bottom graphic */}
        <div className="absolute -bottom-5 md:-bottom-8 left-0 right-0 z-10  flex justify-center bg-gray-500/5  overflow-visible">
          <div
            className="
              w-[31.7vw] h-[6.8vw]
              max-w-[456px] max-h-[98px]
              min-w-[220px] min-h-[48px]
              bg-[url('/src/assets/images/SECTION-5.svg')]
              bg-no-repeat bg-center bg-contain
            "
          />
        </div>
      </div>
    </section>
  );
}
