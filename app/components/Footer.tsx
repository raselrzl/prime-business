"use client";

import React from "react";
import {
  Building2,
  Briefcase,
  Factory,
  ShieldCheck,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react";
import { motion } from "framer-motion";

export const Footer: React.FC = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.footer
      className="bg-black text-white border-t border-gray-800"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      transition={{ staggerChildren: 0.2 }}
    >
      <motion.div
        className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-3 gap-12"
      >
        {/* Brand */}
        <motion.div variants={fadeUp}>
          <h3 className="text-2xl font-extrabold tracking-wide">PRIME</h3>
          <p className="text-sm tracking-widest text-gray-400 uppercase mt-1">
            Business & Construction
          </p>
          <p className="text-gray-300 mt-4 leading-relaxed max-w-sm">
            Leading provider of construction management and business consulting
            services. We build the future with precision and strategy.
          </p>
        </motion.div>

        {/* Services */}
        <motion.div variants={fadeUp}>
          <h4 className="text-lg font-semibold mb-4">Services</h4>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center gap-3">
              <Building2 size={18} className="text-yellow-400" />
              Construction Management
            </li>
            <li className="flex items-center gap-3">
              <Briefcase size={18} className="text-yellow-400" />
              Business Consulting
            </li>
            <li className="flex items-center gap-3">
              <Factory size={18} className="text-yellow-400" />
              Infrastructure
            </li>
            <li className="flex items-center gap-3">
              <ShieldCheck size={18} className="text-yellow-400" />
              Risk Assessment
            </li>
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div variants={fadeUp}>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-start gap-3">
              <MapPin size={20} className="text-yellow-400 mt-1" />
              <span>
                28/A, (3rd Floor), V.I.P Road, <br />
                Nayapaltan, Dhaka-100
              </span>
            </li>

            {/* Phone */}
            <li className="flex items-center gap-3 hover:text-yellow-400 transition">
              <Phone size={18} className="text-yellow-400" />
              <a href="tel:+8801711392562">+88 01711 392562</a>
            </li>

            {/* Email */}
            <li className="flex items-center gap-3 hover:text-yellow-400 transition">
              <Mail size={18} className="text-yellow-400" />
              <a href="mailto:abdussalamuzzal45@gmail.com">
                abdussalamuzzal45@gmail.com
              </a>
            </li>

            {/* WhatsApp */}
            <li className="flex items-center gap-3 hover:text-yellow-400 transition">
              <MessageCircle size={18} className="text-yellow-400" />
              <a
                href="https://wa.me/8801711392562"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Chat
              </a>
            </li>
          </ul>
        </motion.div>
      </motion.div>

      {/* Bottom Bar */}
      <motion.div
        className="border-t border-gray-800 py-6 text-center text-gray-400 text-xs"
        variants={fadeUp}
      >
        © {new Date().getFullYear()} PRIME Business & Construction. All rights
        reserved.
      </motion.div>
    </motion.footer>
  );
};
