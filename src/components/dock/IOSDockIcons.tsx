import React from 'react'

/**
 * Authentic Apple iOS 17 / 18 System App Icons for Dock
 * Vector precision, Apple System Gradients, and iOS continuous squircle geometry.
 */

// 1. iOS Safari (Desktop / Home)
export const IOSSafariIcon: React.FC = () => (
  <svg viewBox="0 0 60 60" className="h-full w-full">
    <defs>
      <linearGradient id="safariBg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#41A3FF" />
        <stop offset="100%" stopColor="#0066D6" />
      </linearGradient>
    </defs>
    {/* iOS Squircle */}
    <rect width="60" height="60" rx="13.5" fill="url(#safariBg)" />
    <rect width="58.5" height="58.5" x="0.75" y="0.75" rx="12.75" fill="none" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.25" />
    
    {/* Compass Dial Face */}
    <circle cx="30" cy="30" r="22" fill="none" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.4" />
    
    {/* Compass Ticks */}
    <g stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.6">
      <line x1="30" y1="9" x2="30" y2="12" />
      <line x1="30" y1="48" x2="30" y2="51" />
      <line x1="9" y1="30" x2="12" y2="30" />
      <line x1="48" y1="30" x2="51" y2="30" />
      <line x1="15" y1="15" x2="17" y2="17" strokeOpacity="0.35" />
      <line x1="45" y1="45" x2="43" y2="43" strokeOpacity="0.35" />
      <line x1="45" y1="15" x2="43" y2="17" strokeOpacity="0.35" />
      <line x1="15" y1="45" x2="17" y2="43" strokeOpacity="0.35" />
    </g>
    
    {/* Angled Red & White Compass Needle */}
    <g transform="rotate(45, 30, 30)">
      {/* Top Half (Red) */}
      <polygon points="30,8 34,30 30,28 26,30" fill="#FF3B30" />
      {/* Bottom Half (White) */}
      <polygon points="30,52 34,30 30,32 26,30" fill="#FFFFFF" />
      {/* Pivot point */}
      <circle cx="30" cy="30" r="2.5" fill="#FFFFFF" />
      <circle cx="30" cy="30" r="1.2" fill="#0066D6" />
    </g>
  </svg>
)

// 2. iOS Files (Work & Case Studies)
export const IOSFilesIcon: React.FC = () => (
  <svg viewBox="0 0 60 60" className="h-full w-full">
    <defs>
      <linearGradient id="filesFolderTab" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#4BB0FE" />
        <stop offset="100%" stopColor="#0B86F4" />
      </linearGradient>
      <linearGradient id="filesFolderBody" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#2593F7" />
        <stop offset="100%" stopColor="#0575E6" />
      </linearGradient>
    </defs>
    {/* Clean White Squircle */}
    <rect width="60" height="60" rx="13.5" fill="#FFFFFF" />
    <rect width="58.5" height="58.5" x="0.75" y="0.75" rx="12.75" fill="none" stroke="#000000" strokeWidth="0.8" strokeOpacity="0.08" />
    
    {/* iOS Blue Folder Glyph */}
    <g transform="translate(10, 13)">
      {/* Back tab */}
      <path
        d="M3 6 C3 3.5, 5 2, 7.5 2 L16.5 2 C19 2, 21 3.5, 22.5 5.5 L36 5.5 C38.5 5.5, 40 7, 40 9.5 L40 28 C40 30.5, 38.5 32, 36 32 L4 32 C1.5 32, 0 30.5, 0 28 L0 9 C0 6.5, 1.5 6, 3 6 Z"
        fill="url(#filesFolderTab)"
      />
      {/* Paper insert */}
      <rect x="5" y="4.5" width="30" height="16" rx="2" fill="#FFFFFF" opacity="0.9" />
      {/* Front flap */}
      <path
        d="M0 11.5 C0 10, 2 9, 4.5 9 L35.5 9 C38 9, 40 10, 40 11.5 L40 28 C40 30.5, 38.5 32, 36 32 L4 32 C1.5 32, 0 30.5, 0 28 Z"
        fill="url(#filesFolderBody)"
      />
      <circle cx="20" cy="20.5" r="3.5" fill="#FFFFFF" opacity="0.25" />
    </g>
  </svg>
)

