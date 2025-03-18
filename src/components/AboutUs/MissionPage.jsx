"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { damion } from "./fonts";

gsap.registerPlugin(ScrollTrigger);

const MissionPage = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
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
      className="relative container mx-auto px-6 py-16 overflow-hidden"
    >
      {/* Background Floating Elements */}
      <div className="absolute top-16 left-8 w-24 h-24 bg-purple-400 opacity-20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-8 w-32 h-32 bg-pink-400 opacity-20 rounded-full blur-3xl animate-pulse"></div>

      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-12"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`${damion.className} text-5xl md:text-7xl font-bold italic relative`}
        >
          Our Company{" "}
          <span className="bg-gradient-to-r from-[#001F3F] to-[#00509E] bg-clip-text text-transparent drop-shadow-lg">
            Mission
          </span>
        </motion.h2>
      </motion.div>

      {/* Mission Text Blocks */}
      <motion.div
        className="grid md:grid-cols-2 gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.3 } },
        }}
      >
        <motion.p
          variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}
          className="text-lg text-gray-700 leading-relaxed bg-white/50 backdrop-blur-lg p-6 rounded-lg shadow-md"
        >
          You know, back in the day, there was something special about receiving
          a handwritten note. It just felt... genuine. At MovingLetters.ai,
          we’re all about capturing that nostalgic magic. We’re meshing good
          old-fashioned penmanship with today’s tech to offer a fresh touch in
          communication.
        </motion.p>

        <motion.p
          variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } }}
          className="text-lg text-gray-700 leading-relaxed bg-white/50 backdrop-blur-lg p-6 rounded-lg shadow-md"
        >
          For us in the moving industry, we know it’s more than just shifting
          boxes; it’s about making genuine connections. In a world that’s
          dinging with new emails and buzzing with notifications, we’re putting
          pen to paper to create a memorable impact. Because sometimes, the old
          ways are still the best ways.
        </motion.p>
      </motion.div>

      {/* Image Section with Hover Effects */}
      <motion.div
        className="grid md:grid-cols-2 gap-10 mt-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, scale: 0.9 },
          visible: { opacity: 1, scale: 1, transition: { duration: 0.8, staggerChildren: 0.3 } },
        }}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          className="overflow-hidden rounded-lg shadow-lg"
        >
          <Image
            src="/w6.jpg"
            alt="Mission Image 1"
            width={600}
            height={400}
            className="w-full object-cover"
          />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          className="overflow-hidden rounded-lg shadow-lg"
        >
          <Image
            src="/w7.jpg"
            alt="Mission Image 2"
            width={600}
            height={400}
            className="w-full object-cover"
          />
        </motion.div>
      </motion.div>

      {/* More Mission Text Blocks */}
      <motion.div
        className="grid md:grid-cols-2 gap-10 mt-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.3 } },
        }}
      >
        <motion.p
          variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}
          className="text-lg text-gray-700 leading-relaxed bg-white/50 backdrop-blur-lg p-6 rounded-lg shadow-md"
        >
          Remember the excitement of receiving a personal letter in the mail?
          That genuine smile, the warmth of holding tangible words meant just
          for you. In an era where digital messages clutter our inboxes, there’s
          something irreplaceably special about a handwritten note.
        </motion.p>

        <motion.p
          variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } }}
          className="text-lg text-gray-700 leading-relaxed bg-white/50 backdrop-blur-lg p-6 rounded-lg shadow-md"
        >
          Amidst the bustle of packing, the chaos of boxes, and the mix of
          emotions that moving day brings, there’s always that one moment of
          pause. When you label a box, jotting down its contents or the room it
          belongs to—that handwritten note, while simple, carries a weight of
          memories and sentiments.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default MissionPage;
