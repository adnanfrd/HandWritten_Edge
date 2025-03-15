"use client";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const StaySection = () => {
  return (
    <section className="py-12 px-4 bg-white text-center">
      {/* Heading Animation */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-3xl font-bold italic text-gray-900"
      >
        Stay With Us:
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
            <p className="mt-3 text-lg font-semibold italic">{social.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StaySection;
