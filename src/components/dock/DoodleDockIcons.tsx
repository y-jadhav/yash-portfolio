import React from 'react'

/**
 * Hand-Drawn Doodle Dock Icons using macOS squircle shape reference.
 * Inspired by the Figma Hand-Drawn Free Icons Community vector set
 * and macOS App Icon layout geometry.
 */

// 1. Doodle Desktop / iMac (Home)
export const DoodleDesktopIcon: React.FC = () => (
  <svg viewBox="0 0 60 60" className="h-full w-full">
    <defs>
      <linearGradient id="doodleDeskBg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#F5F5F7" />
      </linearGradient>
    </defs>
    {/* macOS Squircle Shape Reference */}
    <rect width="60" height="60" rx="14" fill="url(#doodleDeskBg)" />
    <rect width="58.5" height="58.5" x="0.75" y="0.75" rx="13.25" fill="none" stroke="#000000" strokeWidth="0.8" strokeOpacity="0.08" />

    {/* Hand-Drawn Monitor & Stand */}
    <g stroke="#18181B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none">
      {/* Screen Frame with slight organic hand-drawn wobble */}
      <path
        d="M14 13.5 C13 13.5, 12 14.5, 12.5 16 L13 33 C13.2 34.5, 14.5 35, 16 35 L44 35 C45.5 35, 46.8 34.5, 47 33 L47.5 16 C47.8 14.5, 46.5 13.5, 45 13.5 Z"
        fill="#E0F2FE"
      />
      {/* Stand Neck */}
      <path d="M26.5 35.5 L24.5 44 L35.5 44 L33.5 35.5" fill="#E2E8F0" />
      {/* Base Foot */}
      <path d="M19 44 C23 43.5, 37 43.5, 41 44" strokeWidth="2.4" />

      {/* Screen Doodle: Hand-drawn smiling sun & horizon */}
      <path d="M16 31 C21 27, 26 28, 30 31 C34 28, 39 28, 44 31" strokeWidth="1.6" stroke="#0284C7" />
      <circle cx="30" cy="22" r="4" fill="#FDE047" stroke="#CA8A04" strokeWidth="1.6" />
      {/* Sun rays */}
      <line x1="30" y1="15.5" x2="30" y2="14" stroke="#CA8A04" strokeWidth="1.4" />
      <line x1="36" y1="18" x2="37.5" y2="17" stroke="#CA8A04" strokeWidth="1.4" />
      <line x1="24" y1="18" x2="22.5" y2="17" stroke="#CA8A04" strokeWidth="1.4" />
    </g>
  </svg>
)

// 2. Doodle macOS Folder (Work & Case Studies)
export const DoodleFolderIcon: React.FC = () => (
  <svg viewBox="0 0 60 60" className="h-full w-full">
    <defs>
      <linearGradient id="doodleFolderBg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#F5F8FF" />
      </linearGradient>
    </defs>
    {/* macOS Squircle Shape */}
    <rect width="60" height="60" rx="14" fill="url(#doodleFolderBg)" />
    <rect width="58.5" height="58.5" x="0.75" y="0.75" rx="13.25" fill="none" stroke="#3B82F6" strokeWidth="0.8" strokeOpacity="0.15" />

    {/* Hand-Drawn Blue Folder */}
    <g stroke="#1E293B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      {/* Back Tab */}
      <path
        d="M12 19 C12 16, 14 15, 17 15 L24 15 C27 15, 29 18, 32 18 L44 18 C47 18, 48 19, 48 22 L48 41 C48 44, 46 45, 43 45 L15 45 C12 45, 11 44, 11 41 Z"
        fill="#93C5FD"
      />
      {/* White Paper Sheet peeking out */}
      <path
        d="M17 14 L39 14 C41 14, 42 15, 42 17 L42 24 L17 24 Z"
        fill="#FFFFFF"
        strokeWidth="1.8"
      />
      {/* Paper scribble lines */}
      <line x1="22" y1="18" x2="34" y2="18" stroke="#94A3B8" strokeWidth="1.4" />
      <line x1="22" y1="21" x2="30" y2="21" stroke="#94A3B8" strokeWidth="1.4" />

      {/* Front Flap with loose hand-drawn angle */}
      <path
        d="M11 25 C11 23, 13 22, 16 22 L45 22 C48 22, 49 23, 49 25 L47 42 C47 44.5, 45 45.5, 42 45.5 L14 45.5 C11 45.5, 10 44, 10 42 Z"
        fill="#3B82F6"
      />
      {/* Folder Crease Scribble */}
      <path d="M15 32 C23 31, 35 31, 43 32" stroke="#1D4ED8" strokeWidth="1.6" fill="none" />
    </g>
  </svg>
)

