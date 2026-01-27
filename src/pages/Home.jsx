import React from "react";
import { IoRestaurant } from "react-icons/io5";
import { FaHouseChimneyUser } from "react-icons/fa6";
import { FaPerson } from "react-icons/fa6";
import { FaPersonRunning } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

export default function Home() {
  const rooms = [
    {
      id: 1,
      title: "PREMIUM ROOM",
      image: "./src/assets/Room1.jpg",
      description:
        "Generously designed with a separate seating area. Enjoy a balcony with lush greenery or scenic views, ideal for indulgent or extended stays.",
    },
    {
      id: 2,
      title: "EXECUTIVE  SUITE",
      image: "./src/assets/Room2.jpg",
      description:
        "Generously designed with a separate seating area. Enjoy a balcony with lush greenery or scenic views, ideal for indulgent or extended stays",
    },
    {
      id: 3,
      title: "EXECUTIVE SUITE",
      image: "./src/assets/Room3.jpg",
      description:
        "Generously designed with a separate seating area. Enjoy a balcony with lush greenery or scenic views, ideal for indulgent or extended stays.",
    },
  ];

  return (
    <div className="w-full">
      {/* HERO with background image */}
      <section
        className="
    relative w-full h-screen
    bg-[url('/src/assets/Home.jpg')]
    bg-center bg-no-repeat bg-cover
    aspect-[1/1] 
    md:aspect-[16/2] 
    flex items-center justify-center text-center text-white
  "
      >
        {/* dark overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* content */}
        <div className="relative z-10 max-w-6xl md:max-w-5xl mx-auto pt-24 md:pt-24">
          <p className="text-5xl  my-4  font-Wasted">
            Embrace the Beauty of Timeless Stay
          </p>
          <p className="md:px-96 px-4 text-xl  mt-6 font-Wasted">
            with Ridee Boutique Hotel
          </p>
        </div>
      </section>
      {/* NEXT SECTION-2-elcome to Ridee Boutique */}
      <section
        className="relative  w-full h-screen
       bg-[url('/src/assets/BG.png')]
       bg-center bg-no-repeat bg-cover
       flex items-center justify-center text-center text-white bg-white"
      >
        <div className=" md:absolute md:-left-1 md: bg-black/3 md:w-[553px] md:h-[730px]" />

        <div className="absolute  md:right-10 md:bottom-7 ">
          <div className="relative">
            {/* Left */}
            <div
              className="absolute md:w-[150px] md: h-[250px]  bg-[url('/src/assets/Rectangle183.svg')]
       bg-center bg-no-repeat bg-cover md:-top-7 -rotate-90 md:right-130 md:-rotate-90  rotate-270 top-4 right-107"
            ></div>

             <div
  className="
    absolute
    block md:hidden
    w-10 h-10
    bg-[url('/src/assets/Rectangle183.svg')]
    bg-center bg-no-repeat bg-cover
    rotate-270
    top-4 right-[428px]
  "
></div>


            {/* Right */}
            <div
              className="absolute md:w-[150px] md:h-[250px] w-10 h-10 bg-[url('/src/assets/Rectangle183.svg')]
       bg-center bg-no-repeat bg-cover md:top-95 md:-rotate-270 md:right-7 rotate-90 top-76 right-4"
            ></div>
          </div>
          <div className="p-5">
            <div className=" md:h-140 md:w-165 bg-white/80 border-2 h-80 w-full p-5">
            <div className="flex flex-col gap-2 text-center">
              <div className="md:mt-20 text-black">
                <p className="md:text-5xl font-Wasted my-5 font-extralight font-wasted">
                  Welcome to
                </p>
                <p className="md:text-6xl font-Wasted">Ridee Boutique</p>
              </div>
              <div className="text-black md:px-[50px] font-medium  md:py-6 text-center md:text-xl font-Wasted">
                <p className="font-source">
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
        </div>
      </section>
     {/* NEXT SECTION-3 - Experience the best we provide */}
<section className="relative w-full md:min-h-screen flex flex-col justify-center items-center overflow-hidden">

  {/* Background shape */}
  <div
    className="
      absolute
      w-[90vw] h-[99vh]
      md:w-[46vw] md:h-[130vh]
      bg-[url('/src/assets/Rectangle-4.png')]
      bg-no-repeat bg-center bg-contain
      rotate-[300deg]
      top-[-300px] right-[-60px]
      md:rotate-[325deg]
      md:top-[-30%] md:right-[-6%]
      z-0
    "
  />

  {/* Dark overlay */}
  <div
    className="
      absolute
      left-0 top-1/5 -translate-y-1/2
      w-[549px] md:h-[980px]
      h-[1800px]
      bg-black/10
      z-0
    "
  />

<hr class="h-px my-8 bg-neutral-quaternary border-0"></hr>

  {/* Heading */}
  <div className="relative z-10 p-5 mt-20 md:mt-10">
    <p className="font-Wasted md:text-5xl text-3xl px-6 text-center">
      Experience the best we provide
    </p>
    <p className="font-Wasted text-xl text-center md:px-72 mt-10">
      Experience the perfect blend of elegance, comfort, and authentic Sri
      Lankan charm at Ridee Boutique Hotel. Here’s why we are the ideal
      choice for your stay in Kandy
    </p>
  </div>

  {/* Cards */}
  <div className="relative z-10 flex flex-col md:flex-row w-full gap-6 justify-evenly items-center px-4">

    {/* LEFT */}
    <div className="flex flex-col gap-6">
      <div className="flex flex-col items-center p-5 md:w-[380px] text-center">
        <IoRestaurant size={30} />
        <p className="text-xl font-bold">DINING & BEVERAGES</p>
        <p className="mt-4 font-bold">
          Savor delightful meals and beverages with our on-site restaurant and café.
        </p>
      </div>

      <div className="flex flex-col items-center p-5 md:w-[380px] text-center">
        <FaHouseChimneyUser size={30} />
        <p className="text-xl font-bold">HOUSE KEEPING & MAINTENANCE</p>
        <p className="mt-4 font-bold">
          Daily housekeeping ensures your room remains pristine
        </p>
      </div>
    </div>

    {/* CENTER */}
    <div className="flex flex-col items-center p-5 md:w-[380px] text-center">
      <FaPerson size={30} />
      <p className="text-xl font-bold">GUEST SERVICES</p>
      <p className="mt-4 font-bold">
        Our team is here to make every moment seamless — from 24-hour reception
      </p>
    </div>

    {/* RIGHT */}
    <div className="flex flex-col gap-6">
      <div className="flex flex-col items-center p-5 md:w-[380px] text-center">
        <IoRestaurant size={30} />
        <p className="text-xl font-bold">Business & Connectivity</p>
        <p className="mt-4 font-bold">
          Stay connected with high-speed Wi-Fi and business-ready rooms
        </p>
      </div>

      <div className="flex flex-col items-center p-5 md:w-[380px] text-center">
        <FaPersonRunning size={30} />
        <p className="text-xl font-bold">LEISURE & RECREATION</p>
        <p className="mt-4 font-bold">
          Relax and unwind in our lounge areas, gardens, or outdoor seating.
        </p>
      </div>
    </div>
    
  </div>
      <div className="absolute bottom-1  bg-black/5 right-1 w-5/6 h-1/7"></div>

</section>

{/* NEXT SECTION-4 - Explore Our Rooms */}
<section
  className="
    relative
    min-h-[900px]
    bg-[url('/src/assets/SECTION-4.jpg')]
    bg-center bg-cover
    overflow-hidden
  "
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50 z-0" />

  <div className="relative z-10 flex flex-col gap-6">

    <h2 className="text-6xl font-Wasted text-center text-blue-300 mt-20">
      Explore Our Rooms
    </h2>

    <p className="text-center text-xl text-white md:px-40 px-4 font-source">
      Experience the perfect blend of elegance, comfort, and authentic Sri
      Lankan charm at Ridee Boutique Hotel.
    </p>

    {/* Grid wrapper */}
    <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 p-10">

      {/* DECOR SVGs */}
      <div className="hidden md:block absolute top-[150px] left-[20px] w-[150px] h-[250px] bg-[url('/src/assets/Rectangle183.svg')] bg-cover -rotate-90 z-20" />
      <div className="hidden md:block absolute top-[150px] left-1/2 -translate-x-1/2 w-[150px] h-[250px] bg-[url('/src/assets/Rectangle183.svg')] bg-cover -rotate-90 z-20" />
      <div className="hidden md:block absolute top-[150px] right-[20px] w-[150px] h-[250px] bg-[url('/src/assets/Rectangle183.svg')] bg-cover -rotate-90 z-20" />

      {rooms.map((room) => (
        <div key={room.id} className="flex flex-col border border-black/40 bg-black/30">
          <div
            className="w-full h-[300px] bg-center bg-cover"
            style={{ backgroundImage: `url(${room.image})` }}
          />
          <div className="p-6 text-white">
            <p className="text-xl font-Wasted text-center">{room.title}</p>
            <p className="mt-6 text-center">{room.description}</p>
            <div className="mt-10 text-center underline cursor-pointer">
              VIEW ROOM
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="flex justify-center items-center gap-2 text-xl text-white mt-10 cursor-pointer">
      <span>SEE ALL</span>
      <FaArrowRight />
    </div>
  </div>
</section>

      {/* NEXT SECTION-5- Experience The City */}
 <section className="relative w-full h-auto md:h-[370px] overflow-hidden">
  {/* Rotated rectangle background */}
  <div
    className="
      absolute
      w-[40vw] h-[55vh]
      md:w-[28vw] md:h-[85vh]
      bg-[url('/src/assets/Rectangle-4.png')]
      bg-no-repeat bg-center bg-contain
      rotate-210
      bottom-12 -left-5
      md:-bottom-20 md:-left-25
      pointer-events-none
      z-10
    "
  ></div>

  {/* Line SVG overlay */}
 <div className="absolute flex p-5 w-full mt-20 md:ml-19">
   <div
    className="absolute
      border-t-3 border-gray-200 p-5 w-3/19 h-screen
    "
  ></div>
 </div>
 

 <div className="absolute flex p-5 mt-20 md:ml-19">
<div
    className="absolute
      border-l-3 border-gray-200 p-5 w-3/19 h-screen
    "
  ></div>
 </div>

  {/* Right overlay */}
  <div className="absolute inset-y-0 right-1 w-7/9  bg-black/5 z-15"></div>

  {/* Content */}
  <div className="relative z-30 flex flex-col items-center justify-center px-6 py-20 md:py-30">
    <h2 className="text-center text-4xl md:text-5xl font-Wasted">
      Experience The City
    </h2>

    <p className="text-base md:text-lg p-5 text-center md:px-60 font-medium">
      Discover the heart of Kandy beyond your stay. From the sacred Temple
      of the Tooth to the peaceful Kandy Lake and colorful local markets,
      every corner tells a story.
    </p>
  </div>
</section>



      {/* NEXT SECTOIN-6- THE TEMPLE OF TOOTH RELIC  */}
      <section
        className="
    relative
    aspect-[1/1] md:aspect-[16/8]
    bg-[url('/src/assets/temple.png')]
    bg-no-repeat bg-cover
    grid grid-rows-2 md:grid-rows-5
  "
      >
        {/* ROW 1 – TITLE */}
        <div className="md:px-24 md:py-16 p-12">
          <p className="md:text-[55px] text-2xl font-source font-bold text-white">
            THE TEMPLE OF TOOTH RELIC
          </p>
        </div>

        <div></div>
        <div></div>

        {/* TEXT BOX */}
        <div className="flex items-start md:px-24 p-12">
          <div
            className="bg-zinc-800/80 backdrop-blur-md 
        w-full md:w-[28vw]
        lg:w-[40vw] lg:h-[25vh]
        p-6 md:px-10 md:py-12
        text-center text-white font-source"
          >
            <p>
              Kandy is home to the iconic Temple of the Sacred Tooth Relic, one
              of Buddhism’s most revered sites. You’ll also find other temples
              and historic churches scattered around the city, each offering a
              glimpse into the rich religious tapestry of the region
            </p>
          </div>
        </div>

        <div
          className="
      absolute
      bottom-6 right-6
      md:bottom-12 md:right-24
      flex gap-3
    "
        >
          <button className="bg-gray-400/70 hover:bg-gray-500/80 transition rounded-full p-3">
            <FaChevronLeft size={24} className="text-white" />
          </button>

          <button className="bg-gray-400/70 hover:bg-gray-500/80 transition rounded-full p-3">
            <FaChevronRight size={24} className="text-white" />
          </button>
        </div>
      </section>
    </div>
  );
}
