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
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`${damion.className} text-4xl md:text-7xl font-bold italic text-black`}
        >
          The Impact of a Personal{" "}
          <span className="bg-gradient-to-r from-[#001F3F] to-[#00509E] bg-clip-text text-transparent">
            Touch
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-700 mt-4 text-lg leading-relaxed"
        >
          Remember that heartwarming feeling of receiving a handwritten birthday
          card? The personal effort, the genuine touch, the emotional
          connection? Now, imagine being a potential moving customer and getting
          a handwritten note from a CEO. It’s more than just a letter—it’s a
          symbol of care, commitment, and the value the company places on
          personal relationships.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-gray-700 mt-3 text-lg leading-relaxed"
        >
          In a world of digital disconnect, a handwritten note from a company's
          leader becomes a powerful way to build trust, create a lasting
          impression, and turn potential leads into loyal clients.
        </motion.p>

        <motion.div
          className="mt-8 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
        >
          <img
            src="/w7.jpg"
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
