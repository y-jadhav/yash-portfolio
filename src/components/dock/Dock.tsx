import React from 'react'
import { useMotionValue } from 'framer-motion'
import { DockIcon } from './DockIcon'
import {
  DoodleDesktopIcon,
  DoodleFolderIcon,
  DoodleShowreelIcon,
  DoodleGrowthGraphIcon,
  DoodleRobotIcon,
  DoodleContactIcon,
} from './DoodleDockIcons'

interface DockProps {
  onGoHome: () => void
  onOpenWork: () => void
  onOpenReel: () => void
  onOpenAchievements: () => void
  onOpenTerminal: () => void
  onOpenContact: () => void
  activeSection?: string
  terminalOpen?: boolean
  reelOpen?: boolean
}

export const Dock: React.FC<DockProps> = ({
  onGoHome,
  onOpenWork,
  onOpenReel,
  onOpenAchievements,
  onOpenTerminal,
  onOpenContact,
  terminalOpen = false,
  reelOpen = false,
}) => {
  const mouseX = useMotionValue(Infinity)

  return (
    <nav
      className="fixed bottom-3.5 sm:bottom-6 left-1/2 z-40 -translate-x-1/2 flex items-center gap-1.5 sm:gap-2.5 rounded-2xl border border-white/70 bg-white/60 px-2.5 sm:px-3 py-1.5 sm:py-2 shadow-[0_20px_50px_rgba(0,0,0,0.12),inset_0_1px_1px_rgba(255,255,255,0.9)] backdrop-blur-2xl transition-all max-w-[calc(100vw-1.5rem)] touch-manipulation"
      onMouseMove={(e) => mouseX.set(e.clientX)}
      onMouseLeave={() => mouseX.set(Infinity)}
    >
      {/* 1. Desktop / Home (Doodle iMac) */}
      <DockIcon
        label="Desktop"
        mouseX={mouseX}
        onClick={onGoHome}
        icon={<DoodleDesktopIcon />}
      />

      {/* 2. Work / Projects (Doodle macOS Folder) */}
      <DockIcon
        label="Work & Case Studies"
        mouseX={mouseX}
        onClick={onOpenWork}
        icon={<DoodleFolderIcon />}
      />

      {/* 3. Watch Showreel (Doodle Clapperboard) */}
      <DockIcon
        label="Watch 4K Showreel"
        mouseX={mouseX}
        onClick={onOpenReel}
        active={reelOpen}
        icon={<DoodleShowreelIcon />}
      />

      {/* 4. Superpowers & Growth Metrics (Doodle Graph & Lightning) */}
      <DockIcon
        label="Growth & Metrics"
        mouseX={mouseX}
        onClick={onOpenAchievements}
        icon={<DoodleGrowthGraphIcon />}
      />

      {/* Divider */}
      <div className="h-7 w-[1px] bg-black/10 mx-0.5" />

      {/* 5. Terminal / AI Robot CLI (Doodle Light Robot) */}
      <DockIcon
        label="AI Terminal"
        mouseX={mouseX}
        onClick={onOpenTerminal}
        active={terminalOpen}
        icon={<DoodleRobotIcon />}
      />

      {/* 6. Direct Contact (Doodle Paper Plane) */}
      <DockIcon
        label="Direct Contact"
        mouseX={mouseX}
        onClick={onOpenContact}
        icon={<DoodleContactIcon />}
      />
    </nav>
  )
}