// 3. Doodle Clapperboard (Watch 4K Showreel)
export const DoodleShowreelIcon: React.FC = () => (
  <svg viewBox="0 0 60 60" className="h-full w-full">
    <defs>
      <linearGradient id="doodleReelBg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#FFF5F5" />
      </linearGradient>
    </defs>
    {/* macOS Squircle Shape */}
    <rect width="60" height="60" rx="14" fill="url(#doodleReelBg)" />
    <rect width="58.5" height="58.5" x="0.75" y="0.75" rx="13.25" fill="none" stroke="#F43F5E" strokeWidth="0.8" strokeOpacity="0.15" />

    {/* Hand-Drawn Clapperboard */}
    <g stroke="#18181B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      {/* Angled Top Clapper Arm (Action!) */}
      <g transform="rotate(-9, 14, 21)">
        <path d="M12 16 L46 16 L46 22 L12 22 Z" fill="#F43F5E" />
        {/* Hand-drawn Zebra Stripes */}
        <line x1="18" y1="16" x2="23" y2="22" stroke="#FFFFFF" strokeWidth="2.2" />
        <line x1="27" y1="16" x2="32" y2="22" stroke="#FFFFFF" strokeWidth="2.2" />
        <line x1="36" y1="16" x2="41" y2="22" stroke="#FFFFFF" strokeWidth="2.2" />
      </g>

      {/* Main Clapper Body */}
      <path
        d="M13 24 L45 24 C47 24, 48 25, 48 27 L47 43 C47 45.5, 45 46.5, 43 46.5 L15 46.5 C13 46.5, 11 45.5, 11 43 L12 27 C12 25, 12.5 24, 13 24 Z"
        fill="#FFE4E6"
      />
      {/* Hand-Drawn Play Triangle in center */}
      <path
        d="M26 31 L35 36.5 L26 42 Z"
        fill="#E11D48"
        stroke="#E11D48"
        strokeWidth="1.5"
      />
    </g>
  </svg>
)

// 4. Doodle Growth, Power & Graphs (Superpowers & Metrics)
export const DoodleGrowthGraphIcon: React.FC = () => (
  <svg viewBox="0 0 60 60" className="h-full w-full">
    <defs>
      <linearGradient id="doodleGrowthBg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#FEF9C3" />
      </linearGradient>
    </defs>
    {/* macOS Squircle Shape */}
    <rect width="60" height="60" rx="14" fill="url(#doodleGrowthBg)" />
    <rect width="58.5" height="58.5" x="0.75" y="0.75" rx="13.25" fill="none" stroke="#EAB308" strokeWidth="0.8" strokeOpacity="0.25" />

    {/* Hand-Drawn Ascending Graph & Power Lightning */}
    <g stroke="#18181B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      {/* 3 Ascending Doodle Bar Charts */}
      {/* Bar 1 */}
      <rect x="13" y="32" width="7" height="13" rx="2" fill="#FEF08A" />
      {/* Bar 2 */}
      <rect x="23" y="24" width="7" height="21" rx="2" fill="#FDE047" />
      {/* Bar 3 */}
      <rect x="33" y="16" width="7" height="29" rx="2" fill="#FACC15" />

      {/* Baseline */}
      <line x1="10" y1="45" x2="48" y2="45" strokeWidth="2.4" />

      {/* Upward Growth Arrow Trend Line */}
      <path
        d="M14 30 L23 22 L33 15 L46 12"
        stroke="#E11D48"
        strokeWidth="2.4"
        fill="none"
      />
      {/* Arrowhead */}
      <path d="M39 11.5 L46.5 11.5 L46.5 19" stroke="#E11D48" strokeWidth="2.4" fill="none" />

      {/* Hand-Drawn Power Lightning Bolt */}
      <polygon
        points="44,23 39,32 44,32 41,41 49,30 44,30"
        fill="#F59E0B"
        stroke="#B45309"
        strokeWidth="1.6"
      />
    </g>
  </svg>
)

// 5. Light-Themed Flaticon Robot (Terminal / AI CLI)
export const DoodleRobotIcon: React.FC = () => (
  <svg viewBox="0 0 60 60" className="h-full w-full">
    <defs>
      <linearGradient id="doodleRobotLightBg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#F5F5F8" />
      </linearGradient>
    </defs>
    {/* macOS Light-Themed Squircle Shape */}
    <rect width="60" height="60" rx="14" fill="url(#doodleRobotLightBg)" />
    <rect width="58.5" height="58.5" x="0.75" y="0.75" rx="13.25" fill="none" stroke="#000000" strokeWidth="0.8" strokeOpacity="0.08" />

    {/* Flaticon Robot Asset (robot_7717267) */}
    <image
      href="/icons/robot.png"
      x="8"
      y="8"
      width="44"
      height="44"
      preserveAspectRatio="xMidYMid meet"
    />
  </svg>
)

// 6. Doodle Paper Plane (Direct Contact)
export const DoodleContactIcon: React.FC = () => (
  <svg viewBox="0 0 60 60" className="h-full w-full">
    <defs>
      <linearGradient id="doodleContactBg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#F0FDF4" />
      </linearGradient>
    </defs>
    {/* macOS Squircle Shape */}
    <rect width="60" height="60" rx="14" fill="url(#doodleContactBg)" />
    <rect width="58.5" height="58.5" x="0.75" y="0.75" rx="13.25" fill="none" stroke="#10B981" strokeWidth="0.8" strokeOpacity="0.2" />

    {/* Hand-Drawn Flying Paper Plane */}
    <g stroke="#18181B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      {/* Dashed flight loop-de-loop trail */}
      <path
        d="M13 44 C8 37, 14 30, 20 35 C24 39, 21 44, 17 41 C13 38, 20 33, 27 27"
        stroke="#10B981"
        strokeWidth="1.8"
        strokeDasharray="2.5 3.5"
        fill="none"
      />

      {/* Paper Airplane Body */}
      <path
        d="M47 13 L24 28 L30 35 L47 13 Z"
        fill="#BBF7D0"
      />
      <path
        d="M47 13 L17 22 L24 28 L47 13 Z"
        fill="#86EFAC"
      />
      {/* Center fold */}
      <line x1="47" y1="13" x2="24" y2="28" stroke="#18181B" strokeWidth="2.2" />
      {/* Underwing flap */}
      <path d="M24 28 L27 38 L30 35" fill="#4ADE80" />
    </g>
  </svg>
)
