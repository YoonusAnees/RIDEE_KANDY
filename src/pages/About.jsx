import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Rectangle183 from "../assets/images/Rectangle183.svg";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

export default function About() {
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
  return (
    <div className="w-full overflow-hidden">
      <AnimatedSection
        className="
          relative w-full min-h-screen
          bg-[url('/src/assets/images/Home.jpg')]
          bg-center bg-no-repeat bg-cover
          flex items-center justify-center
          text-white
          overflow-hidden
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
            Where Our Story Becomes Part of Yours
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
            embracing You with Warmth Culture and Care
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
      </AnimatedSection>{" "}
      {/* Vision and Mission */}
      <AnimatedSection
        className="
    relative
    w-full
    min-h-[900px] md:min-h-[1100px] lg:min-h-[1200px]
    h-auto
    overflow-hidden
    flex flex-col
    items-center
    justify-start
    py-7 md:py-10
  "
      >
        {/* Rectangle-4 background */}
        <motion.div
          aria-hidden
          className="
      absolute
      md:w-[42vw] md:h-[48vw]
      w-[45vw] h-[55vw]
      max-w-[620px] max-h-[720px]
      bg-[url('/src/assets/images/Rectangle-4.png')]
      bg-no-repeat bg-center bg-contain
      rotate-[240deg]
      -top-[18%] -left-[12%]
      opacity-40
      pointer-events-none
      z-0
    "
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 1, ease: easeOut }}
          viewport={{ once: true }}
        />

        {/* Text content */}
        <motion.div
          variants={itemFade}
          className="
      relative z-10
      max-w-[889px]
      text-center
      font-source-pro
      text-[18px] md:text-[20px]
      leading-[32px] md:leading-[38px]
      font-normal
      text-black
      px-6
      mt-10 md:mt-16
      mb-12 md:mb-16
    "
        >
          Hotel Ridee blends timeless elegance with warm Sri Lankan hospitality
          in the heart of Kandy. More than a stay, it’s a sanctuary of comfort
          and tradition, where heritage charm meets modern comforts. From serene
          mornings to tranquil evenings, every detail reflects our dedication to
          quality, culture, and genuine care—creating lasting memories for every
          guest.
        </motion.div>

        {/* GRID WRAPPER */}
        <motion.div
          className="
      relative
      grid
      grid-cols-1
      sm:grid-cols-2
      w-full
      max-w-[1100px]
      mx-auto
      px-6
      
      z-10
    "
        >
          {/* Decorations */}
          <motion.div
            className="
      
        absolute
        w-[60px] h-[120px]
        bg-cover bg-center bg-no-repeat
        -top-6 left-10
        rotate-270
        pointer-events-none
      "
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            style={{ backgroundImage: `url(${Rectangle183})` }}
            variants={itemUp}
          />
          <motion.div
            className="
      
        absolute
        w-[60px] h-[120px]
        bg-cover bg-center bg-no-repeat
        -bottom-6 right-10
        rotate-90
        pointer-events-none
      "
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            style={{ backgroundImage: `url(${Rectangle183})` }}
            variants={itemUp}
          />

          {/* CARD base (taller) */}
          <div className="bg-gray-200/50 p-8 shadow-md min-h-[320px] md:min-h-[380px] lg:min-h-[420px]" />

          <div className="bg-gray-200/50 p-8 shadow-md min-h-[320px] md:min-h-[380px] lg:min-h-[420px] flex justify-center items-center">
            <p className="max-w-[562px] font-source-pro font-normal text-[18px] md:text-[20px] leading-[26px] md:leading-[28px] text-center text-gray-800">
              To be recognized as Sri Lanka’s leading heritage-inspired hotel,
              offering guests an authentic experience that blends timeless
              elegance, cultural richness, and heartfelt hospitality. We aspire
              to create a sanctuary where travelers.
            </p>
          </div>

          <div className="bg-gray-200/50 p-8 shadow-md min-h-[320px] md:min-h-[380px] lg:min-h-[420px] flex justify-center items-center">
            <p className="max-w-[562px] font-source-pro font-normal text-[18px] md:text-[20px] leading-[26px] md:leading-[28px] text-center text-gray-800">
              "At Hotel Ridee, our mission is to preserve and celebrate the
              heritage of Sri Lanka while providing exceptional service that
              makes every guest feel valued and cared for. We are committed to
              creating memorable stays by combining traditional architecture,
              warm Sri Lankan hospitality, and modern amenities."
            </p>
          </div>

          <div className="bg-gray-200/50 p-8 shadow-md min-h-[320px] md:min-h-[380px] lg:min-h-[420px]">
            Content 4
          </div>
        </motion.div>
      </AnimatedSection>
      <AnimatedSection
        className="
    relative
    w-full
    min-h-[764px] md:h-[764px]
    bg-[rgba(33,33,33,0.81)]
    overflow-hidden
    flex
    justify-center
    items-start
    px-4 sm:px-6
    py-12 md:py-0
  "
      >
        {/* INNER CONTAINER */}
        <div
          className="
      w-full
      max-w-[1272px]
      md:h-[514px]
      md:mt-[95px]
      flex
      flex-col
      items-center
    "
        >
          {/* HEADING */}
          <h2
            className="
        font-wasted
        text-[32px] md:text-[48px]
        leading-[40px] md:leading-[50px]
        text-white
        text-center
        mb-10 md:mb-[58px]
      "
          >
            What people Say
          </h2>

          {/* GRID */}
          <div
            className="
        grid
        grid-cols-1
        md:grid-cols-3
        gap-6 md:gap-[27px]
        w-full
        place-items-center
      "
          >
            {/* CARD 1 */}
            <div className="w-full md:w-[406px] h-[271px] rounded-[8px] bg-white/10" />

            {/* CARD 2 */}
            <div className="w-full md:w-[406px] h-[271px] rounded-[8px] bg-white/10" />

            {/* CARD 3 */}
            <div className="w-full md:w-[406px] h-[271px] rounded-[8px] bg-white/10" />

            <motion.div
              className="
                        absolute bottom-4 right-[1/2]
                        sm:bottom-6 sm:right-6
                        md:bottom-[20%] md:right-[48%]
                        flex gap-3 z-20                     "
            >
              <button
                // onClick={prevSlide}
                className="bg-gray-400/70 hover:bg-gray-500/80 transition rounded-full p-3"
              >
                <FaChevronLeft size={22} className="text-white" />
              </button>

              <button
                // onClick={nextSlide}
                className="bg-gray-400/70 hover:bg-gray-500/80 transition rounded-full p-3"
              >
                <FaChevronRight size={22} className="text-white" />
              </button>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
