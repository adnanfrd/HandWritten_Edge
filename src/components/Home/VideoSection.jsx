"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, X } from "lucide-react";

export default function VideoSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="relative w-[90%] max-w-2xl shadow-lg rounded-lg overflow-hidden">
        <Image
          src="/video-thumbnail.webp"
          alt="Video Thumbnail"
          width={800}
          height={450}
          className="w-full h-auto object-cover"
        />
        
        <button
          className="absolute inset-0 flex items-center justify-center bg-opacity-50 hover:bg-opacity-70 transition-all"
          onClick={() => setIsOpen(true)}
        >
          <Play size={50} className="text-white" />
        </button>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={() => setIsOpen(false)} 
        >
          <div
            className="relative w-full max-w-5xl p-4"
            onClick={(e) => e.stopPropagation()} 
          >
            <button
              className="absolute top-4 right-4 text-white"
              onClick={() => setIsOpen(false)}
            >
              <X size={40} />
            </button>

            <video controls autoPlay className="w-full h-auto max-h-[90vh]">
              <source src="/MovingLetters-Christmas-Ad-web.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
}
