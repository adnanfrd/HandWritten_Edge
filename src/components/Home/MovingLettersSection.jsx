"use client"; 

import Image from "next/image";
import { motion } from "framer-motion"; 
import { damion } from "../AboutUs/fonts";

const MovingLettersSection = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:w-1/2 text-center lg:text-left"
        >
          <h2 className={`${damion.className} text-3xl md:text-5xl font-extrabold italic`}>
            Pioneering The Perfect Blend Of Tradition And Technology
          </h2>
          <h3 className={`${damion.className} mt-6 text-3xl font-semibold italic`}>
            We Know Moving. We Know Letters.
          </h3>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Having been in the moving industry, we understand the nuances and needs of businesses
            and clients alike. We took the sentimentality of handwritten letters and supercharged it
            with technology to ensure your business stands out and leaves a lasting impression.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 px-6 py-2 text-purple-600 border-b-2 border-purple-600 hover:text-purple-800 hover:border-purple-800 transition-all"
          >
            Read More
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="lg:w-1/2"
        >
          <Image
            src="/beach1.jpg"
            alt="Handwritten Letter with Pen"
            width={600}
            height={400}
            className="rounded-lg shadow-lg w-full"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default MovingLettersSection;
