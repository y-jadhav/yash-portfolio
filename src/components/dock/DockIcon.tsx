import React, { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform, MotionValue } from 'framer-motion'

interface DockIconProps {
  label: string
  icon: React.ReactNode
  onClick: () => void
  mouseX: MotionValue<number>
  badge?: string
  active?: boolean
}

const DOCK_ICON_SIZE = 44
const DOCK_ICON_HOVER_SIZE = 68
const MAGNIFICATION_RADIUS = 140

export const DockIcon: React.FC<DockIconProps> = ({
  label,
  icon,
  onClick,
  mouseX,
  badge,
  active = false,
}) => {
  const ref = useRef<HTMLDivElement>(null)

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect()
    return bounds ? val - (bounds.left + bounds.width / 2) : Infinity
  })

  const widthTransform = useTransform(
    distance,
    [-MAGNIFICATION_RADIUS, 0, MAGNIFICATION_RADIUS],
    [DOCK_ICON_SIZE, DOCK_ICON_HOVER_SIZE, DOCK_ICON_SIZE]
  )

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 180,
    damping: 13,
  })

  return (
    <motion.div
      ref={ref}
      style={{ width, height: width }}
      onClick={onClick}
      className="group relative flex aspect-square items-center justify-center cursor-pointer select-none"
    >
      <div className="flex h-full w-full items-center justify-center drop-shadow-[0_4px_10px_rgba(0,0,0,0.18)] transition-all duration-150 group-hover:brightness-105 group-active:scale-95">
        {icon}
      </div>

      {badge && (
        <span className="absolute -top-1 -right-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#ef4444] px-1 text-[8px] font-bold text-white shadow ring-1 ring-white">
          {badge}
        </span>
      )}

      {/* Active running app indicator dot */}
      {active && (
        <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-neutral-800" />
      )}

      {/* Tooltip (Desktop only to prevent sticky touch overlays on mobile) */}
      <span className="hidden sm:block pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-neutral-900/90 px-2 py-0.5 text-[10px] font-medium text-white opacity-0 shadow-lg backdrop-blur-sm transition-opacity group-hover:opacity-100 z-50">
        {label}
      </span>
    </motion.div>
  )
}
