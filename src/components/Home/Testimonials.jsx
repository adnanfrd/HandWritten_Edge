"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { damion } from "../AboutUs/fonts";
import Link from "next/link";

const testimonials = [
  {
    name: "Emily Carter",
    company: "Central Coast Moving & Storage",
    quote:
      "A handwritten letter sparks emotions that emails simply can't match. HandWritten.com builds trust, making every move feel personal. In the moving industry, we don’t just relocate belongings—we create new beginnings.",
    image: "/testimonial1.jpeg",
  },
  {
    name: "James Bennett",
    company: "Murdock’s Moving & Storage",
    quote:
      "In the fast-paced moving business, every lead matters. HandWritten.com has transformed how we connect with potential clients, elevating our direct mail strategy and driving real results. It’s a game-changer.",
    image: "/testimonial2.jpeg",
  },
];

const Testimonials = () => {
  const testimonialRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      testimonialRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out" }
    );
  }, []);

  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 xl:px-28 bg-gray-50 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`${damion.className} text-4xl md:text-7xl font-bold italic text-black`}
      >
        Insights from Fellow{" "}
        <span className="bg-gradient-to-r from-[#001F3F] to-[#00509E] bg-clip-text text-transparent">
          Movers
        </span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-gray-600 mt-3 text-lg"
      >
        See the impact HandWritten.com has had on the industry—here is what
        fellow movers are saying.
      </motion.p>

      <div className="mt-10 grid md:grid-cols-2 gap-10">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            ref={(el) => (testimonialRef.current[index] = el)}
            className="relative bg-white rounded-lg p-6 flex flex-col md:flex-row items-center shadow-xl backdrop-blur-lg border border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
            <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-md">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="md:ml-6 mt-4 md:mt-0 text-left">
              <p className="text-purple-600 text-2xl font-serif mb-3">“</p>
              <p className="text-gray-700 text-lg">{testimonial.quote}</p>
              <p className="mt-4 font-semibold italic text-blue-600">
                {testimonial.name}
              </p>
              <p className="text-gray-500 text-sm">{testimonial.company}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Link href="/testimonial">
          <button className="bg-black text-white cursor-pointer px-6 py-3 rounded-lg font-semibold hover:bg-gradient-to-r from-[#001F3F] to-[#00509E] transition">
            Learn More
          </button>
        </Link>
      </motion.div>
    </section>
  );
};

export default Testimonials;
