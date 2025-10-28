"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { eventsData } from "./data/eventsData";
import Navbar from "../../components/Navbar";

export default function EventListPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#050505] text-[#f5f5dc] font-sans overflow-x-hidden">
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow px-4 sm:px-8 md:px-16 py-16 pt-28">
        {/* Header Section */}
        <motion.div
          className="max-w-6xl mx-auto text-center mb-14 px-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-extrabold uppercase tracking-widest leading-tight text-center">
  {/* Outlined text */}
  <span
    className="block text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-transparent whitespace-normal break-words"
    style={{
      WebkitTextStroke: "1.3px #f5f5dc",
      letterSpacing: "2px",
      lineHeight: "1.2",
      wordBreak: "break-word",
    }}
  >
    CYBERSECURITY
  </span>

  {/* Filled accent word */}
  <span className="block text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#f5f5dc] mt-2 leading-tight">
    NEWSBYTES
  </span>
</h1>


          <p className="text-yellow-400 mt-6 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed px-2">
            Explore detailed breakdowns of recent cybersecurity events, breaches, and attacks.
          </p>
        </motion.div>

        {/* Event List — stacked vertically */}
        <div className="max-w-5xl mx-auto flex flex-col gap-8">
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
                className="group block w-full rounded-2xl border border-gray-800 bg-[#0f0f0f] p-6 md:p-8 transition-transform duration-300 hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(255,214,0,0.12)]"
              >
                <div className="flex flex-col justify-between h-full">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="text-xl sm:text-2xl font-semibold text-[#f5f5dc] group-hover:text-yellow-400 transition-colors">
                        {ev.title}
                      </div>
                      <div className="text-sm sm:text-base text-gray-400 mt-1">
                        {ev.date} • {ev.severity}
                      </div>
                    </div>

                    <div className="text-yellow-400 transform group-hover:translate-x-1 transition-transform flex-shrink-0">
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-gray-300 mt-3 leading-relaxed">
                    {ev.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-10 text-center text-xs sm:text-sm text-gray-500 bg-[#050505] px-4">
        © 2025 Earocycle Solutions Private Limited — All rights reserved.
      </footer>
    </div>
  );
}
