import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import HousekeepingMaintanace from "../assets/images/HousekeepingMaintanace.svg";
import BusinessConnectivity from "../assets/images/Business&Connectivity.svg";
import DININGBEVERAGES from "../assets/images/DININGBEVERAGES.svg";
import GUESTSERVICES from "../assets/images/GUESTSERVICES.svg";
import LEISURERECREATION from "../assets/images/LEISURERECREATION.svg";
import Temple from "../assets/images/temple.png";
import Lake from "../assets/images/BG.png";
import room1 from "../assets/images/Room1.jpg";
import room2 from "../assets/images/Room2.jpg";
import room3 from "../assets/images/Room3.jpg";

export default function Home() {
  const rooms = [
    {
      id: 1,
      title: "PREMIUM ROOM",
      image: room1,
      description:
        "Generously designed with a separate seating area. Enjoy a balcony with lush greenery or scenic views, ideal for indulgent or extended stays.",
    },
    {
      id: 2,
      title: "EXECUTIVE  SUITE",
      image: room2,
      description:
        "Generously designed with a separate seating area. Enjoy a balcony with lush greenery or scenic views, ideal for indulgent or extended stays",
    },
    {
      id: 3,
      title: "EXECUTIVE SUITE",
      image: room3,
      description:
        "Generously designed with a separate seating area. Enjoy a balcony with lush greenery or scenic views, ideal for indulgent or extended stays.",
    },
  ];

  const slides = [
    {
      image: Temple,
    },
    {
      image: Lake,
    },
  ];

  const [current, setCurrent] = React.useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);

  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="w-full overflow-hidden">
      {/* HERO with background image */}
      <section
        className="
    relative w-full min-h-screen
    bg-[url('/src/assets/images/Home.jpg')]
    bg-center bg-no-repeat bg-cover
    flex items-center justify-center
    text-white
  "
      >
        {/* dark overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* content */}
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 text-center">
          {/* main heading — EXACT FIGMA */}
          <p
            className="
        font-wasted font-normal
        text-[36px] leading-[40px]
        sm:text-[44px] sm:leading-[48px]
        md:text-[60px] md:leading-[60px]
        my-4
      "
          >
            Embrace the Beauty of Timeless Stay
          </p>

          {/* sub heading */}
          <p
            className="
        font-wasted font-normal
        mt-6
        text-[16px] leading-[24px]
        sm:text-[18px] sm:leading-[28px]
        md:text-[32px] md:leading-[32px]
        max-w-2xl mx-auto
        
      "
          >
            with Ridee Boutique Hotel
          </p>
        </div>
      </section>

      {/* NEXT SECTION-2-elcome to Ridee Boutique */}
      <section
        className="relative  w-full h-screen
       bg-[url('/src/assets/images/BG.png')]
       bg-center bg-no-repeat bg-cover
       flex items-center justify-center text-center text-white bg-white
       "
      >
        <div className=" md:absolute md:-left-1 md: bg-black/3 md:w-[600px] md:h-[782px]" />

        <div className="absolute  md:right-10 md:bottom-7 ">
          <div className="p-5">
            <div className="relative ">
              {/* TOP */}
              <div
                className="absolute
               w-[158px] h-[187px]
               bg-[url('/src/assets/images/Rectangle183.svg')]
               bg-cover bg-center bg-no-repeat
               rotate-[-90deg]
               -top-6 -left-3
               hidden md:block"
              ></div>
              {/* Mobile */}
              <div
                className="
              absolute md:hidden
              w-10 h-10
              bg-[url('/src/assets/images/Rectangle183.svg')]
              bg-cover bg-center
              rotate-[-90deg]
              top-1 left-1"
              ></div>

              {/* BOTTOM - match TOP */}
              <div
                className="absolute
               w-[158px] h-[187px]
               bg-[url('/src/assets/images/Rectangle183.svg')]
               bg-cover bg-center bg-no-repeat
               rotate-[-270deg]
               -bottom-146 left-128
               hidden md:block"
              ></div>
              {/* Mobile BOTTOM - match TOP */}
              <div
                className="absolute md:hidden
                w-10 h-10
                bg-[url('/src/assets/images/Rectangle183.svg')]
                bg-cover bg-center
                rotate-[-270deg]
                -bottom-80 right-1"
              ></div>
            </div>
            <div className=" md:h-140 md:w-165 bg-white/80 border-2 h-80 w-full p-5">
              <div className="flex flex-col gap-2 text-center">
                <div className="flex flex-col -gap-10 md:mt-20 text-black">
                  <p className="md:text-5xl font-Wasted my-5 font-extralight font-wasted md:-mb-1">
                    Welcome to
                  </p>
                  <p className="md:text-6xl font-wasted">Ridee Boutique</p>
                </div>
                <div className="text-black md:px-[50px] font-medium  md:py-6 text-center md:text-xl ">
                  <p className="font-source-pro">
                    Ridee Boutique is located in the last kingdom of Sri Lanka
                    Kandy. A beautific abode offering you the comfort of
                    privacy, this luxury hotel is conveniently placed in front
                    of the Kandy Lake. A hand of warm Sri Lankan hospitality is
                    extended to all its guests at Ridee.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEXT SECTION-3 - Experience the best we provide */}
      <section className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden">
        {/* Background shape - responsive to 972x542 & angle 119deg */}
        <div
          className="
    absolute
    w-[42.2vw] h-[47vw]
    bg-[url('/src/assets/images/Rectangle-4.png')]
    bg-no-repeat bg-center bg-contain
    rotate-[325deg]
    right-[-6vw] top-[-10vh]
    md:right-[-6vw] md:top-[-16vh]
    z-0
    pointer-events-none
     opacity-18
    "
        />

        {/* Dark overlay (make it vw/vh instead of px) */}
        <div
          className="
      absolute
      left-0 top-[20%] -translate-y-1/2
      w-[39vw] max-w-[700px]
      h-[145vh] max-h-[99 0px]
      bg-black/1
      z-0
      pointer-events-none
    "
        />

        {/* Horizontal line (fix border-t-3 -> border-t-[3px]) */}
        <div className="absolute w-full top-6 md:top-10 z-0 pointer-events-none">
          <div
            className="
        ml-auto
        w-[80vw] md:w-[65vw]
        border-t-[3px] border-black/1
        mr-4 md:mr-12
      "
          />
        </div>

        {/* Vertical line (fix invalid w-3/19 etc) */}
        <div className="absolute right-6 md:right-12 top-10 z-0 pointer-events-none">
          <div className="h-[18vh] md:h-[76vh] border-r-[3px] border-black/1" />
        </div>

        {/* Heading */}
        <div className="relative z-10 p-5 mt-20 md:mt-10 text-center">
          {/* Heading */}
          <div
            className="
      mx-auto
      w-[44.2vw]
      max-w-[637px]
      min-w-[280px]
    "
          >
            <p
              className="
        font-wasted
        font-normal
        text-[32px] sm:text-[40px] md:text-[48px]
        leading-[90px]
        tracking-normal
        text-center
        text-black
      "
            >
              Experience the best we provide
            </p>
          </div>

          {/* Sub text ( already had this mostly right) */}
          <div
            className="
    mx-auto
    w-[59.3vw]
    max-w-[854px]
    min-w-[280px]
    mt-6 md:mt-10
    text-center
  "
          >
            <p
              className="
    font-source-pro
      font-normal
      text-[16px] sm:text-[17px] md:text-[18px]
      leading-[26px]
      tracking-normal
      px-16
      text-black/90
    "
            >
              Experience the perfect blend of elegance, comfort, and authentic
              Sri Lankan charm at Ridee Boutique Hotel. Here’s why we are the
              ideal choice for your stay in Kandy
            </p>
          </div>
        </div>

        {/* Cards */}
        <div
          className="
    relative z-10
    mx-auto
    w-full md:w-[83.6vw]
    max-w-[1205px]
    px-4 sm:px-6 md:px-0
    pb-10
  "
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 items-start">
            {/* LEFT column (2 cards) */}
            <div className="flex flex-col gap-8">
              <FeatureCard
                icon={
                  <img
                    src={DININGBEVERAGES}
                    alt="Dining & Beverages"
                    className="w-[46px] h-[46px] object-contain"
                  />
                }
                title="DINING & BEVERAGES"
                desc="Savor delightful meals and beverages with our on-site restaurant and café."
              />

              <FeatureCard
                icon={
                  <img
                    src={HousekeepingMaintanace}
                    alt="HOUSE KEEPING & MAINTENANCE"
                    className="w-[46px] h-[46px] object-contain"
                  />
                }
                title="HOUSE KEEPING & MAINTENANCE"
                desc="Daily housekeeping ensures your room remains pristine"
              />
            </div>

            {/* CENTER column (1 card) */}
            <div className="flex flex-col gap-8 md:pt-10">
              <FeatureCard
                icon={
                  <img
                    src={GUESTSERVICES}
                    alt="GUEST SERVICES"
                    className="w-[46px] h-[46px] object-contain"
                  />
                }
                title="GUEST SERVICES"
                desc="Our team is here to make every moment seamless — from 24-hour reception"
              />
            </div>

            {/* RIGHT column (2 cards) */}
            <div className="flex flex-col gap-8">
              <FeatureCard
                icon={
                  <img
                    src={BusinessConnectivity}
                    alt="BUSINESS & CONNECTIVITY"
                    className="w-[46px] h-[46px] object-contain"
                  />
                }
                title="BUSINESS & CONNECTIVITY"
                desc="Stay connected with high-speed Wi-Fi and business-ready rooms"
              />

              <FeatureCard
                icon={
                  <img
                    src={LEISURERECREATION}
                    alt="LEISURE & RECREATION"
                    className="w-[46px] h-[46px] object-contain"
                  />
                }
                title="LEISURE & RECREATION"
                desc="Relax and unwind in our lounge areas, gardens, or outdoor seating."
              />
            </div>
          </div>
        </div>

        {/* Bottom shade (fix h-1/7 not valid) */}
        <div className="absolute bottom-0 right-0 w-[77vw] h-[19vh] max-h-[190px] bg-black/1 z-0 pointer-events-none" />
      </section>

      {/* NEXT SECTION-4 - Explore Our Rooms */}
      <section
        className="
        relative
        w-full
        min-h-screen
        bg-[url('/src/assets/images/SECTION-4.jpg')]
        bg-center bg-cover
        overflow-hidden
        py-16 sm:py-20 md:py-24
      "
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-0" />

        <div className="relative z-10 flex flex-col gap-6">
          <div
            className="
    mx-auto
    w-[28.2vw]
    max-w-[406px]
    min-w-[260px]
    text-center
  "
          >
            <h2
              className="
      font-wasted
      font-normal
      text-[32px] sm:text-[40px] md:text-[48px]
      leading-[56px]
      tracking-normal
      text-white
    "
            >
              Explore Our Rooms
            </h2>
          </div>

          <div
            className="
    mx-auto
    w-full md:w-[60.2vw]
    max-w-[867px]
    px-5 sm:px-8
    text-center
  "
          >
            <p
              className="
      font-source-serif
      font-light
      text-[16px] sm:text-[17px] md:text-[18px]
      leading-[26px]
      tracking-normal
      text-white
    "
            >
              Experience the perfect blend of elegance, comfort, and authentic
              Sri Lankan charm at Ridee Boutique Hotel.
            </p>
          </div>

          {/* Grid wrapper */}
          <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 px-5 sm:px-8 md:px-10 mt-6">
            {/* BIG DECOR SVGs (Figma: 985x633 angle 122.71deg) */}

            {rooms.map((room) => (
              <div
                key={room.id}
                className="
                relative
                flex flex-col
                border border-black/40
                bg-black/30
                overflow-hidden
              "
              >
                {/* Image */}
                <div
                  className="w-full h-[240px] sm:h-[280px] md:h-[320px] bg-center bg-cover"
                  style={{ backgroundImage: `url(${room.image})` }}
                />

                {/* Content */}
                <div className="relative p-6 text-white w-full">
                  <p
                    className="font-source-serif
                  font-normal
                   text-[18px]
                   leading-[20px]
                   tracking-normal
                   text-center
                   text-white
                   mx-auto
                   max-w-[275.615px]
                  "
                  >
                    {room.title}
                  </p>

                  <p
                    className="
    mt-6
    font-source-serif
    font-light
    text-[16px]
    leading-[26px]
    tracking-normal
    text-center
    text-white
    mx-auto
    max-w-[358.762px]
  "
                  >
                    {room.description}
                  </p>

                  <div
                    className="
    mt-10
    font-source-serif
    font-normal
    text-[18px]
    leading-[20px]
    tracking-normal
    text-center
    underline
    cursor-pointer
    mx-auto
    max-w-[275.615px]
    text-white
  "
                  >
                    VIEW ROOM
                  </div>

                  {/* SMALL DECOR inside card (responsive + valid) */}

                  <div
                    className="
                    pointer-events-none
                    absolute
                    -bottom-3 left-70
                    w-8 h-8 sm:w-10 sm:h-10 md:w-24 md:h-28
                    bg-[url('/src/assets/images/Rectangle183.svg')]
                    bg-center bg-no-repeat bg-contain
                    rotate-90
                    invert
                    opacity-80
                  "
                  />
                </div>
              </div>
            ))}

            <div
              className="absolute
    flex items-center justify-center items-center gap-2 
    font-source-serif
    font-normal
    text-[18px]
    leading-[24px]
    tracking-normal
    text-white
    cursor-pointer
    text-center
    mx-auto
    max-w-[112.66px]
    -bottom-15
    left-1/2
    -translate-x-1/2
    z-10
    
  "
            >
              <span className="text-center tracking-widest hover:text-gray-200 transition duration-300 ease-in-out">
                SEE ALL
              </span>
              <FaArrowRight size={18} className="animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* NEXT SECTION-5- Experience The City */}
      <section className="relative w-full md:h-[420px] py-16 sm:py-20 overflow-hidden">
        {/* Rotated rectangle background (Figma: 982x259, angle 104.7349deg) */}
        <div
          className="
    pointer-events-none
    absolute

    /* MOBILE */
    w-[25.7vw]
    h-[28.6vw]

    md:w-[31vw]
    md:h-[45vw]

    max-w-none
    max-h-none

    min-w-[300px]
    min-h-[920px]

    bg-[url('/src/assets/images/Rectangle-4.png')]
    bg-no-repeat bg-center bg-contain
    rotate-[240deg]

    left-[-8.8vw]
    md:top-4/9 -translate-y-1/2

    z-10
    opacity-18
    
  "
        />

        {/* Decorative lines (fixed Tailwind classes) */}
        {/* Horizontal line */}
        <div className="pointer-events-none absolute left-0 top-[25%] w-full z-0">
          <div className="w-[14vw] md:w-[22.5vw] border-t-[3px] border-black/2 ml-6 md:ml-12" />
        </div>

        {/* Vertical line */}
        <div className="mpointer-events-none absolute left-6 md:left-12 top-[25%] z-0">
          <div className="h-[250px] md:h-[315px] border-l-[3px] border-black/2" />
        </div>

        {/* Right overlay */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-[78vw] md:w-[73.5vw] bg-black/2 z-0" />
        {/* Down */}
        <div className="pointer-events-none absolute md:inset-y-95 inset-y-85.5 left-0 bottom-0 w-[78vw] h[1vw] md:w-[45.5vw] md:h[12vw]  bg-black/5 z-0" />

        {/* Content */}
        <div className="relative z-20 mx-auto max-w-6xl px-5 sm:px-8 text-center">
          <div
            className="
    mx-auto
    w-[28.3vw]
    max-w-[408px]
    min-w-[260px]
  "
          >
            <h2
              className="
      font-wasted
      font-normal
      text-[30px] sm:text-[40px] md:text-[48px]
      md:leading-[52px]
      md:tracking-normal
      text-justify
      text-black
      mt-20
    "
            >
              Experience The City
            </h2>
          </div>

          <div
            className="
    mx-auto
    w-full md:w-[59.7vw]
    max-w-[860.039px]
    px-5 sm:px-8
    text-center
    mt-5
  "
          >
            <p
              className="
      font-source-serif
      font-normal
      text-[18px]
      leading-[26px]
      tracking-normal
      text-center
      text-black
    "
            >
              Discover the heart of Kandy beyond your stay. From the sacred
              Temple of the Tooth to the peaceful Kandy Lake and colorful local
              markets, every corner tells a story.
            </p>
          </div>
        </div>
      </section>

      {/* NEXT SECTOIN-6- THE TEMPLE OF TOOTH RELIC  */}
      <section
        className="
    relative
    w-full
    min-h-[520px] sm:min-h-[560px] md:min-h-[520px]
    md:aspect-[16/8]
    bg-[url('/src/assets/images/temple.png')]
    bg-no-repeat bg-cover bg-center
    overflow-hidden
    transition-all duration-500 ease-in-out
  "
        style={{
          backgroundImage: `url(${slides[current].image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* subtle dark overlay for readability */}
        <div className="absolute inset-0 bg-black/35 md:bg-black/25" />

        {/* content wrapper */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-24 py-10 sm:py-12 md:py-16">
          {/* TITLE */}
          <p
            className="
    font-source-serif
    font-bold
    text-[32px] sm:text-[40px] md:text-[48px]
    leading-[1]
    tracking-normal
    text-white
  "
          >
            THE TEMPLE OF TOOTH RELIC
          </p>

          {/* spacer */}
          <div className="h-6 sm:h-8 md:h-10" />

          {/* TEXT BOX (mobile-first) */}
          <div className="md:absolute   md:-bottom-125 md:left-1   flex justify-start ">
            <div
              className="
          bg-zinc-800/80 backdrop-blur-md
          text-white
          shadow-lg
          p-12 sm:p-5 md:px-6 md:py-8

          w-full
          max-w-[520px]
          md:w-[28.9vw]

          flex items-center
        "
            >
              <p
                className="
            font-source-serif font-light
            text-[16px] sm:text-[18px] md:text-[20px]
            leading-[1.27]
            text-justify
            text-white/95
          "
              >
                Kandy is home to the iconic Temple of the Sacred Tooth Relic,
                one of Buddhism’s most revered sites. You’ll also find other
                temples and historic churches scattered around the city, each
                offering a glimpse into the rich religious tapestry of the
                region
              </p>
            </div>
          </div>
        </div>

        {/* Next slide previews (bottom-right) */}
        <div
          className="
    absolute
    right-4 sm:right-6 md:right-24
    bottom-[15%]
    flex gap-3
    z-20
  "
        >
          {[1, 2].map((offset) => {
            const index = (current + offset) % slides.length;

            return (
              <div
                key={index}
                onClick={() => setCurrent(index)}
                className="
          w-20 h-14
    sm:w-24 sm:h-16
    md:w-60 md:h-60

    bg-cover bg-center
    cursor-pointer
    rounded-xl

    border-2 border-white/50
    hover:border-white

    shadow-[0_15px_40px_rgba(0,0,0,0.45)]
    hover:shadow-[0_30px_70px_rgba(0,0,0,0.65)]

    transition-all duration-500 ease-out

    transform-gpu
    [perspective:1200px]
    rotate-y-[10deg]
    skew-y-[-3deg]

    hover:rotate-y-[-22deg]
    hover:skew-y-[-5deg]
    hover:scale-110
  "
                style={{
                  backgroundImage: `url(${slides[index].image})`,
                }}
              />
            );
          })}
        </div>

        {/* Buttons */}
        <div
          className="
      absolute
      bottom-4 right-4
      sm:bottom-6 sm:right-6
      md:bottom-12 md:right-24
      flex gap-3
      z-20
    "
        >
          <button
            onClick={prevSlide}
            className="bg-gray-400/70 hover:bg-gray-500/80 transition rounded-full p-3"
          >
            <FaChevronLeft size={22} className="text-white" />
          </button>

          <button
            onClick={nextSlide}
            className="bg-gray-400/70 hover:bg-gray-500/80 transition rounded-full p-3"
          >
            <FaChevronRight size={22} className="text-white" />
          </button>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div
      className="
        flex flex-col items-center text-center
        w-full
        max-w-[389px]
        mx-auto
        p-5
      "
    >
      <div className="mb-3">{icon}</div>

      <p
        className="
    font-source-pro
    font-semibold
    text-[18px]
    leading-[24px]
    tracking-wider
    text-center
    max-w-[357px]
  "
      >
        {title}
      </p>

      <p
        className="
    mt-3
    font-source-pro
    font-normal
    text-[18px]
    leading-[26px]
    tracking-normal
    text-center
    text-black/90
  "
      >
        {desc}
      </p>
    </div>
  );
}
