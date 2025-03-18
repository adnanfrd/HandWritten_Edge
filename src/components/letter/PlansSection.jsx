"use client";
import React from "react";
import { motion } from "framer-motion";
import { damion } from "../AboutUs/fonts";
import Link from "next/link";


const PlansSection = () => {
    return (
      <div className="bg-white py-12 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {/* Left - Title & Button */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-center bg-gray-100 p-8 rounded-xl shadow-md"
          >
            <h3 className={`${damion.className} text-4xl md:text-7xl font-bold italic`}>All Plans Include</h3>
            <p className="text-gray-600 text-center mt-2">
              Great features included with every type of pricing
            </p>
            <Link href="/contact">
            <button className="mt-4 px-6 py-2 cursor-pointer bg-black text-white rounded-lg hover:bg-gradient-to-r from-[#001F3F] to-[#00509E]  transition">
              Contact Us
            </button>
            </Link>
          </motion.div>
  
          {/* Right - Features List */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-50 p-6 rounded-xl shadow-md"
          >
            <ul className="space-y-3">
              {[
                "First-Class Delivery: Every letter includes a First-Class $6.66 Stamp.",
                "Targeted Listings: Daily letters to select homes via top Listing service.",
                "Ready Lists: Cleaned lists with bad addresses filtered. Emailed daily.",
                "Distinctive Design: Double-sided 5x7 letters.",
                "Envelope Touch: Handwritten envelopes for authenticity.",
                "Daily Updates: Photos of your letters sent to your inbox.",
                "Precision Handling: From fold to stamp, we’ve got it.",
                "Quality Paper: Luxurious 90 lb card stationery.",
                "Custom Options: Stuff business cards, stickers, and more.",
                "Your Handwriting: We can mimic it! (Additional fee applies).",
                "Varied Designs: Three unique letter styles to start.",
              ].map((feature, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <span className="text-blue-600 font-semibold">✔</span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    );
  };
export default PlansSection  