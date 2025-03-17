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
          src="/videothumb.png"
          alt="Video Thumbnail"
          width={800}
          height={450}
          className="w-full h-auto object-cover"
        />

        {/* Play Button */}
        <button
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 hover:bg-opacity-70 transition-all"
          onClick={() => setIsOpen(true)}
        >
          <Play size={50} className="text-white" />
        </button>
      </div>

      {/* YouTube Video Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl p-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white"
              onClick={() => setIsOpen(false)}
            >
              <X size={40} />
            </button>

            {/* Embedded YouTube Video */}
            <iframe
              className="w-full h-[90vh] max-h-[500px] rounded-lg"
              src="https://www.youtube.com/embed/We_v0tJ0qHI"
              title="YouTube Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
