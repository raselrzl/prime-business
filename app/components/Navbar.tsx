"use client";

import React, { useState } from "react"; // ✅ important
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Service", href: "#service" },
  { label: "Solutions", href: "#solutions" },
  { label: "Experience", href: "#experience" },
  { label: "Pricing", href: "#pricing" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      {/* Navbar */}
      <nav className="max-w-7xl text-white pr-6 bg-black flex items-center justify-between fixed top-0 w-full z-50">
        <div className="relative w-50 h-12 md:h-16 mt-2 ml-2 group">
          {/* Logo image */}
          <img
            src="/prime3.png"
            alt="PRIME Logo"
            className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
          />
          <p className="text-[8px] text-right mr-4 italic tracking-widest text-gray-300 uppercase mt-8 md:mt-12">
            Business & Construction
          </p>
        </div>

        {/* Logo */}
        {/*   <div className="leading-none">
          <div className="pt-1 font-bold text-xl inline-block">
            PRIME
          </div>
          <p className="text-xs tracking-widest text-gray-300 uppercase">
            Business & Construction
          </p>
        </div> */}

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="hover:text-yellow-400 transition-colors"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="#get-quote"
            className="bg-yellow-500 text-black px-5 py-2 rounded-full font-semibold hover:bg-yellow-400 transition"
          >
            Get Quote
          </Link>
        </div>

        {/* Mobile Burger */}
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
          className="md:hidden flex flex-col gap-1.5"
        >
          <span className="w-7 h-0.75 bg-white" />
          <span className="w-7 h-0.75 bg-white" />
          <span className="w-7 h-0.75 bg-white" />
        </button>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
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
              {/* Close */}
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
                className="absolute top-4 right-4 text-2xl"
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
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg hover:text-yellow-400 transition"
                  >
                    {item.label}
                  </Link>
                ))}

                <Link
                  href="#get-quote"
                  onClick={() => setIsOpen(false)}
                  className="mt-4 bg-yellow-500 text-black py-3 text-center font-semibold rounded-full hover:bg-yellow-400 transition"
                >
                  Get Quote
                </Link>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
