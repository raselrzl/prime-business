"use client";

import React, { useState } from "react";
import { CheckCircle } from "lucide-react";

interface ExpertiseItem {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const EXPERTISE_ITEMS: ExpertiseItem[] = [
  {
    title: "Construction Management",
    description:
      "End-to-end project oversight ensuring timely delivery, budget adherence, and superior build quality.",
    icon: <CheckCircle size={28} />,
  },
  {
    title: "Business Consulting",
    description:
      "Strategic planning and operational optimization to drive growth and improve organizational efficiency.",
    icon: <CheckCircle size={28} />,
  },
  {
    title: "Infrastructure Development",
    description:
      "Large-scale infrastructure planning and execution for public and private sector projects.",
    icon: <CheckCircle size={28} />,
  },
  {
    title: "Risk Management",
    description:
      "Comprehensive risk assessment and compliance strategies to safeguard your assets and reputation.",
    icon: <CheckCircle size={28} />,
  },
  {
    title: "Financial Planning",
    description:
      "Data-driven financial analysis and forecasting to maximize ROI and ensure sustainable profitability.",
    icon: <CheckCircle size={28} />,
  },
  {
    title: "Stakeholder Relations",
    description:
      "Effective communication strategies to align stakeholders and foster collaborative partnerships.",
    icon: <CheckCircle size={28} />,
  },
];

export const ExpertiseSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="service" className="relative w-full bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Our Expertise
        </h2>
        <p className="text-gray-300 text-lg md:text-xl mb-12 leading-relaxed max-w-3xl">
          Bridging the gap between physical construction and strategic business
          development with our dual-focused approach.
        </p>

        {/* Expertise Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {EXPERTISE_ITEMS.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={item.title}
                onClick={() => handleClick(index)}
                className={`
    flex items-start gap-4 bg-[#141430] p-6 rounded-xl shadow-sm border border-gray-600
    transition transform cursor-pointer
    hover:-translate-y-1 hover:shadow-lg hover:shadow-yellow-400 hover:border hover:border-yellow-400
    ${isActive ? "-translate-y-1 shadow-lg shadow-yellow-400 border border-yellow-400" : ""}
  `}
              >
                {/* Icon */}
                <div className="text-yellow-400 mt-1">{item.icon}</div>

                {/* Text */}
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-200 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
