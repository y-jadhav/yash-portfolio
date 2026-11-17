import React from 'react'

interface AppLauncherProps {
  onOpenTerminal?: () => void
  onOpenReel: () => void
  onPlayVideo?: (videoSrc: string, title: string) => void
  onOpenCaseStudyWithAsset?: (studyId: string, galleryIdx?: number) => void
}

export const AppLauncher: React.FC<AppLauncherProps> = ({
  onOpenReel,
  onPlayVideo,
  onOpenCaseStudyWithAsset,
}) => {
  const apps = [
    // Row 1: Core Post-Production & Motion
    {
      id: 'pr',
      name: 'Adobe Premiere Pro',
      tag: 'Shubham Rode Reel',
      action: () => {
        if (onPlayVideo) {
          onPlayVideo('/videos/shubham-rode-reel.mp4', 'Shubham Rode: Personal Brand Reel')
        } else {
          onOpenReel()
        }
      },
      icon: (
        <svg viewBox="0 0 48 48" className="h-full w-full">
          <rect width="48" height="48" rx="11" fill="#00005B" />
          <rect width="46" height="46" x="1" y="1" rx="10" fill="none" stroke="#9999FF" strokeWidth="1.2" strokeOpacity="0.3" />
          <text x="14" y="32" fontFamily="sans-serif" fontSize="20" fontWeight="800" fill="#9999FF" letterSpacing="-0.5">P</text>
          <text x="27" y="32" fontFamily="sans-serif" fontSize="20" fontWeight="700" fill="#9999FF" letterSpacing="-0.5">r</text>
        </svg>
      ),
    },
    {
      id: 'ae',
      name: 'Adobe After Effects',
      tag: 'Poligram Explainer',
      action: () => {
        if (onPlayVideo) {
          onPlayVideo('/videos/poligram-delimitation.mp4', 'Poligram Explainer: Delimitation Changes')
        } else {
          onOpenReel()
        }
      },
      icon: (
        <svg viewBox="0 0 48 48" className="h-full w-full">
          <rect width="48" height="48" rx="11" fill="#1F003B" />
          <rect width="46" height="46" x="1" y="1" rx="10" fill="none" stroke="#D291FF" strokeWidth="1.2" strokeOpacity="0.3" />
          <text x="13" y="32" fontFamily="sans-serif" fontSize="20" fontWeight="800" fill="#D291FF" letterSpacing="-0.5">A</text>
          <text x="27" y="32" fontFamily="sans-serif" fontSize="20" fontWeight="700" fill="#D291FF" letterSpacing="-0.5">e</text>
        </svg>
      ),
    },
    {
      id: 'ps',
      name: 'Adobe Photoshop',
      tag: 'Ciper Report Cover',
      action: () => {
        if (onOpenCaseStudyWithAsset) {
          onOpenCaseStudyWithAsset('ciper-analytics', 2)
        } else {
          onOpenReel()
        }
      },
      icon: (
        <svg viewBox="0 0 48 48" className="h-full w-full">
          <rect width="48" height="48" rx="11" fill="#001E36" />
          <rect width="46" height="46" x="1" y="1" rx="10" fill="none" stroke="#31A8FF" strokeWidth="1.2" strokeOpacity="0.3" />
          <text x="14" y="32" fontFamily="sans-serif" fontSize="20" fontWeight="800" fill="#31A8FF" letterSpacing="-0.5">P</text>
          <text x="27" y="32" fontFamily="sans-serif" fontSize="20" fontWeight="700" fill="#31A8FF" letterSpacing="-0.5">s</text>
        </svg>
      ),
    },

    // Row 2: Vector Design & Social Distribution
    {
      id: 'ai',
      name: 'Adobe Illustrator',
      tag: 'Budget Carousel',
      action: () => {
        if (onOpenCaseStudyWithAsset) {
          onOpenCaseStudyWithAsset('ciper-analytics', 3)
        } else {
          onOpenReel()
        }
      },
      icon: (
        <svg viewBox="0 0 48 48" className="h-full w-full">
          <rect width="48" height="48" rx="11" fill="#330000" />
          <rect width="46" height="46" x="1" y="1" rx="10" fill="none" stroke="#FF9A00" strokeWidth="1.2" strokeOpacity="0.3" />
          <text x="14" y="32" fontFamily="sans-serif" fontSize="20" fontWeight="800" fill="#FF9A00" letterSpacing="-0.5">A</text>
          <text x="28" y="32" fontFamily="sans-serif" fontSize="20" fontWeight="700" fill="#FF9A00" letterSpacing="-0.5">i</text>
        </svg>
      ),
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      tag: 'Professional Network',
      action: () => window.open('https://www.linkedin.com/in/yashjadhav-yj/', '_blank'),
      icon: (
        <svg viewBox="0 0 48 48" className="h-full w-full">
          <rect width="48" height="48" rx="11" fill="#0A66C2" />
          <rect width="46" height="46" x="1" y="1" rx="10" fill="none" stroke="#084E96" strokeWidth="1" />
          <path
            fill="#FFFFFF"
            d="M17.5 15.5a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zM13.25 19.5h4.25V33h-4.25V19.5zm6.75 0h4.08v1.85h.06c.57-1.08 1.96-2.22 4.04-2.22 4.32 0 5.12 2.84 5.12 6.54V33h-4.25v-6.53c0-1.56-.03-3.56-2.17-3.56-2.17 0-2.5 1.7-2.5 3.45V33H20V19.5z"
          />
        </svg>
      ),
    },
    {
      id: 'youtube',
      name: 'YouTube',
      tag: 'JNPA Port Visit',
      action: () => {
        if (onPlayVideo) {
          onPlayVideo('/videos/jnpa-yt-video.mp4', 'JNPA Port Visit: EXIM Practical Learning')
        } else {
          onOpenReel()
        }
      },
      icon: (
        <svg viewBox="0 0 48 48" className="h-full w-full">
          <rect width="48" height="48" rx="11" fill="#FF0000" />
          <rect width="46" height="46" x="1" y="1" rx="10" fill="none" stroke="#D60000" strokeWidth="1" />
          <path
            fill="#FFFFFF"
            d="M34.5 19.2a3.8 3.8 0 0 0-2.7-2.7C29.4 16 24 16 24 16s-5.4 0-7.8.5a3.8 3.8 0 0 0-2.7 2.7C13 21.6 13 24 13 24s0 2.4.5 4.8a3.8 3.8 0 0 0 2.7 2.7c2.4.5 7.8.5 7.8.5s5.4 0 7.8-.5a3.8 3.8 0 0 0 2.7-2.7c.5-2.4.5-4.8.5-4.8s0-2.4-.5-4.8zM21.5 28v-8l7 4-7 4z"
          />
        </svg>
      ),
    },
  ]

  return (
    <>
      {/* Desktop Floating Widget (>= lg): Positioned bottom-right above dock */}
      <div className="absolute bottom-[115px] lg:bottom-[120px] [@media(max-height:860px)]:bottom-[80px] right-6 lg:right-10 xl:right-12 z-20 hidden lg:block select-none [@media(max-height:860px)]:scale-90 origin-bottom-right transition-all duration-150">
        <div className="rounded-2xl border border-white/60 bg-white/70 p-2.5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_12px_36px_rgba(0,0,0,0.08)] backdrop-blur-2xl">
          <div className="mb-2 flex items-center justify-between px-1">
            <span className="font-mono text-[9px] font-bold tracking-wider text-neutral-400 uppercase">
              Production Tools
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          </div>
          <div className="grid grid-cols-3 gap-2">
            {apps.map((app) => (
              <button
                key={app.id}
                onClick={app.action}
                title={`${app.name} (${app.tag})`}
                className="group relative flex h-11 w-11 items-center justify-center rounded-xl p-0.5 shadow-sm transition-all duration-150 hover:-translate-y-1 hover:shadow-md active:scale-95"
              >
                {app.icon}

                {/* Tooltip on hover */}
                <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-neutral-900 px-2 py-0.5 text-[9px] font-medium text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100 z-50">
                  {app.name} • {app.tag}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Inline Section (< lg): Visible in document flow before dock */}
      <div className="flex lg:hidden flex-col items-center w-full px-3 pt-2 pb-6 z-10 select-none">
        <div className="w-full max-w-[320px] rounded-2xl border border-white/80 bg-white/75 p-3.5 shadow-[0_8px_24px_rgba(0,0,0,0.06),inset_0_1px_1px_rgba(255,255,255,0.9)] backdrop-blur-xl">
          <div className="mb-2.5 flex items-center justify-between px-1">
            <span className="font-mono text-[10px] font-bold tracking-wider text-neutral-500 uppercase">
              Production Tools
            </span>
            <div className="flex items-center gap-1.5">
              <span className="text-[9px] font-mono text-emerald-700 font-semibold">Active</span>
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2.5 justify-items-center">
            {apps.map((app) => (
              <button
                key={app.id}
                onClick={app.action}
                aria-label={`${app.name} - ${app.tag}`}
                className="group flex flex-col items-center justify-center gap-1 rounded-xl p-1 transition-transform active:scale-95 w-full"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl shadow-sm transition-all group-active:scale-90">
                  {app.icon}
                </div>
                <span className="text-[9.5px] font-medium text-neutral-700 text-center truncate max-w-[76px]">
                  {app.name.replace('Adobe ', '')}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}