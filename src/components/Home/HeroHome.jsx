"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function NavbarHero() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
        <source src="/MovingLetters-Christmas-Ad-web.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0  bg-opacity-40" style={{background: "#33293D",
    opacity: "0.2"}}></div>

      {/* Navbar */}
      <nav className="absolute top-0 left-0 right-0 flex justify-between items-center px-6 md:px-12 h-[12vh] bg-transparent text-white">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image src="/logohand.jpg" alt="Logo" width={50} height={50} />
          <span className="text-lg font-semibold">HandWritten.ai</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="#" className="hover:text-purple-300">Home</Link>
          <Link href="#" className="hover:text-purple-300">About Us</Link>
          <Link href="#" className="hover:text-purple-300">Blog</Link>
          <Link href="#" className="hover:text-purple-300">FAQs</Link>
          <Link href="#" className="hover:text-purple-300">Our Letters</Link>
          <button className="bg-white text-black px-4 py-2 rounded-md">Contact Us</button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="absolute top-[12vh] left-0 w-full bg-black bg-opacity-95 flex flex-col items-center py-6 space-y-4 md:hidden">
            <Link href="#" className="text-white hover:text-purple-300" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="#" className="text-white hover:text-purple-300" onClick={() => setIsOpen(false)}>About Us</Link>
            <Link href="#" className="text-white hover:text-purple-300" onClick={() => setIsOpen(false)}>Blog</Link>
            <Link href="#" className="text-white hover:text-purple-300" onClick={() => setIsOpen(false)}>FAQs</Link>
            <Link href="#" className="text-white hover:text-purple-300" onClick={() => setIsOpen(false)}>Our Letters</Link>
            <button className="bg-white text-black px-4 py-2 rounded-md" onClick={() => setIsOpen(false)}>Contact Us</button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-3xl md:text-6xl font-extrabold italic">Revolutionizing Communication<br />For Movers</h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl">
          Crafting personal connections through the blend of old-world charm and modern tech.
        </p>
        <button className="mt-6 bg-black text-white px-6 py-3 rounded-md text-lg font-semibold">Discover The Magic</button>
      </div>
    </div>
  );
}
