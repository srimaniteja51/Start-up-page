"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { EventData } from "../data/eventsData";

interface EventDetailClientProps {
  event: EventData;
}

export default function EventDetailClient({ event }: EventDetailClientProps) {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [smoothCursor, setSmoothCursor] = useState({ x: 0, y: 0 });
  const [formattedHTML, setFormattedHTML] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  // 🟡 Detect if on mobile (disable custom cursor)
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  // 🟡 Smooth trailing cursor (desktop only)
  useEffect(() => {
    if (isMobile) return;
    let animationFrame: number;
    const follow = () => {
      setSmoothCursor((prev) => ({
        x: prev.x + (cursorPos.x - prev.x) * 0.12,
        y: prev.y + (cursorPos.y - prev.y) * 0.12,
      }));
      animationFrame = requestAnimationFrame(follow);
    };
    follow();
    return () => cancelAnimationFrame(animationFrame);
  }, [cursorPos, isMobile]);

  useEffect(() => {
    if (isMobile) return;
    const handleMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [isMobile]);

  // 🧩 Format HTML
  useEffect(() => {
    let formatted = event.html
      .replace(
        /<strong>(.*?)<\/strong>:/g,
        `<li class='ml-6 mb-2 text-[#f5f5dc]'><span class='text-yellow-300 font-semibold'>$1:</span></li>`
      )
      .replace(/<\/pre>\s*<pre>/g, "</pre><pre class='mt-4'>");

    const sectionTitles = [
      "Overview",
      "Background",
      "Timeline of Events",
      "Technical Stuff",
      "Impact Assessment",
      "Response and Mitigation",
      "Attribution",
      "Expert Commentary",
      "Lessons Learned / Recommendations",
      "References",
    ];

    for (const title of sectionTitles) {
      const regex = new RegExp(
        `(<(?:h[1-6]|div)[^>]*>${title}<\/(?:h[1-6]|div)>)`,
        "gi"
      );
      formatted = formatted.replace(
        regex,
        `$1<div class="h-[1px] bg-yellow-400 shadow-[0_0_12px_#FFD700] animate-glow mt-2 mb-6"></div>`
      );
    }

    setFormattedHTML(formatted);
  }, [event.html]);

  return (
    <div
      className="min-h-screen bg-[#050505] text-[#f5f5dc] px-4 sm:px-10 md:px-16 py-10 font-sans relative overflow-x-hidden"
      style={{
        fontFamily: "'Inter', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
      }}
    >
      {/* 🟡 Floating cursor (desktop only) */}
      {!isMobile && (
        <div
          className="fixed w-3 h-3 bg-yellow-400 rounded-full pointer-events-none z-50"
          style={{
            left: `${smoothCursor.x - 6}px`,
            top: `${smoothCursor.y - 6}px`,
            boxShadow: "0 0 18px 6px rgba(255,215,0,0.6)",
            transition: "transform 0.05s linear",
          }}
        />
      )}

      {/* 🔙 Back Button */}
      <div className="fixed left-4 sm:left-6 bottom-6 z-50">
        <Link
          href="/event"
          className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 rounded-full bg-[#0f0f0f] text-[#f5f5dc] border border-gray-800 shadow-md hover:shadow-[0_8px_30px_rgba(255,214,0,0.12)] transition"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            className="text-yellow-400"
          >
            <path
              d="M15 6l-6 6 6 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back to NewsBytes
        </Link>
      </div>

      {/* 🧠 Header */}
      <div className="max-w-5xl mx-auto">
        <div className="mb-6 text-center sm:text-left">
          <div className="relative inline-block">
            <h2 className="relative text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-wider text-yellow-400">
              CYBERSECURITY - NEWSBYTES
            </h2>
            <h2
              className="absolute left-0 top-0 text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-wider text-transparent"
              style={{
                WebkitTextStroke: "1px #f5f5dc",
                opacity: 0.7,
                transform: "translate(5px, 5px)",
              }}
            >
              CYBERSECURITY - NEWSBYTES
            </h2>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#f5f5dc] mt-8 leading-snug"
          >
            {event.title}
          </motion.h1>

          <p className="text-gray-400 mt-2 text-sm sm:text-base">
            {event.date} • {event.severity}
          </p>
        </div>
      </div>

      {/* 📜 Content */}
      <div className="max-w-5xl mx-auto bg-transparent relative z-10 pb-20">
        <article
          className="prose prose-invert max-w-none text-[#f5f5dc] leading-relaxed space-y-6 prose-p:mb-4 prose-h2:mt-8 prose-h3:mt-6"
          style={{
            fontSize: "1rem",
            lineHeight: "1.75",
          }}
          dangerouslySetInnerHTML={{ __html: formattedHTML }}
        />
      </div>

      {/* ✨ Glow animation */}
      <style jsx global>{`
        @keyframes glow {
          0% {
            opacity: 0.7;
            box-shadow: 0 0 6px #ffd700;
          }
          50% {
            opacity: 1;
            box-shadow: 0 0 14px #ffd700;
          }
          100% {
            opacity: 0.7;
            box-shadow: 0 0 6px #ffd700;
          }
        }
        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
      `}</style>

      <footer className="border-t border-gray-800 py-5 text-center text-xs sm:text-sm text-gray-500 bg-[#050505]">
        © 2025 Earocycle Solutions Private Limited - All rights reserved.
      </footer>
    </div>
  );
}
