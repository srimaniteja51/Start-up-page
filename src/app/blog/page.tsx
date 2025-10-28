'use client';

import Navbar from "../../components/Navbar";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function BlogPage() {
  // Inject animations dynamically — self-contained, no global edits
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes outline-glow {
        0% { mask-position: 0%; }
        100% { mask-position: 100%; }
      }
      @keyframes gradient-move {
        0%, 100% { transform: translateX(-10%); }
        50% { transform: translateX(10%); }
      }
      @keyframes text-pulse {
        0%, 100% { opacity: 1; filter: drop-shadow(0 0 8px #fdd02360); }
        50% { opacity: 0.85; filter: drop-shadow(0 0 16px #fdd02390); }
      }
      .animate-outline-glow {
        animation: outline-glow 2.5s linear infinite;
        mask-size: 200%;
      }
      .animate-gradient-move {
        animation: gradient-move 8s ease-in-out infinite;
      }
      .animate-text-pulse {
        animation: text-pulse 3s ease-in-out infinite;
      }
      /* Responsive font scaling */
      .responsive-title {
        font-size: clamp(2rem, 8vw, 9rem);
        line-height: 1.1;
        word-break: break-word;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden text-[#f5f5dc] font-sans px-6">
      <Navbar />

      {/* Animated Text */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.8, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 1.2,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className="text-center font-extrabold uppercase tracking-widest leading-tight select-none animate-text-pulse"
      >
        <span
          className="relative block responsive-title text-transparent"
          style={{
            WebkitTextStroke: "2px #fdd023",
          }}
        >
          COMING&nbsp;SOON!!
          {/* Animated outline layer */}
          <span className="absolute inset-0 animate-outline-glow text-transparent [mask-image:linear-gradient(90deg,transparent,white,transparent)]">
            COMING&nbsp;SOON!!
          </span>
        </span>
      </motion.h1>

      {/* Subtle animated background glow */}
      <div className="absolute w-[160%] h-[160%] bg-gradient-to-r from-yellow-500/10 via-transparent to-yellow-500/10 animate-gradient-move blur-3xl" />
    </div>
  );
}
