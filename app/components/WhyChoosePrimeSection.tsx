"use client";

import React from "react";
import { motion } from "framer-motion";

export const WhyChoosePrimeSection: React.FC = () => {
  const fadeLeft = { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } };
  const fadeRight = { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } };
  const fadeUp = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } };
  const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.2 } } };

  return (
    <section id="experience" className="relative w-full bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
        {/* Left Image */}
        <motion.div
          className="relative h-120 md:h-155 rounded-xl overflow-hidden border border-gray-700"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeLeft}
          transition={{ duration: 0.8 }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('/why.jpg')` }}
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-black/70" />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={stagger}
        >
          {/* Section Heading */}
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-snug bg-linear-to-r from-yellow-400 via-amber-300 to-white bg-clip-text text-transparent"
            variants={fadeRight}
          >
            Why Choose PRIME?
          </motion.h2>
          <motion.p
            className="text-gray-300 text-lg md:text-xl leading-relaxed mb-14 max-w-2xl"
            variants={fadeRight}
          >
            Delivering value through expertise and dedication.
          </motion.p>

          {/* Item 1 */}
          <motion.div className="mb-12" variants={fadeUp}>
            <span className="text-sm uppercase tracking-widest text-yellow-400">
              Key Metric
            </span>
            <h3 className="text-2xl font-semibold mt-2 mb-3">25 Years of Excellence</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Since our inception, we have been at the forefront of the construction and consulting industry, delivering over 500 successful projects across 4 continents. Our longevity is a testament to our commitment to quality and integrity.
            </p>
            <p className="text-4xl font-extrabold text-yellow-400">
              500+
              <span className="block text-base text-gray-300 font-normal">
                Projects Completed
              </span>
            </p>
          </motion.div>

          {/* Divider */}
          <motion.div className="border-t border-gray-700 my-10" variants={fadeUp} />

          {/* Item 2 */}
          <motion.div className="mb-12" variants={fadeUp}>
            <span className="text-sm uppercase tracking-widest text-yellow-400">
              Key Metric
            </span>
            <h3 className="text-2xl font-semibold mt-2 mb-3">Expert Team & Certifications</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Our team comprises certified engineers, seasoned project managers, and business strategists. We hold top-tier industry certifications ensuring that every project meets the highest standards of safety and compliance.
            </p>
            <p className="text-4xl font-extrabold text-yellow-400">
              100%
              <span className="block text-base text-gray-300 font-normal">
                Certified Experts
              </span>
            </p>
          </motion.div>

          {/* Divider */}
          <motion.div className="border-t border-gray-700 my-10" variants={fadeUp} />

          {/* Item 3 */}
          <motion.div variants={fadeUp}>
            <span className="text-sm uppercase tracking-widest text-yellow-400">
              Key Metric
            </span>
            <h3 className="text-2xl font-semibold mt-2 mb-3">Proven ROI for Clients</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              We don’t just build structures; we build value. Our consulting services are designed to optimize operational costs and maximize returns, with clients seeing an average of 25% improvement in efficiency.
            </p>
            <p className="text-4xl font-extrabold text-yellow-400">
              25%
              <span className="block text-base text-gray-300 font-normal">
                Efficiency Increase
              </span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
