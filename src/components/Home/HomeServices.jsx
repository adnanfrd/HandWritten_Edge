"use client";

import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";
import { damion } from "../AboutUs/fonts";

const HomeServices = () => {
  const services = [
    {
      image: "/w1.jpg",
      title: "Classic Letters Meet Advanced Innovation:",
      description:
        "While most movers send generic postcards, refine your brand with handwritten notes. Stand apart in a crowded market and make an impact that lasts.",
    },
    {
      image: "/w2.jpg",
      title: "Unmatched First Impressions:",
      description:
        "Size matters in making an impact. With our premium 5×7 cards, let your brand shine brightly in a crowd. Designed for movers, these unique cards ensure strong recall.",
    },
    {
      image: "/w3.jpg",
      title: "Frustrated with Returned Mail? So Were We.",
      description:
        "Ever sent postcards that bounced back? MoveCleanse, our cloud-based solution, thoroughly verifies addresses to prevent wasted effort and mail.",
    },
];


  return (
    <section className="relative py-16 px-6 bg-gradient-to-b from-white to-gray-100 text-center overflow-hidden">

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="custom-font text-5xl md:text-7xl font-extrabold italic text-gray-900 relative z-10"
      >
        Our&nbsp;
        <span className="bg-gradient-to-r from-[#001F3F] to-[#00509E] bg-clip-text text-transparent">
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
