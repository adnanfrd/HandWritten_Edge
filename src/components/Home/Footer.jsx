"use client";

import { Facebook, Instagram, Youtube, Twitter, MapPin } from "lucide-react";
import { damion } from "../AboutUs/fonts";

const Footer = () => {
  return (
    <footer className="bg-[#0A043C] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
        {/* Logo & About */}
        <div>
          <img src="/logohand.jpg" alt="MovingLetters.ai" className="mx-auto md:mx-0 h-14" />
          <p className="mt-4 text-gray-400 leading-relaxed">
            Where technology meets tradition, crafting handwritten connections for modern movers.
          </p>
          <div className="flex justify-center md:justify-start gap-5 mt-5">
            <a href="#" className="text-gray-400 hover:text-white transition-all hover:scale-110">
              <Facebook size={26} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-all hover:scale-110">
              <Instagram size={26} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-all hover:scale-110">
              <Youtube size={26} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-all hover:scale-110">
              <Twitter size={26} />
            </a>
          </div>
        </div>

        {/* Address */}
        <div>
          <h3 className={`${damion.className} text-3xl font-semibold italic`}>Address</h3>
          <p className="mt-4 flex items-center justify-center md:justify-start text-gray-400 leading-relaxed">
            <MapPin size={22} className="mr-2 text-gray-500" />
            3110 Boychuck Ave unit 470G, Colorado Springs, CO, 80910
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className={`${damion.className} text-3xl font-semibold italic`}>Quick Links</h3>
          <ul className="mt-4 space-y-3 text-gray-400">
            {["Home", "About Us", "Contact Us", "FAQs"].map((item, index) => (
              <li key={index}>
                <a href="#" className="hover:text-white hover:pl-2 transition-all duration-300">
                  › {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Important Links */}
        <div>
          <h3 className={`${damion.className} text-3xl font-semibold italic`}>Important Links</h3>
          <ul className="mt-4 space-y-3 text-gray-400">
            {["Team", "Our Letters", "Testimonial"].map((item, index) => (
              <li key={index}>
                <a href="#" className="hover:text-white hover:pl-2 transition-all duration-300">
                  › {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} HandWritten.com | All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
