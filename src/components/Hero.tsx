/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, ArrowRight, Download, Server, X, Check, Laptop, Trophy, Coffee } from 'lucide-react';
import { portfolioOwner } from '../data';

export default function Hero() {
  const [showCvModal, setShowCvModal] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    setDownloaded(true);
    // Mimics real document fetching
    setTimeout(() => {
      setDownloaded(false);
    }, 3000);
  };

  const handleContactClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-28 pb-16 lg:pt-36 lg:pb-24 relative overflow-hidden">
      {/* Dynamic background shapes */}
      <div className="absolute top-0 left-0 right-0 h-[400px] bg-gradient-to-b from-blue-50/40 dark:from-blue-950/20 to-transparent pointer-events-none" />
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-blue-200/20 dark:bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-teal-200/10 dark:bg-teal-900/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero text (Grid span 7) */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-center lg:text-left">
            <motion.div
              id="hero-laravel-badge"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center self-center lg:self-start px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-800 text-blue-700 dark:text-blue-300 font-mono text-xs font-semibold uppercase tracking-wider"
            >
              <Server className="h-3.5 w-3.5 mr-1.5" />
              Laravel Ecosystem Specialist
            </motion.div>

            <motion.h1
              id="hero-headline"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 dark:text-white leading-[1.1] tracking-tight"
            >
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-400 dark:to-teal-400">{portfolioOwner.fullName}</span>
              <br />
              <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-700 dark:text-slate-300 mt-2 block">
                {portfolioOwner.title}
              </span>
            </motion.h1>

            <motion.p
              id="hero-summary"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed mx-auto lg:mx-0 font-sans"
            >
              {portfolioOwner.summary}
            </motion.p>

            {/* Micro counters for junior backend skills */}
            <motion.div
              id="hero-counters"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-3 gap-4 py-2 border-y border-slate-100 dark:border-slate-800/60 max-w-md mx-auto lg:mx-0"
            >
              {/* <div className="text-center lg:text-left">
                <span className="block text-2xl font-bold text-slate-950 dark:text-white font-mono">1.4k+</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-sans">GitHub Commits</span>
              </div>
              <div className="text-center lg:text-left border-x border-slate-100 dark:border-slate-800/60 px-2">
                <span className="block text-2xl font-bold text-slate-950 dark:text-white font-mono">8+</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-sans">Backend Products</span>
              </div>
              <div className="text-center lg:text-left">
                <span className="block text-2xl font-bold text-slate-950 dark:text-white font-mono">100%</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-sans">Clean MVC Standards</span>
              </div> */}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              id="hero-ctas"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              {/* Contact Button */}
              <button
                id="hero-contact-btn"
                onClick={handleContactClick}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-sans font-semibold text-sm shadow-lg shadow-blue-600/20 hover:shadow-blue-600/35 transition-all duration-200 cursor-pointer"
              >
                Let's Talk
                <ArrowRight className="h-4 w-4 ml-2" />
              </button>

              {/* View CV Button */}
              <button
                id="hero-cv-btn"
                onClick={() => setShowCvModal(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/40 font-sans font-semibold text-sm transition-all duration-200 cursor-pointer"
              >
                <FileText className="h-4 w-4 mr-2" />
                Review CV
              </button>
            </motion.div>
          </div>

          {/* Hero Avatar (Grid span 5) */}
          <div className="lg:col-span-12 xl:col-span-5 lg:order-last flex justify-center mt-6 lg:mt-0">
            <motion.div
              id="hero-avatar-wrapper"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80"
            >
              {/* Rotated decorative backdrops from design specs */}
              <div className="absolute inset-0 rounded-[2rem] bg-blue-500/20 rotate-6" />
              <div className="absolute inset-0 rounded-[2rem] border-2 border-blue-500/50" />

              {/* Main Profile Canvas */}
              <div className="absolute inset-0 rounded-[2rem] overflow-hidden border-4 border-white dark:border-slate-900 shadow-xl bg-slate-50 dark:bg-slate-800">
                <img
                  id="hero-avatar-img"
                  src={"public/images/profilepic.jpeg"}
                  alt={`${portfolioOwner.fullName} Headshot`}
                  className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-500 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Absolute badges mapping skills */}
              <div className="absolute -top-3 -right-3 p-2.5 rounded-2xl bg-white dark:bg-slate-800 shadow-md border border-slate-200/50 dark:border-slate-700/50 flex items-center space-x-1.5 animate-bounce [animation-duration:4s]">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-orange-500" />
                <span className="font-mono text-xs font-bold text-slate-800 dark:text-slate-200">Laravel</span>
              </div>

              <div className="absolute -bottom-3 -left-3 p-2.5 rounded-2xl bg-white dark:bg-slate-800 shadow-md border border-slate-200/50 dark:border-slate-700/50 flex items-center space-x-1.5 animate-bounce [animation-duration:5s]">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-blue-500" />
                <span className="font-mono text-xs font-bold text-slate-800 dark:text-slate-200">MySQL</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CV Modal Drawer */}
      <AnimatePresence>
        {showCvModal && (
          <motion.div
            id="cv-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
          >
            <motion.div
              id="cv-modal-window"
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="relative w-full max-w-4xl max-h-[85vh] bg-white dark:bg-slate-900 rounded-2xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-800 flex flex-col"
            >
              {/* Modal Header */}
              <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800/80 flex items-center justify-between bg-slate-50 dark:bg-slate-800/40">
                <div className="flex items-center space-x-2">
                  <FileText className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <span className="font-sans font-semibold text-slate-900 dark:text-white">
                    {portfolioOwner.fullName} - Professional Curriculum Vitae
                  </span>
                </div>
                <button
                  onClick={() => setShowCvModal(false)}
                  className="p-1.5 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-500 hover:text-slate-950 dark:hover:text-white transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Review Document Area */}
              <div className="flex-1 overflow-y-auto p-8 font-sans">
                {/* CV Layout Mockup */}
                <div id="cv-preview-content" className="max-w-2xl mx-auto p-6 sm:p-8 bg-slate-50 dark:bg-slate-950/40 border border-slate-100 dark:border-slate-800/80 rounded-xl space-y-6 text-sm text-slate-700 dark:text-slate-300">
                  {/* CV Header */}
                  <div className="text-center border-b border-slate-200 dark:border-slate-800 pb-6 space-y-2">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{portfolioOwner.fullName}</h2>
                    <p className="text-blue-600 dark:text-blue-400 font-medium tracking-wide font-mono uppercase text-xs">{portfolioOwner.title}</p>
                    <div className="text-xs text-slate-500 dark:text-slate-400 flex flex-wrap justify-center gap-3">
                      <span>{portfolioOwner.email}</span>
                      <span>•</span>
                      <span>{portfolioOwner.phone}</span>
                      <span>•</span>
                      <span>{portfolioOwner.location}</span>
                    </div>
                  </div>

                  {/* Summary */}
                  <div className="space-y-2">
                    <h3 className="font-bold font-mono text-slate-950 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-1 uppercase tracking-wider text-[11px]">Professional Summary</h3>
                    <p className="leading-relaxed text-xs">{portfolioOwner.summary}</p>
                  </div>

                  {/* Core Specializations */}
                  <div className="space-y-2">
                    <h3 className="font-bold font-mono text-slate-950 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-1 uppercase tracking-wider text-[11px]">Core Specializations</h3>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>• Relational Database Engineering (MySQL)</div>
                      <div>• Custom REST API Architectures</div>
                      <div>• Laravel Core Ecosystem Extensions</div>
                      <div>• Background Message Processing & Queues</div>
                    </div>
                  </div>

                  {/* Education */}
                  <div className="space-y-3">
                    <h3 className="font-bold font-mono text-slate-950 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-1 uppercase tracking-wider text-[11px]">Education</h3>
                    {portfolioOwner.education.map((edu, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="flex justify-between font-semibold text-xs text-slate-900 dark:text-white">
                          <span>{edu.degree}</span>
                          <span>{edu.period}</span>
                        </div>
                        <p className="text-xs font-mono text-slate-500 dark:text-slate-400">{edu.school}</p>
                        <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed italic">{edu.details}</p>
                      </div>
                    ))}
                  </div>

                  {/* Experience Sample */}
                  <div className="space-y-3">
                    <h3 className="font-bold font-mono text-slate-950 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-1 uppercase tracking-wider text-[11px]">Selected Experience</h3>
                    <div className="space-y-1">
                      <div className="flex justify-between font-semibold text-xs text-slate-900 dark:text-white">
                        <span>Backend Engineer Intern</span>
                        <span>Summer 2023</span>
                      </div>
                      <p className="text-xs font-mono text-slate-500 dark:text-slate-400">ApexTech Solutions</p>
                      <ul className="list-disc pl-4 space-y-1 text-[11px]">
                        <li>Refactored legacy REST APIs resulting in immediate 2x performance gains.</li>
                        <li>Configured automated relational migration files with primary and secondary lookup locks.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Footer actions */}
              <div className="px-6 py-4 border-t border-slate-100 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-800/40 flex items-center justify-end space-x-3">
                <button
                  id="cv-cancel-modal-btn"
                  onClick={() => setShowCvModal(false)}
                  className="px-4 py-2 text-sm font-semibold rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
                >
                  Close
                </button>
                <button
                  id="cv-download-pdf-btn"
                  onClick={handleDownload}
                  className="inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm transition-all"
                >
                  {downloaded ? (
                    <>
                      <Check className="h-4 w-4 mr-1.5 text-teal-400" />
                      Downloaded!
                    </>
                  ) : (
                    <>
                      <Download className="h-4 w-4 mr-1.5" />
                      Download PDF
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
