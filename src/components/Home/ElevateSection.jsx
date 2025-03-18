"use client";

import { motion } from "framer-motion";
import { damion } from "../AboutUs/fonts";
import Link from "next/link";

const ElevateSection = () => {
  return (
    <section
      className="relative w-full h-[60vh] flex items-center justify-center text-center text-white overflow-hidden"
      style={{
        backgroundImage: "url('/pexels-ketut-subiyanto-4247768-1.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // Ensures fixed positioning
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      {/* Animated Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-3xl px-6"
      >
        <h1 className={`${damion.className} text-4xl md:text-6xl font-extrabold italic leading-tight`}>
          Elevate Your Client <br />
          <span className="bg-gradient-to-r from-[#001F3F] to-[#00509E] bg-clip-text text-transparent">
            Communication
          </span>
        </h1>

        <p className="mt-4 text-lg md:text-xl text-gray-300">
          Join the revolution and make every letter count.
        </p>
        <Link href="/contact">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-8 py-3 bg-black cursor-pointer hover:bg-gradient-to-r from-[#001F3F] to-[#00509E] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
        >
          Get Started Today
        </motion.button>
        </Link>
      </motion.div>
    </section>
  );
};

export default ElevateSection;
