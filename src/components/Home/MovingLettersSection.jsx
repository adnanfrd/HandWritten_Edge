"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { damion } from "../AboutUs/fonts";
import Link from "next/link";

const MovingLettersSection = () => {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-white to-gray-100 overflow-hidden">
      {/* Decorative Background */}

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12 relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:w-1/2 text-center lg:text-left"
        >
          <h2
            className="custom-font text-3xl md:text-4xl font-extrabold italic leading-25"
          >
            Pioneering The Perfect Blend Of <br />
            <span className="bg-gradient-to-r from-[#001F3F] to-[#00509E] bg-clip-text text-transparent">
              Tradition & Technology
            </span>
          </h2>

          <h3
            className={`${damion.className} mt-6 text-2xl md:text-3xl font-semibold italic text-gray-800`}
          >
            We Know Moving. We Know Letters.
          </h3>
          <p className="mt-4 text-gray-600 leading-relaxed text-lg">
            Having been in the moving industry, we understand the nuances of
            businesses and clients alike. We took the sentimentality of
            handwritten letters and supercharged it with technology to ensure
            your business stands out and leaves a lasting impression.
          </p>
           <Link href="/about">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 px-8 py-3 cursor-pointer bg-black hover:bg-gradient-to-r from-[#001F3F] to-[#00509E]  text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
          >
            Read More
          </motion.button>
          </Link>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="lg:w-1/2 relative"
        >
          <div className="relative overflow-hidden rounded-xl shadow-xl">
            <Image
              src="/w4.jpg"
              alt="Handwritten Letter with Pen"
              width={600}
              height={400}
              className="rounded-xl w-full object-cover"
            />
            {/* Decorative Overlay */}
            <div className="absolute inset-0 bg-black/10 mix-blend-multiply rounded-xl"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MovingLettersSection;
