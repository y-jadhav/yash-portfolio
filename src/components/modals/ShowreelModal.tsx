import React, { useState, useRef, useEffect } from 'react'
import { X, Play, Pause, RotateCcw, Volume2, VolumeX, Maximize, Film } from 'lucide-react'
import { usePreloadedVideo } from '../../utils/videoPreloader'

interface ShowreelModalProps {
  initialVideo?: string
  initialTitle?: string
  onClose: () => void
}

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
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    setCurrentVideo(initialVideo)
    setVideoTitle(initialTitle)
    setIsPlaying(true)
  }, [initialVideo, initialTitle])

  const isImage =
    currentVideo.endsWith('.png') ||
    currentVideo.endsWith('.jpg') ||
    currentVideo.endsWith('.jpeg') ||
    currentVideo.endsWith('.webp')

  // Automatically streams from background preloaded blob cache when ready, or direct stream
  const activeStreamSrc = usePreloadedVideo(currentVideo)

  const reels = [
    { title: 'JNPA Port Visit', src: '/videos/jnpa-yt-video.mp4', desc: 'Shubham Rode on-field EXIM practical learning documentary' },
    { title: 'Poligram Explainer', src: '/videos/poligram-delimitation.mp4', desc: 'Electoral delimitation explainer documentary' },
    { title: 'Poligram News', src: '/videos/poligram-pr-1nov.mp4', desc: 'Sub-60s Hindi political journalism' },
    { title: 'Shubham Rode', src: '/videos/shubham-rode-reel.mp4', desc: 'Personal branding & viral reels' },
    { title: 'AI Video Production', src: '/videos/ai-openclawd-promo.mp4', desc: 'AI-assisted kinetic commercial' },
    { title: 'Ciper Analytics', src: '/ciper/Top 5 CM Post.png', desc: 'Publication-Grade Infographics & Visual Data' },
  ]

  const switchReel = (src: string, title: string) => {
    setCurrentVideo(src)
    setVideoTitle(title)
    setIsPlaying(true)
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

  // Shuttle keyboard shortcuts (Space, J, K, L)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
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
      } else if (e.code === 'Escape' || e.key === 'Escape') {
        e.preventDefault()
        e.stopPropagation()
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [duration, isPlaying])

  const formatTimecode = (sec: number) => {
    const m = Math.floor(sec / 60)
    const s = Math.floor(sec % 60)
    const frames = Math.floor((sec % 1) * 24)
    return `00:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}:${frames.toString().padStart(2, '0')}`
  }

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-md animate-cardin"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative flex h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#121214] shadow-[0_30px_70px_rgba(0,0,0,0.6)]"
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
            <Film size={14} className="shrink-0 text-[#57A4F0]" />
            <span className="hidden sm:inline font-bold text-white whitespace-nowrap">Program Monitor:</span>
            <span className="text-[#57A4F0] truncate font-medium text-[11px] sm:text-xs">{videoTitle}</span>
          </div>

          <div className="flex items-center shrink-0">
            {/* Live SMPTE Timecode */}
            <span className="font-mono text-[11px] sm:text-xs font-bold text-amber-400 bg-black/50 px-2 py-0.5 rounded border border-amber-400/30 whitespace-nowrap">
              {formatTimecode(currentTime)}
            </span>
          </div>
        </div>

        {/* Video or Image Media Screen Area */}
        <div className="relative flex flex-1 items-center justify-center bg-black overflow-hidden p-2">
          {isImage ? (
            <div className="flex h-full w-full items-center justify-center p-3 select-none">
              <img
                src={currentVideo}
                alt={videoTitle}
                className="max-h-[78vh] max-w-full w-auto object-contain rounded-lg shadow-2xl drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
              />
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

        {/* Edit Suite Transport Controls & Timeline */}
        <div className="shrink-0 border-t border-white/10 bg-[#18181b] p-3 text-white">
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
            /* Image Asset Details Bar */
            <div className="flex items-center justify-between text-xs text-neutral-400 py-0.5">
              <span className="font-mono text-[11px] text-neutral-300">
                Visual Report &amp; Data Infographic Asset
              </span>
              <a
                href="/ciper/Budget 2026 Carousel.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-semibold text-[#57A4F0] hover:underline"
              >
                View Full Budget Carousel (PDF) ↗
              </a>
            </div>
          )}

          {/* Transport Bar & Switcher */}
          <div className="mt-2.5 flex flex-wrap items-center justify-between gap-3">
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
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                Publication Graphics Preview
              </div>
            )}

            {/* Reel switcher tabs */}
            <div className="flex items-center gap-1 overflow-x-auto">
              {reels.map((r) => {
                const isActive = r.src === currentVideo
                return (
                  <button
                    key={r.src}
                    onClick={() => switchReel(r.src, r.title)}
                    className={`rounded-md px-2.5 py-1 text-xs font-semibold whitespace-nowrap transition-colors ${
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
