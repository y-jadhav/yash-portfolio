import React, { useId } from 'react'

interface DesktopFolderProps {
  name: string
  onClick: () => void
  isOpen?: boolean
  format?: 'MP4' | 'MEDIA' | 'PDF'
}

export const DesktopFolder: React.FC<DesktopFolderProps> = ({
  name,
  onClick,
  isOpen = false,
  format = 'MP4',
}) => {
  const rawId = useId()
  const uniqueId = rawId.replace(/[^a-zA-Z0-9]/g, '')
  const cardGradId = `macCardGrad_${uniqueId}`
  const rimGradId = `macRimGrad_${uniqueId}`
  const screenGradId = `macScreenGrad_${uniqueId}`
  const playGradId = `macPlayGrad_${uniqueId}`
  const playGlowId = `macPlayGlow_${uniqueId}`
  const glossClipId = `macGlossClip_${uniqueId}`
  const glossGradId = `macGlossGrad_${uniqueId}`

  return (
    <div
      onClick={onClick}
      className={`group flex w-[86px] [@media(max-height:860px)]:w-[76px] flex-col items-center rounded-xl p-1 [@media(max-height:860px)]:p-0.5 transition-all duration-150 cursor-pointer select-none ${
        isOpen ? 'bg-black/10 ring-1 ring-[#57A4F0]' : 'hover:bg-white/40 active:bg-white/60'
      }`}
      title={`Click to watch ${name}`}
    >
      {/* Authentic macOS Video File Icon */}
      <div className="relative h-10 w-12 [@media(max-height:860px)]:h-8 [@media(max-height:860px)]:w-9.5 transition-transform duration-150 group-hover:scale-105 group-active:scale-95">
        <svg viewBox="0 0 96 80" className="h-full w-full drop-shadow-[0_4px_10px_rgba(0,0,0,0.18)]">
          <defs>
            {/* macOS Dark Mode Space Gray Chassis Gradient */}
            <linearGradient id={cardGradId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2D313A" />
              <stop offset="60%" stopColor="#1E2027" />
              <stop offset="100%" stopColor="#121318" />
            </linearGradient>

            {/* Specular Inner Bevel Rim Gradient */}
            <linearGradient id={rimGradId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0.6" />
            </linearGradient>

            {/* 16:9 Cinema Screen Viewport Gradient */}
            <linearGradient id={screenGradId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#181B22" />
              <stop offset="100%" stopColor="#08090C" />
            </linearGradient>

            {/* Vibrant macOS System Blue Play Button Gradient */}
            <linearGradient id={playGradId} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="50%" stopColor="#0284C7" />
              <stop offset="100%" stopColor="#1D4ED8" />
            </linearGradient>

            {/* Radial Electric Blue Play Glow */}
            <radialGradient id={playGlowId} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#0284C7" stopOpacity="0" />
            </radialGradient>

            {/* Diagonal Gloss Sheen Gradient */}
            <linearGradient id={glossGradId} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.22" />
              <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>

            {/* Screen ClipPath for Gloss Reflection */}
            <clipPath id={glossClipId}>
              <rect x="11" y="21" width="74" height="42" rx="5" />
            </clipPath>
          </defs>

          {/* 1. Base macOS Squircle Media Chassis */}
          <rect
            x="6"
            y="4"
            width="84"
            height="72"
            rx="14"
            fill={`url(#${cardGradId})`}
            stroke={`url(#${rimGradId})`}
            strokeWidth="1"
          />

          {/* 2. Top Filmstrip Header with Sprocket Perforations */}
          <path
            d="M 6 18 L 6 16 C 6 10.4 10.4 6 16 6 L 80 6 C 85.6 6 90 10.4 90 16 L 90 18 Z"
            fill="#15171D"
          />
          <line x1="6" y1="18.5" x2="90" y2="18.5" stroke="#FFFFFF" strokeOpacity="0.12" strokeWidth="0.8" />

          {/* Film Perforation Sprocket Holes */}
          <rect x="15" y="8" width="8" height="6.5" rx="1.5" fill="#090A0D" stroke="#FFFFFF" strokeOpacity="0.15" strokeWidth="0.5" />
          <rect x="31" y="8" width="8" height="6.5" rx="1.5" fill="#090A0D" stroke="#FFFFFF" strokeOpacity="0.15" strokeWidth="0.5" />
          <rect x="47" y="8" width="8" height="6.5" rx="1.5" fill="#090A0D" stroke="#FFFFFF" strokeOpacity="0.15" strokeWidth="0.5" />
          <rect x="63" y="8" width="8" height="6.5" rx="1.5" fill="#090A0D" stroke="#FFFFFF" strokeOpacity="0.15" strokeWidth="0.5" />
          <rect x="79" y="8" width="8" height="6.5" rx="1.5" fill="#090A0D" stroke="#FFFFFF" strokeOpacity="0.15" strokeWidth="0.5" />

          {/* 3. Cinema Screen Viewport */}
          <rect
            x="11"
            y="21"
            width="74"
            height="42"
            rx="5"
            fill={`url(#${screenGradId})`}
            stroke="#000000"
            strokeOpacity="0.6"
            strokeWidth="0.8"
          />

          {/* Diagonal Glass Sheen Reflection */}
          <g clipPath={`url(#${glossClipId})`}>
            <polygon points="11,21 58,21 32,63 11,63" fill={`url(#${glossGradId})`} />
          </g>

          {/* 4. Glowing macOS QuickTime Play Button */}
          {/* Ambient Glow */}
          <circle cx="48" cy="42" r="16" fill={`url(#${playGlowId})`} />
          {/* Outer Ring Drop Shadow */}
          <circle cx="48" cy="42" r="11" fill="#000000" opacity="0.35" />
          {/* Main Vibrant Play Button */}
          <circle cx="48" cy="42" r="9.5" fill={`url(#${playGradId})`} />
          {/* Specular White Rim on Play Button */}
          <circle cx="48" cy="42" r="9.5" fill="none" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.65" />
          {/* Crisp Centered White Play Triangle */}
          <polygon points="45.5,37.5 53,42 45.5,46.5" fill="#FFFFFF" />

          {/* 5. Sleek macOS Format Pill Badge */}
          <g transform="translate(60, 56)">
            <rect
              x="0"
              y="0"
              width={format === 'MEDIA' ? '24' : '22'}
              height="11"
              rx="3.5"
              fill="#0F172A"
              stroke="#38BDF8"
              strokeOpacity="0.5"
              strokeWidth="0.7"
            />
            <text
              x={format === 'MEDIA' ? '12' : '11'}
              y="7.8"
              textAnchor="middle"
              fill="#F8FAFC"
              fontSize="6"
              fontWeight="700"
              fontFamily="-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif"
              letterSpacing="0.4"
            >
              {format}
            </text>
          </g>
        </svg>
      </div>

      {/* Video Name Label */}
      <span className="mt-1.5 [@media(max-height:860px)]:mt-0.5 line-clamp-2 text-center font-sans text-[11px] [@media(max-height:860px)]:text-[9.5px] font-semibold tracking-tight text-neutral-800 drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)] group-hover:text-black">
        {name}
      </span>
    </div>
  )
}
