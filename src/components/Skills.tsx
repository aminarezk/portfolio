/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Database, Terminal, Wrench, ShieldAlert, CheckCircle, Award } from 'lucide-react';
import { skillsData, projectsData } from '../data';
import { SkillItem } from '../types';

// Resolves icons from strings dynamically
const getIcon = (name: string) => {
  switch (name) {
    case 'Database':
      return <Database className="h-5 w-5 text-blue-500" />;
    case 'Terminal':
      return <Terminal className="h-5 w-5 text-emerald-500" />;
    case 'Wrench':
      return <Wrench className="h-5 w-5 text-amber-500" />;
    case 'ShieldAlert':
      return <ShieldAlert className="h-5 w-5 text-blue-500" />;
    default:
      return <Terminal className="h-5 w-5 text-blue-500" />;
  }
};

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(null);

  // Helper to find projects that require this skill
  const getLinkedProjects = (skillName: string) => {
    return projectsData.filter((p) =>
      p.technologies.some(
        (tech) =>
          tech.toLowerCase().includes(skillName.toLowerCase()) ||
          skillName.toLowerCase().includes(tech.toLowerCase())
      )
    );
  };

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-3xl font-extrabold text-slate-950 dark:text-white tracking-tight"
          >
            Technical Specializations
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
            Click on any tech competency block below to inspect direct applications, experience level, and associated portfolio caps.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Skills Grid (Span 8) */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillsData.map((group, groupIdx) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: groupIdx * 0.1 }}
                className="bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 rounded-2xl p-5 shadow-sm space-y-4"
              >
                <div className="flex items-center space-x-2.5 pb-2 border-b border-slate-100 dark:border-slate-800/80">
                  {getIcon(group.iconName)}
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider font-mono">
                    {group.category}
                  </h3>
                </div>

                <div className="space-y-3.5">
                  {group.skills.map((skill) => {
                    const isSelected = selectedSkill?.name === skill.name;
                    return (
                      <div
                        id={`skill-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                        key={skill.name}
                        onClick={() => setSelectedSkill(isSelected ? null : skill)}
                        className={`group p-3 rounded-xl border transition-all duration-200 cursor-pointer ${
                          isSelected
                            ? 'bg-blue-5/70 border-blue-200 dark:bg-blue-950/30 dark:border-blue-800 shadow-sm'
                            : 'bg-slate-50/50 hover:bg-slate-50 dark:bg-slate-900/40 dark:hover:bg-slate-800/30 border-slate-200/20 dark:border-slate-800/30'
                        }`}
                      >
                        <div className="flex items-center justify-between text-xs font-semibold text-slate-800 dark:text-slate-200">
                          <span>{skill.name}</span>
                          <span className="font-mono text-blue-600 dark:text-blue-400">{skill.level}%</span>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full bg-slate-200/60 dark:bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                            className="bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-400 dark:to-blue-500 h-full rounded-full"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Interactive Inspection Desk (Span 4) */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <AnimatePresence mode="wait">
              {selectedSkill ? (
                <motion.div
                  key={selectedSkill.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white dark:bg-slate-900 border-2 border-blue-500/30 dark:border-blue-400/20 rounded-2xl p-6 shadow-md flex flex-col space-y-5"
                >
                  {/* Skill Badge details */}
                  <div className="flex items-start justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
                    <div className="space-y-1">
                      <h4 className="text-xl font-bold text-slate-950 dark:text-white flex items-center">
                        {selectedSkill.name}
                        <Award className="h-4 w-4 ml-1.5 text-blue-600 dark:text-blue-400" />
                      </h4>
                      <p className="text-[10px] font-mono font-semibold text-slate-500 uppercase tracking-widest">
                        Proficiency Index: {selectedSkill.level}%
                      </p>
                    </div>
                    <button
                      onClick={() => setSelectedSkill(null)}
                      className="text-xs font-mono font-bold text-slate-400 hover:text-slate-600 dark:hover:text-white"
                    >
                      CLEAR
                    </button>
                  </div>

                  {/* Description text */}
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-bold font-mono tracking-widest text-blue-600 uppercase">
                      Application details
                    </span>
                    <p className="text-xs text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                      {selectedSkill.description}
                    </p>
                  </div>

                  {/* Connected Projects */}
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold font-mono tracking-widest text-teal-600 uppercase block">
                      Active Proof of competency
                    </span>
                    {getLinkedProjects(selectedSkill.name).length > 0 ? (
                      <div className="space-y-2.5 pt-1">
                        {getLinkedProjects(selectedSkill.name).map((pro, pIdx) => (
                          <a
                            href="#projects"
                            key={pro.id}
                            className="block p-2.5 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 hover:bg-blue-50/50 dark:hover:bg-blue-950/20 hover:border-blue-400/40 transition-colors"
                          >
                            <span className="block font-sans font-medium text-xs text-slate-900 dark:text-white">
                              {pro.name}
                            </span>
                            <span className="block text-[10px] text-slate-500 mt-0.5 font-sans leading-tight line-clamp-1">
                              Role: {pro.role}
                            </span>
                          </a>
                        ))}
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2 p-3 rounded-lg bg-orange-50/20 border border-orange-200/10 dark:bg-orange-950/5 text-slate-500 dark:text-slate-400">
                        <CheckCircle className="h-4 w-4 shrink-0 text-orange-500" />
                        <span className="text-xs leading-relaxed">
                          Core supporting skill. Demonstrated consistently across freelance structures and training models.
                        </span>
                      </div>
                    )}
                  </div>
                </motion.div>
              ) : (
                <div className="bg-slate-100/50 dark:bg-slate-900/20 border border-dashed border-slate-300 dark:border-slate-800 rounded-2xl p-8 text-center flex flex-col items-center justify-center min-h-[280px]">
                  <Terminal className="h-8 w-8 text-slate-400 dark:text-slate-600 mb-3 animate-pulse" />
                  <h4 className="text-sm font-semibold font-mono text-slate-800 dark:text-slate-300">
                    No Skill Inspected
                  </h4>
                  <p className="text-xs text-slate-500 mt-2 max-w-xs font-sans leading-relaxed">
                    Click on any skill card to analyze real-world use cases, production metrics, and connected repository codes.
                  </p>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
