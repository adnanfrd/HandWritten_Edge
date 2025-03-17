"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { damion } from "../AboutUs/fonts";

gsap.registerPlugin(ScrollTrigger);

const PersonalTouch = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
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
      className="relative py-20 px-6 md:px-12 lg:px-20 xl:px-28 bg-gradient-to-b from-white to-gray-100"
    >
      {/* Background Overlay */}

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`${damion.className} text-4xl md:text-7xl font-bold italic text-black`}
        >
          The Power of Personal{" "}
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Touch
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-700 mt-4 text-lg leading-relaxed"
        >
          Remember that heartwarming feeling when you received a special handwritten birthday card? The genuine touch, the personal effort, the emotional connection? 
          Now, envision being a potential moving customer and receiving a handwritten note from a CEO. It’s not just a letter; it’s a testament to care, dedication, and the value the company places on individual relationships.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-gray-700 mt-3 text-lg leading-relaxed"
        >
          In a world of digital detachment, a handwritten letter from a company’s leader becomes a powerful tool to foster trust, stand out, and ultimately convert potential leads into loyal clients.
        </motion.p>

        {/* Image with Hover Effect */}
        <motion.div
          className="mt-8 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
        >
          <img
            src="/thanks.jpg"
            alt="Personal Touch Image"
            className="rounded-xl shadow-lg object-cover border-4 border-white"
            width={400}
            height={300}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default PersonalTouch;
