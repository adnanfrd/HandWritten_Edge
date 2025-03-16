"use client";

import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";
import { damion } from "../AboutUs/fonts";

const HomeServices = () => {
  const services = [
    {
      image: "/ser1.jpg",
      title: "Old-School Mail with Cutting-Edge Technology:",
      description:
        "While most movers are sending generic postcards, imagine elevating your brand by delivering handwritten letters daily to newly listed high-end homes. Stand apart in a crowded industry and make an impression that counts.",
    },
    {
      image: "/ser2.jpg",
      title: "Unforgettable First Impressions:",
      description:
        "Size matters in making an impression. With our customizable 5×7 cards, let your brand stand out uniquely in a crowd. Tailored for movers, these premium cards amplify your message’s impact, ensuring it doesn’t just get noticed—it leaves a lasting memory.",
    },
    {
      image: "/ser3.jpg",
      title: "Tired of Returned Mail? We Were Too.",
      description:
        "Ever sent out postcards only to have them come back, marking a missed opportunity? Introducing MoveCleanse – our cloud-based tool that meticulously combs through your daily listings. Say goodbye to wasted time and mail with us.",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white text-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`${damion.className} text-5xl md:text-7xl font-extrabold italic`}
      >
        Our&nbsp;
        <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
         Services
          </span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="mt-2 text-gray-600 max-w-2xl mx-auto"
      >
        Experience unmatched efficiency with MovingLetters.ai. Elevate your moving business, embrace innovative solutions, and connect deeply with clients. Our cutting-edge approach guarantees satisfaction, blending tradition with contemporary strategies for optimal results.
      </motion.p>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
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
