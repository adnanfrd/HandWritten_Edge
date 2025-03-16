"use client";
import { motion } from "framer-motion";
import { damion } from "../AboutUs/fonts";

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
        <source src="/MovingLetters-Christmas-Ad-web.mp4" type="video/mp4" />
      </video>

      <div
        className="absolute inset-0 bg-opacity-40"
        style={{ background: "#33293D", opacity: "0.2" }}
      ></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`${damion.className} text-3xl md:text-8xl font-extrabold italic`}
        >
          Revolutionizing Communication
          <br />
          For Movers
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="mt-4 text-lg md:text-xl max-w-2xl font-medium"
        >
          Crafting personal connections through the blend of old-world charm and modern tech.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 bg-black text-white px-6 py-3 rounded-md text-lg font-semibold"
        >
          Discover The Magic
        </motion.button>
      </div>
    </div>
  );
};

export default HeroSection;
