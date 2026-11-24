import React from 'react'
import { Image as ImageIcon } from 'lucide-react'

interface DesktopFolderProps {
  id?: string
  name: string
  thumbnailSrc?: string
  fileName?: string
  onClick: () => void
  isOpen?: boolean
  format?: 'MP4' | 'MEDIA' | 'PDF'
}

const DEFAULT_THUMBNAILS: Record<string, string> = {
  'poligram-news': '/thumbnails/poligram-news.jpg',
  'Poligram News': '/thumbnails/poligram-news.jpg',
  'poligram-explainer': '/thumbnails/poligram-explainer.jpg',
  'Poligram Explainer': '/thumbnails/poligram-explainer.jpg',
  'ciper-analytics': '/thumbnails/ciper-analytics.jpg',
  'Ciper Analytics': '/thumbnails/ciper-analytics.jpg',
  'shubham-rode': '/thumbnails/shubham-rode.jpg',
  'Shubham Rode': '/thumbnails/shubham-rode.jpg',
  'infrastructure-commercials': '/thumbnails/jnpa-port.jpg',
  'jnpa-port-visit': '/thumbnails/jnpa-port.jpg',
  'JNPA Port Visit': '/thumbnails/jnpa-port.jpg',
  'ai-video-workflows': '/thumbnails/ai-video.jpg',
  'AI Video Production': '/thumbnails/ai-video.jpg',
}

export const DesktopFolder: React.FC<DesktopFolderProps> = ({
  id,
  name,
  thumbnailSrc,
  fileName,
  onClick,
  isOpen = false,
  format = 'MP4',
}) => {
  const isMedia = format === 'MEDIA'
  const thumb =
    thumbnailSrc ||
    (id ? DEFAULT_THUMBNAILS[id] : undefined) ||
    DEFAULT_THUMBNAILS[name]
  const displayLabel = fileName || `${name}.${isMedia ? 'png' : 'mp4'}`

  return (
    <div
      onClick={onClick}
      className={`group flex w-[88px] [@media(max-height:860px)]:w-[78px] flex-col items-center rounded-xl p-1 [@media(max-height:860px)]:p-0.5 transition-all duration-150 cursor-pointer select-none ${
        isOpen ? 'bg-black/10 ring-1 ring-[#57A4F0]' : 'hover:bg-white/40 active:bg-white/60'
      }`}
      title={isMedia ? `Click to view ${name} infographics & publication reports` : `Click to watch ${displayLabel}`}
    >
      {/* Authentic macOS Desktop Thumbnail Preview */}
      <div className="relative w-[68px] h-[38.25px] [@media(max-height:860px)]:w-[58px] [@media(max-height:860px)]:h-[32.6px] transition-transform duration-150 group-hover:scale-105 group-active:scale-95">
        {/* Subtle photo-stack backing for multi-image media portfolios */}
        {isMedia && (
          <div className="absolute -inset-0.5 rounded-[7px] bg-neutral-300/80 border border-black/10 rotate-1 shadow-sm -z-10" />
        )}

        <div className="relative h-full w-full overflow-hidden rounded-[7px] [@media(max-height:860px)]:rounded-[5.5px] border border-black/25 bg-neutral-900 shadow-[0_2px_8px_rgba(0,0,0,0.22)] ring-1 ring-white/15">
          {thumb ? (
            <img
              src={thumb}
              alt={name}
              className="h-full w-full object-cover select-none pointer-events-none"
              loading="eager"
            />
          ) : (
            <div className="h-full w-full bg-gradient-to-b from-[#2A2B31] to-[#141518]" />
          )}

          {/* Subtle macOS gloss sheen overlay across top third */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/30" />

          {/* Centered Frosted Action Icon on Hover (Gallery icon for media, Play icon for video) */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-150 group-hover:opacity-100">
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-black/60 backdrop-blur-sm shadow-sm ring-1 ring-white/30">
              {isMedia ? (
                <ImageIcon size={11} className="text-white" />
              ) : (
                <svg viewBox="0 0 24 24" className="h-2.5 w-2.5 fill-white ml-0.5" aria-hidden="true">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* macOS File Name Label (e.g. Ciper Analytics.png or Delimitation.mp4) */}
      <span className="mt-1 [@media(max-height:860px)]:mt-0.5 line-clamp-2 text-center font-sans text-[11px] [@media(max-height:860px)]:text-[9.5px] font-medium leading-tight tracking-tight text-neutral-800 drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)] group-hover:text-black">
        {displayLabel}
      </span>
    </div>
  )
}
