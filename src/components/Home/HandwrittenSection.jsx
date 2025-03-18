'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

export default function HolidayVideoSection() {
  const titleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.3 }
    );
  }, []);

  return (
    <div className="relative w-full bg-[#0A014F] bg-[url('/holidayoverlay.png')] bg-cover bg-center py-16 px-6 md:px-16 flex justify-center items-center">
      <div className="grid md:grid-cols-2 gap-10 items-center text-white max-w-6xl mx-auto text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="flex justify-center"
        >
          <video 
            src="/holidayvideo.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full max-w-lg rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Right Side Text */}
        <div>
          <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold italic">
            Why handwritten?
          </h2>
          <p ref={textRef} className="text-lg mt-4 text-gray-300">
            We're not against emails or automated messages—they have their place. But a handwritten card? That's where the magic happens.
          </p>
          <p className="text-lg mt-2 text-gray-300">
            Handwritten cards bring smiles, laughter, and a sense of warmth that digital messages can't replicate. It's a connection your recipients will never forget.
          </p>
          <p className="text-lg mt-2 text-gray-300">
            People choose services and partners they like and trust. A handwritten card is the perfect way to build that emotional connection.
          </p>
        </div>
      </div>
    </div>
  );
}