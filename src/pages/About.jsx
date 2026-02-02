import React from "react";
import { motion } from "framer-motion";
import Rectangle183 from "../assets/images/Rectangle183.svg";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import vision from "../assets/images/vision.jpg";
import mission from "../assets/images/mission.jpg";
import reviewBg from "../assets/images/review.jpg";

const easeOut = [0.22, 1, 0.36, 1];

const sectionReveal = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
};

const staggerWrap = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.08 } },
};

const itemUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: easeOut } },
};

const itemFade = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.75, ease: easeOut } },
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

/* ✅ CARD */
const TestimonialCard = React.memo(function TestimonialCard({ item }) {
  return (
    <div
      className="
        relative
        w-full md:w-[406px]
        h-[280px]
        rounded-[8px]
        bg-black/45
        backdrop-blur-xs
        overflow-hidden
      "
    >
      <div
        className="
          absolute bottom-0 right-0
          w-[56px] h-[56px]
          bg-cover bg-center bg-no-repeat
          invert
          rotate-90
        "
        style={{ backgroundImage: `url(${Rectangle183})` }}
      />

      <div className="absolute top-[30px] left-[25px] w-[356px] h-[78px]">
        <div className="absolute top-0 left-0 w-[81px] h-[78px] rounded-full overflow-hidden bg-white/10">
          {item?.avatar ? (
            <img
              src={item.avatar}
              alt={item.name || "Guest"}
              className="w-full h-full object-cover"
              draggable={false}
            />
          ) : null}
        </div>

        <p
          className="
            absolute
            top-[30px] left-[103px]
            w-[253px] h-[19px]
            font-source-serif
            font-normal
            text-[22px]
            leading-[24px]
            text-white
          "
        >
          {item?.name || "Guest"}
        </p>
      </div>

      <p
        className="
          absolute
          top-[122px] left-[25px]
          w-[356px] h-[119px]
          font-source-serif
          font-light
          text-[16px]
          leading-[24px]
          text-white/90
          text-justify
        "
      >
        {item?.review ||
          "Staying at Hotel Ridee felt like stepping into history with all the comforts of today."}
      </p>
    </div>
  );
});

