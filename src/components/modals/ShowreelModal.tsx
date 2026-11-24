import React, { useState, useRef, useEffect } from 'react'
import { X, Play, Pause, RotateCcw, Volume2, VolumeX, Film, ChevronLeft, ChevronRight, FileText, Image as ImageIcon } from 'lucide-react'
import { usePreloadedVideo } from '../../utils/videoPreloader'

interface ShowreelModalProps {
  initialVideo?: string
  initialTitle?: string
  onClose: () => void
}

const CIPER_GALLERY = [
  {
    title: 'Top 5 Chief Ministers (Longest Serving)',
    src: '/ciper/Top 5 CM Post.png',
    caption: 'High-engagement social infographic analyzing tenure and serving timelines of Indian Chief Ministers.',
  },
  {
    title: 'The Mandate: BJP vs INC All-Time Seat Comparison',
    src: '/ciper/LS Seat Comparison.png',
    caption: 'All-time Lok Sabha seat distribution comparison spanning 11 general elections (1984–2024).',
  },
  {
    title: 'Gen Z Perception Study in Andhra Pradesh (Report Cover)',
    src: '/ciper/Report Cover.jpg',
    caption: 'Executive research report publication cover design for qualitative youth sentiment & governance perception study.',
  },
  {
    title: 'Union Budget 2026: Receipts of India Carousel',
    src: '/ciper/budget-carousel-1.png',
    pdfUrl: '/ciper/Budget 2026 Carousel.pdf',
    caption: 'Multi-slide social carousel breaking down national revenue sources, tax splits, and fiscal receipts.',
  },
]

