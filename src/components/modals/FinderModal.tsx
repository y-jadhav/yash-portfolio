import React, { useState, useEffect } from 'react'
import { CaseStudy } from '../../types'
import { X, Minus, Maximize2, Folder, Film, ArrowLeft, ArrowRight, Share2, Tag, CheckCircle2, FileText, Image as ImageIcon } from 'lucide-react'
import { usePreloadedVideo } from '../../utils/videoPreloader'

interface FinderModalProps {
  caseStudy: CaseStudy | null
  onClose: () => void
  onSelectOtherStudy: (study: CaseStudy) => void
  allStudies: CaseStudy[]
  onPlayVideo: (videoSrc: string, title: string) => void
  initialGalleryIdx?: number
}

export const FinderModal: React.FC<FinderModalProps> = ({
  caseStudy,
  onClose,
  onSelectOtherStudy,
  allStudies,
  onPlayVideo,
  initialGalleryIdx = 0,
}) => {
  const [activeGalleryIdx, setActiveGalleryIdx] = useState(initialGalleryIdx)
  const resolvedVideoSrc = usePreloadedVideo(caseStudy?.videoSrc || '')

  const currentIndex = caseStudy ? allStudies.findIndex((s) => s.id === caseStudy.id) : 0
  const prevStudy = currentIndex > 0 ? allStudies[currentIndex - 1] : allStudies[allStudies.length - 1]
  const nextStudy = currentIndex < allStudies.length - 1 ? allStudies[currentIndex + 1] : allStudies[0]

  useEffect(() => {
    setActiveGalleryIdx(initialGalleryIdx)
  }, [caseStudy?.id, initialGalleryIdx])

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

  if (!caseStudy) return null

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/40 backdrop-blur-sm animate-cardin"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative flex h-[88vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-black/15 bg-white shadow-[0_25px_60px_rgba(0,0,0,0.25)]"
      >
        {/* macOS Title Bar */}
        <div className="relative flex h-11 shrink-0 items-center justify-between border-b border-black/10 bg-[#f6f6f6] px-3 sm:px-4 select-none">
          {/* Traffic Lights: Exact 12px circles with equal 8px gap */}
          <div className="flex items-center gap-2 shrink-0 z-10">
            <button
              onClick={onClose}
              title="Close [Esc]"
              className="group relative flex h-3 w-3 items-center justify-center rounded-full bg-[#ff5f57] border border-[#e0443e] hover:opacity-80 transition-opacity cursor-pointer touch-manipulation before:content-[''] before:absolute before:-inset-2.5 before:rounded-full active:scale-90"
            >
              <X size={7} className="opacity-0 group-hover:opacity-100 text-black/70" />
            </button>
            <button
              onClick={onClose}
              title="Minimize"
              className="flex h-3 w-3 items-center justify-center rounded-full bg-[#febc2e] border border-[#d89e24] hover:opacity-80 transition-opacity"
            >
              <Minus size={7} className="opacity-0 hover:opacity-100 text-black/70" />
            </button>
            <button
              title="Zoom"
              className="flex h-3 w-3 items-center justify-center rounded-full bg-[#28c840] border border-[#1aab29] hover:opacity-80 transition-opacity"
            >
              <Maximize2 size={6} className="opacity-0 hover:opacity-100 text-black/70" />
            </button>
          </div>

          {/* Window Title & Breadcrumbs: Always Center-Aligned & Single Line */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center gap-1.5 font-sans text-xs font-semibold text-neutral-600 max-w-[62%] sm:max-w-[70%] whitespace-nowrap">
            <Folder size={14} className="text-[#57A4F0] shrink-0" />
            <span className="hidden sm:inline text-neutral-500">Finder</span>
            <span className="hidden sm:inline text-neutral-300">/</span>
            <span className="hidden sm:inline text-neutral-500">Case Studies</span>
            <span className="hidden sm:inline text-neutral-300">/</span>
            <span className="text-neutral-900 font-bold truncate">{caseStudy.folderName}</span>
          </div>

          {/* Right side spacer to balance traffic lights on left */}
          <div className="w-12 sm:w-14 shrink-0" />
        </div>

        {/* Finder Content Area with Sidebar */}
        <div className="flex flex-1 overflow-hidden">
          {/* Left Sidebar */}
          <div className="hidden md:flex w-52 shrink-0 flex-col justify-between border-r border-black/10 bg-[#f9f9fa] p-3 text-xs select-none">
            <div className="space-y-4">
              <div>
                <p className="px-2 text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Favorites</p>
                <div className="mt-1 space-y-0.5">
                  <button
                    onClick={onClose}
                    className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 font-medium text-neutral-600 hover:bg-black/5"
                  >
                    <span className="text-sm">🖥</span> Desktop
                  </button>
                  <button className="flex w-full items-center gap-2 rounded-md bg-[#57A4F0]/15 px-2 py-1.5 font-bold text-[#57A4F0]">
                    <span className="text-sm">📁</span> Case Studies
                  </button>
                </div>
              </div>

              <div>
                <p className="px-2 text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Case Studies</p>
                <div className="mt-1 space-y-0.5">
                  {allStudies.map((s) => {
                    const isSelected = s.id === caseStudy.id
                    return (
                      <button
                        key={s.id}
                        onClick={() => onSelectOtherStudy(s)}
                        className={`flex w-full items-center justify-between rounded-md px-2 py-1.5 text-left font-medium transition-colors ${
                          isSelected
                            ? 'bg-[#57A4F0] text-white font-bold'
                            : 'text-neutral-700 hover:bg-black/5'
                        }`}
                      >
                        <span className="truncate">{s.folderName}</span>
                        <span className={`text-[9px] ${isSelected ? 'text-white/80' : 'text-neutral-400'}`}>
                          {s.number}
                        </span>
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-black/5 bg-white p-2.5 text-[10.5px]">
              <span className="font-bold text-neutral-800">Production Lead:</span>
              <p className="text-neutral-500">Yash Jadhav</p>
              <p className="mt-0.5 text-neutral-400 font-medium">Senior Video Editor</p>
            </div>
          </div>

          {/* Main Study Details */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-white">
            {/* Top Category Badge */}
            <div className="flex items-center justify-between border-b border-black/5 pb-3 sm:pb-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-[#57A4F0]/15 px-2.5 sm:px-3 py-0.5 sm:py-1 font-mono text-[11px] sm:text-xs font-bold text-[#57A4F0]">
                  Superpower {caseStudy.number}
                </span>
                <span className="font-mono text-[11px] sm:text-xs text-neutral-400 font-medium">{caseStudy.category}</span>
              </div>
            </div>

            {/* Title & Headline */}
            <h1 className="mt-4 sm:mt-5 text-xl sm:text-3xl font-extrabold tracking-tight text-neutral-900 leading-snug sm:leading-tight">
              {caseStudy.title}
            </h1>
            <p className="mt-1.5 sm:mt-2 text-sm sm:text-base font-semibold text-[#57A4F0]">
              {caseStudy.headline}
            </p>

            {/* Video preview banner if available */}
            {caseStudy.videoSrc && (
              <div className="my-6 overflow-hidden rounded-xl border border-black/10 bg-neutral-950 p-2 shadow-inner">
                <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-neutral-900">
                  <video
                    src={resolvedVideoSrc}
                    controls
                    playsInline
                    preload="metadata"
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="mt-2 flex items-center justify-between px-2 text-[11px] text-neutral-400 font-mono">
                  <span>Footage: {caseStudy.folderName} (Master Edit)</span>
                  <span>Full 1080p / 4K ProRes</span>
                </div>
              </div>
            )}

            {/* Infographics & Report Covers Gallery if available */}
            {caseStudy.gallery && caseStudy.gallery.length > 0 && (
              <div className="my-6 overflow-hidden rounded-2xl border border-black/10 bg-[#f8f9fa] p-4 shadow-sm">
                {/* Top Header of the Gallery */}
                <div className="mb-3 flex items-center justify-between border-b border-black/5 pb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="flex h-2 w-2 rounded-full bg-[#57A4F0]" />
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-800">
                      Visual Infographics &amp; Publication Reports Showcase
                    </span>
                  </div>
                  <span className="font-mono text-xs text-neutral-400">
                    {activeGalleryIdx + 1} of {caseStudy.gallery.length} Assets
                  </span>
                </div>

                {/* Main Display Frame */}
                <div className="relative flex min-h-[360px] max-h-[500px] w-full items-center justify-center overflow-hidden rounded-xl bg-neutral-900/5 p-3 border border-black/5">
                  <img
                    src={caseStudy.gallery[activeGalleryIdx].src}
                    alt={caseStudy.gallery[activeGalleryIdx].title}
                    className="max-h-[460px] w-auto max-w-full rounded-lg object-contain shadow-md transition-all duration-200"
                  />
                </div>

                {/* Caption & Action Bar */}
                <div className="mt-3.5 flex flex-wrap items-center justify-between gap-3 px-1">
                  <div className="min-w-0 max-w-xl">
                    <h4 className="font-sans text-sm font-bold text-neutral-900">
                      {caseStudy.gallery[activeGalleryIdx].title}
                    </h4>
                    <p className="mt-0.5 text-xs text-neutral-500">
                      {caseStudy.gallery[activeGalleryIdx].caption}
                    </p>
                  </div>

                  {caseStudy.gallery[activeGalleryIdx].pdfUrl && (
                    <a
                      href={caseStudy.gallery[activeGalleryIdx].pdfUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-neutral-900 px-3.5 py-2 text-xs font-semibold text-white shadow-sm hover:bg-neutral-800 transition-colors"
                    >
                      <FileText size={13} />
                      View 10-Slide PDF
                    </a>
                  )}
                </div>

                {/* Thumbnail Switcher Bar */}
                <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2 pt-3 border-t border-black/5">
                  {caseStudy.gallery.map((item, idx) => {
                    const isActive = idx === activeGalleryIdx
                    return (
                      <button
                        key={idx}
                        onClick={() => setActiveGalleryIdx(idx)}
                        className={`group flex items-center gap-2 rounded-lg p-2 text-left border transition-all ${
                          isActive
                            ? 'border-[#57A4F0] bg-blue-50/80 shadow-sm'
                            : 'border-black/5 bg-white hover:border-black/15'
                        }`}
                      >
                        <img
                          src={item.src}
                          alt={item.title}
                          className="h-10 w-10 shrink-0 rounded object-cover border border-black/5"
                        />
                        <div className="min-w-0">
                          <p className={`truncate text-[11px] font-bold ${isActive ? 'text-[#3E8FE4]' : 'text-neutral-800 group-hover:text-black'}`}>
                            {item.title}
                          </p>
                          <span className="text-[9px] text-neutral-400 font-mono">
                            {item.pdfUrl ? 'PDF Carousel' : 'Infographic'}
                          </span>
                        </div>
                      </button>
                    )
                  })}
                </div>
              </div>
            )}

            {/* Narrative Sections */}
            <div className="mt-6 space-y-4 text-sm sm:text-base leading-relaxed text-neutral-700">
              {caseStudy.fullStory.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Key Deliverables & Notes */}
            <div className="mt-8 rounded-xl border border-amber-200/60 bg-amber-50/50 p-5">
              <h3 className="font-mono text-xs font-bold tracking-wider text-amber-950 uppercase">
                Production Deliverables &amp; Outcomes
              </h3>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {caseStudy.noteItems.map((note, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="mt-0.5 text-amber-600 shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-neutral-900">{note.title}</p>
                      <p className="text-[11px] text-neutral-600">{note.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools Used */}
            <div className="mt-8 border-t border-black/5 pt-4">
              <p className="text-xs font-bold text-neutral-400 uppercase tracking-wider">
                Tools &amp; Workflows Deployed
              </p>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {caseStudy.toolsUsed.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-lg border border-black/10 bg-neutral-50 px-3 py-1 font-mono text-xs font-medium text-neutral-800"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Toolbar between Case Studies */}
        <div className="flex md:hidden items-center justify-between border-t border-black/10 bg-[#f8f9fa] px-3.5 py-2.5 text-xs select-none shrink-0">
          <button
            onClick={() => onSelectOtherStudy(prevStudy)}
            className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 font-medium text-neutral-700 bg-white border border-black/10 shadow-sm active:scale-95 transition-transform"
          >
            <ArrowLeft size={13} className="text-[#57A4F0]" />
            <span className="truncate max-w-[95px] text-[11px] font-semibold">{prevStudy.folderName}</span>
          </button>

          <span className="font-mono text-[11px] font-bold text-neutral-400">
            {currentIndex + 1} / {allStudies.length}
          </span>

          <button
            onClick={() => onSelectOtherStudy(nextStudy)}
            className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 font-medium text-neutral-700 bg-white border border-black/10 shadow-sm active:scale-95 transition-transform"
          >
            <span className="truncate max-w-[95px] text-[11px] font-semibold">{nextStudy.folderName}</span>
            <ArrowRight size={13} className="text-[#57A4F0]" />
          </button>
        </div>
      </div>
    </div>
  )
}
