"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative flex justify-between items-center px-6 md:px-12 h-[12vh] bg-[#022252CC] opacity-10 "
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

      <div className="hidden md:flex space-x-6 text-white font-semibold text-lg items-center">
        <Link href="/" className="hover:text-purple-300">Home</Link>
        <Link href="/about" className="hover:text-purple-300">About Us</Link>
        <Link href="#" className="hover:text-purple-300">FAQs</Link>
        <Link href="#" className="hover:text-purple-300">Our Letters</Link>
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-white text-black px-4 py-2 rounded-md">
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
          <Link href="/" className="text-white hover:text-purple-300" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="#" className="text-white hover:text-purple-300" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link href="#" className="text-white hover:text-purple-300" onClick={() => setIsOpen(false)}>Blog</Link>
          <Link href="#" className="text-white hover:text-purple-300" onClick={() => setIsOpen(false)}>FAQs</Link>
          <Link href="#" className="text-white hover:text-purple-300" onClick={() => setIsOpen(false)}>Our Letters</Link>
          <button className="bg-white text-black px-4 py-2 rounded-md" onClick={() => setIsOpen(false)}>Contact Us</button>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
