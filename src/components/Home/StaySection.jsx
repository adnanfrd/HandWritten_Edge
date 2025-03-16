"use client";

import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { damion } from "../AboutUs/fonts";

const socialLinks = [
  { icon: Facebook, name: "Facebook" },
  { icon: Twitter, name: "Twitter" },
  { icon: Instagram, name: "Instagram" },
  { icon: Youtube, name: "Youtube" },
];

const StaySection = () => {
  return (
    <section className="relative py-16 px-6 bg-gradient-to-b from-white to-gray-100 text-center overflow-hidden">
      {/* Subtle Background Texture */}
      <div className="absolute inset-0 bg-[url('/texture-bg.webp')] bg-cover opacity-10"></div>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`${damion.className} text-4xl md:text-7xl font-bold italic text-gray-900 relative z-10`}
      >
        Stay With&nbsp;
        <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Us:
        </span>
      </motion.h2>

      {/* Social Cards Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto relative z-10">
        {socialLinks.map((social, index) => (
          <motion.div
            key={social.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="group relative bg-white/20 backdrop-blur-lg shadow-lg rounded-xl p-8 flex flex-col items-center border border-gray-200 transition-transform duration-300"
          >
            {/* Gradient Border Effect */}
            <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300"></div>

            {/* Icon */}
            <social.icon className="w-12 h-12 text-indigo-900 group-hover:text-purple-600 transition-colors duration-300" />
            
            {/* Social Name */}
            <p className={`${damion.className} mt-4 text-2xl font-semibold italic text-gray-900`}>
              {social.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StaySection;
