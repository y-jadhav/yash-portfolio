import React, { useEffect, useState } from 'react'

export const MenuBar: React.FC = () => {
  const [dateTime, setDateTime] = useState('')
  const [timeOnly, setTimeOnly] = useState('')
  const [dateOnly, setDateOnly] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)

  const roles = [
    'Senior Video Editor',
    'Short-Form & Motion Graphics',
    'AI Video Production',
  ]

  useEffect(() => {
    const update = () => {
      const now = new Date()
      const day = String(now.getDate()).padStart(2, '0')
      const month = now.toLocaleDateString('en-US', { month: 'short' })

      const hours = String(now.getHours()).padStart(2, '0')
      const minutes = String(now.getMinutes()).padStart(2, '0')

      // dd mmm format with 24hr time (e.g. 15 Nov  09:38)
      setDateTime(`${day} ${month}  ${hours}:${minutes}`)
      setDateOnly(`${day} ${month}`)
      setTimeOnly(`${hours}:${minutes}`)
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  // Rotate roles every 2.8 seconds on mobile
  useEffect(() => {
    const roleTimer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }, 2800)
    return () => clearInterval(roleTimer)
  }, [roles.length])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header className="sticky top-0 z-50 flex h-7 items-center justify-between border-b border-black/[0.06] bg-white/80 px-3 sm:px-4 text-xs select-none backdrop-blur-md">
      {/* Desktop View (>= md): Classic Left-Aligned Name & Full Roles */}
      <div className="hidden md:flex items-center gap-2 overflow-hidden">
        <button
          onClick={scrollToTop}
          className="font-bold text-neutral-900 tracking-tight text-[12.5px] shrink-0 hover:text-[#57A4F0] transition-colors"
          title="Scroll to Desktop"
        >
          Yash Jadhav
        </button>
        <span className="text-neutral-400 shrink-0">·</span>
        <span className="text-neutral-500 font-medium text-[11px] truncate">
          Senior Video Editor | Short-Form &amp; Motion Graphics | AI Video Production
        </span>
      </div>

      <div className="hidden md:flex items-center pl-3 shrink-0">
        <div className="font-mono text-[11.5px] font-semibold tracking-tight text-neutral-800">
          {dateTime || '15 Nov  09:38'}
        </div>
      </div>

      {/* Mobile View (< md): Yash Jadhav (Left), Rotating Center-Aligned Role (Center), Time (Right) */}
      <div className="flex md:hidden w-full items-center justify-between relative h-full">
        {/* Left: Yash Jadhav */}
        <button
          onClick={scrollToTop}
          className="font-bold text-neutral-900 tracking-tight text-[11.5px] shrink-0 active:text-[#57A4F0]"
          title="Scroll to Desktop"
        >
          Yash Jadhav
        </button>

        {/* Center: Rotating Role (Centered Aligned, One at a Time) */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center max-w-[190px] sm:max-w-[220px] overflow-hidden pointer-events-none">
          <div
            key={roleIndex}
            className="animate-role-flip font-semibold text-[10.5px] text-neutral-700 truncate text-center tracking-tight"
          >
            <span className="text-[#57A4F0] mr-1 text-[8px] align-middle">●</span>
            {roles[roleIndex]}
          </div>
        </div>

        {/* Right: Date & Time */}
        <div className="font-mono text-[11px] font-semibold tracking-tight text-neutral-800 shrink-0">
          <span className="hidden xs:inline mr-1 text-neutral-500 font-normal">{dateOnly}</span>
          <span>{timeOnly || '09:38'}</span>
        </div>
      </div>
    </header>
  )
}
