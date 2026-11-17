import React from 'react'

interface CalendarWidgetProps {
  onOpenBooking?: () => void
}

export const CalendarWidget: React.FC<CalendarWidgetProps> = ({ onOpenBooking }) => {
  const today = new Date()
  const weekday = today.toLocaleDateString('en-US', { weekday: 'long' })
  const dayNumber = today.getDate()

  const year = today.getFullYear()
  const month = today.getMonth()
  const firstDay = new Date(year, month, 1).getDay()
  const totalDays = new Date(year, month + 1, 0).getDate()

  const weekdaysHeader = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

  return (
    <div
      onClick={onOpenBooking}
      title="Book a meeting"
      className="group relative flex h-[140px] w-[140px] sm:h-[150px] sm:w-[150px] cursor-pointer flex-col justify-start rounded-2xl border border-white/60 bg-white/80 p-3 sm:p-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_8px_32px_rgba(0,0,0,0.08)] backdrop-blur-2xl transition-all duration-200 hover:shadow-[0_12px_36px_rgba(0,0,0,0.12)] select-none"
    >
      {/* Weekday name */}
      <p
        className="text-[9px] font-bold uppercase tracking-[0.06em]"
        style={{ color: '#FF3700' }}
      >
        {weekday}
      </p>

      {/* Date Number */}
      <p className="text-[22px] font-semibold leading-none tracking-tight text-neutral-900 mt-0.5">
        {dayNumber}
      </p>

      {/* Monthly Calendar Grid */}
      <div className="mt-1 grid grid-cols-7 gap-x-[3px] gap-y-[1.5px] text-center text-[7.5px] leading-[10px] text-black/50">
        {/* Weekday Column Headers */}
        {weekdaysHeader.map((d, idx) => (
          <span key={idx} className="font-semibold text-black/30">
            {d}
          </span>
        ))}

        {/* Empty cells before 1st of month */}
        {Array.from({ length: firstDay }).map((_, idx) => (
          <span key={`empty-${idx}`} />
        ))}

        {/* Month Day Numbers */}
        {Array.from({ length: totalDays }).map((_, idx) => {
          const day = idx + 1
          const isToday = day === dayNumber

          return (
            <span
              key={day}
              className={
                isToday
                  ? 'mx-auto flex h-[11px] w-[11px] items-center justify-center rounded-full bg-black font-semibold text-white'
                  : ''
              }
            >
              {day}
            </span>
          )
        })}
      </div>
    </div>
  )
}
