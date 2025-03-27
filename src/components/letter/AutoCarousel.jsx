"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { damion } from "../AboutUs/fonts";

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); 

    return () => clearInterval(interval);
  }, [currentIndex]);

  useEffect(() => {
    gsap.to(carouselRef.current, {
      x: `-${currentIndex * 100}%`,
      duration: 0.8,
      ease: "power2.out",
    });
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
        <h2 className={`${damion.className} p-5 text-center text-4xl md:text-7xl`}>Fonts That Tell  <span className="bg-gradient-to-r from-[#001F3F] to-[#00509E] bg-clip-text text-transparent">Your Story</span></h2>
      <div className="flex w-full" ref={carouselRef}>
        {items.map((item) => (
          <div key={item.id} className="min-w-full flex justify-center">
            <div className="w-full flex flex-col items-center p-4">
              <Image
                src={item.src}
                alt={item.alt}
                width={1000}
                height={600}
                className="w-full h-auto max-w-lg rounded-lg shadow-md"
              />
              <div className="mt-4 text-center">
                <p className="text-lg font-semibold">{item.title}</p>
                <p className="text-gray-600 mb-5">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between px-4">
        <button
          onClick={handlePrev}
          className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition-all text-xl md:text-2xl"
        >
          &lt;
        </button>
        <button
          onClick={handleNext}
          className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition-all text-xl md:text-2xl"
        >
          &gt;
        </button>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

const items = [
  {
    id: 1,
    src: "/font1.jpg",
    alt: "Image 1",
    title: "Cursive Cascade",
    description: "Elegance from a bygone era.",
  },
  {
    id: 2,
    src: "/font2.jpg",
    alt: "Image 2",
    title: "Steady Script",
    description: "A firm, consistent style.",
  },
  {
    id: 3,
    src: "/font3.jpg",
    alt: "Image 2",
    title: "Steady Script",
    description: "A firm, consistent style.",
  },
  {
    id: 4,
    src: "/font4.jpg",
    alt: "Image 2",
    title: "Steady Script",
    description: "A firm, consistent style.",
  },
  {
    id: 3,
    src: "/font1.jpg",
    alt: "Image 2",
    title: "Steady Script",
    description: "A firm, consistent style.",
  },
];

const CarouselPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <Carousel items={items} />
    </div>
  );
};

export default CarouselPage;
