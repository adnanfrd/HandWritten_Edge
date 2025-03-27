"use client";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

// Dynamically import Typewriter with SSR disabled
const Typewriter = dynamic(() => import("react-typewriter-effect"), {
  ssr: false,
});

// Pencil SVG Animation
const PencilSVG = () => (
  <motion.svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-gray-800"
    animate={{ x: [0, 3, 0], y: [0, -3, 0] }}
    transition={{ repeat: Infinity, duration: 0.3 }}
  >
    <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
    <path d="M16 3l4 4L7 20H3v-4L16 3z"></path>
  </motion.svg>
);

const HandwritingEffect = () => {
  const [restart, setRestart] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setRestart(false);
      setTimeout(() => setRestart(true), 300);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-20 py-12 bg-white min-h-screen">
      {/* ✅ Mobile Image (Increased Size) */}
      <div className="relative w-80 h-[550px] flex items-center justify-center">
        <img
          src="/mobile-bg.webp"
          alt="Mobile Preview"
          className="w-full h-full object-cover rounded-2xl shadow-lg"
        />

        {/* ✅ Centered Text Inside Mobile Screen */}
        {restart && (
          <motion.div
            key={restart}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute inset-0 flex items-center justify-center bg-white/80 p-10 rounded-lg shadow-md text-black mx-4"
          >
            <Typewriter
              text="Kelly! Thank you so much for your generous gift. Your kindness means the world to me. I truly appreciate your thoughtful gesture. Wishing you all the best and endless happiness!"
              delaySpeed={40}
              cursorClassName="hidden"
            />
          </motion.div>
        )}
      </div>

      {/* Optional Handwriting Animation */}
      <motion.div
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="hidden md:block"
      >
        <svg width="200" height="100">
          <path
            d="M10,90 Q95,-40 190,90"
            stroke="white"
            strokeWidth="2"
            strokeDasharray="5,5"
            fill="transparent"
          />
        </svg>
      </motion.div>

      {/* Message Box */}
      <div className="relative w-80 h-60 bg-gray-100 border rounded-lg p-6 shadow-lg">
        {restart && (
          <Typewriter
            text="Kelly! Thank you so much for your generous gift. Your kindness means the world to me. I truly appreciate your thoughtful gesture. Wishing you all the best and endless happiness!"
            delaySpeed={40}
            cursorClassName="hidden"
          />
        )}

        <motion.div className="absolute bottom-2 right-2">
          <PencilSVG />
        </motion.div>
      </div>
    </div>
  );
};

export default HandwritingEffect;
