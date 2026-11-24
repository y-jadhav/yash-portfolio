import React from 'react'

interface PortraitWidgetProps {
  onClick?: () => void
}

export const PortraitWidget: React.FC<PortraitWidgetProps> = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      title="Click to view profile & enlarged photo"
      className="group relative flex h-[140px] w-[140px] sm:h-[150px] sm:w-[150px] flex-col items-center justify-between overflow-hidden rounded-3xl border border-white/70 bg-white/80 p-2 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_10px_25px_rgba(0,0,0,0.06)] backdrop-blur-xl transition-all duration-200 hover:shadow-[0_16px_32px_rgba(0,0,0,0.1)] cursor-pointer select-none"
    >
      {/* Photo with inner border and gentle scale */}
      <div className="relative h-[96px] sm:h-[106px] w-full overflow-hidden rounded-2xl bg-neutral-100">
        <img
          src="/yash-portrait.jpg"
          alt="Yash Jadhav - Senior Video Editor"
          className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/10" />
      </div>

      {/* Caption bar */}
      <div className="w-full text-center py-0.5">
        <p className="truncate text-[9.5px] font-bold text-neutral-800">Yash Jadhav</p>
        <p className="truncate text-[8px] text-neutral-400 font-medium">Senior Video Editor</p>
      </div>
    </div>
  )
}
