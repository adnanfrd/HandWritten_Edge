"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { damion } from "../AboutUs/fonts";

gsap.registerPlugin(ScrollTrigger);

export default function OurLettersSection() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // GSAP Animations
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 90%",
          end: "bottom 70%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col items-center justify-center text-center px-6 py-20 min-h-[120vh] bg-gray-100"
    >
      {/* Fixed Navbar Spacer */}
      <div className="h-[80px]"></div>

      {/* Text Content */}
      <motion.div
        ref={textRef}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-4xl"
      >
        <h1
          className={`${damion.className} text-4xl md:text-7xl font-extrabold italic leading-tight text-gray-900`}
        >
          Our <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Letters</span>
        </h1>
        <h2 className="text-lg md:text-xl font-bold text-gray-700 mt-2">
          Unfolding Personal Connection in Every Stroke
        </h2>
        <p className="mt-4 text-gray-600 text-base md:text-lg leading-relaxed">
          Rediscover the art of genuine connection through our handcrafted
          letters, where innovative techniques meet old-world charm. Every
          message isn’t just words; it’s an emotion, a memory, a bond.
        </p>
      </motion.div>

      {/* Image Section */}
      <motion.div
        ref={imageRef}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        className="relative w-full max-w-4xl mt-10"
      >
        <Image
          src="/w5.jpg" // Make sure to place the image in the public folder
          alt="Handwritten Letters"
          width={800}
          height={500}
          className="rounded-lg shadow-lg w-full object-cover"
        />
      </motion.div>
    </section>
  );
}
