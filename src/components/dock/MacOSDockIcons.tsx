import React from 'react'

/**
 * 1. macOS Launchpad / Desktop Icon
 */
export const MacOSLaunchpadIcon: React.FC = () => (
  <svg viewBox="0 0 64 64" className="h-full w-full">
    <defs>
      <linearGradient id="launchpadBg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#3E3E42" />
        <stop offset="100%" stopColor="#18181A" />
      </linearGradient>
      <linearGradient id="rocketBody" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#E2E8F0" />
      </linearGradient>
      <linearGradient id="rocketFlame" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FBBF24" />
        <stop offset="50%" stopColor="#F97316" />
        <stop offset="100%" stopColor="#EF4444" />
      </linearGradient>
    </defs>
    <rect width="64" height="64" rx="14" fill="url(#launchpadBg)" />
    <rect width="62" height="62" x="1" y="1" rx="13" fill="none" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.25" />
    <g transform="translate(14, 12)">
      {/* Flame */}
      <path d="M12 28 C9 33, 13 38, 18 38 C23 38, 27 33, 24 28 C21 30, 15 30, 12 28 Z" fill="url(#rocketFlame)" />
      {/* Fins */}
      <path d="M6 26 C8 20, 11 19, 13 22 L10 28 Z" fill="#EF4444" />
      <path d="M30 26 C28 20, 25 19, 23 22 L26 28 Z" fill="#EF4444" />
      {/* Fuselage */}
      <path d="M18 3 C12 8, 11 17, 11 26 L25 26 C25 17, 24 8, 18 3 Z" fill="url(#rocketBody)" />
      {/* Window */}
      <circle cx="18" cy="12" r="3.2" fill="#3B82F6" stroke="#FFFFFF" strokeWidth="1" />
      <path d="M16 24 L20 24 L19 26 L17 26 Z" fill="#94A3B8" />
    </g>
  </svg>
)

/**
 * 2. Authentic macOS Finder Icon (The Smiling Dual-Tone Blue Face)
 */
export const MacOSFinderIcon: React.FC = () => (
  <svg viewBox="0 0 64 64" className="h-full w-full">
    <defs>
      <linearGradient id="finderLeft" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#A5D9FD" />
        <stop offset="100%" stopColor="#43A0F7" />
      </linearGradient>
      <linearGradient id="finderRight" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#2586EB" />
        <stop offset="100%" stopColor="#0B56BE" />
      </linearGradient>
      <linearGradient id="finderBorder" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#0B56BE" stopOpacity="0.2" />
      </linearGradient>
    </defs>
    <rect width="64" height="64" rx="14" fill="#0B56BE" />
    {/* Right face half */}
    <path d="M32 0 L50 0 C58 0, 64 6, 64 14 L64 50 C64 58, 58 64, 50 64 L32 64 Z" fill="url(#finderRight)" />
    {/* Left face half */}
    <path d="M14 0 C6 0, 0 6, 0 14 L0 50 C0 58, 6 64, 14 64 L32 64 L32 0 Z" fill="url(#finderLeft)" />
    {/* Border */}
    <rect width="62" height="62" x="1" y="1" rx="13" fill="none" stroke="url(#finderBorder)" strokeWidth="1" />
    
    {/* Eyes */}
    <circle cx="21" cy="23" r="3.2" fill="#1E293B" />
    <circle cx="43" cy="23" r="3.2" fill="#1E293B" />
    
    {/* Nose line */}
    <path d="M32 15 L32 37" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" />
    {/* Smile curved arc */}
    <path d="M17 38 C17 48, 47 48, 47 38" stroke="#1E293B" strokeWidth="3.2" strokeLinecap="round" fill="none" />
  </svg>
)

/**
 * 3. Authentic macOS QuickTime Player Icon (Showreel)
 */
