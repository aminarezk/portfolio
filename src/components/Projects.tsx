/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, ExternalLink, ShieldCheck, Cpu, Layers, GitBranch, ArrowUpRight } from 'lucide-react';
import { projectsData } from '../data';
import { Project } from '../types';

export default function Projects() {
  // Store active tab under each specific project card by its ID
  // Tabs: 'summary' | 'challenge' | 'features'
  const [activeTabs, setActiveTabs] = useState<Record<string, 'summary' | 'challenge' | 'features'>>({
    'blog-api': 'summary',
    'ecommerce-api': 'summary',
    'task-management': 'summary',
  });

  const toggleTab = (projectId: string, tab: 'summary' | 'challenge' | 'features') => {
    setActiveTabs((prev) => ({
      ...prev,
      [projectId]: tab,
    }));
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute top-10 right-0 w-80 h-80 bg-blue-100/10 dark:bg-blue-900/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-3xl font-extrabold text-slate-950 dark:text-white tracking-tight"
          >
            Featured Engineering Projects
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
            A curated list of core products highlighting Laravel architecture, robust SQL schemas, and high-performance caching configurations. All repositories feature secure, production-grade logic.
          </motion.p>
        </div>

        {/* Project Deck */}
        <div className="space-y-16">
          {projectsData.map((project, idx) => {
            const currentTab = activeTabs[project.id] || 'summary';
            const isAlt = idx % 2 === 1;

            return (
              <motion.div
                id={`project-card-${project.id}`}
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/60 rounded-3xl overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-0"
              >
                {/* Visual Thumbnail (Grid span 5) */}
                <div className={`col-span-12 lg:col-span-5 relative h-64 lg:h-full min-h-[240px] overflow-hidden ${isAlt ? 'lg:order-last' : ''}`}>
                  <img
                    id={`project-img-${project.id}`}
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-contain select-none pointer-events-none hover:scale-103 transition-transform duration-500 filter brightness-95"
                    referrerPolicy="no-referrer"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />

                  {/* Absolute technology pills */}
                  <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md text-[10px] font-mono font-medium text-slate-300 border border-slate-800/50"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-0.5 rounded-md bg-slate-950/80 backdrop-blur-md text-[9px] font-mono font-medium text-slate-400">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Technical Board Details (Grid span 7) */}
                <div className="col-span-12 lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  {/* Title & Role */}
                  <div className="space-y-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-950 dark:text-white leading-tight font-sans">
                      {project.name}
                    </h3>
                    <div className="flex items-center space-x-2 text-xs font-mono">
                      <span className="text-blue-600 dark:text-blue-400 font-semibold">{project.role}</span>
                    </div>
                  </div>

                  {/* Navigation Tabs bar */}
                  <div className="flex border-b border-slate-100 dark:border-slate-800/80" id={`tabs-${project.id}`}>
                    <button
                      id={`tab-${project.id}-summary`}
                      onClick={() => toggleTab(project.id, 'summary')}
                      className={`pb-2.5 text-xs font-semibold font-mono tracking-wider border-b-2 transition-colors mr-6 ${currentTab === 'summary'
                          ? 'border-blue-600 dark:border-blue-400 text-slate-900 dark:text-white'
                          : 'border-transparent text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'
                        }`}
                    >
                      OVERVIEW
                    </button>
                    <button
                      id={`tab-${project.id}-challenge`}
                      onClick={() => toggleTab(project.id, 'challenge')}
                      className={`pb-2.5 text-xs font-semibold font-mono tracking-wider border-b-2 transition-colors mr-6 ${currentTab === 'challenge'
                          ? 'border-blue-600 dark:border-blue-400 text-slate-900 dark:text-white'
                          : 'border-transparent text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'
                        }`}
                    >
                      CHALLENGE & RESOLUTION
                    </button>
                    <button
                      id={`tab-${project.id}-features`}
                      onClick={() => toggleTab(project.id, 'features')}
                      className={`pb-2.5 text-xs font-semibold font-mono tracking-wider border-b-2 transition-colors ${currentTab === 'features'
                          ? 'border-blue-600 dark:border-blue-400 text-slate-900 dark:text-white'
                          : 'border-transparent text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'
                        }`}
                    >
                      KEY ENGINES
                    </button>
                  </div>

                  {/* Dynamic Tab Panels */}
                  <div className="min-h-[170px] flex items-stretch">
                    <AnimatePresence mode="wait">
                      {currentTab === 'summary' && (
                        <motion.div
                          key="summary"
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          className="flex flex-col justify-between space-y-4 font-sans text-sm text-slate-600 dark:text-slate-300 leading-relaxed"
                        >
                          <p>{project.description}</p>
                          <div className="flex flex-wrap gap-1.5 pt-2">
                            {project.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[10px] font-mono text-slate-600 dark:text-slate-300"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      )}

                      {currentTab === 'challenge' && (
                        <motion.div
                          key="challenge"
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          className="space-y-4 text-xs font-sans"
                        >
                          <div className="p-3.5 rounded-xl bg-orange-50/40 border border-orange-100 dark:bg-orange-950/5 dark:border-orange-850/20 space-y-1">
                            <h4 className="font-bold text-orange-850 dark:text-orange-400 uppercase tracking-widest font-mono text-[9px] flex items-center">
                              <Cpu className="h-3.5 w-3.5 mr-1.5" />
                              Technical Impediment
                            </h4>
                            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-xs">
                              {project.technicalChallenge}
                            </p>
                          </div>

                          <div className="p-3.5 rounded-xl bg-teal-50/40 border border-teal-100 dark:bg-teal-950/5 dark:border-teal-850/20 space-y-1">
                            <h4 className="font-bold text-teal-850 dark:text-teal-400 uppercase tracking-widest font-mono text-[9px] flex items-center">
                              <ShieldCheck className="h-3.5 w-3.5 mr-1.5" />
                              Eloquent resolution
                            </h4>
                            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-xs">
                              {project.solution}
                            </p>
                          </div>
                        </motion.div>
                      )}

                      {currentTab === 'features' && (
                        <motion.div
                          key="features"
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          className="space-y-2 text-xs text-slate-700 dark:text-slate-300"
                        >
                          {project.keyFeatures.map((feat, fIdx) => (
                            <div key={fIdx} className="flex items-start space-x-2 font-sans">
                              <div className="h-4.5 w-4.5 rounded-full bg-blue-500/10 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold font-mono">
                                √
                              </div>
                              <span className="leading-relaxed">{feat}</span>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Foot Action triggers */}
                  <div className="flex items-center space-x-4 pt-4 border-t border-slate-100 dark:border-slate-800/60 font-mono">
                    <a
                      id={`project-code-${project.id}`}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                    >
                      <Github className="h-4 w-4 mr-1.5" />
                      SOURCE CODE
                      <ArrowUpRight className="h-3 w-3 ml-0.5 opacity-60" />
                    </a>

                    {project.demoUrl && (
                      <a
                        id={`project-demo-${project.id}`}
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-xs text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-semibold"
                      >
                        <ExternalLink className="h-4 w-4 mr-1.5" />
                        LIVE APPLICATION
                        <ArrowUpRight className="h-3 w-3 ml-0.5" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
