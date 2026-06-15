/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import GithubStats from './components/GithubStats';
import Contact from './components/Contact';
import { portfolioOwner } from './data';
import { ChevronUp, Github, Linkedin, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    // Check local storage or standard system preferences
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [activeSection, setActiveSection] = useState<string>('home');
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  // Synchronize document classes with theme state
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Observer to track section scroll anchoring
  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'experience', 'certs', 'github', 'contact'];
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px', // Inspect viewport overlap
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-150 transition-colors duration-300 flex flex-col font-sans selection:bg-blue-500/20 selection:text-blue-600 dark:selection:text-blue-400">
      {/* Dynamic Navigation */}
      <Header darkMode={darkMode} setDarkMode={setDarkMode} activeSection={activeSection} />

      {/* Main Structural Layout */}
      <main className="flex-grow">
        {/* Hero Landing */}
        <Hero />

        {/* About details */}
        <About />

        {/* Dynamic Skills categories */}
        <Skills />

        {/* Portfolio Projects Cards */}
        <Projects />

        {/* Experience Timeline */}
        <Experience />

        {/* Certifications Plaque */}
        <Certifications />

        {/* GitHub Statistics heatmap */}
        <GithubStats />

        {/* Feedback Forms */}
        <Contact />
      </main>

      {/* Pure Professional Footer */}
      <footer className="bg-slate-50 dark:bg-slate-950/20 border-t border-slate-200 dark:border-slate-800 py-12 text-sm text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Branding copyright */}
            <div className="text-center md:text-left space-y-1">
              <span className="font-mono font-bold text-slate-900 dark:text-white">
                {portfolioOwner.fullName}
              </span>
              <p className="text-xs font-sans text-slate-400">
                Specialized Laravel Backend Developer Portfolio • © {new Date().getFullYear()} All Rights Reserved.
              </p>
            </div>

            {/* Simple humble footer actions */}
            <div className="flex items-center space-x-4">
              <a
                id="footer-github"
                href={portfolioOwner.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                aria-label="GitHub Profile Link"
              >
                <Github className="h-4.5 w-4.5" />
              </a>
              <a
                id="footer-linkedin"
                href={portfolioOwner.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                aria-label="LinkedIn Profile Link"
              >
                <Linkedin className="h-4.5 w-4.5" />
              </a>
              <a
                id="footer-email"
                href={`mailto:${portfolioOwner.email}`}
                className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                aria-label="Send Email Link"
              >
                <Mail className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Animated Back-To-Top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            id="scroll-to-top"
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-6 right-6 p-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white shadow-lg cursor-pointer z-40 transition-colors"
            aria-label="Scroll back to top"
          >
            <ChevronUp className="h-4.5 w-4.5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
