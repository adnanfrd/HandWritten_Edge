'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { damion } from '../AboutUs/fonts';

export default function FestiveOffer() {
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
    );
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.4, ease: 'power3.out', delay: 0.5 }
    );
  }, []);

  return (
    <div
      className="relative w-full min-h-screen flex items-center justify-center px-6 md:px-16 overflow-hidden text-white bg-cover bg-center"
      style={{ backgroundImage: "url('/holidayoverlay.png')" }} // Replace with your actual background
    >
      {/* Overlay for depth effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A014F]/70 to-[#1B004F]/80"></div>

      <div className="relative text-center max-w-4xl">
        {/* Title */}
        <motion.h1
          ref={titleRef}
          className={`${damion.className} text-4xl md:text-7xl font-bold italic mb-4 text-white drop-shadow-lg`}
        >
          See the Magic in Every Detail!
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          ref={contentRef}
          className="text-lg md:text-xl text-gray-300 mb-6"
        >
          Choose from six festive designs, personalized with your logo, colors, and message.
        </motion.p>

        {/* Pricing Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: 'easeOut' }}
          className="bg-white/10 p-6 rounded-xl backdrop-blur-lg border border-white/20 shadow-lg"
        >
          <p className="text-lg md:text-2xl font-semibold text-white">
            Get <span className="text-pink-400">100 cards</span> for just <span className="text-yellow-300 font-bold">$399</span>,
            customized with your logo, colors, and a heartfelt message.
          </p>
          <p className="mt-2 text-gray-300">
            Need more? Each additional card is only <span className="text-green-400 font-bold">$3.49</span>.
          </p>
          <p className="mt-3 italic text-white/80">
            And the best part? We handle the mailing, so you can stay focused on moving!
          </p>
        </motion.div>
      </div>
    </div>
  );
}
