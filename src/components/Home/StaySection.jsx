"use client";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { damion } from "../AboutUs/fonts";

const StaySection = () => {
  return (
    <section className="py-12 px-4 bg-white text-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`${damion.className} text-4xl md:text-7xl font-bold italic text-gray-900`}
      >
        Stay With&nbsp;
        <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
        Us:
          </span>
      </motion.h2>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {[
          { icon: Facebook, name: "FaceBook" },
          { icon: Twitter, name: "Twitter" },
          { icon: Instagram, name: "Instagram" },
          { icon: Youtube, name: "Youtube" },
        ].map((social, index) => (
          <motion.div
            key={social.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center"
          >
            <social.icon className="w-10 h-10 text-indigo-900" />
            <p className={`${damion.className} mt-3 text-2xl font-semibold italic`}>{social.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StaySection;
