import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

import HousekeepingMaintanace from "../assets/images/HousekeepingMaintanace.svg";
import BusinessConnectivity from "../assets/images/Business&Connectivity.svg";
import DININGBEVERAGES from "../assets/images/DININGBEVERAGES.svg";
import GUESTSERVICES from "../assets/images/GUESTSERVICES.svg";
import LEISURERECREATION from "../assets/images/LEISURERECREATION.svg";
import Rectangle183 from "../assets/images/Rectangle183.svg";

import Temple from "../assets/images/temple.png";
import Lake from "../assets/images/BG.png";

import room1 from "../assets/images/Room1.jpg";
import room2 from "../assets/images/Room2.jpg";
import room3 from "../assets/images/Room3.jpg";

/**
 * ✅ Animations added:
 * - Each section: smooth reveal on scroll (fade + slide)
 * - Headings + texts: stagger
 * - Cards: stagger + hover lift
 * - Rooms cards: reveal + hover
 * - Section 6: background crossfade + subtle zoom (Ken Burns feel)
 *
 */

const easeOut = [0.22, 1, 0.36, 1];

const sectionReveal = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeOut },
  },
};

const staggerWrap = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

const itemUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: easeOut } },
};

const itemFade = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.75, ease: easeOut } },
};

const hoverLift = {
  whileHover: { y: -6, transition: { duration: 0.2 } },
};

