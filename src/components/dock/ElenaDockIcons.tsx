import React from 'react'

/**
 * Pixel-perfect Dock Icons matching Elena Gonci's macOS / iOS dock reference
 * (white continuous squircles with clean, vibrant iconography).
 */

const SQUIRCLE_PATH =
  'M 15 0 C 4.5 0 0 4.5 0 15 L 0 45 C 0 55.5 4.5 60 15 60 L 45 60 C 55.5 60 60 55.5 60 45 L 60 15 C 60 4.5 55.5 0 45 0 Z'

// Base White Squircle Tile
const SquircleTile: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <svg viewBox="0 0 60 60" className="h-full w-full select-none" fill="none">
    <defs>
      <filter id="tileShadow" x="-15%" y="-15%" width="130%" height="130%">
        <feDropShadow dx="0" dy="1.5" stdDeviation="2.5" floodColor="#000000" floodOpacity="0.08" />
        <feDropShadow dx="0" dy="0.5" stdDeviation="0.5" floodColor="#000000" floodOpacity="0.04" />
      </filter>
      <linearGradient id="tileBorderGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#000000" stopOpacity="0.06" />
      </linearGradient>
    </defs>
    {/* Squircle Background Tile */}
    <rect
      x="1"
      y="1"
      width="58"
      height="58"
      rx="15"
      fill="#FFFFFF"
      filter="url(#tileShadow)"
    />
    <rect
      x="1"
      y="1"
      width="58"
      height="58"
      rx="15"
      fill="none"
      stroke="url(#tileBorderGrad)"
      strokeWidth="0.75"
    />
    {children}
  </svg>
)

// 1. Desktop / Home (Dark circular badge with white display monitor)
export const ElenaDesktopIcon: React.FC = () => (
  <SquircleTile>
    {/* Dark circular badge */}
    <circle cx="30" cy="30" r="16" fill="#1C1C1E" />
    
    {/* White Display Monitor Frame */}
    <rect
      x="20.5"
      y="20.5"
      width="19"
      height="13.5"
      rx="2"
      fill="none"
      stroke="#FFFFFF"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Monitor Stand */}
    <path
      d="M30 34 L30 38.5 M26 38.5 L34 38.5"
      stroke="#FFFFFF"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
  </SquircleTile>
)

// 2. Work / Projects (Clean Sky-Blue macOS Folder)
export const ElenaFolderIcon: React.FC = () => (
  <SquircleTile>
    <g transform="translate(13.5, 16.5)">
      {/* Folder Back Tab & Body */}
      <path
        d="M3 4.5 C3 2.8 4.2 1.5 5.8 1.5 L12.5 1.5 C14.2 1.5 15.5 2.5 16.3 3.8 L17.5 5.5 C18 6.2 18.8 6.6 19.6 6.6 L27.2 6.6 C28.8 6.6 30 7.8 30 9.5 L30 22.5 C30 24.2 28.8 25.5 27.2 25.5 L5.8 25.5 C4.2 25.5 3 24.2 3 22.5 Z"
        fill="#DCEBFA"
        stroke="#3B82F6"
        strokeWidth="2.8"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </g>
  </SquircleTile>
)

// 3. Watch Showreel (Clean Red Filmstrip)
export const ElenaShowreelIcon: React.FC = () => (
  <SquircleTile>
    <g stroke="#EF4444" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" fill="none">
      {/* Filmstrip Frame */}
      <rect x="16" y="15" width="28" height="30" rx="4.5" />
      
      {/* Middle horizontal bar dividing frames */}
      <line x1="22.5" y1="30" x2="37.5" y2="30" />
      
      {/* Vertical divider tracks */}
      <line x1="22.5" y1="15" x2="22.5" y2="45" />
      <line x1="37.5" y1="15" x2="37.5" y2="45" />

      {/* Sprocket teeth notches left & right */}
      <line x1="16" y1="22" x2="22.5" y2="22" />
      <line x1="16" y1="38" x2="22.5" y2="38" />
      <line x1="37.5" y1="22" x2="44" y2="22" />
      <line x1="37.5" y1="38" x2="44" y2="38" />
    </g>
  </SquircleTile>
)

// 4. Superpowers / Growth (Clean Orange Sparkle Star + Dot)
export const ElenaSparkleIcon: React.FC = () => (
  <SquircleTile>
    <g fill="#F59E0B" stroke="#F59E0B">
      {/* Main 4-point curved sparkle */}
      <path
        d="M31 16 C31.5 22.5 34.5 26.5 41 27 C34.5 27.5 31.5 31.5 31 38 C30.5 31.5 27.5 27.5 21 27 C27.5 26.5 30.5 22.5 31 16 Z"
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      {/* Satellite circular dot (bottom left) */}
      <circle cx="21" cy="38" r="3.2" stroke="none" />
      {/* Small top-right star cross */}
      <path
        d="M40 18 L40 23 M37.5 20.5 L42.5 20.5"
        stroke="#F59E0B"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </g>
  </SquircleTile>
)

// 5. AI Terminal Robot (User's Flaticon Robot on White Squircle)
export const ElenaRobotIcon: React.FC = () => (
  <SquircleTile>
    <image
      href="/icons/robot.png"
      x="11"
      y="11"
      width="38"
      height="38"
      preserveAspectRatio="xMidYMid meet"
    />
  </SquircleTile>
)

// 6. Direct Contact (Clean Purple / Indigo Rounded Mail Envelope)
export const ElenaContactIcon: React.FC = () => (
  <SquircleTile>
    <g stroke="#6366F1" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" fill="none">
      {/* Rounded Envelope Body */}
      <rect x="15" y="19" width="30" height="22" rx="4" />
      {/* Envelope V Flap */}
      <path d="M16.5 21.5 L30 31.5 L43.5 21.5" />
    </g>
  </SquircleTile>
)
