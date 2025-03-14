'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroHome() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
        <source src="/MovingLetters-Christmas-Ad-web.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0  bg-opacity-40"></div>

      <nav className="absolute top-0 left-0 right-0 flex justify-between items-center px-8 py-4 bg-transparent bg-opacity-50">
        <div className="flex items-center space-x-2">
          <Image src="/logohand.jpg" alt="Logo" width={50} height={50} />
          <span className="text-white text-lg font-semibold">HandWritten.ai</span>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link href="#" className="text-white hover:text-purple-300">Home</Link>
          <Link href="#" className="text-white hover:text-purple-300">About Us</Link>
          <Link href="#" className="text-white hover:text-purple-300">Blog</Link>
          <Link href="#" className="text-white hover:text-purple-300">FAQs</Link>
          <Link href="#" className="text-white hover:text-purple-300">Our Letters</Link>
        </div>
        <button className="bg-white text-black px-4 py-2 rounded-md">Contact Us</button>
      </nav>

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
