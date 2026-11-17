import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface DraggableWidgetProps {
  children: ReactNode
  className?: string
  style?: React.CSSProperties
  initial?: { x?: number; y?: number }
  zIndex?: number
}

export const DraggableWidget: React.FC<DraggableWidgetProps> = ({
  children,
  className = '',
  style,
  zIndex = 20,
}) => {
  return (
    <motion.div
      drag
      dragMomentum={false}
      dragElastic={0.08}
      whileDrag={{ scale: 1.02, zIndex: 40 }}
      className={`cursor-grab active:cursor-grabbing select-none touch-none ${className}`}
      style={{
        zIndex,
        ...style,
      }}
    >
      {children}
    </motion.div>
  )
}
