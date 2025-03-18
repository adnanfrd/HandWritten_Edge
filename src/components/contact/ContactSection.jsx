"use client";
import React from "react";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { damion } from "../AboutUs/fonts";

const ContactSection = () => {
  return (
    <section className="relative h-screen bg-gray-50 px-6 flex justify-center items-center text-center">
      {/* Background Pattern */}

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Title */}
        <motion.h2
          className={`${damion.className} text-4xl sm:text-7xl font-extrabold text-gray-800 mb-4 italic`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Join Our{" "}
          <span className="bg-gradient-to-r from-[#001F3F] to-[#00509E] bg-clip-text text-transparent">
            Moving Letters
          </span>{" "}
          Journey!!
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-gray-600 max-w-2xl mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Embarking on a moving journey or simply curious about the magic of
          handwritten letters? Reach out, and let’s make every message memorable.
        </motion.p>

        {/* Social Icons */}
        <motion.div
          className="flex space-x-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {[
            { icon: Facebook, link: "#", label: "Facebook" },
            { icon: Twitter, link: "#", label: "Twitter" },
            { icon: Instagram, link: "#", label: "Instagram" },
            { icon: Youtube, link: "#", label: "YouTube" },
          ].map(({ icon: Icon, link, label }, index) => (
            <a
              key={index}
              href={link}
              aria-label={label}
              className="p-3 rounded-full bg-gray-800 text-white hover:bg-gradient-to-r from-[#001F3F] to-[#00509E] transition-all duration-300"
            >
              <Icon className="w-6 h-6" />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
