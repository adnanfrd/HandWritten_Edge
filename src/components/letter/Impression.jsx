"use client";
import { motion } from "framer-motion";
import { damion } from "../AboutUs/fonts";

const Impression = () => {
  return (
    <div
      className="relative h-[70vh] bg-fixed bg-center bg-cover flex items-center justify-center"
      style={{ backgroundImage: "url('/pexels-ketut-subiyanto-4247768-1.webp')" }} // Replace with your image path
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/70 bg-opacity-50"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative text-center px-6 md:px-12 max-w-3xl"
      >
        <h1 className={`${damion.className} text-white text-2xl md:text-4xl font-semibold italic leading-snug`}>
          Looking to make a lasting impression? Dive into the depth of
          personalized communication and watch your connections grow, one
          heartfelt letter at a time.
        </h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "80px" }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-4 mx-auto border-t-2 border-white"
        ></motion.div>

        <button className="mt-6 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
          Contact Us
        </button>
      </motion.div>
    </div>
  );
};

export default Impression;
