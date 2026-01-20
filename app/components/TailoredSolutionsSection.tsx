"use client";

import React from "react";
import { BadgeCheck, ShieldAlert, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export const TailoredSolutionsSection: React.FC = () => {
  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeUpStagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <section id="solutions" className="relative w-full bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Heading */}
        <motion.div
          className="max-w-3xl mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeUpStagger}
        >
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-8 leading-snug md:leading-tight bg-linear-to-r from-yellow-400 via-amber-300 to-white bg-clip-text text-transparent"
            variants={fadeUp}
          >
            Tailored Solutions for <br /> Complex Challenges
          </motion.h2>
          <motion.p
            className="text-gray-300 text-lg md:text-xl leading-relaxed"
            variants={fadeUp}
          >
            We deliver integrated solutions that address the unique demands of
            modern construction and business landscapes.
          </motion.p>
        </motion.div>

        {/* Image Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeUpStagger}
        >
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="relative h-105 max-h-150 rounded-xl overflow-hidden border border-gray-700 group"
              variants={fadeUp}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transform transition-transform duration-500 group-hover:scale-105"
                style={{
                  backgroundImage: `url('/solution${i}.jpg')`,
                }}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-black/80" />
              <div className="relative z-10 h-full flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold mb-2">
                  {i === 1
                    ? "Project Planning & Execution"
                    : i === 2
                    ? "Commercial Development"
                    : "Infrastructure Consulting"}
                </h3>
                <p className="text-gray-300 mb-5">
                  {i === 1
                    ? "From initial concept to final handover, we manage every phase with precision."
                    : i === 2
                    ? "Developing high-value commercial properties that maximize land utility and ROI."
                    : "Expert advisory for complex infrastructure projects including transport and utilities."}
                </p>
                <div className="flex flex-wrap gap-2">
                  {(i === 1
                    ? ["Scheduling", "Procurement", "Safety"]
                    : i === 2
                    ? ["Retail", "Office", "Mixed-Use"]
                    : ["Urban Planning", "Sustainability", "Logistics"]
                  ).map((btn) => (
                    <span
                      key={btn}
                      className="px-3 py-1 text-sm border border-amber-400/40 rounded-full bg-white/10 backdrop-blur hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition cursor-pointer"
                    >
                      {btn}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Feature Row */}
        <motion.div
          className="mt-16 pt-10 border-t border-gray-700 grid grid-cols-1 md:grid-cols-3 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeUpStagger}
        >
          {[
            { icon: <BadgeCheck size={26} />, title: "Quality Assurance", desc: "ISO 9001 Certified processes" },
            { icon: <ShieldAlert size={26} />, title: "Risk Assessment", desc: "Proactive mitigation strategies" },
            { icon: <TrendingUp size={26} />, title: "Business Strategy", desc: "Long-term value creation" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="flex gap-4 items-start group"
              variants={fadeUp}
            >
              <div className="p-2 rounded-lg border border-yellow-500/40 text-yellow-400">
                {item.icon}
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-1 group-hover:text-yellow-400 transition">
                  {item.title}
                </h4>
                <p className="text-gray-300 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