function AnimatedSection({ children, className, ...props }) {
  return (
    <motion.section
      className={className}
      variants={sectionReveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      {...props}
    >
      {children}
    </motion.section>
  );
}

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

  const slides = [{ image: Temple }, { image: Lake }];

  const [current, setCurrent] = React.useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="w-full overflow-hidden">
      {/* SECTION 1 - HERO */}
      <AnimatedSection
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
        <motion.div
          className="relative z-10 max-w-[1440px] mx-auto px-6 text-center"
          variants={staggerWrap}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
        >
          <motion.p
            variants={itemUp}
            className="
              font-wasted font-normal
              text-[36px] leading-[40px]
              sm:text-[44px] sm:leading-[48px]
              md:text-[60px] md:leading-[60px]
              my-4
            "
          >
            Embrace the Beauty of Timeless Stay
          </motion.p>

          <motion.p
            variants={itemUp}
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
          </motion.p>
        </motion.div>

        {/* subtle floating sparkle/glow */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-[70vw] h-[70vw] rounded-full bg-white/10 blur-3xl"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 0.35, scale: 1 }}
          transition={{ duration: 1.2, ease: easeOut }}
        />
      </AnimatedSection>

      {/* SECTION 2 - Welcome */}
      <AnimatedSection
        data-nav="light"
        className="
          relative w-full h-screen
          bg-[url('/src/assets/images/BG.png')]
          bg-center bg-no-repeat bg-cover
          flex items-center justify-center text-center
          text-white bg-white
          overflow-hidden
        "
      >
        <motion.div
          className="md:absolute md:-left-1 md: bg-black/3 md:w-[600px] md:h-[782px]"
          variants={itemFade}
        />

        <motion.div
          className="absolute md:right-10 md:bottom-7"
          variants={staggerWrap}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="p-5">
            <div className="relative">
              {/* TOP */}
              <motion.div
                variants={itemUp}
                className="
                  absolute
                  w-[158px] h-[187px]
                  bg-[url('/src/assets/images/Rectangle183.svg')]
                  bg-cover bg-center bg-no-repeat
                  rotate-[-90deg]
                  -top-6 -left-3
                  hidden md:block
                "
              />

              {/* Mobile */}
              <motion.div
                variants={itemUp}
                className="
                  absolute md:hidden
                  w-10 h-10
                  bg-[url('/src/assets/images/Rectangle183.svg')]
                  bg-cover bg-center
                  rotate-[-90deg]
                  top-1 left-1
                "
              />

              {/* BOTTOM */}
              <motion.div
                variants={itemUp}
                className="
                  absolute
                  w-[158px] h-[187px]
                  bg-[url('/src/assets/images/Rectangle183.svg')]
                  bg-cover bg-center bg-no-repeat
                  rotate-[-270deg]
                  -bottom-146 left-128
                  hidden md:block
                "
              />

              {/* Mobile BOTTOM */}
              <motion.div
                variants={itemUp}
                className="
                  absolute md:hidden
                  w-10 h-10
                  bg-[url('/src/assets/images/Rectangle183.svg')]
                  bg-cover bg-center
                  rotate-[-270deg]
                  -bottom-80 right-1
                "
              />
            </div>

            <motion.div
              variants={itemUp}
              className="md:h-140 md:w-165 bg-white/80 border-2 h-80 w-full p-5"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.25, ease: easeOut }}
            >
              <div className="flex flex-col gap-2 text-center">
                <div className="flex flex-col md:gap-2  md:mt-20 text-black">
                  <motion.p
                    variants={itemUp}
                    className="md:text-5xl text-lg font-Wasted md:my-5 my-0 font-extralight font-wasted md:-mb-1"
                  >
                    Welcome to
                  </motion.p>
                  <motion.p
                    variants={itemUp}
                    className="md:text-6xl text-xl font-wasted"
                  >
                    Ridee Boutique
                  </motion.p>
                </div>

                <motion.div
                  variants={itemUp}
                  className="text-black md:px-[50px] font-medium md:py-6 text-center md:text-xl"
                >
                  <p className="font-source-pro">
                    Ridee Boutique is located in the last kingdom of Sri Lanka
                    Kandy. A beautific abode offering you the comfort of
                    privacy, this luxury hotel is conveniently placed in front
                    of the Kandy Lake. A hand of warm Sri Lankan hospitality is
                    extended to all its guests at Ridee.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatedSection>

      {/* SECTION 3 - Experience the best */}
      <AnimatedSection
        data-nav="light"
        className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden"
      >
        {/* Background shape */}
        <div
          className="
            absolute
            w-[42.2vw] h-[47vw]
            bg-[url('/src/assets/images/Rectangle-4.png')]
            bg-no-repeat bg-center bg-contain
            rotate-[325deg]
            right-[-6vw] top-[-10vh]
            md:right-[-6vw] md:top-[-16vh]
            z-0 pointer-events-none opacity-18
          "
        />

        {/* Dark overlay */}
        <div
          className="
            absolute left-0 top-[20%] -translate-y-1/2
            w-[39vw] max-w-[700px]
            h-[145vh] max-h-[990px]
            bg-black/1 z-0 pointer-events-none
          "
        />

        {/* lines */}
        <div className="absolute w-full top-6 md:top-10 z-0 pointer-events-none">
          <div className="ml-auto w-[80vw] md:w-[65vw] border-t-[3px] border-black/1 mr-4 md:mr-12" />
        </div>
        <div className="absolute right-6 md:right-12 top-10 z-0 pointer-events-none">
          <div className="h-[18vh] md:h-[76vh] border-r-[3px] border-black/1" />
        </div>

        {/* Heading */}
        <motion.div
          className="relative z-10 p-5 mt-20 md:mt-10 text-center"
          variants={staggerWrap}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            variants={itemUp}
            className="mx-auto w-[44.2vw] max-w-[637px] min-w-[280px]"
          >
            <p
              className="
                font-wasted font-normal
                text-[32px] sm:text-[40px] md:text-[48px]
                md:leading-[90px] leading-[50px]
                tracking-normal text-center text-black
              "
            >
              Experience the best we provide
            </p>
          </motion.div>

          <motion.div
            variants={itemUp}
            className="mx-auto w-[59.3vw] max-w-[854px] min-w-[280px] mt-6 md:mt-10 text-center"
          >
            <p
              className="
                font-source-pro font-normal
                text-[16px] sm:text-[17px] md:text-[18px]
                leading-[26px] tracking-normal md:px-16 px-4  text-black/90
              "
            >
              Experience the perfect blend of elegance, comfort, and authentic
              Sri Lankan charm at Ridee Boutique Hotel. Here’s why we are the
              ideal choice for your stay in Kandy
            </p>
          </motion.div>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="relative z-10 mx-auto w-full md:w-[83.6vw] max-w-[1205px] px-4 sm:px-6 md:px-0 pb-10"
          variants={staggerWrap}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 items-start">
            <div className="flex flex-col gap-8">
              <motion.div variants={itemUp} {...hoverLift}>
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
              </motion.div>

              <motion.div variants={itemUp} {...hoverLift}>
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
              </motion.div>
            </div>

            <div className="flex flex-col gap-8 md:pt-10">
              <motion.div variants={itemUp} {...hoverLift}>
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
              </motion.div>
            </div>

            <div className="flex flex-col gap-8">
              <motion.div variants={itemUp} {...hoverLift}>
                <FeatureCard
                  icon={
                    <img
                      src={BusinessConnectivity}
                      alt="BUSINESS & CONNECTIVITY"
                      className="w-[46px] h-[46px] object-contain"
                    />
                  }
                  title="BUSINESS & CONNECTIVITY"
                  desc="Stay connected with high-speed Wi-Fi and business-ready rooms "
                />
              </motion.div>

              <motion.div variants={itemUp} {...hoverLift}>
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
              </motion.div>
            </div>
          </div>
        </motion.div>

        <div className="absolute bottom-0 right-0 w-[77vw] h-[19vh] max-h-[190px] bg-black/1 z-0 pointer-events-none" />
      </AnimatedSection>

      {/* SECTION 4 - Explore Rooms */}

      <AnimatedSection
        className="
        relative w-full min-h-screen
        bg-[url('/src/assets/images/SECTION-4.jpg')]
        bg-center bg-cover
        py-16 sm:py-20 md:py-24
      "
      >
        {/* dark overlay */}
        <div className="absolute inset-0 bg-black/50 z-0" />

        <motion.div
          className="relative z-10 flex flex-col gap-6"
          variants={staggerWrap}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* TITLE */}
          <motion.div
            variants={itemUp}
            className="mx-auto w-[28.2vw] max-w-[406px] min-w-[260px] text-center"
          >
            <h2
              className="
              font-wasted font-normal
              text-[32px] sm:text-[40px] md:text-[48px]
              leading-[56px] text-white
            "
            >
              Explore Our Rooms
            </h2>
          </motion.div>

          {/* SUBTEXT */}
          <motion.div
            variants={itemUp}
            className="mx-auto w-full md:w-[60.2vw] max-w-[867px] px-5 sm:px-8 text-center"
          >
            <p
              className="
              font-source-serif font-light
              text-[16px] sm:text-[17px] md:text-[18px]
              leading-[26px] text-white
            "
            >
              Experience the perfect blend of elegance, comfort, and authentic
              Sri Lankan charm at Ridee Boutique Hotel. Here’s why we are the
              ideal choice for your stay in Kandy.
            </p>
          </motion.div>

          {/* ROOM GRID */}
          <motion.div
            variants={staggerWrap}
            className="
            relative max-w-7xl mx-auto
            grid grid-cols-1 md:grid-cols-3
            gap-8 md:gap-10
            px-5 sm:px-8 md:px-10
            mt-6
            overflow-visible
          "
          >
            {rooms.map((room) => (
              <motion.div
                key={room.id}
                variants={itemUp}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.2 }}
                className="
                relative flex flex-col
                border border-black/40
                bg-black/30
                overflow-hidden
              "
              >
                {/* IMAGE */}
                <div
                  className="w-full h-[240px] sm:h-[280px] md:h-[320px] bg-center bg-cover"
                  style={{ backgroundImage: `url(${room.image})` }}
                />

                {/* CONTENT */}
                <div className="relative p-6 text-white">
                  <p
                    className="
                    font-source-serif font-normal
                    text-[18px] leading-[20px]
                    text-center
                    mx-auto max-w-[275px]
                  "
                  >
                    {room.title}
                  </p>

                  <p
                    className="
                    mt-6 font-source-serif font-light
                    text-[16px] leading-[26px]
                    text-center
                    mx-auto max-w-[360px]
                  "
                  >
                    {room.description}
                  </p>

                  <motion.div
                    whileHover={{ letterSpacing: "0.18em" }}
                    transition={{ duration: 0.2 }}
                    className="
                    mt-10 font-source-serif font-normal
                    text-[18px] leading-[20px]
                    text-center underline cursor-pointer
                  "
                  >
                    VIEW ROOM
                  </motion.div>

                  {/* DECOR SVG */}
                  <div
                    className="
                    pointer-events-none absolute
                    -bottom-3 md:left-[75%]
                    left-[78%]
                    w-24 h-28
                    rotate-90 opacity-80
                  "
                    style={{
                      backgroundImage: `url(${Rectangle183})`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundSize: "contain",
                      filter: "invert(1)",
                    }}
                  />
                </div>
              </motion.div>
            ))}

            <motion.div
              variants={itemUp}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="
              absolute flex items-center justify-center gap-2
              font-source-serif font-normal
              text-[18px] leading-[24px]
              text-white cursor-pointer
              -bottom-[60px]
              left-1/2 -translate-x-1/2
              z-10
            "
            >
              <span className="tracking-widest hover:text-gray-200 transition">
                SEE MORE
              </span>
              <FaArrowRight size={18} className="animate-bounce" />
            </motion.div>
          </motion.div>
        </motion.div>
      </AnimatedSection>

      {/* SECTION 5 - Experience The City */}
      <AnimatedSection
        data-nav="light"
        className="relative w-full md:h-[420px] py-16 sm:py-20 overflow-hidden"
      >
        <div
          className="
            pointer-events-none absolute
            w-[25.7vw] h-[28.6vw]
            md:w-[31vw] md:h-[45vw]
            max-w-none max-h-none
            min-w-[300px] min-h-[920px]
            bg-[url('/src/assets/images/Rectangle-4.png')]
            bg-no-repeat bg-center bg-contain
            rotate-[240deg]
            left-[-8.8vw]
            md:top-4/9 -translate-y-1/2
            z-10 opacity-18
          "
        />

        <div className="pointer-events-none absolute left-0 top-[25%] w-full z-0">
          <div className="w-[14vw] md:w-[22.5vw] border-t-[3px] border-black/2 ml-6 md:ml-12" />
        </div>
        <div className="pointer-events-none absolute left-6 md:left-12 top-[25%] z-0">
          <div className="h-[250px] md:h-[315px] border-l-[3px] border-black/2" />
        </div>

        <div className="pointer-events-none absolute inset-y-0 right-0 w-[78vw] md:w-[73.5vw] bg-black/2 z-0" />
        <div className="pointer-events-none absolute md:inset-y-95 inset-y-85.5 left-0 bottom-0 w-[78vw] md:w-[45.5vw] bg-black/5 z-0" />

        <motion.div
          className="relative z-20 mx-auto max-w-6xl px-5 sm:px-8 text-center"
          variants={staggerWrap}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.div
            variants={itemUp}
            className="mx-auto w-[28.3vw] max-w-[408px] min-w-[260px]"
          >
            <h2
              className="
                font-wasted font-normal
                text-[30px] sm:text-[40px] md:text-[48px]
                md:leading-[52px] md:tracking-normal
                text-justify text-black mt-20
                
              "
              data-nav="light"
            >
              Experience The City
            </h2>
          </motion.div>

          <motion.div
            variants={itemUp}
            className="mx-auto w-full md:w-[59.7vw] max-w-[860.039px] px-5 sm:px-8 text-center mt-5"
          >
            <p
              className="
                font-source-serif font-normal text-[18px]
                leading-[26px] tracking-normal text-center text-black
              "
            >
              Discover the heart of Kandy beyond your stay. From the sacred
              Temple of the Tooth to the peaceful Kandy Lake and colorful local
              markets, every corner tells a story.
            </p>
          </motion.div>
        </motion.div>
      </AnimatedSection>

      {/* SECTION 6 - Temple Slider */}
      <section
        className="
          relative w-full
          min-h-[520px] sm:min-h-[560px] md:min-h-[520px]
          md:aspect-[16/8]
          overflow-hidden
        "
      >
        {/* Background crossfade */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="absolute inset-0 bg-center bg-cover"
            style={{
              backgroundImage: `url(${slides[current].image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1.08 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: easeOut }}
          />
        </AnimatePresence>

        {/* overlay */}
        <div className="absolute inset-0 bg-black/35 md:bg-black/25" />

        {/* content wrapper (scroll reveal) */}
        <motion.div
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-24 py-10 sm:py-12 md:py-16"
          variants={sectionReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.p
            variants={itemUp}
            className="
              font-source-serif font-bold
              text-[32px] sm:text-[40px] md:text-[48px]
              leading-[1] tracking-normal text-white
            "
          >
            THE TEMPLE OF TOOTH RELIC
          </motion.p>

          <div className="h-6 sm:h-8 md:h-10" />

          <motion.div
            variants={itemUp}
            className="md:absolute md:-bottom-125 md:left-1 flex justify-start"
          >
            <motion.div
              variants={itemUp}
              className="
                bg-zinc-800/80 backdrop-blur-md
                text-white shadow-lg
                p-12 sm:p-5 md:px-6 md:py-8
                w-full max-w-[520px]
                md:w-[28.9vw]
                flex items-center
              "
            >
              <p
                className="
                  font-source-serif font-light
                  text-[16px] sm:text-[18px] md:text-[20px]
                  leading-[1.27]
                  text-justify text-white/95
                "
              >
                Kandy is home to the iconic Temple of the Sacred Tooth Relic,
                one of Buddhism’s most revered sites. You’ll also find other
                temples and historic churches scattered around the city, each
                offering a glimpse into the rich religious tapestry of the
                region
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Next slide previews (bottom-right) */}
        <motion.div
          className="
            absolute right-4 sm:right-6 md:right-24
            bottom-[15%] flex gap-3 z-20
          "
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: easeOut }}
        >
          {[1, 2].map((offset) => {
            const index = (current + offset) % slides.length;
            return (
              <motion.div
                key={index}
                onClick={() => setCurrent(index)}
                className="
                  w-20 h-14 sm:w-24 sm:h-16
                  md:w-60 md:h-60
                  bg-cover bg-center cursor-pointer
                  rounded-xl border-2 border-white/50
                  hover:border-white
                  shadow-[0_15px_40px_rgba(0,0,0,0.45)]
                  hover:shadow-[0_30px_70px_rgba(0,0,0,0.65)]
                  transition-all duration-500 ease-out
                  transform-gpu
                  [perspective:1200px]
                  rotate-y-[10deg] skew-y-[-3deg]
                  hover:rotate-y-[-22deg]
                  hover:skew-y-[-5deg]
                  hover:scale-110
                "
                style={{ backgroundImage: `url(${slides[index].image})` }}
                whileTap={{ scale: 0.98 }}
              />
            );
          })}
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="
            absolute bottom-4 right-4
            sm:bottom-6 sm:right-6
            md:bottom-12 md:right-24
            flex gap-3 z-20
          "
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: easeOut }}
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
        </motion.div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div
      className="
        flex flex-col items-center text-center
        w-full max-w-[389px] mx-auto p-5
      "
    >
      <div className="mb-3">{icon}</div>

      <p
        className="
          font-source-pro font-semibold
          text-[18px] leading-[24px]
          tracking-wider text-center max-w-[357px]
        "
      >
        {title}
      </p>

      <p
        className="
          mt-3 font-source-pro font-normal
          text-[18px] leading-[26px]
          tracking-normal text-center text-black/90
        "
      >
        {desc}
      </p>
    </div>
  );
}