export const MacOSQuickTimeIcon: React.FC = () => (
  <svg viewBox="0 0 64 64" className="h-full w-full">
    <defs>
      <linearGradient id="qtBg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#323338" />
        <stop offset="100%" stopColor="#151619" />
      </linearGradient>
      <linearGradient id="qtLoop" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#38BDF8" />
        <stop offset="50%" stopColor="#0284C7" />
        <stop offset="100%" stopColor="#0369A1" />
      </linearGradient>
      <linearGradient id="qtPlayGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#67E8F9" />
        <stop offset="100%" stopColor="#38BDF8" />
      </linearGradient>
    </defs>
    <rect width="64" height="64" rx="14" fill="url(#qtBg)" />
    <rect width="62" height="62" x="1" y="1" rx="13" fill="none" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.2" />
    {/* QuickTime 'Q' circular sweep ribbon */}
    <circle cx="32" cy="30" r="15" fill="none" stroke="url(#qtLoop)" strokeWidth="5.5" />
    {/* Q tail */}
    <path d="M38 39 L47 48 C48.5 49.5, 49.5 48.5, 48 47 L41 40 Z" fill="url(#qtLoop)" />
    {/* Play symbol */}
    <path d="M28 23 L39 30 L28 37 Z" fill="url(#qtPlayGrad)" />
  </svg>
)

/**
 * 4. Authentic macOS Keynote Icon (Metrics & Growth / Superpowers)
 */
export const MacOSKeynoteIcon: React.FC = () => (
  <svg viewBox="0 0 64 64" className="h-full w-full">
    <defs>
      <linearGradient id="keynoteBg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="100%" stopColor="#1D4ED8" />
      </linearGradient>
      <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FDE047" />
        <stop offset="100%" stopColor="#EAB308" />
      </linearGradient>
    </defs>
    <rect width="64" height="64" rx="14" fill="url(#keynoteBg)" />
    <rect width="62" height="62" x="1" y="1" rx="13" fill="none" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.3" />
    {/* Stage spotlight cone */}
    <path d="M32 8 L14 50 L50 50 Z" fill="#FFFFFF" opacity="0.15" />
    {/* Growth chart line */}
    <path d="M19 41 L27 33 L35 36 L43 23" stroke="url(#chartGrad)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    {/* Arrowhead */}
    <polygon points="43,18 47,25 40,24" fill="#FDE047" />
  </svg>
)

/**
 * 5. Authentic macOS Terminal Icon
 */
export const MacOSTerminalIcon: React.FC = () => (
  <svg viewBox="0 0 64 64" className="h-full w-full">
    <defs>
      <linearGradient id="termBg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#2A2B2E" />
        <stop offset="100%" stopColor="#141416" />
      </linearGradient>
    </defs>
    <rect width="64" height="64" rx="14" fill="url(#termBg)" />
    <rect width="62" height="62" x="1" y="1" rx="13" fill="none" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.2" />
    {/* Inner screen */}
    <rect x="6" y="6" width="52" height="52" rx="10" fill="#0D0E11" />
    {/* Prompt >_ */}
    <path d="M17 22 L27 30 L17 38" stroke="#FFFFFF" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <line x1="32" y1="38" x2="45" y2="38" stroke="#10B981" strokeWidth="3.5" strokeLinecap="round" />
  </svg>
)

/**
 * 6. Authentic macOS Mail Icon
 */
export const MacOSMailIcon: React.FC = () => (
  <svg viewBox="0 0 64 64" className="h-full w-full">
    <defs>
      <linearGradient id="mailBg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#38BDF8" />
        <stop offset="100%" stopColor="#0284C7" />
      </linearGradient>
      <linearGradient id="envGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#E2E8F0" />
      </linearGradient>
    </defs>
    <rect width="64" height="64" rx="14" fill="url(#mailBg)" />
    <rect width="62" height="62" x="1" y="1" rx="13" fill="none" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.3" />
    <g transform="translate(10, 17)">
      {/* Envelope body */}
      <rect width="44" height="30" rx="3" fill="url(#envGrad)" />
      {/* Folds */}
      <path d="M0 2 L22 19 L44 2" stroke="#CBD5E1" strokeWidth="1.5" fill="none" />
      <path d="M0 29 L16 15" stroke="#CBD5E1" strokeWidth="1.2" fill="none" />
      <path d="M44 29 L28 15" stroke="#CBD5E1" strokeWidth="1.2" fill="none" />
      {/* Airmail stamp */}
      <rect x="30" y="5" width="8" height="10" rx="1.5" fill="#EF4444" opacity="0.85" />
      <circle cx="34" cy="10" r="2" fill="#FFFFFF" />
    </g>
  </svg>
)
