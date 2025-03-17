"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { damion } from "./fonts";

gsap.registerPlugin(ScrollTrigger);

const Facebook = dynamic(() => import("lucide-react").then((mod) => mod.Facebook), { ssr: false });
const Twitter = dynamic(() => import("lucide-react").then((mod) => mod.Twitter), { ssr: false });
const Instagram = dynamic(() => import("lucide-react").then((mod) => mod.Instagram), { ssr: false });
const Youtube = dynamic(() => import("lucide-react").then((mod) => mod.Youtube), { ssr: false });

const socialIcons = [
  { id: 1, name: "Facebook", icon: Facebook, color: "text-blue-600" },
  { id: 2, name: "Twitter", icon: Twitter, color: "text-blue-400" },
  { id: 3, name: "Instagram", icon: Instagram, color: "text-pink-500" },
  { id: 4, name: "YouTube", icon: Youtube, color: "text-red-600" },
];

const SocialPage = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[50vh] bg-[#060041] flex flex-col justify-center items-center px-6 py-10 overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-pink-700 opacity-30 blur-3xl"></div>

      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className={`${damion.className} text-4xl md:text-7xl font-bold text-white mb-10`}
      >
        Follow <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
             Us
          </span>
      </motion.h2>

      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 gap-6 max-w-5xl w-full">
        {socialIcons.map((social, index) => (
          <motion.div
            key={social.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className="relative bg-white/10 backdrop-blur-lg shadow-lg p-8 rounded-xl flex flex-col items-center justify-center w-full sm:w-40 h-40 hover:shadow-2xl transition-all cursor-pointer border border-white/20"
          >
            {/* Glowing Border Effect on Hover */}
            <motion.div
              className="absolute inset-0 rounded-xl border-2 border-transparent transition-all"
              whileHover={{ borderColor: "rgba(255, 255, 255, 0.5)" }}
            />

            {React.createElement(social.icon, {
              className: `w-14 h-14 mb-4 ${social.color}`,
            })}

            <p className="text-lg font-semibold text-white">{social.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SocialPage;
