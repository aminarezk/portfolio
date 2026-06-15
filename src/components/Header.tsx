/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Terminal, Code } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
  activeSection: string;
}

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certs' },
  { label: 'GitHub', href: '#github' },
  { label: 'Contact', href: '#contact' },
];

export default function Header({ darkMode, setDarkMode, activeSection }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="portfolio-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm border-b border-slate-200/50 dark:border-slate-800/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a
            id="logo-link"
            href="#home"
            onClick={(e) => handleClick(e, '#home')}
            className="flex items-center space-x-2 text-slate-900 dark:text-white font-mono font-bold text-lg tracking-tight"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Terminal className="h-5 w-5 text-blue-500" />
            <span>
              amina<span className="text-blue-500">.dev</span>
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <nav id="desktop-nav" className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  id={`nav-link-${item.href.slice(1)}`}
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className={`px-3 py-2 rounded-md font-sans text-sm font-medium transition-colors relative ${
                    isActive
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-blue-600 dark:bg-blue-400"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action buttons */}
          <div className="flex items-center space-x-3">
            {/* Dark Mode Toggle */}
            <motion.button
              id="theme-toggle"
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60 focus:outline-none transition-colors"
              whileHover={{ rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle visual theme"
            >
              {darkMode ? <Sun className="h-4.5 w-4.5 text-amber-400" /> : <Moon className="h-4.5 w-4.5 text-blue-600" />}
            </motion.button>

            {/* Quick Contact CTA */}
            <motion.a
              id="header-cta"
              href="#contact"
              onClick={(e) => handleClick(e, '#contact')}
              className="hidden sm:inline-flex items-center px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-sans text-xs font-semibold shadow-md shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-200"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              <Code className="h-3.5 w-3.5 mr-1.5" />
              HIRE ME
            </motion.a>

            {/* Mobile Menu button */}
            <button
              id="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 dark:hover:bg-slate-800 hover:bg-slate-100 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <a
                    id={`mobile-nav-${item.href.slice(1)}`}
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleClick(e, item.href)}
                    className={`block px-4 py-2.5 rounded-lg text-base font-sans font-medium ${
                      isActive
                        ? 'bg-blue-50 dark:bg-blue-950/40 text-blue-500 dark:text-blue-400 font-semibold'
                        : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
              <div className="pt-2 px-4 border-t border-slate-100 dark:border-slate-800/60 pb-2">
                <a
                  id="mobile-menu-cta"
                  href="#contact"
                  onClick={(e) => handleClick(e, '#contact')}
                  className="w-full flex items-center justify-center px-4 py-2 rounded-lg bg-blue-600 text-white font-sans text-sm font-semibold"
                >
                  <Code className="h-4 w-4 mr-2" />
                  HIRE ME
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
