import React from 'react'
import { CaseStudy } from '../../types'
import { NoteCard } from './NoteCard'
import { ArrowRight, Play, Layers, BarChart3 } from 'lucide-react'

interface SuperpowerSectionProps {
  caseStudy: CaseStudy
  zIndex: number
  onOpenCaseStudy: (study: CaseStudy) => void
  onPlayVideo: (videoSrc: string, title: string) => void
}

export const SuperpowerSection: React.FC<SuperpowerSectionProps> = ({
  caseStudy,
  zIndex,
  onOpenCaseStudy,
  onPlayVideo,
}) => {
  return (
    <div
      id={caseStudy.id}
      className="max-md:static max-md:mt-6 md:sticky flex h-auto w-full flex-col md:top-20 md:h-[calc(100dvh_-_5rem)]"
      style={{ zIndex }}
    >
      {/* SVG Clip-Path Finder Tab */}
      <div className="relative h-20 w-full shrink-0 select-none">
        <div className="absolute inset-x-0 bottom-[-32px] h-[72px] rounded-t-[30px] bg-[#e5e7eb] shadow-sm" />
        <div
          className="absolute left-0 top-0 h-20 w-[340px] bg-[#e5e7eb]"
          style={{
            clipPath:
              'path("M0 80 L0 32 Q0 2 30 2 L210 2 Q238 2 252 20 C266 36 276 40 312 40 L340 40 L340 80 Z")',
          }}
        />
        <div className="absolute left-10 top-3 flex h-9 items-center gap-2">
          <Layers size={13} className="text-black/50" />
          <span className="text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.08em] text-black/60">
            {caseStudy.folderName}
          </span>
        </div>
      </div>

      {/* Main Stacking Panel Body */}
      <div className="relative -mt-2 flex min-h-0 w-full flex-1 items-start overflow-hidden rounded-t-[28px] max-md:rounded-b-[28px] bg-gradient-to-b from-[#f7f8fa] via-[#f0f2f5] to-[#e7e9ed] shadow-[inset_0_2px_1px_rgba(255,255,255,0.7),0_-6px_24px_rgba(0,0,0,0.04)] md:items-center">
        <div className="mx-auto w-full max-w-[1140px] px-6 py-10 md:max-h-full md:overflow-y-auto md:px-12 md:py-12">
          {/* Header Tag */}
          <div className="mb-2">
            <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-neutral-400">
              Superpower {caseStudy.number} · {caseStudy.category}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-[1.05fr_0.95fr] items-center">
            {/* Left Column: Narrative & Stats */}
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-[2rem] font-bold leading-tight tracking-tight text-neutral-900">
                {caseStudy.title}
              </h2>

              <p className="mt-3 text-sm sm:text-base font-medium leading-snug text-neutral-700">
                {caseStudy.headline}
              </p>

              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-neutral-600">
                {caseStudy.description}
              </p>

              {/* Tags */}
              <div className="mt-5 flex flex-wrap gap-1.5">
                {caseStudy.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-black/5 bg-white/80 px-2.5 py-1 text-[11px] font-medium text-neutral-700 shadow-2xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onOpenCaseStudy(caseStudy)}
                  className="inline-flex items-center gap-2 rounded-full bg-[#57A4F0] px-5 py-2.5 text-xs font-bold text-white shadow-md shadow-[#57A4F0]/20 transition-all hover:bg-[#3E8FE4] hover:scale-[1.02] active:scale-[0.98]"
                >
                  Full Case Study Window
                  <ArrowRight size={13} />
                </button>

                {caseStudy.videoSrc && (
                  <button
                    onClick={() => onPlayVideo(caseStudy.videoSrc!, caseStudy.title)}
                    className="inline-flex items-center gap-1.5 rounded-full border border-neutral-300 bg-white/80 px-4 py-2.5 text-xs font-bold text-neutral-800 shadow-sm transition-all hover:bg-white active:scale-[0.98]"
                  >
                    <Play size={12} fill="currentColor" className="text-neutral-900" />
                    Play Reel Cut
                  </button>
                )}
              </div>
            </div>

            {/* Right Column: Note Card Post-It */}
            <div className="w-full">
              <NoteCard items={caseStudy.noteItems} badge={`CASE NOTE: ${caseStudy.folderName}`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
