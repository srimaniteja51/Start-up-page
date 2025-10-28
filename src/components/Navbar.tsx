'use client';

import { useState, useEffect } from 'react';
import { FaLinkedin, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter, usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/', isHash: false },
    { name: 'Get Protected', href: '/protection', isHash: false },
    { name: 'Blogs', href: '/blog', isHash: false },
    { name: 'Events', href: '/event', isHash: false },
    { name: 'Contact', href: '/contact', isHash: false },
    { name: 'About Us', href: '/#about', isHash: true },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (pathname === '/') {
        const sections = ['hero', 'about'];
        const current = sections.find(section => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          }
          return false;
        });
        if (current) setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleNavClick = (href: string, isHash: boolean) => {
    if (isHash) {
      if (pathname === '/') {
        scrollToSection(href);
      } else {
        router.push(href);
      }
    } else {
      router.push(href);
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-md border-b border-[#333]' : 'bg-black/85 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-[#fdd023] tracking-tight cursor-pointer"
            onClick={() => router.push('/')}
          >
            Zsquare
          </motion.div>

          <ul className="hidden md:flex gap-8">
            {navLinks.map((link, index) => (
              <motion.li
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <button
                  onClick={() => handleNavClick(link.href, link.isHash)}
                  className={`relative text-sm font-semibold transition-colors duration-300 py-2 cursor-pointer ${
                    (pathname === link.href || (link.isHash && pathname === '/' && activeSection === link.href.substring(1))) 
                      ? 'text-[#fdd023]' 
                      : 'text-[#f5f5dc] hover:text-[#fdd023]'
                  }`}
                >
                  {link.name}
                  {(pathname === link.href || (link.isHash && pathname === '/' && activeSection === link.href.substring(1))) && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#fdd023]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              </motion.li>
            ))}
          </ul>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#f5f5dc] hover:text-[#fdd023] cursor-pointer"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black border-t border-[#333]"
          >
            <ul className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavClick(link.href, link.isHash)}
                    className={`block w-full text-left px-4 py-3 rounded-md cursor-pointer ${
                      (pathname === link.href || (link.isHash && pathname === '/' && activeSection === link.href.substring(1)))
                        ? 'bg-[#fdd023] text-black'
                        : 'text-[#f5f5dc] hover:bg-[#333]'
                    }`}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
