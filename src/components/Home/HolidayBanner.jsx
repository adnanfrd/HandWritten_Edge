'use client';

import { motion } from 'framer-motion';
import { damion } from '../AboutUs/fonts';

export default function HolidayBanner() {
  return (
    <div
      className="relative w-full min-h-[400px] md:min-h-[500px] flex items-center justify-center text-center text-white bg-cover bg-center"
      style={{ backgroundImage: "url('/hbg.png')" }} // Replace with actual image
    >
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative px-6 max-w-3xl"
      >
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className={`${damion.className} text-4xl md:text-7xl font-bold italic leading-tight drop-shadow-lg`}
        >
          Order by December 17 for Pre-Holiday Delivery!
        </motion.h1>

        {/* Subtitle */}
        <p className="mt-4 text-lg text-gray-200">
          Ensure your cards reach their destinations before the holidays. Show your clients they matter with a personal touch that stands out.
        </p>

        {/* Call-to-Action Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-6 py-3 border border-white text-white rounded-full text-lg font-semibold shadow-lg transition-all hover:bg-white hover:text-black"
        >
          Order Before It's Too Late
        </motion.button>
      </motion.div>
    </div>
  );
}
