"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { damion } from "../AboutUs/fonts";

const SignatureStroke = () => {
  return (
    <div className="bg-gray-100 py-12 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 space-y-4"
        >
          <h2 className={`${damion.className} text-4xl md:text-7xl font-bold italic`}>
            Define Your Signature Stroke
          </h2>
          <p className="text-gray-600">See image for thickness</p>
          <p className="text-gray-700">
            From subtle to striking, choose a nib size that complements your
            message:
          </p>
          <ul className="space-y-2">
            {[
              { label: "Whisper Thin", desc: "For When Details Matter The Most." },
              { label: "Fine Finesse", desc: "Crisp, Clear, And Always Charming." },
              { label: "Medium Muse", desc: "Balanced Beauty For Everyday Elegance." },
              { label: "Bold Ballad", desc: "Make A Statement That’s Hard To Forget." },
            ].map((item, index) => (
              <li key={index} className="flex items-center space-x-2">
                <span className="text-blue-600 font-semibold">✔</span>
                <span className="font-medium">
                  <strong>{item.label}:</strong> {item.desc}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-6 md:mt-0 md:w-1/2 flex flex-col items-center space-y-4"
        >
          <Image
            src="/nib.jpg"
            alt="Signature Stroke 1"
            width={300}
            height={200}
            className="rounded-lg shadow-lg"
          />
          <Image
            src="/i10.jpg"
            alt="Signature Stroke 2"
            width={300}
            height={200}
            className="rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default SignatureStroke;
