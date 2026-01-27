import React from "react";

export default function CTA() {
  return (
    <section>
      <div className="relative flex flex-col gap-3 w-full h-[95vh] overflow-hidden">
        <div className="font-source">
          <div
            className="absolute
            w-[36vw] h-[99vh]
            bg-[url('/src/assets/Rectangle-4.png')]
            bg-no-repeat bg-center bg-contain
            md:rotate-315 md:-top-1/3 md:-right-1/28
            rotate-300
            -top-80 -right-10"
          ></div>
             {/* Horizontel */}
          <div className="absolute flex p-5 w-full mt-20 md:ml-19">
            <div
              className="absolute
              border-t-3 border-gray-200 p-5 w-3/6 h-screen right-1 mr-3 mt-1 md:mt-0  md:mr-35
    "
            ></div>
          </div>
            {/* Vertical */}
          <div className="absolute flex p-5 mt-20 md:mr-21 right-1">
            <div
              className="absolute
      border-r-3 border-gray-200 p-5 w-3/19  md:h-76  h-1/6
    "
            ></div>
          </div>

          <div
            className="absolute
            top-0
            w-[45vw] h-[100vh]
          bg-gray-500/10
            z-10 "
          ></div>

          <h1 className="text-center text-3xl p-6 md:px-12 md:mt-20">
            Discover the Soul of Sri Lankan Serenit
          </h1>
        </div>
        <div className=" p-5 md:py-1 md:px-30 text-center  md:text-[1.5vw] font-sourc">
          Step into Ridee Boutique Hotel , where modern comfort embraces the
          soul of old Sri Lankan charm. Set in the heart of Kandy, our serene
          retreat invites you to discover authentic hospitality, rich
          traditions, and the gentle beauty of a place that feels like home, yet
          unlike anywhere else.
        </div>

        <div className="flex justify-center items-center  p-5 md:px-2 md:py-4  ">
          <div className="bg-black flex items-center justify-center border-2 md:w-[15vw] w-[30vw] h-[8vh] font-source text-xl text-white text-center ">
            Call to Book
          </div>
        </div>
        <div className="bg-black/5 flex items-center justify-center p-2 md:px-1">
          <div className=" h-[13vh] w-[50vw]   bg-[url('/src/assets/SECTION-5.svg')] bg-no-repeat bg-center"></div>
        </div>
      </div>
    </section>
  );
}
