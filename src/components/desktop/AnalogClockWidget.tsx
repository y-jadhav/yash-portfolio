import React, { useEffect, useState } from 'react'

export const AnalogClockWidget: React.FC = () => {
  const [time, setTime] = useState(new Date())
  const [city, setCity] = useState<'PUNE' | 'MIAMI' | 'TOKYO'>('PUNE')

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  const hours = time.getHours() % 12
  const minutes = time.getMinutes()
  const seconds = time.getSeconds()

  const hourDeg = hours * 30 + minutes * 0.5
  const minuteDeg = minutes * 6 + seconds * 0.1
  const secondDeg = seconds * 6

  const hand = (deg: number, length: number) => ({
    x2: 50 + length * Math.sin((deg * Math.PI) / 180),
    y2: 50 - length * Math.cos((deg * Math.PI) / 180),
  })

  const h = hand(hourDeg, 24)
  const m = hand(minuteDeg, 32)
  const s = hand(secondDeg, 36)

  const toggleCity = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCity((prev) => (prev === 'PUNE' ? 'MIAMI' : prev === 'MIAMI' ? 'TOKYO' : 'PUNE'))
  }

  return (
    <div
      onClick={toggleCity}
      title="Click to toggle city time zone"
      className="group relative flex h-[140px] w-[140px] sm:h-[150px] sm:w-[150px] flex-col items-center justify-center rounded-3xl border border-white/60 bg-white/80 p-3 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_10px_25px_rgba(0,0,0,0.06)] backdrop-blur-xl transition-all duration-200 hover:shadow-[0_16px_32px_rgba(0,0,0,0.1)]"
    >
      <svg className="h-full w-full" viewBox="0 0 100 100">
        {/* Hour markers */}
        {Array.from({ length: 12 }, (_, i) => {
          const angle = (i * 30 * Math.PI) / 180
          const isMajor = i % 3 === 0
          return (
            <line
              key={i}
              x1={50 + (isMajor ? 40 : 42) * Math.sin(angle)}
              y1={50 - (isMajor ? 40 : 42) * Math.cos(angle)}
              x2={50 + 46 * Math.sin(angle)}
              y2={50 - 46 * Math.cos(angle)}
              stroke={isMajor ? '#737373' : '#d4d4d4'}
              strokeWidth={isMajor ? 2 : 1.2}
              strokeLinecap="round"
            />
          )
        })}

        {/* Dial label */}
        <text
          x="50"
          y="34"
          textAnchor="middle"
          className="font-mono font-bold select-none"
          fontSize="5"
          fill="#737373"
          letterSpacing="1.2"
        >
          AUTOMATIC
        </text>

        {/* Digital subtext */}
        <text
          x="50"
          y="68"
          textAnchor="middle"
          className="font-mono font-medium select-none"
          fontSize="4.5"
          fill="#a3a3a3"
        >
          {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </text>

        {/* Hour hand */}
        <line x1="50" y1="50" x2={h.x2} y2={h.y2} stroke="#171717" strokeWidth="3" strokeLinecap="round" />
        {/* Minute hand */}
        <line x1="50" y1="50" x2={m.x2} y2={m.y2} stroke="#171717" strokeWidth="2.4" strokeLinecap="round" />
        {/* Second hand */}
        <line x1="50" y1="50" x2={s.x2} y2={s.y2} stroke="#ef4444" strokeWidth="1.2" strokeLinecap="round" />
        {/* Center pin */}
        <circle cx="50" cy="50" r="2.5" fill="#171717" />
        <circle cx="50" cy="50" r="1" fill="#ef4444" />
      </svg>
    </div>
  )
}
