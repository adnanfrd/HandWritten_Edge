"use client";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section className="relative w-full flex items-center min-h-[90vh] bg-gray-100 py-16 px-6 md:px-12">
      <div className="absolute inset-0 bg-[url('/background-pattern.svg')] opacity-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative max-w-5xl mx-auto text-center"
      >
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold italic text-black"
        >
          About <span className="text-purple-600">Us</span>
        </motion.h2>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700">
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg leading-relaxed"
          >
            From countless moves, seeing families settle into new homes, and
            understanding the heartbeat of the moving industry firsthand, one
            thing always stood out – the dwindling touch of personal connection
            in our tech-heavy age. Remember the excitement of receiving a
            handwritten letter in the mail? In the digital clutter we live in,
            that tangible note makes a world of difference.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-lg leading-relaxed"
          >
            At <span className="font-semibold">HandWritten.ai</span>, our
            roots are firmly planted in the idea of rekindling that magic.
            We’re not just integrating the age-old art of letter writing with
            modern tech. We’re reigniting the emotion, trust, and connection
            that comes from receiving a handwritten message.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-8 flex justify-center"
        >
          <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutUs;
