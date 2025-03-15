"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function NavbarHero() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
        <source src="/MovingLetters-Christmas-Ad-web.mp4" type="video/mp4" />
      </video>

      <div
        className="absolute inset-0 bg-opacity-40"
        style={{ background: "#33293D", opacity: "0.2" }}
      ></div>

      {/* Navbar */}
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="absolute top-0 left-0 right-0 flex justify-between items-center px-6 md:px-12 h-[12vh] bg-transparent text-white"
      >
        <div>
          <div className="flex items-center justify-center">
            <Image src="/logohand.jpg" alt="Logo" width={90} height={90} />
          </div>
          <span className="text-xl font-semibold italic">
            Hand
            <span className="font-bold italic bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Written.com
            </span>
          </span>
        </div>

        <div className="hidden md:flex space-x-6 items-center">
          <Link href="#" className="hover:text-purple-300">
            Home
          </Link>
          <Link href="#" className="hover:text-purple-300">
            About Us
          </Link>
          <Link href="#" className="hover:text-purple-300">
            Blog
          </Link>
          <Link href="#" className="hover:text-purple-300">
            FAQs
          </Link>
          <Link href="#" className="hover:text-purple-300">
            Our Letters
          </Link>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black px-4 py-2 rounded-md"
          >
            Contact Us
          </motion.button>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute top-[12vh] left-0 w-full bg-black bg-opacity-95 flex flex-col items-center py-6 space-y-4 md:hidden"
          >
            <Link href="#" className="text-white hover:text-purple-300" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="#" className="text-white hover:text-purple-300" onClick={() => setIsOpen(false)}>
              About Us
            </Link>
            <Link href="#" className="text-white hover:text-purple-300" onClick={() => setIsOpen(false)}>
              Blog
            </Link>
            <Link href="#" className="text-white hover:text-purple-300" onClick={() => setIsOpen(false)}>
              FAQs
            </Link>
            <Link href="#" className="text-white hover:text-purple-300" onClick={() => setIsOpen(false)}>
              Our Letters
            </Link>
            <button className="bg-white text-black px-4 py-2 rounded-md" onClick={() => setIsOpen(false)}>
              Contact Us
            </button>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl md:text-6xl font-extrabold italic"
        >
          Revolutionizing Communication
          <br />
          For Movers
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="mt-4 text-lg md:text-xl max-w-2xl"
        >
          Crafting personal connections through the blend of old-world charm and modern tech.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 bg-black text-white px-6 py-3 rounded-md text-lg font-semibold"
        >
          Discover The Magic
        </motion.button>
      </div>
    </div>
  );
}
