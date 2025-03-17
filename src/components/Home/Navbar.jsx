"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "FAQs", path: "/faqs" },
    { name: "Our Letters", path: "/letters" },
  ];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full bg-[#022252CC] backdrop-blur-md bg-opacity-90 z-50 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center h-[12vh]">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logohand.jpg" alt="Logo" width={60} height={60} className="rounded-full" />
          <span className="text-xl font-semibold italic text-white">
            Hand
            <span className="font-bold italic bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Written.com
            </span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 text-white font-semibold text-lg">
          {navLinks.map(({ name, path }) => (
            <Link key={name} href={path} className="hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 
             hover:bg-clip-text hover:text-transparent italic transition-all duration-300">
              {name}
            </Link>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black px-5 py-2 rounded-lg shadow-md italic hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:text-white transition-all"
          >
            <Link href="/contact">Contact Us</Link>
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute top-[12vh] left-0 w-full bg-[#000000F2] backdrop-blur-lg flex flex-col items-center py-6 space-y-5 md:hidden"
          >
            {navLinks.map(({ name, path }) => (
              <Link
                key={name}
                href={path}
                className="text-white text-lg font-medium hover:text-purple-300 transition-all"
                onClick={() => setIsOpen(false)}
              >
                {name}
              </Link>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-6 py-2 rounded-md shadow-md hover:bg-gray-200 transition-all"
              onClick={() => setIsOpen(false)}
            >
              <Link href="/contact">Contact Us</Link>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
