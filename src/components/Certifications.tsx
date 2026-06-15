/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Award, ShieldCheck, ExternalLink, Calendar, Key } from 'lucide-react';
import { certificationsData } from '../data';

export default function Certifications() {
  return (
    <section id="certs" className="py-20 relative">
      <div className="absolute top-1/3 left-10 w-64 h-64 bg-blue-50/10 dark:bg-blue-950/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-3xl font-extrabold text-slate-950 dark:text-white tracking-tight"
          >
            Licenses & Certifications
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
            Verified technical credentials backing developer operations, backend standards, and advanced database engineering.
          </motion.p>
        </div>

        {/* Certificate Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificationsData.map((cert, index) => (
            <motion.div
              id={`cert-card-${cert.id}`}
              key={cert.id}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -4, shadow: 'lg' }}
              className="bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/60 rounded-2xl p-6 shadow-sm flex flex-col justify-between space-y-6 group transition-all"
            >
              {/* Badge Icon & Platform */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  {/* Glowing Award Seal */}
                  <div className="h-11 w-11 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-150/40 dark:border-blue-850/20 text-blue-600 dark:text-blue-400 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                    <Award className="h-5 w-5" />
                  </div>
                  <div className="inline-flex items-center text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100/50 dark:border-emerald-900/30 px-2 py-0.5 rounded-full">
                    <ShieldCheck className="h-3 w-3 mr-1" />
                    Verified
                  </div>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-base font-bold text-slate-950 dark:text-white leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors font-sans">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-mono font-medium text-slate-500 dark:text-slate-400">
                    {cert.issuer}
                  </p>
                </div>
              </div>

              {/* ID & Verification links */}
              <div className="space-y-3.5 pt-4 border-t border-slate-100 dark:border-slate-800/60">
                <div className="flex flex-col space-y-1.5 font-mono text-[10px] text-slate-500">
                  <span className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1 text-slate-400" />
                    Issued: {cert.date}
                  </span>
                  <span className="flex items-center">
                    <Key className="h-3 w-3 mr-1 text-slate-400" />
                    ID: {cert.credentialId}
                  </span>
                </div>

                {cert.verifyUrl && (
                  <a
                    id={`cert-verify-${cert.id}`}
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center px-3.5 py-2 rounded-lg bg-slate-50 hover:bg-blue-50/50 dark:bg-slate-950 dark:hover:bg-blue-950/25 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-150/40 dark:border-slate-850/40 font-mono text-[10px] font-bold tracking-wider transition-colors"
                  >
                    VERIFY CREDENTIAL
                    <ExternalLink className="h-3 w-3 ml-1.5 opacity-80" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
