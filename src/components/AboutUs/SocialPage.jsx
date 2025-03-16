"use client";
import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

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
  return (
    <section className="min-h-[50vh] bg-[#060041] flex flex-col justify-center items-center px-6 py-10">
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 gap-6 max-w-5xl w-full">
        {socialIcons.map((social, index) => (
          <motion.div
            key={social.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white shadow-lg p-8 rounded-xl flex flex-col items-center justify-center w-full sm:w-40 h-40 hover:shadow-2xl transition-all cursor-pointer"
          >
            {React.createElement(social.icon, { className: `w-14 h-14 mb-4 ${social.color}` })}
            <p className="text-lg font-semibold text-gray-700">{social.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SocialPage;
