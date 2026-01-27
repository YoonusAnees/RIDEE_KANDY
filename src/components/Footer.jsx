import { FaInstagram, FaYoutube, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="
    relative z-20
    bg-black text-amber-50
    border-t border-gray-200
    pt-24 pb-4
    p-24
    md:-mt-54 -mt-52

  "
    >
      <div className="max-w-8xl md:mx-auto md:h-[40vh]  grid grid-cols-1 md:grid-cols-4">
        {/* Column 1 */}
        <div>
          <div className="mb-4 w-28">
            <img src="/src/assets/logo.svg" alt="logo" className="w-full" />
          </div>

          <p className="font-source tracking-wider text-sm sm:text-base leading-relaxed mb-6">
            Where timeless Sri Lankan charm meets modern comfort. Stay with us
            and make every moment unforgettable.
          </p>

          <div className="flex gap-4 text-xl">
            <FaFacebookF className="hover:text-gray-400 transition cursor-pointer" />
            <FaInstagram className="hover:text-gray-400 transition cursor-pointer" />
            <FaYoutube className="hover:text-gray-400 transition cursor-pointer" />
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="uppercase text-sm mb-4 font-extrabold tracking-widest">
            Quick Links
          </h4>
          <ul className="space-y-2 font-Wasted text-sm">
            <li><a href="/" className="hover:text-gray-400">Home</a></li>
            <li><a href="/about" className="hover:text-gray-400">About Us</a></li>
            <li><a href="/rooms" className="hover:text-gray-400">Rooms & Suites</a></li>
            <li><a href="/packages" className="hover:text-gray-400">Packages</a></li>
            <li><a href="/contact" className="hover:text-gray-400">Contact</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="uppercase text-sm mb-4 font-extrabold tracking-widest">
            Contact Us
          </h4>
          <p className="font-Wasted text-sm leading-relaxed">
            123, Walawwa Road,<br />
            Kandy,<br />
            Sri Lanka.
          </p>

          <p className="mt-4 font-Wasted text-sm">+94 XX XXX XXXX</p>

          <a
            href="mailto:rideeboutique@gmail.com"
            className="block mt-2 hover:text-gray-400 text-sm"
          >
            rideeboutique@gmail.com
          </a>
        </div>

        {/* Column 4 */}
        <div>
          <h4 className="uppercase text-sm mb-4 font-extrabold tracking-widest">
            Newsletter
          </h4>

          <p className="text-sm mb-4">
            Stay updated with exclusive offers and the latest news.
          </p>
          <div className="flex flex-col md:flex-row  gap-4   w-full max-w-sm">
            <input
              type="email"
              placeholder="Your email"
              className="flex  border border-gray-300 bg-white  text-gray-900 px-2 py-3 focus:outline-none focus:ring-1 focus:ring-black"
            />
            <button className="bg-gray-400 text-black px-4  cursor-pointer">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200 py-6 px-6">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p>© 2025 Ridee Boutique. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="/privacy" className="hover:text-gray-400">Privacy Policy</a>
            <a href="/terms" className="hover:text-gray-400">Terms</a>
            <a href="/help" className="hover:text-gray-400">Help</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
