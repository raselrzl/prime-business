"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export const HomeSection: React.FC = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerChildren = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <section className="relative w-full h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/hero.jpg')`,
        }}
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/70 to-black/30" />

      {/* Content */}
      <motion.div
        className="relative z-10 flex items-start h-full max-w-7xl mx-auto px-6 md:px-12 py-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={staggerChildren}
      >
        <motion.div
          className="max-w-xl text-left flex flex-col gap-6"
        >
          {/* Small label */}
          <motion.h1
            className="inline-block text-sm md:text-lg font-bold text-white leading-tight mb-4 bg-amber-100/20 border border-yellow-500 py-1 px-3 rounded-full shadow-lg"
            variants={fadeUp}
          >
            Leading the Industry Since{" "}
            <span className="text-yellow-400">1998</span>
          </motion.h1>

          {/* Main heading with gradient */}
          <motion.h2
            className="text-3xl xl:text-4xl font-extrabold mb-8 leading-snug md:leading-tight bg-linear-to-r from-yellow-400 via-amber-300 to-white bg-clip-text text-transparent"
            variants={fadeUp}
          >
            Building Excellence in Construction & Business Solutions
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            className="text-gray-300 text-base md:text-lg leading-relaxed mt-6"
            variants={fadeUp}
          >
            We combine architectural precision with strategic business
            consulting to deliver world-class infrastructure and sustainable
            growth strategies for global enterprises.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4 mt-10"
            variants={fadeUp}
          >
            <Link
              href="#schedule"
              className="px-6 py-3 w-62 bg-yellow-500 text-black font-semibold rounded-full shadow-lg hover:bg-yellow-400 transition text-center"
            >
              Schedule Construction
            </Link>
            <Link
              href="#services"
              className="px-6 py-3 w-37 border border-yellow-500 text-yellow-500 font-semibold rounded-full shadow-lg hover:bg-yellow-500 hover:text-black transition text-center"
            >
              Services
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
