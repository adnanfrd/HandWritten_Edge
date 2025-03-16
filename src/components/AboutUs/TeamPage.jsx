"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image"; 

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
  return (
    <div className="min-h-[30vh] bg-gradient-to-br from-gray-100 italic to-blue-50 px-4 py-8 flex flex-col items-center">
      <motion.h1
        className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Behind The <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Magic
          </span>
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {teamMembers.map((member) => (
          <motion.div
            key={member.id}
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src={member.img} 
              alt={member.name}
              width={96} 
              height={96} 
              className="rounded-full mb-4 object-cover"
            />
            <h2 className="text-xl font-semibold text-gray-700">{member.name}</h2>
            <p className="text-sm text-gray-500">{member.role}</p>
            <p className="mt-3 text-gray-600 text-center">{member.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
