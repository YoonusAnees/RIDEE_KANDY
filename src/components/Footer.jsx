import { FaInstagram, FaYoutube, FaFacebookF } from "react-icons/fa";
import { HiArchive } from "react-icons/hi";

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
          <div className="flex items-center space-x-2 mb-3">
            <div className="block w-[6vw] max-w-20">
              <img src="/src/assets/logo.svg" alt="logo" className="w-full" />
            </div>
          </div>
          <div
            className="text-white mb-4  md:text-lg 
             font-source tracking-[.25em]"
          >
            <p>
              Where timeless Sri Lankan charm meets modern comfort. Stay with us
              and make every moment unforgettable
            </p>
          </div>
          <div className="flex space-x-3 text-xl text-white">
            <a href="/">
              <FaFacebookF className="hover:text-gray-500 transition" />
            </a>
            <a href="/">
              <FaInstagram className="hover:text-gray-500 transition" />
            </a>

            <a href="/">
              <FaYoutube className="hover:text-gray-500 transition" />
            </a>
          </div>
        </div>

        {/* Column 2 */}
        <div className="md:ml-24">
          <h4 className=" uppercase text-base mb-4 text-white font-extrabold font-source tracking-widest">
            Quick links
          </h4>
          <ul className=" text-white font-Wasted">
            <li>
              <a href="/about" className="hover:text-black transition">
                Home
              </a>
            </li>
            <li>
              <a href="/careers" className="hover:text-black transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/press" className="hover:text-black transition">
                Rooms & Suits
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-black transition">
                packages
              </a>
            </li>
            <li>
              <a href="/partners" className="hover:text-black transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col ">
          <h4 className=" uppercase text-base mb-4 text-white font-extrabold font-source tracking-widest">
            Contact US
          </h4>

          <p className="font-Wasted">
            123, Walawwa Road, <br></br>Kandy,<br></br> Sri Lanka.
          </p>

          <p className="mt-4 font-Wasted">+94 XX XXX XXXX</p>

          <a
            href="mailto:rideebotique@gmail.com"
            className="cursor-pointer font-Wasted"
          >
            rideebotique@gmail.com
          </a>
        </div>

        {/* Column 4 */}
        <div>
          <h4 className=" uppercase text-base mb-4 text-white font-extrabold font-Wasted tracking-widest">
            Subscribe to Our Newsletter
          </h4>
          <p className="text-white-500 mb-3 font-source text-base">
            Stay updated with exclusive offers and the latest news from Ridee
            Boutique.
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

      {/* Bottom section */}
      <div className="mt-8 border-t border-gray-200 pt-4 flex flex-col md:flex-row items-center justify-between  text-white-500 max-w-7xl mx-auto px-6">
        <p className="text-lg">rideeboutique@2025. All rights reserved..</p>
        <div className="flex space-x-4 mt-2 md:mt-0 text-[16px]">
          <a href="/privacy" className="hover:text-black transition">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:text-black transition">
            Terms & Conditions
          </a>
          <a href="/sitemap" className="hover:text-black transition">
            Help & Support{" "}
          </a>
        </div>
      </div>
    </footer>
  );
}
