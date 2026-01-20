"use client";

import React from "react";
import { BadgeCheck, ShieldAlert, TrendingUp } from "lucide-react";

export const TailoredSolutionsSection: React.FC = () => {
  return (
    <section id="solutions" className="relative w-full bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
           <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-8 leading-snug md:leading-tight bg-linear-to-r from-yellow-400 via-amber-300 to-white bg-clip-text text-transparent">
         
            Tailored Solutions for <br /> Complex Challenges
          </h2>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            We deliver integrated solutions that address the unique demands of
            modern construction and business landscapes.
          </p>
        </div>

        {/* Image Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="relative h-105 max-h-150 rounded-xl overflow-hidden border border-gray-700 group">
            <div
              className="absolute inset-0 bg-cover bg-center transform transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url('/solution1.jpg')` }}
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-black/80" />

            <div className="relative z-10 h-full flex flex-col justify-end p-6">
              <h3 className="text-2xl font-bold mb-2">
                Project Planning & Execution
              </h3>
              <p className="text-gray-300 mb-5">
                From initial concept to final handover, we manage every phase
                with precision.
              </p>

              <div className="flex flex-wrap gap-2">
                {["Scheduling", "Procurement", "Safety"].map((btn) => (
                  <span
                    key={btn}
                    className="px-3 py-1 text-sm border border-amber-400/40 rounded-full bg-white/10 backdrop-blur hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition cursor-pointer"
                  >
                    {btn}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative h-105 max-h-150 rounded-xl overflow-hidden border border-gray-700 group">
            <div
              className="absolute inset-0 bg-cover bg-center transform transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url('/solution2.jpg')` }}
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-black/80" />

            <div className="relative z-10 h-full flex flex-col justify-end p-6">
              <h3 className="text-2xl font-bold mb-2">
                Commercial Development
              </h3>
              <p className="text-gray-300 mb-5">
                Developing high-value commercial properties that maximize land
                utility and ROI.
              </p>

              <div className="flex flex-wrap gap-2">
                {["Retail", "Office", "Mixed-Use"].map((btn) => (
                  <span
                    key={btn}
                    className="px-3 py-1 text-sm border border-amber-400/40 rounded-full bg-white/10 backdrop-blur hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition cursor-pointer"
                  >
                    {btn}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative h-105 max-h-150 rounded-xl overflow-hidden border border-gray-700 group">
            <div
              className="absolute inset-0 bg-cover bg-center transform transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url('/solution3.jpg')` }}
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-black/80" />

            <div className="relative z-10 h-full flex flex-col justify-end p-6">
              <h3 className="text-2xl font-bold mb-2">
                Infrastructure Consulting
              </h3>
              <p className="text-gray-300 mb-5">
                Expert advisory for complex infrastructure projects including
                transport and utilities.
              </p>

              <div className="flex flex-wrap gap-2">
                {["Urban Planning", "Sustainability", "Logistics"].map(
                  (btn) => (
                    <span
                      key={btn}
                      className="px-3 py-1 text-sm border border-amber-400/40 rounded-full bg-white/10 backdrop-blur hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition cursor-pointer"
                    >
                      {btn}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Feature Row */}
        {/* Bottom Feature Row */}
        <div className="mt-16 pt-10 border-t border-gray-700 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Item 1 */}
          <div className="flex gap-4 items-start group">
            <div className="p-2 rounded-lg border border-yellow-500/40 text-yellow-400">
              <BadgeCheck size={26} />
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-1 group-hover:text-yellow-400 transition">
                Quality Assurance
              </h4>
              <p className="text-gray-300 leading-relaxed">
                ISO 9001 Certified processes
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex gap-4 items-start group">
            <div className="p-2 rounded-lg border border-yellow-500/40 text-yellow-400">
              <ShieldAlert size={26} />
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-1 group-hover:text-yellow-400 transition">
                Risk Assessment
              </h4>
              <p className="text-gray-300 leading-relaxed">
                Proactive mitigation strategies
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex gap-4 items-start group">
            <div className="p-2 rounded-lg border border-yellow-500/40 text-yellow-400">
              <TrendingUp size={26} />
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-1 group-hover:text-yellow-400 transition">
                Business Strategy
              </h4>
              <p className="text-gray-300 leading-relaxed">
                Long-term value creation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
