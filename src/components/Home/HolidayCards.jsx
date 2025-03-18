'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import Image from 'next/image';

export default function HolidayCards() {
  const titleRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );
    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, ease: 'power3.out', delay: 0.5 }
    );
  }, []);

  return (
    <div className="relative h-[150vh] md:h-screen w-full bg-[#0A014F] flex items-center justify-center px-4 sm:px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center text-white max-w-6xl mx-auto text-center md:text-left">
        
        {/* Left Content */}
        <div>
          <h1
            ref={titleRef}
            className="text-3xl sm:text-4xl md:text-6xl font-bold"
          >
            Spread Joy This <br /> Christmas with <br /> Handwritten Magic!
          </h1>
          <p className="text-base sm:text-lg italic mt-4 text-gray-300">
            Reconnect with warmth, laughter, and heartfelt moments through our beautifully handwritten Christmas cards.
          </p>
          <button
            ref={buttonRef}
            className="mt-6 bg-pink-500 text-white text-lg font-semibold px-6 py-3 rounded-md shadow-lg hover:bg-pink-600 transition"
          >
            Order Your Cards Now!
          </button>
        </div>

        {/* Right Image with Motion Effect */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="flex justify-center"
        >
          <Image
            src="/holiday.webp"
            alt="Christmas Cards"
            width={500}
            height={400}
            className="rounded-lg max-w-full h-auto"
          />
        </motion.div>
      </div>
    </div>
  );
}
