"use client";
import { motion } from "framer-motion";
import { damion } from "./fonts";

const AboutUs = () => {
  return (
    <section className="relative w-full flex items-center min-h-[100vh] bg-gradient-to-br from-gray-100 to-gray-200 py-20 px-6 md:px-12 overflow-hidden">
      <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500 opacity-20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-pink-500 opacity-20 rounded-full blur-3xl animate-pulse"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative max-w-5xl mx-auto text-center bg-white/40 backdrop-blur-lg shadow-lg rounded-3xl px-8 py-12"
      >
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className={`${damion.className} text-5xl md:text-7xl font-bold italic text-gray-900 relative`}
        >
          About <span className="bg-gradient-to-r from-[#001F3F] to-[#00509E] bg-clip-text text-transparent">Us</span>
        </motion.h2>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-700">
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg leading-relaxed"
          >
            From countless moves, watching families embrace new beginnings, and experiencing the moving industry up close, one thing remained clear—the fading warmth of personal connection in our digital era. Remember the joy of receiving a handwritten letter? Amid today’s online noise, that tangible note creates a lasting impact.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-lg leading-relaxed"
          >
            At <span className="font-semibold text-gray-900">HandWritten.com</span>, our
            foundation is built on bringing back that magic. We’re not just blending the timeless art of letter writing with modern technology—we’re reviving the emotion, trust, and connection that a handwritten message delivers.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-8 flex justify-center"
        >
          <div className="h-2 w-32 bg-gradient-to-r from-[#001F3F] to-[#00509E] rounded-full shadow-lg"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutUs;