export const ShowreelModal: React.FC<ShowreelModalProps> = ({
  initialVideo = '/videos/jnpa-yt-video.mp4',
  initialTitle = 'JNPA Port Visit: EXIM Practical Learning',
  onClose,
}) => {
  const [currentVideo, setCurrentVideo] = useState(initialVideo)
  const [videoTitle, setVideoTitle] = useState(initialTitle)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [activeImageIdx, setActiveImageIdx] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    setCurrentVideo(initialVideo)
    setVideoTitle(initialTitle)
    setIsPlaying(true)
    if (initialVideo.includes('ciper')) {
      const idx = CIPER_GALLERY.findIndex((item) => item.src === initialVideo)
      setActiveImageIdx(idx >= 0 ? idx : 0)
    }
  }, [initialVideo, initialTitle])

  const isImage =
    currentVideo.endsWith('.png') ||
    currentVideo.endsWith('.jpg') ||
    currentVideo.endsWith('.jpeg') ||
    currentVideo.endsWith('.webp') ||
    currentVideo.includes('ciper')

  // Automatically streams from background preloaded blob cache when ready, or direct stream
  const activeStreamSrc = usePreloadedVideo(currentVideo)

  const reels = [
    { title: 'JNPA Port Visit', src: '/videos/jnpa-yt-video.mp4', desc: 'Shubham Rode on-field EXIM practical learning documentary' },
    { title: 'Poligram Explainer', src: '/videos/poligram-delimitation.mp4', desc: 'Electoral delimitation explainer documentary' },
    { title: 'Poligram News', src: '/videos/poligram-pr-1nov.mp4', desc: 'Sub-60s Hindi political journalism' },
    { title: 'Shubham Rode', src: '/videos/shubham-rode-reel.mp4', desc: 'Personal branding & viral reels' },
    { title: 'AI SaaS Animation', src: '/videos/ai-openclawd-promo.mp4', desc: 'AI-assisted kinetic commercial' },
    { title: 'Ciper Analytics', src: '/ciper/Top 5 CM Post.png', desc: 'Publication-Grade Infographics & Visual Data' },
  ]

  const switchReel = (src: string, title: string) => {
    setCurrentVideo(src)
    setVideoTitle(title)
    setIsPlaying(true)
    if (src.includes('ciper')) {
      setActiveImageIdx(0)
    }
  }

  const togglePlay = () => {
    if (!videoRef.current) return
    if (videoRef.current.paused) {
      videoRef.current.play()
      setIsPlaying(true)
    } else {
      videoRef.current.pause()
      setIsPlaying(false)
    }
  }

  // Keyboard navigation & transport controls (Escape, Space, J, K, L, Arrows)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // 1. ESCAPE ALWAYS WORKS REGARDLESS OF VIDEO OR IMAGE
      if (e.code === 'Escape' || e.key === 'Escape') {
        e.preventDefault()
        e.stopPropagation()
        onClose()
        return
      }

      // 2. Image Gallery Navigation Controls
      if (isImage) {
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
          e.preventDefault()
          setActiveImageIdx((prev) => (prev + 1) % CIPER_GALLERY.length)
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
          e.preventDefault()
          setActiveImageIdx((prev) => (prev - 1 + CIPER_GALLERY.length) % CIPER_GALLERY.length)
        }
        return
      }

      // 3. Video Shuttle controls
      if (!videoRef.current) return
      if (e.code === 'Space') {
        e.preventDefault()
        togglePlay()
      } else if (e.key === 'j' || e.key === 'J') {
        videoRef.current.currentTime = Math.max(0, videoRef.current.currentTime - 4)
      } else if (e.key === 'k' || e.key === 'K') {
        videoRef.current.pause()
        setIsPlaying(false)
      } else if (e.key === 'l' || e.key === 'L') {
        videoRef.current.currentTime = Math.min(duration, videoRef.current.currentTime + 4)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [duration, isImage, isPlaying, onClose])

  const formatTimecode = (sec: number) => {
    const m = Math.floor(sec / 60)
    const s = Math.floor(sec % 60)
    const frames = Math.floor((sec % 1) * 24)
    return `00:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}:${frames.toString().padStart(2, '0')}`
  }

  const currentGalleryItem = CIPER_GALLERY[activeImageIdx]

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-md animate-cardin"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative flex h-[90vh] max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#121214] shadow-[0_30px_70px_rgba(0,0,0,0.6)]"
      >
        {/* Premiere-style Title Bar */}
        <div className="relative flex h-11 shrink-0 items-center justify-between border-b border-white/10 bg-[#1c1c1f] px-3 sm:px-4 select-none gap-2">
          {/* Traffic Lights: Exact 12px circles with equal 8px gap */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={onClose}
              title="Close [Esc]"
              className="group relative flex h-3 w-3 items-center justify-center rounded-full bg-[#ff5f57] border border-[#e0443e] hover:opacity-80 transition-opacity cursor-pointer touch-manipulation before:content-[''] before:absolute before:-inset-2.5 before:rounded-full active:scale-90"
            >
              <X size={7} className="opacity-0 group-hover:opacity-100 text-black/70" />
            </button>
            <div className="h-3 w-3 rounded-full bg-[#febc2e] border border-[#d89e24]" />
            <div className="h-3 w-3 rounded-full bg-[#28c840] border border-[#1aab29]" />
          </div>

          <div className="flex min-w-0 flex-1 items-center justify-center gap-1.5 font-mono text-xs text-neutral-300 px-1">
            {isImage ? (
              <ImageIcon size={14} className="shrink-0 text-emerald-400" />
            ) : (
              <Film size={14} className="shrink-0 text-[#57A4F0]" />
            )}
            <span className="hidden sm:inline font-bold text-white whitespace-nowrap">
              {isImage ? 'Media Viewer:' : 'Program Monitor:'}
            </span>
            <span className="text-[#57A4F0] truncate font-medium text-[11px] sm:text-xs">
              {isImage ? `Ciper Analytics — ${currentGalleryItem.title}` : videoTitle}
            </span>
          </div>

          <div className="flex items-center shrink-0">
            {isImage ? (
              <span className="font-mono text-[11px] sm:text-xs font-bold text-emerald-400 bg-black/50 px-2 py-0.5 rounded border border-emerald-400/30 whitespace-nowrap">
                {activeImageIdx + 1} / {CIPER_GALLERY.length}
              </span>
            ) : (
              /* Live SMPTE Timecode */
              <span className="font-mono text-[11px] sm:text-xs font-bold text-amber-400 bg-black/50 px-2 py-0.5 rounded border border-amber-400/30 whitespace-nowrap">
                {formatTimecode(currentTime)}
              </span>
            )}
          </div>
        </div>

        {/* Video or Image Media Screen Area - Constrained with min-h-0 so bottom bar is NEVER pushed off */}
        <div className="relative flex flex-1 min-h-0 items-center justify-center bg-black overflow-hidden p-2 select-none">
          {isImage ? (
            /* Multi-Image Interactive Showcase */
            <div className="relative flex h-full w-full min-h-0 items-center justify-center overflow-hidden">
              {/* Previous Arrow Button */}
              <button
                onClick={() => setActiveImageIdx((prev) => (prev - 1 + CIPER_GALLERY.length) % CIPER_GALLERY.length)}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/85 backdrop-blur-md border border-white/20 transition-all hover:scale-105 shadow-xl cursor-pointer"
                title="Previous Image [←]"
              >
                <ChevronLeft size={22} />
              </button>

              {/* Main Active Image Display */}
              <div className="flex h-full w-full min-h-0 items-center justify-center p-2 sm:p-3 overflow-hidden">
                <img
                  key={currentGalleryItem.src}
                  src={currentGalleryItem.src}
                  alt={currentGalleryItem.title}
                  className="max-h-full max-w-full w-auto h-auto object-contain rounded-xl shadow-2xl drop-shadow-[0_10px_35px_rgba(0,0,0,0.7)] transition-all duration-200"
                />
              </div>

              {/* Next Arrow Button */}
              <button
                onClick={() => setActiveImageIdx((prev) => (prev + 1) % CIPER_GALLERY.length)}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/85 backdrop-blur-md border border-white/20 transition-all hover:scale-105 shadow-xl cursor-pointer"
                title="Next Image [→]"
              >
                <ChevronRight size={22} />
              </button>
            </div>
          ) : (
            <>
              <video
                ref={videoRef}
                src={activeStreamSrc}
                autoPlay
                playsInline
                muted={isMuted}
                onTimeUpdate={() => videoRef.current && setCurrentTime(videoRef.current.currentTime)}
                onLoadedMetadata={() => videoRef.current && setDuration(videoRef.current.duration)}
                onEnded={() => setIsPlaying(false)}
                onClick={togglePlay}
                className="h-full w-full object-contain cursor-pointer"
              />

              {/* Floating Pause/Play overlay hint on hover */}
              {!isPlaying && (
                <div
                  onClick={togglePlay}
                  className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-black shadow-2xl hover:scale-110 transition-transform">
                    <Play size={28} fill="currentColor" className="ml-1 text-black" />
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Edit Suite Transport Controls & Timeline / Image Gallery Controls - SHRINK-0 (Always Visible) */}
        <div className="shrink-0 border-t border-white/10 bg-[#18181b] px-3.5 py-2.5 text-white">
          {!isImage ? (
            /* Video Timeline Scrubber */
            <div className="flex items-center gap-3">
              <input
                type="range"
                min={0}
                max={duration || 100}
                step={0.05}
                value={currentTime}
                onChange={(e) => {
                  const val = parseFloat(e.target.value)
                  setCurrentTime(val)
                  if (videoRef.current) videoRef.current.currentTime = val
                }}
                className="h-1.5 w-full appearance-none rounded-lg bg-neutral-700 accent-[#57A4F0] cursor-pointer"
              />
              <span className="font-mono text-[10px] text-neutral-400 whitespace-nowrap">
                {formatTimecode(duration)}
              </span>
            </div>
          ) : (
            /* Interactive Image Asset Thumbnails & Metadata */
            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                <div className="min-w-0 flex-1">
                  <h4 className="font-sans font-bold text-white text-xs sm:text-sm truncate">
                    {currentGalleryItem.title}
                  </h4>
                  <p className="font-sans text-[11px] text-neutral-400 truncate">
                    {currentGalleryItem.caption}
                  </p>
                </div>

                {currentGalleryItem.pdfUrl && (
                  <a
                    href={currentGalleryItem.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-[#57A4F0] hover:bg-[#3E8FE4] px-3 py-1.5 text-xs font-semibold text-white shadow-md transition-colors shrink-0"
                  >
                    <FileText size={13} />
                    Open 10-Slide PDF ↗
                  </a>
                )}
              </div>

              {/* 4 Interactive Clickable Image Thumbnails with Natural 4:5 Aspect Ratio */}
              <div className="flex items-center justify-center gap-2.5 sm:gap-3.5 pt-0.5">
                {CIPER_GALLERY.map((item, idx) => {
                  const isSelected = idx === activeImageIdx
                  return (
                    <button
                      key={item.src}
                      onClick={() => setActiveImageIdx(idx)}
                      className={`group relative flex aspect-[4/5] h-13 sm:h-16 shrink-0 items-center justify-center overflow-hidden rounded-lg border transition-all duration-150 cursor-pointer ${
                        isSelected
                          ? 'border-[#57A4F0] ring-2 ring-[#57A4F0]/70 shadow-lg scale-105'
                          : 'border-white/15 bg-neutral-900/80 opacity-70 hover:opacity-100 hover:border-white/40 hover:scale-105'
                      }`}
                      title={item.title}
                    >
                      <img
                        src={item.src}
                        alt={item.title}
                        className="h-full w-full object-cover object-top select-none"
                      />
                      <div
                        className={`absolute inset-0 transition-colors ${
                          isSelected ? 'bg-transparent ring-1 ring-inset ring-white/20' : 'bg-black/25 group-hover:bg-transparent'
                        }`}
                      />
                      <span className="absolute top-0.5 left-0.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-black/85 text-[8px] font-mono font-bold text-white shadow-sm ring-1 ring-white/20">
                        {idx + 1}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>
          )}

          {/* Transport Bar & Switcher */}
          <div className="mt-2 flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-white/5">
            {!isImage ? (
              /* Play/Pause & Shuttle keys */
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    if (videoRef.current) videoRef.current.currentTime = 0
                  }}
                  className="rounded p-1.5 text-neutral-400 hover:bg-white/10 hover:text-white"
                  title="Rewind to start"
                >
                  <RotateCcw size={14} />
                </button>

                <button
                  onClick={togglePlay}
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#57A4F0] text-white hover:bg-[#3E8FE4] transition-colors"
                  title="Play/Pause [Space]"
                >
                  {isPlaying ? <Pause size={14} fill="currentColor" /> : <Play size={14} fill="currentColor" className="ml-0.5" />}
                </button>

                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="rounded p-1.5 text-neutral-400 hover:bg-white/10 hover:text-white"
                  title="Mute / Unmute"
                >
                  {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
                </button>

                <span className="hidden sm:inline font-mono text-[10px] text-neutral-400 ml-2">
                  Shuttle keys: <kbd className="bg-neutral-800 px-1 py-0.5 rounded text-neutral-300">Space</kbd> Play/Pause · <kbd className="bg-neutral-800 px-1 py-0.5 rounded text-neutral-300">J</kbd> Rewind · <kbd className="bg-neutral-800 px-1 py-0.5 rounded text-neutral-300">K</kbd> Pause · <kbd className="bg-neutral-800 px-1 py-0.5 rounded text-neutral-300">L</kbd> Forward
                </span>
              </div>
            ) : (
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Gallery:</span>
                <kbd className="bg-neutral-800 px-1.5 py-0.5 rounded text-[10px] text-neutral-300">←</kbd>
                <kbd className="bg-neutral-800 px-1.5 py-0.5 rounded text-[10px] text-neutral-300">→</kbd>
                <span className="text-neutral-500 text-[11px]">Navigate</span>
                <span className="text-neutral-600">·</span>
                <kbd className="bg-neutral-800 px-1.5 py-0.5 rounded text-[10px] text-neutral-300">Esc</kbd>
                <span className="text-neutral-500 text-[11px]">Close</span>
              </div>
            )}

            {/* Reel switcher tabs */}
            <div className="flex items-center gap-1 overflow-x-auto">
              {reels.map((r) => {
                const isActive = r.title === 'Ciper Analytics' ? isImage : r.src === currentVideo
                return (
                  <button
                    key={r.src}
                    onClick={() => switchReel(r.src, r.title)}
                    className={`rounded-md px-2.5 py-1 text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-white text-black font-bold'
                        : 'bg-white/5 text-neutral-400 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {r.title}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
