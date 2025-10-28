'use client';

import { useState, useEffect, useRef } from 'react';
import { FaLinkedin, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../../../components/Navbar';

export default function HomePage() {
  const strokeStyle = {
    WebkitTextStroke: '1px #f5f5dc',
    color: 'transparent',
  } as const;


  return (
    <main className="min-h-screen bg-black text-[#f5f5dc]" style={{ fontFamily: 'Arial, sans-serif' }}>
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-4xl mx-auto space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
            style={{ lineHeight: 1.1 }}
          >
            <i><span style={strokeStyle}>Stay Ahead of </span>
            EVERY THREAT</i> {/*<span style={strokeStyle}>for</span> $3000{' '}
            <span style={strokeStyle}>within →</span> one week*/}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-[#b8b8a0] max-w-2xl mx-auto"
          >
            Cutting-edge cybersecurity solutions that protect yourself from evolving digital threats
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-4"
          >
            <button
              onClick={() => window.location.href = '/protection'}
              className="inline-flex items-center justify-center bg-[#fdd023] text-black font-bold rounded-xl px-8 py-4 transition-all duration-300 hover:scale-105"
            >
              <span className="mr-2">Get Protected</span>
              <span>→</span>
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="pt-8 text-sm text-[#b8b8a0]"
          >
            Trusted by businesses and individuals worldwide.
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* About Section */}
      <AboutSection />

      {/* Why Us Section */}
      <WhyUsSection />

      {/* Contact Section */}
      {/* <ContactSection /> */}

      {/* Footer */}
      <footer className="border-t border-[#333] bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-[#fdd023] mb-4">Zsquare</h3>
              <p className="text-sm text-[#b8b8a0] mb-4">
                Protecting your digital future with cutting-edge cybersecurity solutions.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-bold text-[#f5f5dc] mb-4 uppercase">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="/" className="text-sm text-[#b8b8a0] hover:text-[#fdd023] transition-colors">Home</a></li>
                <li><a href="/protection" className="text-sm text-[#b8b8a0] hover:text-[#fdd023] transition-colors">Get Protected</a></li>
                <li><a href="/blog" className="text-sm text-[#b8b8a0] hover:text-[#fdd023] transition-colors">Blogs</a></li>
                <li><a href="/event" className="text-sm text-[#b8b8a0] hover:text-[#fdd023] transition-colors">Events</a></li>
                <li><a href="/contact" className="text-sm text-[#b8b8a0] hover:text-[#fdd023] transition-colors">Contact</a></li>
                <li><a href="/#about" className="text-sm text-[#b8b8a0] hover:text-[#fdd023] transition-colors">About Us</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold text-[#f5f5dc] mb-4 uppercase">Products</h4>
              <ul className="space-y-2 text-sm text-[#b8b8a0]">
                <li>Cybersecurity Services</li>
                <li>Awareness Programs</li>
                <li>IncidentBox</li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold text-[#f5f5dc] mb-4 uppercase">Connect</h4>
              <div className="flex gap-4">
                {[
                  { icon: <FaLinkedin />, href: 'https://linkedin.com' },
                  { icon: <FaXTwitter />, href: 'https://x.com' },
                  { icon: <FaFacebookF />, href: 'https://facebook.com' },
                  { icon: <FaInstagram />, href: 'https://instagram.com' },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-[#1a1a1a] border border-[#333] flex items-center justify-center text-[#f5f5dc] hover:text-[#fdd023] hover:border-[#fdd023] hover:scale-110 transition-all"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-[#333] text-center">
            <p className="text-sm text-[#b8b8a0]">
              © {new Date().getFullYear()} Earocycle Solutions private limited - All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  const services = [
    { title: 'Cybersecurity Services', desc: 'We provide adavanced Cybersecurity services that safeguard your business from ever evolving digital threats.' },
    { title: 'Cybersecurity Awareness', desc: 'We educate students and individuals about threats, and stay one-step ahead of Cybercriminals.' },
    // { title: 'Managed Defense', desc: '24/7 managed security services with real-time monitoring and rapid response.' },
  ];

  return (
    <section id="services" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#fdd023] mb-4">What We Do</h2>
          {/* <p className="text-lg text-[#b8b8a0]">Comprehensive cybersecurity solutions for the digital age</p> */}
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8">
  {services.slice(0, 2).map((service, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: i * 0.2 }}
      className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg p-8 
                 hover:border-[#fdd023]/30 transition-all w-full sm:w-[45%] lg:w-[40%]"
    >
      <h3 className="text-xl font-bold text-[#fdd023] mb-3">{service.title}</h3>
      <p className="text-[#f5f5dc]">{service.desc}</p>
    </motion.div>
  ))}
</div>

      </div>
    </section>
  );
}

function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  const stats = [
    // { value: '500+', label: 'Clients' },
    { value: '100%', label: 'Client Satisfaction' },
    { value: '24/7', label: 'Support' },
    // { value: '10+', label: 'Years' },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          className="text-3xl sm:text-4xl font-bold text-[#fdd023] mb-6"
        >
          About Us
        </motion.h2>
        <motion.p
  initial={{ opacity: 0, y: 20 }}
  animate={isVisible ? { opacity: 1, y: 0 } : {}}
  transition={{ delay: 0.2 }}
  className="text-lg text-[#f5f5dc] leading-relaxed mb-12 max-w-3xl mx-auto text-center"
>
  At <span className="font-semibold text-[#fdd023]">Zsquare Securities</span>, we specialize in delivering 
  state-of-the-art cybersecurity solutions designed to safeguard businesses against ever-evolving digital threats. 
  Our expert team is dedicated to ensuring that your critical assets remain secure, resilient, and protected at all times.
  With a security-first approach, we help organizations build trust, prevent cyberattacks, and strengthen their overall 
  digital defenses.
  <br /><br />
  Beyond providing protection, we are also deeply committed to spreading cybersecurity awareness 
  and educating individuals and institutions about the importance of staying safe in the digital world.
</motion.p>


        <div className="grid grid-cols-2 justify-center md:justify-center md:grid-cols-2 gap-6 place-items-center">

          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl font-bold text-[#fdd023]">{stat.value}</div>
              <div className="text-sm text-[#b8b8a0] mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  const benefits = [
    { title: 'Expert-Led Security', desc: 'Backed by a team of skilled professionals with deep expertise in Cybersecurity and Threat Intelligence.' },
    { title: 'Rapid Response', desc: 'Immediate action to detect contain and neutralize threats before they escalate.' },
    { title: 'Future-Ready Solutions', desc: 'Scalable security strategies design to adapt to evolving threats.' },
    { title: 'Uninterrupted Protection', desc: '24/7 monitoring and defense to keep your digital infrastructure secure at all times.' },
  ];

  return (
    <section id="why-us" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#fdd023] mb-4">Why Choose Us</h2>
          <i><h3 className="text-2xl sm:text-2xl font-bold text-[#b8b8a0]">Cybersecurity isn't just a service - it's trust</h3></i>
          <p className='text-lg sm:text-xl text-[#b8b8a0]'>We build the trust by delivering reliable and proactive security solutions that keep your business safe.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="flex gap-4 p-6 rounded-lg hover:bg-[#0a0a0a] transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-[#fdd023]/10 flex items-center justify-center text-[#fdd023] flex-shrink-0">
                ✓
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#f5f5dc] mb-2">{benefit.title}</h3>
                <p className="text-sm text-[#b8b8a0]">{benefit.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
