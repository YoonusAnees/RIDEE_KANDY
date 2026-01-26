import React from "react";
import { IoRestaurant } from "react-icons/io5";
import { FaHouseChimneyUser } from "react-icons/fa6";
import { FaPerson } from "react-icons/fa6";
import { FaPersonRunning } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

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
    <div className="w-full ">
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
       bg-[url('/src/assets/Rectangle.png')]
       bg-center bg-no-repeat bg-cover
       flex items-center justify-center text-center text-white bg-white"
      >
        <div className=" md:absolute md:-left-1 md: bg-black/3 md:w-[553px] md:h-[730px]" />

        <div className="absolute  md:right-10 md:bottom-7 ">
          <div className="relative">
            <div
              className="absolute md:w-[150px] md: h-[250px] h-[10px] w-[10px] bg-[url('/src/assets/Rectangle183.svg')]
       bg-center bg-no-repeat bg-cover md:-top-10 -rotate-90 right-123"
            ></div>
            <div
              className="absolute md:w-[150px] md:h-[250px] w-10 h-10 bg-[url('/src/assets/Rectangle183.svg')]
       bg-center bg-no-repeat bg-cover md:top-88 md:-rotate-270 md:right-6 -rotate-90 "
            ></div>
          </div>
          <div className=" md:h-140 md:w-165 bg-white/80 border-2 h-80 w-100 p-5">
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
      </section>
      {/* NEXT SECTION-3-Experience the best we provide */}
      <section className="relative w-full h-screen flex flex-col justify-center items-center md:mt-50">
        <div
          className="
      absolute
      left-0 top-1/5 -translate-y-1/2
      w-[549px] h-[980px]
      bg-black/3
      z-0 
    "
        />

        <div className="relative z-10 p-5  mt-60 md:mt-0">
          <p className="font-Wasted md:text-6xl text-2xl text-center">
            Experience the best we provide
          </p>
          <p className="font-Wasted text-xl text-center md:px-72 mt-6">
            Experience the perfect blend of elegance, comfort, and authentic Sri
            Lankan charm at Ridee Boutique Hotel. Here’s why we are the ideal
            choice for your stay in Kandy
          </p>
        </div>

        <div className="relative z-10 flex flex-col md:flex-row w-full gap-4 md:gap-3 justify-evenly items-stretch md:items-center md:mt-5 px-4 md:px-0">
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-4 md:gap-3 w-full md:w-auto">
            <div className="flex flex-col items-center justify-center p-5 md:h-40 md:w-150 w-full text-center">
              <IoRestaurant size={30} />
              <p className="text-xl font-bold">DINING & BEVERAGES</p>
              <p className="px-4 md:px-20 mt-4 font-bold">
                Savor delightful meals and beverages with our on-site restaurant
                and café.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center p-5 md:h-40 md:w-150 w-full text-center">
              <FaHouseChimneyUser size={30} />
              <p className="text-xl font-bold">HOUSE KEEPING & MAINTENANCE</p>
              <p className="px-4 md:px-30 font-bold mt-4">
                Daily housekeeping ensures your room remains pristine
              </p>
            </div>
          </div>

          {/* CENTER CARD */}
          <div className="flex flex-col items-center justify-center p-5 md:h-60 md:w-150 w-full text-center">
            <FaPerson size={30} />
            <p className="text-xl font-bold">GUEST SERVICES</p>
            <p className="px-4 md:px-1 mt-4 font-bold">
              Our team is here to make every moment seamless — from 24-hour
              reception
            </p>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-4 md:gap-3 w-full md:w-auto">
            <div className="flex flex-col items-center justify-center p-5 md:h-40 md:w-150 w-full text-center">
              <IoRestaurant size={30} />
              <p className="text-xl font-bold">Business & Connectivity</p>
              <p className="px-4 md:px-20 mt-4 font-bold">
                Stay connected with high-speed Wi-Fi and business-ready rooms
              </p>
            </div>

            <div className="flex flex-col items-center justify-center p-5 md:h-40 md:w-150 w-full text-center">
              <FaPersonRunning size={30} />
              <p className="text-xl font-bold">LEISURE & RECREATION</p>
              <p className="px-4 md:px-20 mt-4 font-bold">
                Relax and unwind in our lounge areas, gardens, or outdoor
                seating..
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* NEXT SECTION-4-Explore Our Rooms */}
      <section
        className="relative mt-70 md:mt-0 aspect-[1/1] 
             md:aspect-[3/2] bg-[url('/src/assets/SECTION-4.jpg')] 
             bg-center bg-cover"
      >
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black/50 z-0" />

        {/* CONTENT (above overlay) */}
        <div className="relative z-10 flex flex-col gap-3">
          <div className="text-6xl font-Wasted p-5 text-center text-blue-300 md:mt-20">
            Explore Our Rooms
          </div>

          <p className="text-center text-xl text-white md:px-40 px-2 font-source">
            Experience the perfect blend of elegance, comfort, and authentic Sri
            Lankan charm at Ridee Boutique Hotel. Here’s why we are the ideal
            choice for your stay in Kandy.
          </p>

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 p-20">
            <div
              className="absolute md:w-[150px] md:h-[250px] w-10 h-10 bg-[url('/src/assets/Rectangle183.svg')]
       bg-center bg-no-repeat bg-cover md:top-145 md:-rotate-270 md:right-253 -rotate-90 "
            ></div>

            <div
              className="absolute md:w-[150px] md:h-[250px] w-10 h-10 bg-[url('/src/assets/Rectangle183.svg')]
       bg-center bg-no-repeat bg-cover md:top-145 md:-rotate-270 md:right-22 -rotate-90 "
            ></div>

            <div
              className="absolute md:w-[150px] md:h-[250px] w-10 h-10 bg-[url('/src/assets/Rectangle183.svg')]
       bg-center bg-no-repeat bg-cover md:top-145 md:-rotate-270 md:right-138 -rotate-90 "
            ></div>
            {rooms.map((room) => (
              <div
                key={room.id}
                className="flex flex-col items-center justify-center border-2 border-black/55"
              >
                {/* IMAGE */}
                <div
                  className="w-full h-[300px] aspect-[1/1] md:aspect-[3/2] bg-center bg-cover"
                  style={{ backgroundImage: `url(${room.image})` }}
                />

                {/* CONTENT */}
                <div className="flex flex-col w-full h-[400px] bg-black/50 text-white shadow-2xl">
                  <div className="p-5">
                    <p className="text-center text-xl font-Wasted mt-8">
                      {room.title}
                    </p>
                  </div>

                  <p className="text-center text-[15px] font-source px-6 md:px-15 mt-8">
                    {room.description}
                  </p>

                  <div className="flex flex-col p-5 items-center justify-center font-source">
                    <button className="text-xl md:mt-20 underline cursor-pointer">
                      VIEW ROOM
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-row justify-center items-center gap-2 text-center text-xl text-white p-5 font-source cursor-pointer md:mt-10">
            <div>SEE ALL</div>
            <div>
              <FaArrowRight />
            </div>
          </div>
        </div>
      </section>
      {/* NEXT SECTION-5- Experience The City */}
  <section className="relative w-full md:h-[370px] overflow-hidden">
  <div
    className="absolute
      w-[26vw] h-[85vh]
      bg-[url('/src/assets/Rectangle-4.png')]
      bg-no-repeat bg-center bg-contain
      rotate-210 md:-top-42 md:-left-12
    "
  ></div>

  <div className="relative z-10 flex flex-col items-center justify-center p-20 md:py-30">
    <div className="text-center text-5xl font-Wasted">
      Experience The City
    </div>

    <div className="text-lg p-5 text-center md:px-60 font-medium">
Discover the heart of Kandy beyond your stay. From the sacred Temple of the Tooth to the peaceful Kandy 
Lake and colorful local markets, every corner tells a story.    </div>
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
        {/* ROW 3 – TEXT BOX */}
        <div className="flex items-start md:px-24 p-12">
          <div
            className="bg-zinc-800/80 backdrop-blur-md 
                    w-full md:w-[28vw]
                    p-6 md:px-10 md:py-12
                    text-center text-white font-source"
          >
            <p>
              Kandy is home to the iconic Temple of the Sacred Tooth Relic, one
              of Buddhism’s most revered sites. You’ll also find other temples
              and historic churches scattered around the city, each offering a
              glimpse into the rich religious tapestry of the region.
            </p>
          </div>
        </div>
      </section>
     




    </div>
  );
}
