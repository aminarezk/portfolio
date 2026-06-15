/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, GraduationCap, Calendar, Award, Code, CheckSquare } from 'lucide-react';
import { experienceData } from '../data';

// Color map for role categories
const getTypeStyles = (type: string) => {
  switch (type) {
    case 'Internship':
      return 'bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border-blue-200/50 dark:border-blue-800/30';
    case 'Freelance':
      return 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-200/50 dark:border-emerald-800/30';
    case 'Training':
      return 'bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border-amber-200/50 dark:border-amber-800/30';
    default:
      return 'bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border-blue-200/50 dark:border-blue-800/30';
  }
};

const getTimelineIcon = (type: string) => {
  switch (type) {
    case 'Internship':
      return <Briefcase className="h-4 w-4" />;
    case 'Freelance':
      return <Code className="h-4 w-4" />;
    case 'Training':
      return <GraduationCap className="h-4 w-4" />;
    default:
      return <Award className="h-4 w-4" />;
  }
};

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-3xl font-extrabold text-slate-950 dark:text-white tracking-tight"
          >
            Engineering Experience
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
            Tracing my professional evolution from focused computer science classes to production integrations, freelancing contracts, and agile internships.
          </motion.p>
        </div>

        {/* Timeline Path */}
        <div className="relative max-w-4xl mx-auto pl-6 sm:pl-8 lg:pl-0">
          {/* Vertical core line anchor */}
          <div className="absolute top-0 bottom-0 left-6 sm:left-8 lg:left-1/2 w-0.5 bg-slate-250 dark:bg-slate-800" />

          {/* Experience Nodes */}
          <div className="space-y-12">
            {experienceData.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  id={`experience-item-${item.id}`}
                  key={item.id}
                  className="relative flex flex-col lg:flex-row items-stretch lg:justify-between"
                >
                  {/* Circle Pin on the line */}
                  <div className="absolute top-1.5 left-0 sm:left-2 lg:left-1/2 lg:-translate-x-1/2 z-10 h-8 w-8 rounded-full border-4 border-white dark:border-slate-900 bg-blue-600 text-white flex items-center justify-center shadow-md">
                    {getTimelineIcon(item.type)}
                  </div>

                  {/* Left Side (Even index) or Spacer (Odd index) */}
                  <div className={`w-full lg:w-[46%] ${isEven ? 'lg:block' : 'lg:hidden lg:pointer-events-none'}`}>
                    {isEven && (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.4 }}
                        className="bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/60 rounded-2xl p-6 shadow-sm space-y-4 hover:shadow-md transition-shadow"
                      >
                        {/* Header Details */}
                        <div className="space-y-1.5 pb-3 border-b border-slate-100 dark:border-slate-800">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold border ${getTypeStyles(item.type)}`}>
                              {item.type}
                            </span>
                            <span className="flex items-center text-xs font-mono text-slate-400">
                              <Calendar className="h-3.5 w-3.5 mr-1" />
                              {item.period}
                            </span>
                          </div>
                          <h3 className="text-lg font-bold text-slate-950 dark:text-white leading-tight font-sans">
                            {item.title}
                          </h3>
                          <p className="text-xs font-mono font-medium text-slate-500 dark:text-slate-400">
                            {item.company}
                          </p>
                        </div>

                        {/* Bullets outline */}
                        <ul className="space-y-2">
                          {item.description.map((desc, dIdx) => (
                            <li key={dIdx} className="flex items-start space-x-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                              <CheckSquare className="h-3.5 w-3.5 text-blue-500 shrink-0 mt-0.5" />
                              <span>{desc}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Gains */}
                        <div className="pt-2 flex flex-wrap gap-1.5">
                          {item.skillsGained.map((skill) => (
                            <span key={skill} className="px-2 py-0.5 rounded bg-slate-50 dark:bg-slate-950 text-[9px] font-mono text-slate-500 border border-slate-200/30 dark:border-slate-800/30">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Spacer helper on desktop for alignment */}
                  <div className="hidden lg:block lg:w-[46%]" />

                  {/* Right Side (Odd index) or Spacer (Even index) */}
                  <div className={`w-full lg:w-[46%] pl-10 sm:pl-12 lg:pl-0 ${!isEven ? 'lg:block' : 'lg:hidden lg:pointer-events-none'}`}>
                    {!isEven && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.4 }}
                        className="bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/60 rounded-2xl p-6 shadow-sm space-y-4 hover:shadow-md transition-shadow"
                      >
                        {/* Header Details */}
                        <div className="space-y-1.5 pb-3 border-b border-slate-100 dark:border-slate-800">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold border ${getTypeStyles(item.type)}`}>
                              {item.type}
                            </span>
                            <span className="flex items-center text-xs font-mono text-slate-400">
                              <Calendar className="h-3.5 w-3.5 mr-1" />
                              {item.period}
                            </span>
                          </div>
                          <h3 className="text-lg font-bold text-slate-950 dark:text-white leading-tight font-sans">
                            {item.title}
                          </h3>
                          <p className="text-xs font-mono font-medium text-slate-500 dark:text-slate-400">
                            {item.company}
                          </p>
                        </div>

                        {/* Bullets outline */}
                        <ul className="space-y-2">
                          {item.description.map((desc, dIdx) => (
                            <li key={dIdx} className="flex items-start space-x-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                              <CheckSquare className="h-3.5 w-3.5 text-blue-500 shrink-0 mt-0.5" />
                              <span>{desc}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Gains */}
                        <div className="pt-2 flex flex-wrap gap-1.5">
                          {item.skillsGained.map((skill) => (
                            <span key={skill} className="px-2 py-0.5 rounded bg-slate-50 dark:bg-slate-950 text-[9px] font-mono text-slate-500 border border-slate-200/30 dark:border-slate-800/30">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
