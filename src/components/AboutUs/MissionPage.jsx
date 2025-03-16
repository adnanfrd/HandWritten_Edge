"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const MissionPage = () => {
  return (
    <section className="container mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold italic">
          Our Company{" "}
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Mission
          </span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="grid md:grid-cols-2 gap-8"
      >
        <p className="text-lg text-gray-700 leading-relaxed">
          You know, back in the day, there was something special about receiving
          a handwritten note. It just felt... genuine. At MovingLetters.ai,
          we’re all about capturing that nostalgic magic. We’re meshing good
          old-fashioned penmanship with today’s tech to offer a fresh touch in
          communication.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          For us in the moving industry, we know it’s more than just shifting
          boxes; it’s about making genuine connections. In a world that’s
          dinging with new emails and buzzing with notifications, we’re putting
          pen to paper to create a memorable impact. Because sometimes, the old
          ways are still the best ways.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        className="grid md:grid-cols-2 gap-8 mt-12"
      >
        <Image
          src="/mission1.webp" 
          alt="Mission Image 1"
          width={600}
          height={400}
          className="rounded-lg shadow-lg w-full object-cover"
        />
        <Image
          src="/mission2.webp" 
          alt="Mission Image 2"
          width={600}
          height={400}
          className="rounded-lg shadow-lg w-full object-cover"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        className="grid md:grid-cols-2 gap-8 mt-8"
      >
        <p className="text-lg text-gray-700 leading-relaxed">
          Remember the excitement of receiving a personal letter in the mail?
          That genuine smile, the warmth of holding tangible words meant just
          for you. In an era where digital messages clutter our inboxes, there’s
          something irreplaceably special about a handwritten note.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Amidst the bustle of packing, the chaos of boxes, and the mix of
          emotions that moving day brings, there’s always that one moment of
          pause. When you label a box, jotting down its contents or the room it
          belongs to—that handwritten note, while simple, carries a weight of
          memories and sentiments.
        </p>
      </motion.div>
    </section>
  );
};

export default MissionPage;
