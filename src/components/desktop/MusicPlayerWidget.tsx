import React, { useState, useEffect } from 'react'
import { Play, Pause, SkipForward, Volume2, VolumeX } from 'lucide-react'

// Single shared audio instance to guarantee no duplicate audio streams
let globalAudio: HTMLAudioElement | null = null

const getAudio = () => {
  if (typeof window === 'undefined') return null
  if (!globalAudio) {
    globalAudio = new Audio('/audio/calm-guitar.mp3')
    globalAudio.loop = true
    globalAudio.volume = 0.4
  }
  return globalAudio
}

export const MusicPlayerWidget: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)

  const track = {
    title: 'Calm Guitar',
    artist: 'LiteSaturation',
  }

  // Synchronize state with the audio element
  useEffect(() => {
    const audio = getAudio()
    if (!audio) return

    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)

    audio.addEventListener('play', handlePlay)
    audio.addEventListener('pause', handlePause)

    // Set initial state based on audio element
    setIsPlaying(!audio.paused)
    audio.volume = isMuted ? 0 : 0.4

    return () => {
      audio.removeEventListener('play', handlePlay)
      audio.removeEventListener('pause', handlePause)
    }
  }, [isMuted])

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation()
    const audio = getAudio()
    if (!audio) return

    if (audio.paused) {
      audio.volume = isMuted ? 0 : 0.4
      audio.play().catch(() => {})
    } else {
      audio.pause()
    }
  }

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation()
    const audio = getAudio()
    if (!audio) return

    const nextMuted = !isMuted
    setIsMuted(nextMuted)
    audio.volume = nextMuted ? 0 : 0.4
  }

  const restartTrack = (e: React.MouseEvent) => {
    e.stopPropagation()
    const audio = getAudio()
    if (!audio) return

    audio.currentTime = 0
    audio.play().catch(() => {})
  }

  return (
    <div className="group relative flex h-[140px] w-[140px] sm:h-[150px] sm:w-[150px] flex-col justify-between overflow-hidden rounded-[26px] border border-white/70 bg-white/80 p-2.5 sm:p-3 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_8px_24px_rgba(0,0,0,0.06)] backdrop-blur-xl transition-all duration-200 hover:shadow-[0_12px_32px_rgba(0,0,0,0.1)] select-none">
      {/* Top Header: Equalizer Status & Mute */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <span
            className={`h-1.5 w-1.5 rounded-full bg-[#57A4F0] ${
              isPlaying ? 'animate-pulse' : 'opacity-40'
            }`}
          />
          <span className="font-mono text-[8.5px] font-bold tracking-wider text-neutral-400 uppercase">
            Music · 40%
          </span>
        </div>

        <button
          onClick={toggleMute}
          className="text-neutral-400 hover:text-neutral-700 transition-colors p-1"
          title={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? <VolumeX size={11} /> : <Volume2 size={11} />}
        </button>
      </div>

      {/* Center Vinyl CD & Play Button */}
      <div className="relative my-auto flex items-center justify-center">
        {/* Rotating Vinyl CD disc */}
        <div
          onClick={togglePlay}
          className={`relative flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-gradient-to-tr from-[#171717] via-[#2c2d30] to-[#57A4F0] shadow-md transition-all duration-200 hover:scale-105 active:scale-95 ${
            isPlaying ? 'animate-cd-spin' : ''
          }`}
          title={isPlaying ? 'Click to Pause' : 'Click to Play'}
        >
          {/* Vinyl concentric grooves */}
          <div className="absolute inset-1.5 rounded-full border border-white/10" />
          <div className="absolute inset-3.5 rounded-full border border-white/10" />
          {/* Subtle CD reflective sheen */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/10 via-transparent to-black/25 pointer-events-none" />
        </div>

        {/* Center Play/Pause button - stationary in center */}
        <button
          onClick={togglePlay}
          className="absolute z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white text-neutral-900 shadow hover:scale-105 active:scale-95 transition-transform cursor-pointer"
          title={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? (
            <Pause size={12} fill="currentColor" />
          ) : (
            <Play size={12} fill="currentColor" className="ml-0.5" />
          )}
        </button>
      </div>

      {/* Bottom Track Info & Skip */}
      <div className="flex items-center justify-between border-t border-black/5 pt-1.5">
        <div className="overflow-hidden pr-1">
          <p className="truncate text-[10px] font-bold text-neutral-800 leading-tight">
            {track.title}
          </p>
          <p className="truncate text-[8.5px] text-neutral-400 font-medium leading-tight">
            {track.artist}
          </p>
        </div>

        <button
          onClick={restartTrack}
          className="rounded p-1 text-neutral-400 hover:bg-black/5 hover:text-black transition-colors shrink-0"
          title="Restart track"
        >
          <SkipForward size={11} />
        </button>
      </div>
    </div>
  )
}
