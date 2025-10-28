"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { eventsData } from "./data/eventsData";
import Navbar from "../../components/Navbar";

export default function EventListPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#050505] text-[#f5f5dc] font-sans">
      <Navbar />
      {/* Main Content */}
      <div className="flex-grow px-6 sm:px-16 py-16 pt-32">
        {/* Header Section */}
        <motion.div
          className="max-w-5xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Single-Line Styled Heading */}
          <h1 className="relative inline-block font-extrabold uppercase tracking-widest leading-tight">
            {/* Outlined text */}
            <span
              className="text-5xl sm:text-6xl md:text-7xl text-transparent"
              style={{
                WebkitTextStroke: "2px #f5f5dc",
                letterSpacing: "4px",
              }}
            > 
              CYBERSECURITY
            </span>

            {/* Filled accent word */}
            <span className="text-5xl sm:text-6xl md:text-7xl text-[#f5f5dc] ml-4">
              EVENTS
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-yellow-400 mt-6 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Explore detailed breakdowns of recent cybersecurity events, breaches, and attacks.
          </p>
        </motion.div>

        {/* Event List */}
        <div className="max-w-4xl mx-auto space-y-6">
          {eventsData.map((ev, i) => (
            <motion.div
              key={ev.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12 }}
            >
              <Link
                href={`/event/${ev.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl border border-gray-800 bg-[#0f0f0f] p-6 transition transform hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(255,214,0,0.12)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-xl sm:text-2xl font-semibold text-[#f5f5dc] group-hover:text-yellow-400 transition-colors">
                      {ev.title}
                    </div>
                    <div className="text-sm text-gray-400 mt-1">
                      {ev.date} • {ev.severity}
                    </div>
                  </div>

                  <div className="ml-auto text-yellow-400 transform group-hover:translate-x-1 transition-transform">
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </div>
                </div>

                <p className="text-sm text-gray-300 mt-3">{ev.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <footer className="border-t border-gray-800 py-10 text-center text-sm text-gray-400 bg-[#050505]">
        {/* <p className="mb-2">email us at</p>
        <p className="text-lg sm:text-xl font-semibold text-[#f5f5dc] mb-4">
          hi@example.com
        </p>

        <div className="flex justify-center gap-6 mb-6">
          <Link
            href="#"
            className="hover:text-yellow-400 transition-colors"
          >
            Instagram
          </Link>
          <Link
            href="#"
            className="hover:text-yellow-400 transition-colors"
          >
            Dribbble
          </Link>
        </div> */}

        <p className="text-xs text-gray-500">
          © 2025 Earocycle Solutions Private Limited - All rights reserved.
        </p>
      </footer>
    </div>
  );
}
