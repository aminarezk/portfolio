/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Compass, ShieldCheck, Milestone } from 'lucide-react';
import { portfolioOwner } from '../data';

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="absolute top-1/2 left-4 w-72 h-72 bg-teal-100/10 dark:bg-teal-900/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-3xl font-extrabold text-slate-950 dark:text-white tracking-tight"
          >
            About Me
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
            Get to know my computer science background, my motivation, and what drives me in the backend architecture space.
          </motion.p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Detailed Bio (Span 7) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 rounded-2xl p-6 sm:p-8 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center space-x-2 border-b border-slate-100 dark:border-slate-800/80 pb-4 mb-4">
                <Milestone className="h-5 w-5 text-blue-500" />
                <span>My Backend Engineering Journey</span>
              </h3>
              <div className="space-y-4 text-slate-600 dark:text-slate-300 font-sans leading-relaxed text-sm">
                {portfolioOwner.bio.split('\n\n').map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Quick badges showing junior backend developer ethos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/40 dark:border-slate-800/40">
                <ShieldCheck className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Clean MVC Standard</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Slim controllers, fat models, and separate query objects or custom actions.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/40 dark:border-slate-800/40">
                <BookOpen className="h-5 w-5 text-teal-600 mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Continuous Learning</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Experimenting daily with Docker containers, CI pipelines, and Redis logic.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Goals & Academic (Span 5) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Education Box */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 rounded-2xl p-6 sm:p-8 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center space-x-2 border-b border-slate-100 dark:border-slate-800/80 pb-4 mb-4">
                <BookOpen className="h-5 w-5 text-blue-500" />
                <span>Academic Education</span>
              </h3>
              {portfolioOwner.education.map((edu, idx) => (
                <div key={idx} className="space-y-2">
                  <h4 className="text-base font-semibold text-slate-900 dark:text-white">{edu.degree}</h4>
                  <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                    <span>{edu.school}</span>
                    <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">{edu.period}</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans mt-2 italic border-l-2 border-blue-500/30 pl-3">
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>

            {/* Career Goals */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 rounded-2xl p-6 sm:p-8 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center space-x-2 border-b border-slate-100 dark:border-slate-800/80 pb-4 mb-4">
                <Compass className="h-5 w-5 text-blue-500" />
                <span>Immediate Career Path</span>
              </h3>
              <ul className="space-y-3 font-sans">
                {portfolioOwner.careerGoals.map((goal, idx) => (
                  <li key={idx} className="flex items-start space-x-2.5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    <span className="flex items-center justify-center h-4.5 w-4.5 rounded-full bg-blue-50 dark:bg-blue-950 text-[10px] font-mono font-bold text-blue-600 dark:text-blue-400 mt-0.5 shrink-0">
                      {idx + 1}
                    </span>
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
