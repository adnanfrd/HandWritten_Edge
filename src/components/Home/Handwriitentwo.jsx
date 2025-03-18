'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import Image from 'next/image';
import { damion } from '../AboutUs/fonts';

export default function HolidaySection() {
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1.2, ease: 'power3.out', delay: 0.5 }
    );
  }, []);

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center px-6 md:px-16 overflow-hidden bg-cover bg-center" 
         style={{ backgroundImage: "url('/hbg.png')" }}>
      
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative grid md:grid-cols-2 gap-10 items-center text-white max-w-6xl mx-auto text-center md:text-left">
        {/* Left Content */}
        <div ref={contentRef}>
          <h1 ref={titleRef} className={`${damion.className} text-4xl md:text-7xl font-bold leading-tight`}>
            Simple, Thoughtful, <br /> Stress-Free
          </h1>
          <ul className="mt-6 space-y-4 text-lg text-gray-300">
            <li className="flex items-start">
              <span className="text-pink-500 text-2xl mr-3">➤</span>
              <span>
                <strong>Pick a Design:</strong> Choose from our festive collection.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 text-2xl mr-3">➤</span>
              <span>
                <strong>Write Your Message:</strong> Provide a custom message, or let us craft one for you.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 text-2xl mr-3">➤</span>
              <span>
                <strong>We Handwrite & Deliver:</strong> Each card is penned with care and sent to your recipients.
              </span>
            </li>
          </ul>
        </div>

        {/* Right Image with Motion Effect */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="flex justify-center"
        >
          <Image
            src="/h1.png"
            alt="Christmas Card"
            width={500}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </div>
  );
}
