"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";

const items = [
  { id: 1, src: "/i6.jpg", title: "Royal Blue", desc: "Command attention with bright elegance.", color: "text-[#3D3A34]" },
  { id: 2, src: "/i7.jpg", title: "Elegant Black", desc: "Timeless and always in vogue.", color: "text-blue-600" },
  { id: 3, src: "/i8.jpg", title: "Passionate Red", desc: "For strong statements that stand out.", color: "text-[#185B7D]" },
  { id: 4, src: "/i4.jpg", title: "Graceful Green", desc: "Refreshing, natural, and serene.", color: "text-blue-600" },
  { id: 5, src: "/i5.jpg", title: "Whispering Walnut Brown", desc: "A subtle vintage touch.", color: "text-[#FD4E23]" },
  { id: 6, src: "/i6.jpg", title: "Majestic Midnight Blue", desc: "Depth and richness combined.", color: "text-[#3D3933]" },
  { id: 7, src: "/i7.jpg", title: "Radiance Pink", desc: "A color that speaks of warmth.", color: "text-blue-600" },
  { id: 8, src: "/i8.jpg", title: "Signature Violet", desc: "The essence of creativity.", color: "text-[#1D2132]" },
  { id: 9, src: "/i4.jpg", title: "Turquoise Temptation", desc: "Cool, inviting, and fresh.", color: "text-blue-500" },
];

const InkGrid = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current.children,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, stagger: 0.2, duration: 1.2, ease: "power2.out" }
    );
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl md:text-4xl font-bold italic text-center">
        Ink Shades : Colors that Converse
      </h1>
      <p className="text-gray-500 mt-2 text-center">
        Dive into a palette that's as vibrant and varied as your emotions.
      </p>

      <div
        ref={containerRef}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 w-full max-w-6xl"
      >
        {items.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white p-4 rounded-xl shadow-lg flex flex-col items-center transition-all"
          >
            <Image
              src={item.src}
              alt={item.title}
              width={150}
              height={150}
              className="rounded-md"
            />
            <h2 className={`text-lg font-semibold mt-2 ${item.color}`}>{item.title}</h2>
            <p className="text-gray-600 text-center mt-1">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default InkGrid;
