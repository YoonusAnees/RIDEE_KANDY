import React from "react";

export default function Home() {
  return (
    <div className="w-full md:max-h-screen">
      {/* HERO with background image */}
      <section
        className="
    relative w-full
    bg-[url('/src/assets/Home.jpg')]
    bg-center bg-no-repeat bg-cover
    aspect-[1/1] 
    md:aspect-[16/9] 
    flex items-center justify-center text-center text-white
  "
      >
        {/* dark overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* content */}
        <div className="relative z-10 max-w-6xl md:max-w-5xl mx-auto pt-24 md:pt-24">
          <p className="text-5xl font-serif my-4 font-extralight font-wasted">
            Embrace the Beauty of Timeless Stay
          </p>
          <p className="md:px-96 px-4 text-xl font-serif mt-10">
            with Ridee Boutique Hotel
          </p>
        </div>
      </section>

      {/* NEXT SECTION-2-elcome to Ridee Boutique */}
      <section
        className="relative  w-full h-screen
       bg-[url('/src/assets/Rectangle.png')]
       bg-center bg-no-repeat bg-cover
       flex items-center justify-center text-center text-white"
      >
        <div className="absolute  md:right-10 md:bottom-7 ">
          <div className=" md:h-140 md:w-165 bg-white/80">
            <div className="flex flex-col gap-2 text-center">
              <div className="mt-20 text-black">
                <p className="md:text-5xl font-serif my-5 font-extralight font-wasted">
                  Welcome to
                </p>
                <p className="md:text-6xl font-serif">Ridee Boutique</p>
              </div>
              <div className="text-black px-[50px] font-bold  py-6 text-center text-xl">
                <p>
                  Ridee Boutique is located in the last kingdom of Sri Lanka
                  Kandy. A beautific abode offering you the comfort of privacy,
                  this luxury hotel is conveniently placed in front of the Kandy
                  Lake. A hand of warm Sri Lankan hospitality is extended to all
                  its guests at Ridee.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEXT SECTION-3-Experience the best we provide */}
      <section className="bg-amber-200 w-full h-screen">
        {/* content */}
      </section>

      {/* NEXT SECTION-4-Explore Our Rooms */}
      <section className="bg-amber-200 w-full h-screen">
        {/* content */}
      </section>

      {/* NEXT SECTION-5- Experience The City */}
      <section className="bg-amber-200 w-full h-screen">
        {/* content */}
      </section>

      {/* NEXT SECTOIN-6- THE TEMPLE OF TOOTH RELIC  */}

      <section className="bg-amber-200 w-full h-screen">
        {/* content */}
      </section>
    </div>
  );
}
