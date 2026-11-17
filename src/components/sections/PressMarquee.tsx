import React from 'react'
import { publicationsMarquee } from '../../data/portfolioData'
import { Sparkles, ArrowUpRight } from 'lucide-react'

export const PressMarquee: React.FC = () => {
  return (
    <section className="relative z-20 border-t border-black/[0.06] bg-[#fafafa] py-14 overflow-hidden select-none">
      <div className="mb-6 text-center">
        <span className="font-mono text-[11px] font-bold tracking-widest text-neutral-400 uppercase">
          Featured Channels, Clients &amp; Platforms
        </span>
      </div>

      <div className="overflow-hidden">
        <div className="marquee-track flex gap-4">
          {/* Double list for seamless 100% infinite loop */}
          {[...publicationsMarquee, ...publicationsMarquee].map((item, i) => (
            <div
              key={i}
              className="group flex w-[260px] shrink-0 flex-col justify-between rounded-xl border border-black/[0.08] bg-white p-4 shadow-[0_2px_10px_rgba(0,0,0,0.03)] transition-all duration-200 hover:-translate-y-1 hover:border-[#57A4F0]/40 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] font-bold text-[#57A4F0] bg-[#57A4F0]/10 px-2 py-0.5 rounded-full">
                  {item.note}
                </span>
                <ArrowUpRight size={14} className="text-neutral-400 group-hover:text-[#57A4F0] transition-colors" />
              </div>

              <div className="mt-3">
                <h4 className="text-sm font-bold text-neutral-900 group-hover:text-[#57A4F0] transition-colors">
                  {item.name}
                </h4>
                <p className="text-xs text-neutral-500 mt-0.5 font-medium">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
