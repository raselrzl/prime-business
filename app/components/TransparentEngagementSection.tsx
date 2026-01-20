"use client";

import React from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

export const TransparentEngagementSection: React.FC = () => {
  // Variants for heading/paragraph
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  // Variants for boxes
  const boxVariant = {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0 },
  };

  const boxes = [
    {
      title: "Consultation",
      desc: "Initial assessment and strategic planning session for new projects.",
      items: [
        "Site feasibility analysis",
        "Preliminary budget estimation",
        "Regulatory compliance check",
        "Strategic roadmap creation",
      ],
      button: "Book Assessment",
    },
    {
      title: "Project Management",
      desc: "Comprehensive oversight for ongoing construction and development projects.",
      items: [
        "Dedicated Project Manager",
        "End-to-end resource management",
        "Weekly progress reporting",
        "Quality assurance inspections",
        "Vendor coordination",
      ],
      button: "Request Proposal",
    },
    {
      title: "Enterprise",
      desc: "Full-scale partnership for large organizations with multiple asset requirements.",
      items: [
        "Portfolio-wide strategy",
        "Priority resource allocation",
        "Executive dashboard access",
        "24/7 crisis management support",
        "Custom API integration",
      ],
      button: "Contact Sales",
    },
  ];

  return (
    <section id="getcote" className="relative w-full bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Heading */}
        <motion.div
          className="max-w-3xl mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ staggerChildren: 0.2 }}
        >
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-snug bg-linear-to-r from-yellow-400 via-amber-300 to-white bg-clip-text text-transparent"
            variants={fadeUpVariant}
            transition={{ duration: 0.6 }}
          >
            Transparent Engagement Models
          </motion.h2>
          <motion.p
            className="text-gray-300 text-lg md:text-xl leading-relaxed"
            variants={fadeUpVariant}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Choose the level of engagement that best suits your project's scale
            and complexity.
          </motion.p>
        </motion.div>

        {/* Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {boxes.map((box, index) => (
            <motion.div
              key={box.title}
              className="border border-gray-700 rounded-xl p-8 hover:border-yellow-500 transition"
              variants={boxVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-2">{box.title}</h3>
              <p className="text-gray-300 mb-6">{box.desc}</p>

              <ul className="space-y-3 mb-8">
                {box.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="text-yellow-400 mt-1" size={18} />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full py-3 border border-yellow-500 text-yellow-400 rounded-full font-semibold hover:bg-yellow-500 hover:text-black transition">
                {box.button}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
