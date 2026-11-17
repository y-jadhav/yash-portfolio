import React from 'react'
import { CheckCircle2 } from 'lucide-react'

export interface NoteItem {
  title: string
  subtitle: string
}

interface NoteCardProps {
  items: NoteItem[]
  badge?: string
}

export const NoteCard: React.FC<NoteCardProps> = ({ items, badge = 'PRODUCTION NOTES' }) => {
  return (
    <div className="group/note transition-all duration-300 hover:-translate-y-1.5">
      <div className="rounded-[8px] shadow-[0_14px_30px_rgba(0,0,0,0.12)] transition-shadow duration-300 group-hover/note:shadow-[0_24px_48px_rgba(0,0,0,0.22)]">
        {/* Yellow post-it header tape */}
        <div className="flex h-8 items-center justify-between rounded-t-[8px] border border-b-0 border-[#d9b83a]/40 bg-gradient-to-b from-[#F4DA71] via-[#EACB4E] to-[#DFBA35] px-4 shadow-[inset_0_1px_1px_rgba(255,255,255,0.7)]">
          <span className="font-mono text-[9px] font-bold tracking-widest text-amber-950/70 uppercase">
            {badge}
          </span>
          {/* Post-it pin / staple aesthetic */}
          <div className="h-1.5 w-6 rounded-full bg-amber-950/20" />
        </div>

        {/* Frosted white body */}
        <div className="flex flex-col justify-between rounded-b-[8px] border border-t-0 border-white/70 bg-white/75 p-6 backdrop-blur-2xl backdrop-saturate-150">
          <ul className="space-y-4">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-[#DFBA35]" />
                <div>
                  <p className="text-[14px] sm:text-[15px] font-bold leading-snug text-neutral-900">
                    {item.title}
                  </p>
                  <p className="mt-1 text-xs sm:text-sm leading-snug text-neutral-600">
                    {item.subtitle}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
