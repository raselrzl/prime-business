"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Service", href: "#service" },
  { label: "Solutions", href: "#solutions" },
  { label: "Experience", href: "#experience" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Smooth scroll function
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 mx-auto bg-black text-white shadow-md">
        <div className="max-w-7xl flex items-center justify-between px-2 md:px-12 h-16 md:h-20">
          {/* Logo */}
          <div className="relative w-50 h-12 md:h-16 group">
            <img
              src="/prime3.png"
              alt="PRIME Logo"
              className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
            />
            <p className="text-[8px] md:text-xs italic tracking-widest pr-3 text-gray-300 uppercase mt-8 md:mt-12 text-right">
              Business & Construction
            </p>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href.substring(1))}
                className="hover:text-yellow-400 transition-colors font-semibold"
              >
                {item.label}
              </button>
            ))}

            {/* Get Quote Button points to #getcote */}
            <button
              onClick={() => scrollToSection("getcote")}
              className="bg-yellow-500 text-black px-5 py-2 rounded-full font-semibold hover:bg-yellow-400 transition"
            >
              Get Quote
            </button>
          </div>

          {/* Mobile Burger */}
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
            className="md:hidden flex flex-col gap-1.5 p-2"
          >
            <span className="w-7 h-0.75 bg-white rounded-full" />
            <span className="w-7 h-0.75 bg-white rounded-full" />
            <span className="w-7 h-0.75 bg-white rounded-full" />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer */}
            <motion.aside
              className="fixed top-0 left-0 w-72 h-full bg-black text-white z-50 p-6"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
                className="absolute top-4 right-4 text-2xl hover:text-yellow-400 transition"
              >
                ✕
              </button>

              {/* Drawer Logo */}
              <div className="mb-10">
                <div className="pt-1 font-bold text-xl inline-block">PRIME</div>
                <p className="text-xs mt-1 tracking-widest text-gray-300 uppercase">
                  Business & Construction
                </p>
              </div>

              {/* Drawer Links */}
              <nav className="flex flex-col gap-6">
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => {
                      scrollToSection(item.href.substring(1));
                      setIsOpen(false);
                    }}
                    className="text-lg hover:text-yellow-400 font-semibold transition"
                  >
                    {item.label}
                  </button>
                ))}

                {/* Mobile Get Quote */}
                <button
                  onClick={() => {
                    scrollToSection("getcote");
                    setIsOpen(false);
                  }}
                  className="mt-4 bg-yellow-500 text-black py-3 text-center font-semibold rounded-full hover:bg-yellow-400 transition"
                >
                  Get Quote
                </button>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
