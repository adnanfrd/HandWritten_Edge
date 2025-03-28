"use client";

import { motion } from "framer-motion";
import { damion } from "../AboutUs/fonts";
import Link from "next/link";

const ContactSection = () => {
  return (
    <section
      className="relative w-full h-[50vh] md:h-[60vh] flex flex-col items-center justify-center text-center text-white px-6 overflow-hidden"
      style={{
        backgroundImage: "url('/questions.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay with Glassmorphism */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md"></div>

      {/* Content with Animation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10"
      >
        <h2 className={`${damion.className} text-4xl md:text-6xl font-extrabold italic leading-tight`}>
          Still Have Some{" "}
          <span className="bg-gradient-to-r from-[#001F3F] to-[#00509E] bg-clip-text text-transparent">
            Questions?
          </span>
          <br /> Contact Us.
        </h2>

        {/* Call-to-Action Button */}
        <Link href="/contact">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-8 bg-black cursor-pointer py-3 hover:bg-gradient-to-r from-[#001F3F] to-[#00509E] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
        >
          Contact Us
        </motion.button>
        </Link>
      </motion.div>
    </section>
  );
};

export default ContactSection;
