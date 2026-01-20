"use client";

import React from "react";
import { Phone } from "lucide-react";

export const CallButton: React.FC = () => {
  return (
    <a
      href="tel:+8801571311765" // your phone number
      className="fixed bottom-20 text-white border right-6 z-50 flex items-center justify-center w-10 h-10 bg-yellow-500 rounded-full shadow-lg hover:bg-yellow-400 transition-all"
      aria-label="Call PRIME"
    >
      <Phone size={20} />
    </a>
  );
};
