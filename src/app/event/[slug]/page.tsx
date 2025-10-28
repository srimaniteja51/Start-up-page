"use client";

import { use, useEffect, useState } from "react";
import { notFound } from "next/navigation";
import { eventsData } from "../data/eventsData";
import { motion } from "framer-motion";
import Link from "next/link";

interface Props {
  params: Promise<{ slug: string }>;
}

export default function EventDetail({ params }: Props) {
  const { slug } = use(params);

  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [smoothCursor, setSmoothCursor] = useState({ x: 0, y: 0 });

  const event = eventsData.find((e) => e.slug === slug);

  // 🟡 Smooth trailing cursor effect
  useEffect(() => {
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
  }, [cursorPos]);

  useEffect(() => {
    if (!event) return;
    const handleMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [event]);

  if (!event) return notFound();

  // 🧩 Format HTML on client side to avoid hydration issues
  const [formattedHTML, setFormattedHTML] = useState(event.html);

  useEffect(() => {
    let formatted = event.html
      .replace(
        /<strong>(.*?)<\/strong>:/g,
        `<li class='ml-6 mb-2 text-[#f5f5dc]'><span class='text-yellow-300 font-semibold'>$1:</span></li>`
      )
      .replace(/<\/pre>\s*<pre>/g, "</pre><pre class='mt-4'>");

    // ✨ Glowing section dividers
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
      className="min-h-screen bg-[#050505] text-[#f5f5dc] px-6 sm:px-16 py-12 font-sans relative overflow-x-hidden"
      style={{
        fontFamily: "'Inter', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
      }}
    >
      {/* 🟡 Floating cursor */}
      <div
        className="fixed w-3 h-3 bg-yellow-400 rounded-full pointer-events-none z-50"
        style={{
          left: `${smoothCursor.x - 6}px`,
          top: `${smoothCursor.y - 6}px`,
          boxShadow: "0 0 18px 6px rgba(255,215,0,0.6)",
          transition: "transform 0.05s linear",
        }}
      />

      {/* 🔙 Back Button */}
      <div className="fixed left-6 bottom-6 z-50">
        <Link
          href="/event"
          className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#0f0f0f] text-[#f5f5dc] border border-gray-800 shadow-md hover:shadow-[0_8px_30px_rgba(255,214,0,0.12)] transition"
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
          Back to Events
        </Link>
      </div>

      {/* 🧠 Header */}
      <div className="max-w-5xl mx-auto">
        <div className="mb-6">
          <div className="relative inline-block">
            <h2 className="relative text-4xl md:text-5xl font-extrabold uppercase tracking-wider text-yellow-400">
              CYBERSECURITY - EVENTS
            </h2>
            <h2
              className="absolute left-0 top-0 text-4xl md:text-5xl font-extrabold uppercase tracking-wider text-transparent"
              style={{
                WebkitTextStroke: "1px #f5f5dc",
                opacity: 0.7,
                transform: "translate(6px, 6px)",
              }}
            >
              CYBERSECURITY - EVENTS
            </h2>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold text-[#f5f5dc] mt-8 leading-tight"
          >
            {event.title}
          </motion.h1>

          <p className="text-gray-400 mt-2">
            {event.date} • {event.severity}
          </p>
        </div>
      </div>

      {/* 📜 Content */}
      <div className="max-w-5xl mx-auto bg-transparent relative z-10">
        <article
          className="prose prose-invert max-w-none text-[#f5f5dc] leading-relaxed space-y-6"
          style={{ fontSize: "1.05rem" }}
          dangerouslySetInnerHTML={{ __html: formattedHTML }}
        />
      </div>

      {/* ✨ Glow animation style */}
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



      <footer className="border-t border-gray-800 py-5 text-center text-sm text-gray-400 bg-[#050505]">
      <p className="text-xx text-white-800">
          © 2025 Earocycle Solutions Private Limited - All rights reserved.
        </p>
      </footer>
    </div>
    
  );
}
