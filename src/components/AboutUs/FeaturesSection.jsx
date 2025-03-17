"use client";
import React from "react";
import { motion } from "framer-motion";
import { Paintbrush, Trophy, Briefcase, BadgeCheck } from "lucide-react";

const features = [
  {
    id: 1,
    title: "Trailblazing",
    description:
      "Breaking the mold and setting the tone, we redefine the art of handwritten letters in the digital era.",
    icon: Paintbrush,
  },
  {
    id: 2,
    title: "Innovation Champions",
    description:
      "Blending old-world charm with new-age advancements, we're at the forefront of revolutionizing communication.",
    icon: Trophy,
  },
  {
    id: 3,
    title: "Fresh Perspectives",
    description:
      "With a blend of diverse talents, our team brings fresh, out-of-the-box ideas to every project.",
    icon: Briefcase,
  },
  {
    id: 4,
    title: "Commitment Assured",
    description:
      "We don't just promise; we deliver. Each letter sent through us embodies our dedication to excellence and your success.",
    icon: BadgeCheck,
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 flex flex-col items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl w-full text-center">
        {features.map((feature, index) => (
          <motion.div
            key={feature.id}
            className="flex flex-col items-center text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Circular Icon */}
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-pink-500 text-white mb-4">
              <feature.icon size={28} />
            </div>

            {/* Title */}
            <h2 className="text-xl font-bold italic">{feature.title}</h2>

            {/* Description */}
            <p className="mt-3 text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
