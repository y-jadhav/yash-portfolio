import React from 'react'
import { personalInfo } from '../../data/portfolioData'
import { Mail, Download, ArrowUp } from 'lucide-react'

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer id="contact" className="relative z-20 border-t border-black/10 bg-[#f4f5f7] px-6 pt-16 pb-36 sm:pb-28 scroll-mt-8">
      <div className="mx-auto max-w-[1140px]">
        {/* Main callout */}
        <div className="rounded-3xl border border-white/80 bg-white/70 p-8 sm:p-12 shadow-[0_12px_40px_rgba(0,0,0,0.06)] backdrop-blur-xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-xl">
              <span className="font-mono text-xs font-bold text-[#57A4F0] uppercase tracking-wider">
                Direct Communication Channel
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight">
                Let's produce your next viral video narrative.
              </h2>
              <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
                I am available for Senior Video Editor roles, high-retention social retainers, AI video production workflows, and documentary storytelling worldwide.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#171717] px-6 py-3 text-xs font-bold text-white shadow-lg transition-all hover:bg-neutral-800 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Mail size={14} />
                Send Email
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-300 bg-white px-6 py-3 text-xs font-bold text-neutral-800 shadow-sm transition-all hover:bg-neutral-50 active:scale-[0.98]"
              >
                <svg className="h-3.5 w-3.5 fill-current text-[#0A66C2]" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.59 1.59 0 0 0 0-3.18 1.59 1.59 0 0 0 0 3.18m1.39 9.74v-8.37H5.07v8.37h2.78z" />
                </svg>
                Connect on LinkedIn
              </a>

              <a
                href="/CV_Yash_Jadhav.pdf"
                download
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#57A4F0]/15 px-6 py-3 text-xs font-bold text-[#57A4F0] hover:bg-[#57A4F0]/25 transition-colors"
              >
                <Download size={14} />
                Download CV
              </a>
            </div>
          </div>

          {/* Quick Contact Info Strip */}
          <div className="mt-10 grid gap-4 border-t border-black/5 pt-6 sm:grid-cols-3 font-mono text-xs">
            <div>
              <span className="text-neutral-400 block text-[10px] uppercase font-bold">Email Address</span>
              <a href={`mailto:${personalInfo.email}`} className="font-semibold text-neutral-900 hover:text-[#57A4F0]">
                {personalInfo.email}
              </a>
            </div>
            <div>
              <span className="text-neutral-400 block text-[10px] uppercase font-bold">Direct Phone / WhatsApp</span>
              <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="font-semibold text-neutral-900 hover:text-[#57A4F0]">
                {personalInfo.phone}
              </a>
            </div>
            <div>
              <span className="text-neutral-400 block text-[10px] uppercase font-bold">Location</span>
              <span className="font-semibold text-neutral-900">Pune, MH, India</span>
            </div>
          </div>
        </div>

        {/* System Bar & Scroll Top */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-mono">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span>Senior Video Editor &amp; AI Producer · All Systems Nominal</span>
            <span className="text-neutral-300">|</span>
            <span>Production Portfolio</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 rounded-full border border-black/10 bg-white px-3 py-1 font-bold text-neutral-800 shadow-2xs hover:bg-neutral-50 transition-colors"
          >
            Back to Desktop
            <ArrowUp size={12} className="text-[#57A4F0]" />
          </button>
        </div>
      </div>
    </footer>
  )
}
