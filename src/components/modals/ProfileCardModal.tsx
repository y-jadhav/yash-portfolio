import React, { useEffect } from 'react'
import { X, Mail, Phone, MapPin, Briefcase, GraduationCap, Download, ExternalLink, Sparkles } from 'lucide-react'
import { personalInfo } from '../../data/portfolioData'

interface ProfileCardModalProps {
  onClose: () => void
}

export const ProfileCardModal: React.FC<ProfileCardModalProps> = ({ onClose }) => {
  // Global escape key listener to dismiss
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.code === 'Escape') {
        e.preventDefault()
        e.stopPropagation()
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/50 backdrop-blur-md animate-cardin"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative flex w-full max-w-2xl sm:max-w-3xl max-h-[90vh] flex-col overflow-hidden rounded-3xl border border-white/80 bg-white/95 shadow-[0_30px_90px_rgba(0,0,0,0.25)] backdrop-blur-2xl transition-all"
      >
        {/* macOS Window Title Bar */}
        <div className="relative flex h-11 shrink-0 items-center justify-between border-b border-black/5 bg-[#f6f6f8]/80 px-3 sm:px-4 select-none">
          {/* macOS Traffic Lights: Exact 12px circles with equal 8px gap */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={onClose}
              className="group relative flex h-3 w-3 items-center justify-center rounded-full bg-[#ff5f57] border border-[#e0443e] hover:opacity-80 transition-opacity cursor-pointer touch-manipulation before:content-[''] before:absolute before:-inset-2.5 before:rounded-full active:scale-90"
              title="Close [Esc]"
            >
              <X size={7} className="opacity-0 group-hover:opacity-100 text-black/70" />
            </button>
            <div className="h-3 w-3 rounded-full bg-[#febc2e] border border-[#d89e24]" />
            <div className="h-3 w-3 rounded-full bg-[#28c840] border border-[#1aab29]" />
          </div>

          {/* Window Title */}
          <span className="font-sans text-xs font-semibold text-neutral-700 truncate max-w-[200px] text-center">
            About Me · Yash Jadhav
          </span>

          <div className="w-8 sm:w-12" />
        </div>

        {/* Modal Body - Scrollable on mobile */}
        <div className="flex-1 overflow-y-auto flex flex-col sm:flex-row gap-5 sm:gap-6 p-4 sm:p-7">
          {/* Left Column: Enlarged Single Photo Showcase */}
          <div className="flex flex-col items-center sm:w-[220px] shrink-0">
            <div className="relative aspect-[3/4] h-52 sm:h-auto sm:w-full overflow-hidden rounded-2xl bg-neutral-100 shadow-md border border-black/5 group">
              <img
                src="/yash-portrait.jpg"
                alt={personalInfo.name}
                className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/10" />

              {/* Hi-Res Badge */}
              <div className="absolute bottom-2.5 right-2.5 rounded-md bg-black/50 px-2 py-0.5 text-[9px] font-mono text-white/90 backdrop-blur-sm">
                4K Ultra HD
              </div>
            </div>
          </div>

          {/* Right Column: Personal & Professional Details */}
          <div className="flex flex-1 flex-col justify-between min-w-0">
            <div>
              {/* Name & Headline */}
              <h2 className="text-2xl font-extrabold tracking-tight text-neutral-900">
                {personalInfo.name}
              </h2>
              <p className="font-sans text-xs font-semibold text-[#57A4F0]">
                {personalInfo.title}
              </p>

              {/* Bio Paragraph */}
              <p className="mt-2.5 text-xs leading-relaxed text-neutral-600">
                I am a Senior Video Editor &amp; AI Specialist with 3+ years orchestrating viral multimedia content. I led post-production for Poligram News (scaling from 0 to 55K+ followers) and engineered executive personal brand workflows for Shubham Rode (10K to 75K+).
              </p>

              {/* Personal Details Grid */}
              <div className="mt-4 space-y-2 border-t border-black/5 pt-3">
                <div className="flex items-start gap-2 text-xs text-neutral-700">
                  <Briefcase size={14} className="text-[#57A4F0] shrink-0 mt-0.5" />
                  <div className="leading-tight">
                    <span className="font-semibold text-neutral-900 mr-1.5">Current Role:</span>
                    <span className="text-neutral-600">{personalInfo.currentRole}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2 text-xs text-neutral-700">
                  <GraduationCap size={14} className="text-[#57A4F0] shrink-0 mt-0.5" />
                  <div className="leading-tight">
                    <span className="font-semibold text-neutral-900 mr-1.5">Education:</span>
                    <span className="text-neutral-600">{personalInfo.education}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2 text-xs text-neutral-700">
                  <MapPin size={14} className="text-[#57A4F0] shrink-0 mt-0.5" />
                  <div className="leading-tight">
                    <span className="font-semibold text-neutral-900 mr-1.5">Location:</span>
                    <span className="text-neutral-600">{personalInfo.location}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2 text-xs text-neutral-700">
                  <Sparkles size={14} className="text-[#57A4F0] shrink-0 mt-0.5" />
                  <div className="leading-tight">
                    <span className="font-semibold text-neutral-900 mr-1.5">Core Tools:</span>
                    <span className="text-neutral-600">Adobe Suite, Gen AI, Antigravity</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Links Bar */}
            <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-black/5 pt-3.5">
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-1.5 rounded-xl bg-neutral-900 px-3.5 py-2 text-xs font-semibold text-white shadow-sm hover:bg-neutral-800 transition-colors"
              >
                <Mail size={13} />
                Send Email
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl border border-black/10 bg-white px-3.5 py-2 text-xs font-semibold text-neutral-700 shadow-sm hover:bg-neutral-50 hover:text-black transition-colors"
              >
                <ExternalLink size={13} />
                LinkedIn
              </a>

              <a
                href="/CV_Yash_Jadhav.pdf"
                download
                className="inline-flex items-center gap-1.5 rounded-xl border border-black/10 bg-white px-3.5 py-2 text-xs font-semibold text-neutral-700 shadow-sm hover:bg-neutral-50 hover:text-black transition-colors"
              >
                <Download size={13} />
                CV
              </a>

              {/* Clean Call Icon Button */}
              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center justify-center h-8 w-8 rounded-xl border border-black/10 bg-white text-neutral-700 hover:text-black hover:border-black/25 shadow-sm transition-colors cursor-pointer"
                title={`Call: ${personalInfo.phone}`}
                aria-label={`Call ${personalInfo.phone}`}
              >
                <Phone size={14} />
              </a>
            </div>

            {/* Mobile-only Explicit Close Button */}
            <button
              onClick={onClose}
              className="sm:hidden w-full mt-4 py-2.5 rounded-xl border border-black/10 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-bold transition-colors shadow-sm active:scale-95"
            >
              Close Profile Card
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
