"use client";

import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";
import { damion } from "../AboutUs/fonts";

const HomeServices = () => {
  const services = [
    {
      image: "/w1.jpg",
      title: "Old-School Mail with Cutting-Edge Technology:",
      description:
        "While most movers send generic postcards, elevate your brand with handwritten letters. Stand apart in a crowded industry and make an impression that counts.",
    },
    {
      image: "/w2.jpg",
      title: "Unforgettable First Impressions:",
      description:
        "Size matters in making an impression. With our customizable 5×7 cards, let your brand stand out uniquely in a crowd. Tailored for movers, these premium cards ensure lasting impact.",
    },
    {
      image: "/w3.jpg",
      title: "Tired of Returned Mail? We Were Too.",
      description:
        "Ever sent postcards that came back undelivered? MoveCleanse, our cloud-based tool, meticulously verifies listings to prevent wasted time and mail.",
    },
  ];

  return (
    <section className="relative py-16 px-6 bg-gradient-to-b from-white to-gray-100 text-center overflow-hidden">
      {/* Subtle Background Texture */}

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`${damion.className} text-5xl md:text-7xl font-extrabold italic text-gray-900 relative z-10`}
      >
        Our&nbsp;
        <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Services
        </span>
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="mt-2 text-gray-600 max-w-2xl mx-auto"
      >
        Experience unmatched efficiency with HandWritten.com. Elevate your moving business, embrace innovative solutions, and connect deeply with clients.
      </motion.p>

      {/* Service Cards Grid */}
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto relative z-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
          >
            <ServiceCard {...service} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HomeServices;
