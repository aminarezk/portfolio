/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Github, GitPullRequest, GitCommit, GitFork, AlertCircle, Sparkles, ExternalLink } from 'lucide-react';
import { githubStatsData } from '../data';

export default function GithubStats() {
  const [hoveredDay, setHoveredDay] = useState<string | null>(null);

  // Generates a mock dataset of commits over 14 weeks (98 days) representing stable dev history
  const generateMockContributions = () => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const contributions = [];
    // seed with random values (0 to 8 commits)
    for (let i = 0; i < 98; i++) {
      const counts = Math.floor(Math.sin(i * 0.15) * 4) + Math.floor(Math.cos(i * 0.08) * 3) + 2;
      const count = Math.max(0, counts);
      contributions.push({
        dayIndex: i % 7,
        weekIndex: Math.floor(i / 7),
        count,
        date: `2026-03-${String((i % 30) + 1).padStart(2, '0')}`,
      });
    }
    return contributions;
  };

  const contributions = generateMockContributions();

  // Map count of commits to heat-coloring matching standard GitHub theme
  const getHeatClass = (count: number) => {
    if (count === 0) return 'bg-slate-100 dark:bg-slate-900';
    if (count <= 2) return 'bg-blue-100 dark:bg-blue-900/60 text-blue-700';
    if (count <= 4) return 'bg-blue-300 dark:bg-blue-800 text-blue-900';
    if (count <= 6) return 'bg-blue-500 dark:bg-blue-600 text-white';
    return 'bg-blue-700 dark:bg-blue-400 text-white';
  };

  return (
    <section id="github" className="py-20 bg-slate-50 dark:bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-3xl font-extrabold text-slate-950 dark:text-white tracking-tight"
          >
            GitHub Cloud Operations
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
            Real-time developer footprints tracking daily operations, repositories, merged pull requests, and languages compiled.
          </motion.p>
        </div>

        {/* Dashboard Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          {/* Quick Metrics & Languages (Span 5) */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Header Credentials Card */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/60 rounded-2xl p-5 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-full bg-slate-950 text-white flex items-center justify-center font-bold">
                    <Github className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white font-mono">
                      {githubStatsData.username}
                    </h3>
                    <p className="text-[10px] text-blue-500 font-mono">ACTIVE INTEGRATION</p>
                  </div>
                </div>
                <a
                  id="github-profile-link"
                  href={githubStatsData.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200/50 dark:border-slate-8运行 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
                  aria-label="View Github profile"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              {/* Grid Statistics */}
              <div className="grid grid-cols-2 gap-4 pt-2 font-mono">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/40 border border-slate-150/40 dark:border-slate-850/40">
                  <span className="block text-[10px] text-slate-400 font-sans">CONTRIBUTIONS</span>
                  <span className="text-xl font-bold text-slate-900 dark:text-white flex items-center mt-1">
                    <GitCommit className="h-4 w-4 mr-1 text-blue-500 shrink-0" />
                    {githubStatsData.contributionsCount}
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/40 border border-slate-150/40 dark:border-slate-850/40">
                  <span className="block text-[10px] text-slate-400 font-sans">PULL REQUESTS</span>
                  <span className="text-xl font-bold text-slate-900 dark:text-white flex items-center mt-1">
                    <GitPullRequest className="h-4 w-4 mr-1 text-emerald-500 shrink-0" />
                    {githubStatsData.pullRequestsCount}
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/40 border border-slate-150/40 dark:border-slate-850/40">
                  <span className="block text-[10px] text-slate-400 font-sans">REPOSITORIES</span>
                  <span className="text-xl font-bold text-slate-900 dark:text-white flex items-center mt-1">
                    <GitFork className="h-4 w-4 mr-1 text-blue-500 shrink-0" />
                    {githubStatsData.repositoriesCount}
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/40 border border-slate-150/40 dark:border-slate-850/40">
                  <span className="block text-[10px] text-slate-400 font-sans">ISSUES CLOSED</span>
                  <span className="text-xl font-bold text-slate-900 dark:text-white flex items-center mt-1">
                    <AlertCircle className="h-4 w-4 mr-1 text-amber-500 shrink-0" />
                    {githubStatsData.issuesClosed}
                  </span>
                </div>
              </div>
            </div>

            {/* Top compiling language bar */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/60 rounded-2xl p-5 shadow-sm space-y-4">
              <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider font-mono">
                Top Compiled Languages
              </h4>

              {/* Progress stack segment */}
              <div className="h-2 rounded-full overflow-hidden flex w-full">
                {githubStatsData.topLanguages.map((lang) => (
                  <div
                    key={lang.name}
                    style={{ width: `${lang.percent}%`, backgroundColor: lang.color }}
                    className="h-full first:rounded-l-full last:rounded-r-full"
                    title={`${lang.name}: ${lang.percent}%`}
                  />
                ))}
              </div>

              {/* Legend with bullets */}
              <div className="grid grid-cols-2 gap-3 pt-1.5 font-mono text-xs">
                {githubStatsData.topLanguages.map((lang) => (
                  <div key={lang.name} className="flex items-center justify-between">
                    <div className="flex items-center space-x-1.5">
                      <span
                        className="h-2.5 w-2.5 rounded-full shrink-0"
                        style={{ backgroundColor: lang.color }}
                      />
                      <span className="text-slate-700 dark:text-slate-300 font-semibold">{lang.name}</span>
                    </div>
                    <span className="text-slate-400 text-[10px]">{lang.percent}%</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Core Contribution Heatmap (Span 7) */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/60 rounded-2xl p-5 shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider font-mono flex items-center">
                  <Sparkles className="h-4 w-4 mr-1 text-blue-500 shrink-0" />
                  Development Velocity Heatmap
                </h4>
                <span className="text-[10px] font-mono text-slate-400">14-WEEK SNAPSHOT</span>
              </div>

              {/* Custom CSS Grid rendering a Contribution Graph */}
              <div className="space-y-3 overflow-x-auto pb-2">
                <div className="grid grid-flow-col grid-rows-7 gap-1.5 min-w-[340px]">
                  {contributions.map((item, idx) => (
                    <div
                      id={`heatmap-cell-${idx}`}
                      key={idx}
                      onMouseEnter={() => setHoveredDay(`${item.count} commits on ${item.date}`)}
                      onMouseLeave={() => setHoveredDay(null)}
                      className={`h-3 w-3 rounded-sm transition-all duration-100 cursor-pointer hover:border hover:border-blue-600/60 dark:hover:border-blue-400/60 ${getHeatClass(
                        item.count
                      )}`}
                    />
                  ))}
                </div>

                <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-1">
                  <span>Jan 2026</span>
                  <span>Feb 2026</span>
                  <span>Mar 2026</span>
                  <span>Apr 2026</span>
                </div>
              </div>

              {/* Status Box or Tooltip details */}
              <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-4 text-xs font-sans">
                <div className="text-slate-500">
                  {hoveredDay ? (
                    <span className="font-mono text-blue-600 dark:text-blue-400 font-semibold">{hoveredDay}</span>
                  ) : (
                    <span>Hover over any grid square to inspect commit metrics.</span>
                  )}
                </div>
                {/* Level Key */}
                <div className="flex items-center space-x-1.5 font-mono text-[9px] text-slate-400 shrink-0">
                  <span>Less</span>
                  <span className="h-2.5 w-2.5 rounded bg-slate-100 dark:bg-slate-900" />
                  <span className="h-2.5 w-2.5 rounded bg-blue-100" />
                  <span className="h-2.5 w-2.5 rounded bg-blue-300" />
                  <span className="h-2.5 w-2.5 rounded bg-blue-500" />
                  <span className="h-2.5 w-2.5 rounded bg-blue-700" />
                  <span>More</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
