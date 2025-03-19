"use client";
import { motion } from "framer-motion";
// import { damion } from "../AboutUs/fonts";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* ✅ Embedded YouTube Video */}
      <iframe
        className="absolute inset-0 w-full h-full object-cover"
        src="https://www.youtube.com/embed/We_v0tJ0qHI?autoplay=1&loop=1&mute=1&controls=0&playlist=We_v0tJ0qHI"
        title="YouTube Video"
        frameBorder="0"
        allow="autoplay; fullscreen; encrypted-media"
        allowFullScreen
      ></iframe>

      {/* Glassmorphism Blur Overlay */}
      <div className="absolute inset-0 bg-black/10 backdrop-blur-lg"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="custom-font text-4xl md:text-7xl font-extrabold italic leading-tight"
        >
          Revolutionizing Communication
          <br />
          For Movers
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="mt-4 text-lg md:text-xl max-w-3xl font-medium text-gray-200"
        >
          Crafting personal connections through the blend of old-world charm and modern tech.
        </motion.p>

        <Link href="/holiday-cards" >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 hover:cursor-pointer bg-black hover:bg-gradient-to-r from-[#001F3F] to-[#00509E]  px-8 py-3 rounded-xl text-lg font-semibold shadow-md hover:shadow-lg transition-all"
        >
          Discover The Magic
        </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
