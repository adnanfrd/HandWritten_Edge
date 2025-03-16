"use client";

import { Facebook, Instagram, Youtube, Twitter, MapPin } from "lucide-react";
import { damion } from "../AboutUs/fonts";

const Footer = () => {
  return (
    <footer className="bg-[#0A043C] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        <div>
          <img src="/logohand.jpg" alt="MovingLetters.ai" className="mx-auto md:mx-0 h-12" />
          <p className="mt-4 text-gray-300">
            Where technology meets tradition, crafting handwritten connections for modern movers.
          </p>
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white transition">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <Youtube size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <Twitter size={24} />
            </a>
          </div>
        </div>

        <div>
          <h3 className={`${damion.className} text-4xl font-semibold italic`}>Address</h3>
          <p className="mt-4 flex items-center justify-center md:justify-start text-gray-300">
            <MapPin size={20} className="mr-2 text-gray-400" />
            3110 Boychuck Ave unit 470G, Colorado Springs, CO, 80910
          </p>
        </div>

        <div>
          <h3 className={`${damion.className} text-4xl font-semibold italic`}>Quick Links</h3>
          <ul className="mt-4 space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-white">› Home</a></li>
            <li><a href="#" className="hover:text-white">› About Us</a></li>
            <li><a href="#" className="hover:text-white">› Contact Us</a></li>
            <li><a href="#" className="hover:text-white">› FAQs</a></li>

          </ul>
        </div>

        <div>
          <h3 className={`${damion.className} text-4xl font-semibold italic`}>Important Links</h3>
          <ul className="mt-4 space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-white">› Team</a></li>
            <li><a href="#" className="hover:text-white">› Our Letters</a></li>
            <li><a href="#" className="hover:text-white">› Testimonial</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
