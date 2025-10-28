'use client';

import Link from "next/link";
import Navbar from "../../components/Navbar";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-black text-[#f5f5dc] px-8 py-12 font-sans pt-24">
      <Navbar />

      {/* Page Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-[#fdd023] mb-4 tracking-wide">
          Our Blogs
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Explore detailed write-ups on famous cyberattacks and general cybersecurity practices.
        </p>
      </div>

      {/* Famous Cyber Attacks Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-10 text-[#fdd023] border-b border-[#fdd023]/30 pb-2">
          Famous Cyber Attacks
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BlogCard
            title="Target Data Breach"
            href="/blog/cyber-attacks/target-data"
            description="A look into one of the most infamous retail data breaches in history."
          />
          <BlogCard
            title="WannaCry: The 2017 Ransomware Outbreak"
            href="/blog/cyber-attacks/wannacry"
            description="How a global ransomware attack exploited unpatched systems worldwide."
          />
          <BlogCard
            title="SolarWinds / Sunburst Supply Chain Attack"
            href="/blog/cyber-attacks/soalrwinds"
            description="Inside one of the most sophisticated cyber-espionage attacks ever seen."
          />
        </div>
      </section>

      {/* General Blogs Section */}
      <section>
        <h2 className="text-3xl font-bold mb-10 text-[#fdd023] border-b border-[#fdd023]/30 pb-2">
          General Blogs
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BlogCard
            title="Supply Chain Security & Third-Party Risks"
            href="/blog/general-blogs/supply_chain"
            description="Understanding the weak links in your software supply chain."
          />
          <BlogCard
            title="Securing the Hybrid Frontier"
            href="/blog/general-blogs/hybrid_frontier"
            description="Mitigating cyber threats in remote work and edge computing environments."
          />
        </div>
      </section>
    </div>
  );
}

/* ==================== CARD COMPONENT ==================== */
interface BlogCardProps {
  title: string;
  href: string;
  description: string;
}

function BlogCard({ title, href, description }: BlogCardProps) {
  return (
    <Link href={href} className="group">
      <div className="bg-[#0f0f0f] border border-[#fdd023]/30 rounded-2xl p-6 hover:border-[#fdd023] transition duration-300 shadow-md hover:shadow-[#fdd023]/20 hover:-translate-y-2">
        <h3 className="text-2xl font-semibold text-[#fdd023] mb-3 group-hover:underline decoration-[#fdd023]/70 underline-offset-4">
          {title}
        </h3>
        <p className="text-gray-400 text-justify leading-relaxed mb-4">
          {description}
        </p>
        <span className="inline-block text-[#fdd023] font-medium group-hover:translate-x-1 transition-transform">
          Read More →
        </span>
      </div>
    </Link>
  );
}
