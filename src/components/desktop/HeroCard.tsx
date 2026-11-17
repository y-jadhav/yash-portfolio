import React from 'react'
import { ArrowDown } from 'lucide-react'

interface HeroCardProps {
  onExploreWork: () => void
}

export const HeroCard: React.FC<HeroCardProps> = ({ onExploreWork }) => {
  return (
    <div className="relative z-10 mx-auto w-full max-w-xl xl:max-w-2xl 2xl:max-w-3xl px-3 sm:px-4 text-center flex flex-col items-center justify-center select-none">
      {/* 1. Name: Prominent Single Line "I'm Yash Jadhav" */}
      <h1 className="w-full text-center text-[1.7rem] sm:text-3xl md:text-3xl lg:text-[2.35rem] xl:text-[3.2rem] 2xl:text-[3.6rem] font-extrabold tracking-tight leading-tight text-neutral-900 font-display whitespace-nowrap">
        I'm <span className="shimmer-text">Yash Jadhav</span>
      </h1>

      {/* 2. Position / Role Line Below Name */}
      <p className="mt-2.5 sm:mt-3.5 w-full text-center text-xs sm:text-base md:text-lg font-semibold tracking-tight text-neutral-800">
        Senior Video Editor | Short-Form &amp; Motion Graphics | AI Video Production
      </p>

      {/* 3. Narrative Description Paragraph with Profile Links */}
      <p className="mt-3 sm:mt-4 max-w-xl mx-auto w-full text-center text-[11.5px] sm:text-sm md:text-[14.5px] leading-relaxed text-neutral-600 font-normal px-2">
        I translate raw footage, political briefs, and complex data into razor-sharp short-form videos. I scaled{' '}
        <a
          href="https://www.instagram.com/poligramnews/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-neutral-900 underline decoration-neutral-300 decoration-1 underline-offset-2 transition-colors hover:text-[#57A4F0] hover:decoration-[#57A4F0]"
          title="Visit Poligram News on Instagram"
        >
          Poligram News from 0 to 55K+
        </a>
        , grew{' '}
        <a
          href="https://www.instagram.com/shubhamrode_exim/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-neutral-900 underline decoration-neutral-300 decoration-1 underline-offset-2 transition-colors hover:text-[#57A4F0] hover:decoration-[#57A4F0]"
          title="Visit Shubham Rode on Instagram"
        >
          Shubham Rode 10K → 75K+
        </a>
        , and lead end-to-end post-production pipelines.
      </p>

      {/* 4. Single Centered Explore Superpowers Button */}
      <div className="mt-6 flex items-center justify-center w-full">
        <button
          onClick={onExploreWork}
          className="inline-flex items-center gap-1.5 rounded-full border border-neutral-300 bg-white/90 px-5 py-2.5 text-xs font-bold text-neutral-800 shadow-sm backdrop-blur-md transition-all hover:bg-white hover:border-neutral-400 hover:scale-[1.02] active:scale-[0.98]"
        >
          Explore Superpowers
          <ArrowDown size={13} className="text-[#57A4F0]" />
        </button>
      </div>

      {/* 5. Clean Balanced Metrics Bar with Profile Links */}
      <div className="mt-5 sm:mt-7 flex items-center justify-center gap-3.5 sm:gap-8 border-t border-black/[0.06] pt-3.5 sm:pt-4 font-mono text-[10.5px] sm:text-[11px] text-neutral-500 w-full max-w-md mx-auto">
        <a
          href="https://www.instagram.com/poligramnews/"
          target="_blank"
          rel="noopener noreferrer"
          className="group text-center transition-transform hover:scale-105"
          title="Visit Poligram News on Instagram"
        >
          <span className="block text-sm sm:text-base font-bold text-neutral-900 group-hover:text-[#57A4F0] transition-colors">0 → 55K+</span>
          <span className="text-[10px] sm:text-[11px] group-hover:text-neutral-800 transition-colors inline-flex items-center gap-0.5">
            Poligram News <span className="text-[9px] text-neutral-400 group-hover:text-[#57A4F0]">↗</span>
          </span>
        </a>
        <div className="h-4 w-[1px] bg-neutral-200" />
        <a
          href="https://www.instagram.com/shubhamrode_exim/"
          target="_blank"
          rel="noopener noreferrer"
          className="group text-center transition-transform hover:scale-105"
          title="Visit Shubham Rode on Instagram"
        >
          <span className="block text-sm sm:text-base font-bold text-neutral-900 group-hover:text-[#57A4F0] transition-colors">10K → 75K+</span>
          <span className="text-[10px] sm:text-[11px] group-hover:text-neutral-800 transition-colors inline-flex items-center gap-0.5">
            Shubham Rode <span className="text-[9px] text-neutral-400 group-hover:text-[#57A4F0]">↗</span>
          </span>
        </a>
        <div className="h-4 w-[1px] bg-neutral-200" />
        <div className="text-center">
          <span className="block text-sm sm:text-base font-bold text-neutral-900">&lt; 60s</span>
          <span className="text-[10px] sm:text-[11px]">Viral Edits</span>
        </div>
      </div>
    </div>
  )
}
