import React from "react";
import { motion } from "framer-motion";

/**
 * ✅ Add animations:
 * - Section reveal on scroll (fade + slide)
 * - Stagger heading, paragraph, button
 * - Subtle float on background rectangle
 * - Button hover/tap micro-interaction
 *
 */

const easeOut = [0.22, 1, 0.36, 1];

const sectionReveal = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: easeOut },
  },
};

const staggerWrap = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

const itemUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: easeOut } },
};

const itemFade = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease: easeOut } },
};

export default function CTA() {
  return (
    <motion.section
      className="relative w-full overflow-hidden"
      variants={sectionReveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      data-nav="light"
    >
      <div className="relative h-[63vh] flex flex-col justify-center items-center px-4 sm:px-6 md:px-12">
        {/* Rotated Figma Rectangle (animated float) */}
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
            opacity-18
          "
          // variants={itemUp}
        />

        {/* Light overlay */}
        <motion.div
          className="pointer-events-none absolute inset-y-0 left-0 w-[46vw] bg-gray-200/10 z-0"
          variants={itemFade}
        />
        {/* Decorative lines (draw-in feel) */}
        <motion.div className="pointer-events-none absolute top-[15%] w-full z-0">
          <motion.div className="ml-auto w-[49vw] border-t-[3px] border-gray-200/10 mr-6 md:mr-15" />
        </motion.div>

        <motion.div
          className="pointer-events-none absolute right-6 md:right-15 top-[15%] z-0"
          variants={itemFade}
        >
          <motion.div className="h-[18vh] md:h-[47vh] border-r-[3px] border-gray-200/10" />
        </motion.div>

        {/* CONTENT */}
        <motion.div
          className="
            relative z-10
            w-[74.2vw] h-[16.9vh]
            max-w-[1068px] max-h-[244px]
            min-w-[300px] min-h-[180px]
            mx-auto
            text-center
            flex flex-col justify-center
          "
          variants={staggerWrap}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h1
            variants={itemUp}
            className="
              font-wasted
              font-normal
              text-[22px] sm:text-[26px] md:text-[30px]
              leading-[38px]
              tracking-normal
              text-black
              mt-8 md:mb-0
            "
          >
            Discover the Soul of Sri Lankan Serenity
          </motion.h1>

          <motion.div
            variants={itemUp}
            className="
              mx-auto
              w-[74.2vw] h-[5vw]
              max-w-[1068.259px] max-h-[72px]
              min-w-[300px] min-h-[72px]
              text-center
              flex items-center justify-center
            "
          >
            <p className="font-jacques font-normal text-[14px] md:text-[18px] leading-[24px] text-gray-800 text-center mt-24 md:mt-3">
              Step into Ridee Boutique Hotel, where modern comfort embraces the
              soul of old Sri Lankan charm. Set in the heart of Kandy, our
              serene retreat invites you to discover authentic hospitality, rich
              traditions, and the gentle beauty of a place that feels like home,
              yet unlike anywhere else.
            </p>
          </motion.div>
        </motion.div>

        {/* CTA BUTTON */}
        <motion.div
          className="relative z-10 flex mb-10 mt-20 md:mt-0 md:mb-35 justify-center"
          variants={itemUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.a
            href="/contact"
            className="
              font-wasted font-normal
              text-[16px] sm:text-[20px] md:text-[20px]
              
              leading-[24px]
              tracking-[0.2em]
              text-white

              bg-[#1e1e1f] border-2 border-black
              px-20 sm:px-10 md:px-[30px]
              py-8 sm:py-[18px] md:py-[20px]

              min-w-[180px] md:w-[222px]
              h-[26px] md:h-[65px]

              flex items-center justify-center
              transition
              hover:bg-white hover:text-black
              mt-12 md:mb-0
            "
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.18 }}
          >
            Call to Book
          </motion.a>
        </motion.div>

        {/* Bottom graphic */}
        <motion.div
          className="absolute -bottom-5 md:-bottom-8 left-0 right-0 z-10 flex justify-center bg-gray-500/5 overflow-visible"
          variants={itemUp}
        >
          <motion.div
            className="
              w-[31.7vw] h-[6.8vw]
              max-w-[456px] max-h-[98px]
              min-w-[220px] min-h-[48px]
              bg-[url('/src/assets/images/SECTION-5.svg')]
              bg-no-repeat bg-center bg-contain
            "
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
