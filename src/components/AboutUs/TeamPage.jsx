"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { damion } from "./fonts";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const teamMembers = [
  {
    id: 1,
    name: "Matthew Young",
    role: "CEO & Founder",
    description: "Visionary leader driving innovation at MovingLetters.ai.",
    img: "/team3.webp",
  },
  {
    id: 2,
    name: "Stewart Zielinski",
    role: "CTO",
    description: "Technical mastermind behind the company's solutions.",
    img: "/team2.webp",
  },
  {
    id: 3,
    name: "Zach Baz",
    role: "Lead Designer",
    description: "Creative genius shaping stunning user interfaces.",
    img: "/team1.webp",
  },
];

const TeamPage = () => {
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
    <div
      ref={sectionRef}
      className="relative min-h-[30vh] bg-gradient-to-br from-gray-100 to-blue-50 px-4 py-8 flex flex-col items-center overflow-hidden"
    >
      {/* Heading with Smooth Entry */}
      <motion.h1
        className={`${damion.className} text-4xl sm:text-7xl font-extrabold text-gray-800 mb-8`}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Behind The{" "}
        <span className="bg-gradient-to-r from-[#001F3F] to-[#00509E] bg-clip-text text-transparent">
          Magic
        </span>
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.id}
            className="relative bg-white shadow-lg rounded-xl p-6 flex flex-col items-center border border-gray-200 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
            whileHover={{
              scale: 1.05,
              rotate: 1,
              boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Glowing Border on Hover */}
            <motion.div
              className="absolute inset-0 rounded-xl border-2 border-transparent transition-all"
              whileHover={{ borderColor: "rgba(128, 128, 128, 0.2)" }}
            />

            <Image
              src={member.img}
              alt={member.name}
              width={120}
              height={120}
              className="rounded-full mb-4 object-cover shadow-md border-4 border-gray-200"
            />
            <h2 className="text-xl font-semibold text-gray-800">{member.name}</h2>
            <p className="text-sm text-gray-600">{member.role}</p>
            <p className="mt-3 text-gray-700 text-center">{member.description}</p>
          </motion.div>
        ))}
      </div>
      <motion.div
        className="mt-10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Link href="/team">
        <button className="bg-black cursor-pointer text-white px-6 py-3 rounded-lg font-semibold hover:bg-gradient-to-r from-[#001F3F] to-[#00509E] transition">
          View More
        </button>
        </Link>
      </motion.div>
    </div>
  );
};

export default TeamPage;
