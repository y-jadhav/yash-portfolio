import React from 'react'
import { stats, certifications, workHistory } from '../../data/portfolioData'
import { Award, Briefcase, TrendingUp, CheckCircle, ArrowUpRight } from 'lucide-react'

export const HighlightsSection: React.FC = () => {
  return (
    <section id="highlights" className="relative z-20 border-t border-black/10 bg-white px-6 py-20 sm:py-28 scroll-mt-8">
      <div className="mx-auto max-w-[1140px]">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-black/5 pb-8">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#57A4F0]">
              Production Performance &amp; Metrics
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">
              Verified Production Metrics &amp; Impact
            </h2>
          </div>
          <p className="max-w-md text-sm text-neutral-500">
            Real performance numbers generated through disciplined narrative sequencing, visual pacing, and strategic content distribution.
          </p>
        </div>

        {/* Big Headline Numbers Grid */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {stats.map((s, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col justify-between rounded-2xl border border-black/[0.08] bg-[#fafafa] p-5 shadow-[0_2px_12px_rgba(0,0,0,0.03)] transition-all duration-200 hover:-translate-y-1 hover:border-[#57A4F0]/40 hover:bg-white hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)]"
            >
              <div className="mb-4">
                <span className="inline-block rounded-full bg-emerald-50 px-2.5 py-0.5 font-mono text-[9.5px] font-bold text-emerald-600 border border-emerald-200/60">
                  {s.highlight}
                </span>
                <p className="mt-3.5 font-numbers text-2xl sm:text-[26px] lg:text-[25px] xl:text-[28px] font-bold tracking-tight text-neutral-900 group-hover:text-[#57A4F0] transition-colors tabular-nums leading-tight">
                  {s.value}
                </p>
              </div>
              <p className="text-xs font-medium text-neutral-600 leading-snug">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* Career Timeline & Certifications 2-Column */}
        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          {/* Work Experience */}
          <div className="rounded-2xl border border-black/[0.08] bg-[#fcfcfc] p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-6">
              <Briefcase size={18} className="text-[#57A4F0]" />
              <h3 className="text-lg font-bold text-neutral-900">Career Trajectory</h3>
            </div>
            <div className="space-y-6">
              {workHistory.map((item, idx) => (
                <div key={idx} className="relative pl-6 border-l-2 border-neutral-200">
                  <div className="absolute -left-[5px] top-1 h-2 w-2 rounded-full bg-[#57A4F0]" />
                  <div className="flex flex-wrap items-baseline justify-between gap-1">
                    <h4 className="text-sm font-bold text-neutral-900">{item.role}</h4>
                    <span className="font-mono text-[11px] font-semibold text-neutral-400">{item.period}</span>
                  </div>
                  <p className="text-xs font-semibold text-[#57A4F0] mt-0.5">{item.company} · {item.location}</p>
                  <p className="mt-1.5 text-xs text-neutral-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Industry Certifications */}
          <div className="rounded-2xl border border-black/[0.08] bg-[#fcfcfc] p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Award size={18} className="text-amber-500" />
                <h3 className="text-lg font-bold text-neutral-900">Accreditations &amp; Certifications</h3>
              </div>
              <div className="space-y-4">
                {certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="flex items-start justify-between gap-3 rounded-xl border border-black/5 bg-white p-4 shadow-2xs hover:border-black/10 transition-colors"
                  >
                    <div>
                      <span className="inline-block rounded-md bg-amber-50 px-2 py-0.5 text-[10px] font-bold text-amber-700 border border-amber-200/50">
                        {cert.badge}
                      </span>
                      <h4 className="mt-1.5 text-sm font-bold text-neutral-900">{cert.title}</h4>
                      <p className="text-xs text-neutral-500">{cert.issuer}</p>
                    </div>
                    <span className="font-mono text-xs font-bold text-neutral-400">{cert.year}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic background */}
            <div className="mt-6 rounded-xl bg-neutral-100/70 p-4 border border-black/5">
              <span className="font-mono text-[10px] font-bold text-neutral-400 uppercase tracking-wider">
                Education
              </span>
              <p className="mt-1 text-xs font-bold text-neutral-900">
                Bachelor of Commerce (Jul 2022 – Mar 2025)
              </p>
              <p className="text-[11px] text-neutral-600">
                Savitribai Phule Pune University (SPPU), Pune
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
