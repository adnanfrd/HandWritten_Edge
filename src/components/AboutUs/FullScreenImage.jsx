"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const FullScreenImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full h-screen overflow-hidden"
    >
      <Image
        src="/aboutUs.jpg" 
        alt="Full-Screen Background"
        layout="fill"
        objectFit="cover"
        priority
        className="absolute inset-0 w-full h-full"
      />
    </motion.div>
  );
};

export default FullScreenImage;
