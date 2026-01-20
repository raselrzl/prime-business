"use client";

import React from "react";

export const WhyChoosePrimeSection: React.FC = () => {
  return (
    <section id="experience" className="relative w-full bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
        {/* Left Image */}
        <div className="relative h-120 md:h-155 rounded-xl overflow-hidden border border-gray-700">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('/why.jpg')` }}
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-black/70" />
        </div>

        {/* Right Content */}
        <div>
          {/* Section Heading */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-snug bg-linear-to-r from-yellow-400 via-amber-300 to-white bg-clip-text text-transparent">
            Why Choose PRIME?
          </h2>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-14 max-w-2xl">
            Delivering value through expertise and dedication.
          </p>

          {/* Item 1 */}
          <div className="mb-12">
            <span className="text-sm uppercase tracking-widest text-yellow-400">
              Key Metric
            </span>
            <h3 className="text-2xl font-semibold mt-2 mb-3">
              25 Years of Excellence
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Since our inception, we have been at the forefront of the
              construction and consulting industry, delivering over 500
              successful projects across 4 continents. Our longevity is a
              testament to our commitment to quality and integrity.
            </p>
            <p className="text-4xl font-extrabold text-yellow-400">
              500+
              <span className="block text-base text-gray-300 font-normal">
                Projects Completed
              </span>
            </p>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 my-10" />

          {/* Item 2 */}
          <div className="mb-12">
            <span className="text-sm uppercase tracking-widest text-yellow-400">
              Key Metric
            </span>
            <h3 className="text-2xl font-semibold mt-2 mb-3">
              Expert Team & Certifications
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Our team comprises certified engineers, seasoned project managers,
              and business strategists. We hold top-tier industry certifications
              ensuring that every project meets the highest standards of safety
              and compliance.
            </p>
            <p className="text-4xl font-extrabold text-yellow-400">
              100%
              <span className="block text-base text-gray-300 font-normal">
                Certified Experts
              </span>
            </p>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 my-10" />

          {/* Item 3 */}
          <div>
            <span className="text-sm uppercase tracking-widest text-yellow-400">
              Key Metric
            </span>
            <h3 className="text-2xl font-semibold mt-2 mb-3">
              Proven ROI for Clients
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              We don’t just build structures; we build value. Our consulting
              services are designed to optimize operational costs and maximize
              returns, with clients seeing an average of 25% improvement in
              efficiency.
            </p>
            <p className="text-4xl font-extrabold text-yellow-400">
              25%
              <span className="block text-base text-gray-300 font-normal">
                Efficiency Increase
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