/* ✅ ISOLATE SLIDER (only this part re-renders on setCurrent) */
function TestimonialsSlider({ slides }) {
  const [current, setCurrent] = React.useState(0);

  const nextSlide = React.useCallback(() => {
    if (!slides.length) return;
    setCurrent((p) => (p + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = React.useCallback(() => {
    if (!slides.length) return;
    setCurrent((p) => (p - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // Desktop slider measurements (your design)
  const CARD_W = 406;
  const GAP = 27;
  const STEP = CARD_W + GAP;
  const VIEWPORT_W = CARD_W * 3 + GAP * 2;

  const L = slides.length;

  const loopSlides = React.useMemo(() => {
    if (!L) return [];
    return [...slides, ...slides, ...slides];
  }, [slides, L]);

  const base = L; // middle copy start
  const pos = base + current;
  const trackX = -pos * STEP;

  return (
    <div className="relative w-full">
      {/* Mobile: single card */}
      <div className="md:hidden w-full flex justify-center">
        <div className="w-full max-w-[406px]">
          {slides.length ? (
            <TestimonialCard item={slides[current]} />
          ) : (
            <div className="w-full h-[271px] rounded-[8px] bg-white/10" />
          )}
        </div>
      </div>

      {/* Desktop: track slider (only inside cards moves) */}
      <div className="hidden md:block w-full">
        <div
          className="relative overflow-hidden mx-auto"
          style={{ width: VIEWPORT_W }}
        >
          <motion.div
            className="flex"
            style={{ gap: GAP }}
            animate={{ x: trackX }}
            transition={{ duration: 0.55, ease: easeOut }}
          >
            {loopSlides.map((item, i) => (
              <div
                key={`${item?.name || "slide"}-${i}`}
                style={{ width: CARD_W }}
              >
                <TestimonialCard item={item} />
              </div>
            ))}
          </motion.div>

          {/* Edge fade (optional, makes it look cleaner like inside-grid only) */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black/60 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black/60 to-transparent" />
        </div>
      </div>

      {/* Buttons */}
      <motion.div
        className="absolute -bottom-24 left-1/2 -translate-x-1/2 flex gap-3 z-20"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: easeOut }}
      >
        <motion.button
          type="button"
          onClick={prevSlide}
          disabled={!slides.length}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          className="
            bg-gray-400/70 hover:bg-gray-500/80 transition
            rounded-full p-3
            disabled:opacity-40 disabled:cursor-not-allowed
            shadow-[0_15px_40px_rgba(0,0,0,0.35)]
            hover:shadow-[0_25px_60px_rgba(0,0,0,0.55)]
            backdrop-blur-md
          "
        >
          <FaChevronLeft size={22} className="text-white" />
        </motion.button>

        <motion.button
          type="button"
          onClick={nextSlide}
          disabled={!slides.length}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          className="
            bg-gray-400/70 hover:bg-gray-500/80 transition
            rounded-full p-3
            disabled:opacity-40 disabled:cursor-not-allowed
            shadow-[0_15px_40px_rgba(0,0,0,0.35)]
            hover:shadow-[0_25px_60px_rgba(0,0,0,0.55)]
            backdrop-blur-md
          "
        >
          <FaChevronRight size={22} className="text-white" />
        </motion.button>
      </motion.div>
    </div>
  );
}

export default function About() {
  const slides = React.useMemo(
    () => [
      {
        name: "Tilany Nethminy",
        avatar:
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        review:
          "Staying at Hotel Ridee felt like stepping into history with all the comforts of today. The staff were incredibly warm, and every corner of the hotel carried a sense of heritage and charm. Truly unforgettable!",
      },
      {
        name: "Johny Deph",
        review: "Beautiful design, calm atmosphere, and great breakfast.",
      },
      {
        name: "Sarah",
        review:
          "From the moment we arrived, we were treated like family. The rooms were elegant, the food was authentic Sri Lankan, and the peaceful setting made our holiday in Kandy so special. We will definitely return!",
      },
      {
        name: "Kai Cenet",
        review:
          "From the moment we arrived, we were treated like family. The rooms were elegant, the food was authentic Sri Lankan, and the peaceful setting made our holiday in Kandy so special. We will definitely return!",
      },
      {
        name: "ridee",
        review:
          "From the moment we arrived, we were treated like family. The rooms were elegant, the food was authentic Sri Lankan, and the peaceful setting made our holiday in Kandy so special. We will definitely return!",
      },
    ],
    [],
  );

  return (
    <div className="w-full overflow-hidden">
      {/* HERO */}
      <AnimatedSection
        className="
          relative w-full min-h-screen
          bg-[url('/src/assets/images/AboutUs.png')]
          bg-center bg-no-repeat bg-cover
          flex items-center justify-center
          text-white
          overflow-hidden
        "
      >
        <div className="absolute inset-0 bg-black/50" />

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

        <motion.div
          aria-hidden
          className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-[70vw] h-[70vw] rounded-full bg-white/10 blur-3xl"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 0.35, scale: 1 }}
          transition={{ duration: 1.2, ease: easeOut }}
        />
      </AnimatedSection>

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

        <motion.div
          className="
            relative
            grid grid-cols-1 sm:grid-cols-2
            w-full max-w-[1100px]
            mx-auto px-6
            z-10
          "
        >
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

          <div
            className="bg-gray-200/50 p-8 shadow-md min-h-[320px] md:min-h-[380px] lg:min-h-[420px] flex items-center justify-center"
            style={{
              backgroundImage: `url(${vision})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="
                text-white text-center
                font-source-pro font-semibold tracking-[0.08em]
                text-[clamp(28px,4.5vw,48px)]
                leading-[clamp(36px,5vw,56px)]
              "
            >
              V I S I O N
            </motion.h2>
          </div>

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

          <div
            className="bg-gray-200/50 p-8 shadow-md min-h-[320px] md:min-h-[380px] lg:min-h-[420px] flex justify-center items-center"
            style={{
              backgroundImage: `url(${mission})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="
                text-white text-center
                font-source-pro font-semibold tracking-[0.08em]
                text-[clamp(28px,4.5vw,48px)]
                leading-[clamp(36px,5vw,56px)]
              "
            >
              M I S S I O N
            </motion.h2>
          </div>
        </motion.div>
      </AnimatedSection>

      <AnimatedSection
        className="
          relative
          w-full
          min-h-[764px] md:h-[764px]
          overflow-hidden
          flex justify-center items-start
          px-4 sm:px-6
          py-12 md:py-0
        "
        style={{
          backgroundImage: `url(${reviewBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div
          className="
            relative z-10
            w-full max-w-[1272px]
            md:h-[514px]
            md:mt-[95px]
            flex flex-col items-center
          "
        >
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

          <TestimonialsSlider slides={slides} />
        </div>
      </AnimatedSection>
    </div>
  );
}
