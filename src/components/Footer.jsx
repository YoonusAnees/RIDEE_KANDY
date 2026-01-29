import { FaInstagram, FaYoutube, FaFacebookF } from "react-icons/fa";
import logo from "../assets/images/logo.svg";
import Rectangle183 from "../assets/images/Rectangle183.svg";

export default function Footer() {
  return (
    <footer
      className="
        relative z-20
        bg-black text-amber-50
        border-t border-gray-200
        overflow-hidden
        px-4 sm:px-6 md:px-8
      "
    >
      {/* Decorative SVGs (only show on md+) */}
      <div
        className="
          hidden md:block
          absolute
          w-[60px] h-[120px]
          bg-cover bg-center bg-no-repeat
          top-[350px] right-4
          rotate-[90deg]
          invert
          pointer-events-none
        "
        style={{ backgroundImage: `url(${Rectangle183})` }}
      />
      <div
        className="
          hidden md:block
          absolute
          w-[60px] h-[120px]
          bg-cover bg-center bg-no-repeat
          top-[340px] left-2
          rotate-180
          invert
          pointer-events-none
        "
        style={{ backgroundImage: `url(${Rectangle183})` }}
      />

      {/* Main content */}
      <div className="relative max-w-8xl mx-auto px-5 sm:px-8 md:px-10 pt-16 sm:pt-20 md:pt-24 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Col 1 */}
          <div>
            <div className="absolute top-13 left-1/12 mb-4 h-[94px] w-[69px]">
              <img src={logo} alt="logo" className="w-full" />
            </div>

            <div className="mt-20">
              <p className="font-source-pro tracking-widest text-[18px] leading-relaxed  max-w-md">
                Where timeless Sri Lankan charm meets modern comfort. Stay with
                us and make every moment unforgettable.
              </p>
            </div>

            <div className="flex gap-4 text-[24px] font-source-pro mt-4">
              <FaFacebookF className="hover:text-gray-400 transition cursor-pointer " />
              <FaInstagram className="hover:text-gray-400 transition cursor-pointer" />
              <FaYoutube className="hover:text-gray-400 transition cursor-pointer" />
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="uppercase text-[16px] mb-4 font-semibold tracking-widest font-source-pro">
              Quick Links
            </h4>
            <ul
              className="
                font-source
                font-light
                text-[16px]
                leading-[120%]
                tracking-normal
              "
            >
              <li>
                <a href="/" className="hover:text-gray-400">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-gray-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="/rooms" className="hover:text-gray-400">
                  Rooms & Suites
                </a>
              </li>
              <li>
                <a href="/packages" className="hover:text-gray-400">
                  Packages
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="uppercase text-[16px] mb-4 font-semibold tracking-widest font-source-pro">
              Contact Us
            </h4>
            <p className="font-source font-light text-[16px]">
              123, Walawwa Road,
              <br />
              Kandy,
              <br />
              Sri Lanka.
            </p>

            <p className="mt-4 font-source font-light text-[16px]">
              +94 XX XXX XXXX
            </p>

            <a
              href="mailto:rideeboutique@gmail.com"
              className="block mt-2 hover:text-gray-400 font-source font-light text-[16px]"
            >
              rideeboutique@gmail.com
            </a>
          </div>

          {/* Col 4 */}
          <div>
            <h4
              className="uppercase text-[16px] mb-4 font-semibold tracking-widest font-source-pro   md:whitespace-nowrap
 "
            >
              Subscribe to Our Newsletter
            </h4>

            <p className="mb-4 max-w-sm font-source font-light text-[16px]">
              Stay updated with exclusive offers and the latest news.
            </p>

            <form
              className="
                flex flex-col sm:flex-row gap-3
                w-full max-w-md
              "
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Your email"
                className="
                  w-full flex-1
                  border border-gray-300
                  bg-white text-gray-900
                  px-3 py-3
                  focus:outline-none focus:ring-1 focus:ring-black
                "
              />
              <button
                type="submit"
                className="
                  w-full sm:w-auto
                  bg-gray-400 text-black
                  px-6 py-3
                  cursor-pointer
                "
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="px-2 mx-auto">
        <div className="border-t border-black/2  w-[94%] mx-auto"></div>
        <div
          className="
            max-w-[1600px] mx-auto
            px-5 sm:px-8 md:px-10
            py-5 sm:py-6
            flex flex-col md:flex-row
            items-start md:items-center
            justify-between
            gap-3 md:gap-4
            text-[16px]
          "
        >
          <p>rideeboutique@2025. All rights reserved.</p>

          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <a href="/privacy" className="hover:text-gray-400">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-gray-400">
              Terms & Conditions
            </a>
            <a href="/help" className="hover:text-gray-400">
              Help & Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
