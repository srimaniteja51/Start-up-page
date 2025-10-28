'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';

type ContactType = 'general' | 'feedback' | 'incident' | 'business';

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  type: ContactType | '';
}

export default function ContactPage() {
  const [contactType, setContactType] = useState<ContactType | ''>('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    type: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const contactTypes = [
    { value: 'general', label: 'General Contact', description: 'General inquiries and support' },
    { value: 'feedback', label: 'Feedback & Suggestions', description: 'Share your thoughts and ideas' },
    { value: 'incident', label: 'Report an Incident', description: 'Report technical issues or problems' },
    { value: 'business', label: 'Business Inquiries / Request for service', description: 'Partnerships, quotes, or service requests' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleContactTypeChange = (type: ContactType) => {
    setContactType(type);
    setFormData(prev => ({ ...prev, type }));
    setIsDropdownOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactType) return;
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      if (data.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '', type: '' });
        setContactType('');
      } else {
        setSubmitStatus('error');
      }
    } catch (err) {
      console.error(err);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-black text-[#f5f5dc]">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-[#f5f5dc] via-[#f5f5dc] to-[#f5f5dc] bg-clip-text text-transparent"
        >
          Drop us a line →
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-xl text-[#f5f5dc]/80 max-w-2xl mx-auto leading-relaxed"
        >
          We love hearing from you. Tell us about your ideas, feedback, or issues — we’ll get back as soon as we can.
        </motion.p>
      </section>

      {/* Contact Form */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto px-6 pb-32"
      >
        <motion.form
          onSubmit={handleSubmit}
          whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(253, 208, 35, 0.5)' }}
          transition={{ type: 'spring', stiffness: 150, damping: 10 }}
          className="bg-neutral-900/70 p-10 rounded-3xl border border-neutral-800 space-y-8 backdrop-blur-sm"
        >
          {/* Contact Type */}
          <div>
            <label className="block text-lg font-semibold mb-3">How can we help you?</label>
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full text-left px-6 py-4 bg-black/50 border border-neutral-700 rounded-xl hover:border-[#fdd023]/50 transition"
              >
                <div className="flex justify-between items-center">
                  <span>
                    {contactType
                      ? contactTypes.find(t => t.value === contactType)?.label
                      : 'Select an option'}
                  </span>
                  <svg
                    className={`w-5 h-5 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              {isDropdownOpen && (
                <div className="absolute w-full mt-2 bg-neutral-900 border border-neutral-800 rounded-xl shadow-xl z-10">
                  {contactTypes.map(type => (
                    <button
                      key={type.value}
                      onClick={() => handleContactTypeChange(type.value as ContactType)}
                      type="button"
                      className="w-full px-6 py-4 text-left hover:bg-neutral-800 transition rounded-xl"
                    >
                      <div className="font-semibold">{type.label}</div>
                      <div className="text-sm text-[#f5f5dc]/70">{type.description}</div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Inputs */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-lg mb-2 font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Your full name"
                className="w-full bg-black/50 border border-neutral-700 rounded-xl px-6 py-4 focus:ring-2 focus:ring-[#f5f5dc]/30 outline-none transition text-[#f5f5dc]"
              />
            </div>
            <div>
              <label className="block text-lg mb-2 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="your@email.com"
                className="w-full bg-black/50 border border-neutral-700 rounded-xl px-6 py-4 focus:ring-2 focus:ring-[#f5f5dc]/30 outline-none transition text-[#f5f5dc]"
              />
            </div>
          </div>

          <div>
            <label className="block text-lg mb-2 font-medium">Phone (optional)</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="+91 (923) 1834562"
              className="w-full bg-black/50 border border-neutral-700 rounded-xl px-6 py-4 focus:ring-2 focus:ring-[#f5f5dc]/30 outline-none transition text-[#f5f5dc]"
            />
          </div>

          <div>
            <label className="block text-lg mb-2 font-medium">Message</label>
            <textarea
              name="message"
              rows={7}
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Write your message here..."
              required
              className="w-full bg-black/50 border border-neutral-700 rounded-xl px-6 py-4 focus:ring-2 focus:ring-[#f5f5dc]/30 outline-none transition text-[#f5f5dc] resize-none"
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting || !contactType}
              className="w-full py-5 text-lg font-semibold bg-[#fdd023] text-black rounded-xl hover:scale-[1.02] active:scale-[0.99] transition-transform disabled:opacity-60"
            >
              {isSubmitting ? 'Sending...' : 'Send Message →'}
            </button>
          </div>

          {/* Success / Error */}
          {submitStatus === 'success' && (
            <div className="text-green-400 text-center pt-4">
              Message sent successfully! We'll get back to you soon.
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="text-red-400 text-center pt-4">
              Something went wrong. Please try again.
            </div>
          )}
        </motion.form>
      </motion.section>

      {/* Footer */}
      <footer className="border-t border-neutral-800 py-10 text-center text-[#f5f5dc]/80">
        <p className="mb-4">or email us at</p>
        <a href="mailto:hi@example.com" className="text-[#f5f5dc] font-semibold text-xl hover:underline">
          hi@example.com
        </a>
        <div className="flex justify-center space-x-6 mt-6">
          <a href="#" className="hover:text-[#f5f5dc] transition">Instagram</a>
          <a href="#" className="hover:text-[#f5f5dc] transition">Dribbble</a>
        </div>
        <p className="mt-8 text-sm text-[#f5f5dc]/60">© 2025 Earocycle Solutions Private Limited</p>
      </footer>
    </div>
  );
}
