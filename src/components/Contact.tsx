/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Linkedin, Github, Phone, MapPin, Send, CheckCircle, RefreshCw } from 'lucide-react';
import { portfolioOwner } from '../data';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const validateForm = () => {
    let isValid = true;
    const errors = { name: '', email: '', subject: '', message: '' };

    if (!formData.name.trim()) {
      errors.name = 'Full name is required.';
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = 'Email address is required.';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email address.';
      isValid = false;
    }

    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required.';
      isValid = false;
    }

    if (!formData.message.trim()) {
      errors.message = 'Message content cannot be empty.';
      isValid = false;
    } else if (formData.message.trim().length < 15) {
      errors.message = 'Please provide a brief message (at least 15 characters).';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleInputChange = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.currentTarget;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error dynamically
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setSubmitting(true);

    // Simulate backend email forwarding
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1800);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute bottom-0 left-0 right-0 h-[320px] bg-gradient-to-t from-slate-50 dark:from-slate-950/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-3xl font-extrabold text-slate-950 dark:text-white tracking-tight"
          >
            Get In Touch
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '48px' }}
            viewport={{ once: true }}
            className="h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-3 rounded-full"
          />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 dark:text-slate-400 mt-4 text-sm font-sans"
          >
            Have an open junior Laravel role, a freelance request, or want to discuss API frameworks? Drop me a line!
          </motion.p>
        </div>

        {/* Contact Coordinates Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-start">
          {/* Channels & Coordinates (Span 5) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-slate-950 dark:text-white font-sans">
                Contact Coordinates
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-sans leading-relaxed">
                If you prefer cold emailing or social networking, you can find my verified coordinates listed below.
              </p>
            </div>

            {/* List coordinates */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3.5 p-4 rounded-xl bg-slate-50/50 dark:bg-slate-900 border border-slate-150/40 dark:border-slate-850/40 hover:border-blue-400/30 transition-colors">
                <div className="h-10 w-10 rounded-lg bg-blue-5/10 dark:bg-blue-950/65 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-[10px] font-mono text-slate-400 uppercase">DIRECT EMAIL</span>
                  <a
                    id="contact-email-link"
                    href={`mailto:${portfolioOwner.email}`}
                    className="text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 font-mono transition-colors"
                  >
                    {portfolioOwner.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3.5 p-4 rounded-xl bg-slate-50/50 dark:bg-slate-900 border border-slate-150/40 dark:border-slate-850/40 hover:border-blue-400/30 transition-colors">
                <div className="h-10 w-10 rounded-lg bg-blue-5/10 dark:bg-blue-950/65 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-[10px] font-mono text-slate-400 uppercase">MOBILE PHONE</span>
                  <a
                    id="contact-phone-link"
                    href={`tel:${portfolioOwner.phone}`}
                    className="text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 font-mono transition-colors"
                  >
                    {portfolioOwner.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3.5 p-4 rounded-xl bg-slate-50/50 dark:bg-slate-900 border border-slate-150/40 dark:border-slate-850/40 hover:border-blue-400/30 transition-colors">
                <div className="h-10 w-10 rounded-lg bg-blue-5/10 dark:bg-blue-950/65 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-[10px] font-mono text-slate-400 uppercase">LOCATION BASE</span>
                  <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 font-sans">
                    {portfolioOwner.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Social connections */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold font-mono text-slate-400 tracking-wider uppercase">
                SOCIAL GRAPH NETWORKS
              </h4>
              <div className="flex items-center space-x-3">
                <motion.a
                  id="contact-linkedin-btn"
                  href={portfolioOwner.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-slate-50 hover:bg-blue-50 hover:text-blue-600 border border-slate-200/60 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 dark:hover:text-white flex items-center justify-center transition-colors"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="View LinkedIn Profile"
                >
                  <Linkedin className="h-4.5 w-4.5" />
                </motion.a>

                <motion.a
                  id="contact-github-btn"
                  href={portfolioOwner.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-slate-50 hover:bg-slate-955 hover:text-white border border-slate-200/60 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 dark:hover:text-white flex items-center justify-center transition-colors"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="View GitHub Profile"
                >
                  <Github className="h-4.5 w-4.5" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Validation Form Canvas (Span 7) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/60 rounded-2xl p-6 sm:p-8 shadow-sm">
              <AnimatePresence mode="wait">
                {!success ? (
                  <motion.form
                    id="contact-validated-form"
                    key="form"
                    onSubmit={handleFormSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4 font-sans"
                    noValidate
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name input */}
                      <div className="space-y-1">
                        <label htmlFor="name" className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                          Full Name
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-2.5 rounded-xl border bg-slate-50/50 dark:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-sm ${
                            formErrors.name
                              ? 'border-red-500 focus:border-red-500'
                              : 'border-slate-200 dark:border-slate-800 focus:border-blue-500'
                          }`}
                          placeholder="Alexandra Rivera"
                        />
                        {formErrors.name && (
                          <span id="name-error" className="block text-[10px] font-mono text-red-500">
                            {formErrors.name}
                          </span>
                        )}
                      </div>

                      {/* Email input */}
                      <div className="space-y-1">
                        <label htmlFor="email" className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                          Email Address
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-2.5 rounded-xl border bg-slate-50/50 dark:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-sm ${
                            formErrors.email
                              ? 'border-red-500 focus:border-red-500'
                              : 'border-slate-200 dark:border-slate-800 focus:border-blue-500'
                          }`}
                          placeholder="alex@techcompany.com"
                        />
                        {formErrors.email && (
                          <span id="email-error" className="block text-[10px] font-mono text-red-500">
                            {formErrors.email}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Subject input */}
                    <div className="space-y-1">
                      <label htmlFor="subject" className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Subject Line
                      </label>
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2.5 rounded-xl border bg-slate-50/50 dark:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-sm ${
                          formErrors.subject
                            ? 'border-red-500 focus:border-red-500'
                            : 'border-slate-200 dark:border-slate-800 focus:border-blue-500'
                        }`}
                        placeholder="Junior Laravel dev position / freelance API"
                      />
                      {formErrors.subject && (
                        <span id="subject-error" className="block text-[10px] font-mono text-red-500">
                          {formErrors.subject}
                        </span>
                      )}
                    </div>

                    {/* Message body input */}
                    <div className="space-y-1">
                      <label htmlFor="message" className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Message Content
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2.5 rounded-xl border bg-slate-50/50 dark:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-sm resize-none ${
                          formErrors.message
                            ? 'border-red-500 focus:border-red-500'
                            : 'border-slate-200 dark:border-slate-800 focus:border-blue-500'
                        }`}
                        placeholder="Hi Amina, we saw your portfolio queue logs and want to jump on a brief interview call..."
                      />
                      {formErrors.message && (
                        <span id="message-error" className="block text-[10px] font-mono text-red-500">
                          {formErrors.message}
                        </span>
                      )}
                    </div>

                    {/* Submit action */}
                    <button
                      id="contact-submit-btn"
                      type="submit"
                      disabled={submitting}
                      className="w-full inline-flex items-center justify-center px-4 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-md transition-colors whitespace-nowrap disabled:opacity-80"
                    >
                      {submitting ? (
                        <>
                          <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                          FORWARDING PACKETS...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          FORWARD SECURE PACKET
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    id="contact-success-screen"
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-12 text-center space-y-4 font-sans"
                  >
                    <div className="flex justify-center">
                      <CheckCircle className="h-14 w-14 text-emerald-500 animate-bounce" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-lg font-bold text-slate-950 dark:text-white">
                        Packet Sent Successfully!
                      </h3>
                      <p className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                        STATUS: 200 OK
                      </p>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm mx-auto leading-relaxed">
                      Thank you! Your message has bypassed firewall routines completely. Amina Rezq will analyze the payloads and contact you back at your email within 24 working hours.
                    </p>
                    <button
                      id="contact-reset-btn"
                      onClick={() => setSuccess(false)}
                      className="inline-flex items-center px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 font-semibold text-xs transition-colors"
                    >
                      SEND ANOTHER PACKET
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
