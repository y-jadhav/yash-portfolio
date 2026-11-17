import React, { useId } from 'react'

interface DesktopFolderProps {
  name: string
  onClick: () => void
  isOpen?: boolean
}

export const DesktopFolder: React.FC<DesktopFolderProps> = ({
  name,
  onClick,
  isOpen = false,
}) => {
  const rawId = useId()
  const uniqueId = rawId.replace(/[^a-zA-Z0-9]/g, '')
  const tabGradId = `folderTab_${uniqueId}`
  const bodyGradId = `folderBody_${uniqueId}`

  return (
    <div
      onClick={onClick}
      className={`group flex w-[86px] flex-col items-center rounded-xl p-1 transition-all duration-150 cursor-pointer select-none ${
        isOpen ? 'bg-black/10 ring-1 ring-[#57A4F0]' : 'hover:bg-white/40 active:bg-white/60'
      }`}
    >
      {/* Authentic macOS Folder Icon (Identical across all folders, no bubbles) */}
      <div className="relative h-10 w-12 transition-transform duration-150 group-hover:scale-105 group-active:scale-95">
        <svg viewBox="0 0 100 80" className="h-full w-full drop-shadow-[0_4px_8px_rgba(0,0,0,0.14)]">
          <defs>
            <linearGradient id={tabGradId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#87C7FF" />
              <stop offset="100%" stopColor="#4AA2F2" />
            </linearGradient>
            <linearGradient id={bodyGradId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#68B4F8" />
              <stop offset="100%" stopColor="#2B8AE8" />
            </linearGradient>
          </defs>
          {/* Back tab */}
          <path
            d="M8 14 C8 8, 12 6, 18 6 L38 6 C44 6, 48 10, 52 14 L88 14 C94 14, 98 18, 98 24 L98 68 C98 74, 94 78, 88 78 L12 78 C6 78, 2 74, 2 68 L2 20 C2 14, 6 14, 8 14 Z"
            fill={`url(#${tabGradId})`}
          />
          {/* Inner paper sheet */}
          <rect x="14" y="14" width="72" height="40" rx="3" fill="#ffffff" opacity="0.9" />
          {/* Front flap */}
          <path
            d="M2 28 C2 24, 6 22, 12 22 L88 22 C94 22, 98 24, 98 28 L98 68 C98 74, 94 78, 88 78 L12 78 C6 78, 2 74, 2 68 Z"
            fill={`url(#${bodyGradId})`}
          />
          {/* Embossed subtle symbol */}
          <circle cx="50" cy="50" r="9" fill="#ffffff" opacity="0.3" />
        </svg>
      </div>

      {/* Folder Name Label */}
      <span className="mt-1.5 line-clamp-2 text-center font-sans text-[11px] font-semibold tracking-tight text-neutral-800 drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)] group-hover:text-black">
        {name}
      </span>
    </div>
  )
}
