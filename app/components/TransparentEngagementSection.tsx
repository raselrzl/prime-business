"use client";

import React from "react";
import { Check } from "lucide-react";

export const TransparentEngagementSection: React.FC = () => {
  return (
    <section id="getcote" className="relative w-full bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-snug bg-linear-to-r from-yellow-400 via-amber-300 to-white bg-clip-text text-transparent">
            Transparent Engagement Models
          </h2>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            Choose the level of engagement that best suits your project's scale
            and complexity.
          </p>
        </div>

        {/* Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Box 1 */}
          <div className="border border-gray-700 rounded-xl p-8 hover:border-yellow-500 transition">
            <h3 className="text-2xl font-semibold mb-2">Consultation</h3>
            <p className="text-gray-300 mb-6">
              Initial assessment and strategic planning session for new projects.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                "Site feasibility analysis",
                "Preliminary budget estimation",
                "Regulatory compliance check",
                "Strategic roadmap creation",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="text-yellow-400 mt-1" size={18} />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>

            <button className="w-full py-3 border border-yellow-500 text-yellow-400 rounded-full font-semibold hover:bg-yellow-500 hover:text-black transition">
              Book Assessment
            </button>
          </div>

          {/* Box 2 */}
          <div className="border border-gray-700 rounded-xl p-8 hover:border-yellow-500 transition">
            <h3 className="text-2xl font-semibold mb-2">Project Management</h3>
            <p className="text-gray-300 mb-6">
              Comprehensive oversight for ongoing construction and development
              projects.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                "Dedicated Project Manager",
                "End-to-end resource management",
                "Weekly progress reporting",
                "Quality assurance inspections",
                "Vendor coordination",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="text-yellow-400 mt-1" size={18} />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>

            <button className="w-full py-3 border border-yellow-500 text-yellow-400 rounded-full font-semibold hover:bg-yellow-500 hover:text-black transition">
              Request Proposal
            </button>
          </div>

          {/* Box 3 */}
          <div className="border border-gray-700 rounded-xl p-8 hover:border-yellow-500 transition">
            <h3 className="text-2xl font-semibold mb-2">Enterprise</h3>
            <p className="text-gray-300 mb-6">
              Full-scale partnership for large organizations with multiple asset
              requirements.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                "Portfolio-wide strategy",
                "Priority resource allocation",
                "Executive dashboard access",
                "24/7 crisis management support",
                "Custom API integration",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="text-yellow-400 mt-1" size={18} />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>

            <button className="w-full py-3 border border-yellow-500 text-yellow-400 rounded-full font-semibold hover:bg-yellow-500 hover:text-black transition">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
