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
      <div className="absolute top-16 left-8 w-24 h-24 bg-purple-400 opacity-20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-8 w-32 h-32 bg-pink-400 opacity-20 rounded-full blur-3xl animate-pulse"></div>

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

      <motion.div
        className="grid md:grid-cols-2 gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, staggerChildren: 0.3 },
          },
        }}
      >
        <motion.p
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="text-lg text-gray-700 leading-relaxed bg-white/50 backdrop-blur-lg p-6 rounded-lg shadow-md"
        >
          Back in the day, receiving a handwritten note had a unique charm. It
          felt... real. At HandWritten.com, we’re reviving that nostalgic magic.
          We blend timeless penmanship with modern tech to bring a fresh twist
          to communication.
        </motion.p>

        <motion.p
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="text-lg text-gray-700 leading-relaxed bg-white/50 backdrop-blur-lg p-6 rounded-lg shadow-md"
        >
          In the moving industry, it’s never just about shifting boxes—it’s
          about real connections. In a world filled with dings and buzzes, we’re
          bringing back pen and paper to leave a lasting impression. Because
          sometimes, the old ways remain the best.
        </motion.p>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-2 gap-10 mt-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, scale: 0.9 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.8, staggerChildren: 0.3 },
          },
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

      <motion.div
        className="grid md:grid-cols-2 gap-10 mt-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, staggerChildren: 0.3 },
          },
        }}
      >
        <motion.p
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="text-lg text-gray-700 leading-relaxed bg-white/50 backdrop-blur-lg p-6 rounded-lg shadow-md"
        >
          Think back to the joy of receiving a personal letter in the mail— that
          warm smile, the feeling of holding heartfelt words meant just for you.
          In a world where digital messages flood our inboxes, a handwritten
          note remains truly special.
        </motion.p>

        <motion.p
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="text-lg text-gray-700 leading-relaxed bg-white/50 backdrop-blur-lg p-6 rounded-lg shadow-md"
        >
          Amidst the rush of packing, the stacks of boxes, and the whirlwind of
          emotions that moving day brings, there’s always a brief moment of
          pause. When you mark a box, noting its contents or destination—that
          simple handwritten note holds a depth of memories and meaning.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default MissionPage;