// 3. iOS Camera (Watch 4K Showreel / Video)
export const IOSCameraIcon: React.FC = () => (
  <svg viewBox="0 0 60 60" className="h-full w-full">
    <defs>
      <linearGradient id="camBody" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#4A4A4D" />
        <stop offset="100%" stopColor="#252528" />
      </linearGradient>
      <linearGradient id="lensRing" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#2E2E31" />
        <stop offset="100%" stopColor="#141416" />
      </linearGradient>
      <linearGradient id="glassReflect" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.8" />
        <stop offset="50%" stopColor="#0284C7" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#0369A1" stopOpacity="0.1" />
      </linearGradient>
    </defs>
    {/* Dark Titanium Squircle */}
    <rect width="60" height="60" rx="13.5" fill="url(#camBody)" />
    <rect width="58.5" height="58.5" x="0.75" y="0.75" rx="12.75" fill="none" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.2" />
    
    {/* Camera Outer Lens Ring */}
    <circle cx="30" cy="30" r="18" fill="url(#lensRing)" stroke="#52525B" strokeWidth="1" />
    {/* Mid Ring */}
    <circle cx="30" cy="30" r="14" fill="#0F0F12" />
    {/* Glass Reflection */}
    <circle cx="30" cy="30" r="10" fill="url(#glassReflect)" />
    {/* Core Sensor Dot */}
    <circle cx="30" cy="30" r="5" fill="#000000" />
    <circle cx="28" cy="28" r="1.8" fill="#FFFFFF" opacity="0.7" />
    
    {/* Flash & Sensor */}
    <circle cx="43" cy="17" r="2.8" fill="#FBBF24" opacity="0.9" />
    <circle cx="17" cy="17" r="1.5" fill="#71717A" />
  </svg>
)

// 4. iOS Shortcuts (Superpowers & Metrics)
export const IOSShortcutsIcon: React.FC = () => (
  <svg viewBox="0 0 60 60" className="h-full w-full">
    <defs>
      <linearGradient id="shortcutsPink" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#FF375F" />
        <stop offset="100%" stopColor="#E0115F" />
      </linearGradient>
      <linearGradient id="shortcutsCyan" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#00C7BE" />
        <stop offset="100%" stopColor="#0A84FF" />
      </linearGradient>
    </defs>
    {/* Dark Space Squircle Base */}
    <rect width="60" height="60" rx="13.5" fill="#1C1C1E" />
    <rect width="58.5" height="58.5" x="0.75" y="0.75" rx="12.75" fill="none" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.15" />
    
    {/* Shortcuts Overlapping Diamonds */}
    <g transform="translate(14, 14)">
      {/* Cyan Diamond (Bottom-Left) */}
      <rect x="0" y="8" width="22" height="22" rx="7" transform="rotate(-45 11 19)" fill="url(#shortcutsCyan)" />
      {/* Pink Diamond (Top-Right) */}
      <rect x="10" y="-2" width="22" height="22" rx="7" transform="rotate(-45 21 9)" fill="url(#shortcutsPink)" opacity="0.92" />
    </g>
  </svg>
)

// 5. iOS Terminal (CLI Suite)
export const IOSTerminalIcon: React.FC = () => (
  <svg viewBox="0 0 60 60" className="h-full w-full">
    <defs>
      <linearGradient id="termBg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#2C2C2E" />
        <stop offset="100%" stopColor="#121214" />
      </linearGradient>
    </defs>
    <rect width="60" height="60" rx="13.5" fill="url(#termBg)" />
    <rect width="58.5" height="58.5" x="0.75" y="0.75" rx="12.75" fill="none" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.18" />
    
    {/* Terminal Screen Shell */}
    <rect x="7" y="7" width="46" height="46" rx="8" fill="#000000" />
    {/* Prompt >_ */}
    <g transform="translate(13, 14)">
      <path d="M4 6 L12 14 L4 22" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <line x1="16" y1="22" x2="28" y2="22" stroke="#34C759" strokeWidth="3.2" strokeLinecap="round" />
    </g>
  </svg>
)

// 6. iOS Messages (Direct Contact)
export const IOSMessagesIcon: React.FC = () => (
  <svg viewBox="0 0 60 60" className="h-full w-full">
    <defs>
      <linearGradient id="messagesBg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#3CD664" />
        <stop offset="100%" stopColor="#24B34C" />
      </linearGradient>
    </defs>
    {/* Vibrant Apple Green Squircle */}
    <rect width="60" height="60" rx="13.5" fill="url(#messagesBg)" />
    <rect width="58.5" height="58.5" x="0.75" y="0.75" rx="12.75" fill="none" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.25" />
    
    {/* Apple Messages Speech Bubble */}
    <g transform="translate(11, 14)">
      <path
        d="M19 0 C29.5 0, 38 6.7, 38 15 C38 23.3, 29.5 30, 19 30 C16.5 30, 14 29.4, 11.8 28.3 C8.2 30.6, 3.8 31.4, 0 31.5 C1.8 28.8, 3.2 25.8, 3.5 22.8 C1.3 20.6, 0 17.9, 0 15 C0 6.7, 8.5 0, 19 0 Z"
        fill="#FFFFFF"
      />
    </g>
  </svg>
)
