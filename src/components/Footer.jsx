import { FaInstagram, FaYoutube, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="
        relative z-20
        bg-black text-amber-50
        border-t border-gray-200
        overflow-hidden
      "
    >
      {/* Decorative SVGs (only show on md+) */}
      <div
        className="
          hidden md:block
          absolute
          w-[50px] h-[100px]
          bg-[url('/src/assets/Rectangle183.svg')]
          bg-cover bg-center bg-no-repeat
          top-[90px] right-2
          rotate-[270deg]
          invert
          pointer-events-none
        "
      />
      <div
        className="
          hidden md:block
          absolute
          w-[50px] h-[100px]
          bg-[url('/src/assets/Rectangle183.svg')]
          bg-cover bg-center bg-no-repeat
          top-[90px] left-2
          rotate-180
          invert
          pointer-events-none
        "
      />

      {/* Main content */}
      <div className="max-w-8xl mx-auto px-5 sm:px-8 md:px-10 pt-16 sm:pt-20 md:pt-24 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Col 1 */}
          <div>
            <div className="mb-4 w-24 sm:w-28">
              <img src="/src/assets/logo.svg" alt="logo" className="w-full" />
            </div>

            <p className="font-source tracking-wider text-sm sm:text-base leading-relaxed mb-6 max-w-md">
              Where timeless Sri Lankan charm meets modern comfort. Stay with us
              and make every moment unforgettable.
            </p>

            <div className="flex gap-4 text-xl">
              <FaFacebookF className="hover:text-gray-400 transition cursor-pointer" />
              <FaInstagram className="hover:text-gray-400 transition cursor-pointer" />
              <FaYoutube className="hover:text-gray-400 transition cursor-pointer" />
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="uppercase text-sm mb-4 font-extrabold tracking-widest">
              Quick Links
            </h4>
            <ul className="space-y-2 font-Wasted text-sm sm:text-[15px]">
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
            <h4 className="uppercase text-sm mb-4 font-extrabold tracking-widest">
              Contact Us
            </h4>
            <p className="font-Wasted text-sm sm:text-[15px] leading-relaxed">
              123, Walawwa Road,
              <br />
              Kandy,
              <br />
              Sri Lanka.
            </p>

            <p className="mt-4 font-Wasted text-sm sm:text-[15px]">
              +94 XX XXX XXXX
            </p>

            <a
              href="mailto:rideeboutique@gmail.com"
              className="block mt-2 hover:text-gray-400 text-sm sm:text-[15px]"
            >
              rideeboutique@gmail.com
            </a>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="uppercase text-sm mb-4 font-extrabold tracking-widest">
              Newsletter
            </h4>

            <p className="text-sm sm:text-[15px] mb-4 max-w-sm">
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
      <div className="border-t border-gray-200">
        <div
          className="
            max-w-[1600px] mx-auto
            px-5 sm:px-8 md:px-10
            py-5 sm:py-6
            flex flex-col md:flex-row
            items-start md:items-center
            justify-between
            gap-3 md:gap-4
            text-xs sm:text-sm
          "
        >
          <p>© 2025 Ridee Boutique. All rights reserved.</p>

          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <a href="/privacy" className="hover:text-gray-400">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-gray-400">
              Terms
            </a>
            <a href="/help" className="hover:text-gray-400">
              Help
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
