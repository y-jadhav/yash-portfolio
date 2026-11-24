import React from 'react'
import { DraggableWidget } from './DraggableWidget'
import { AnalogClockWidget } from './AnalogClockWidget'
import { CalendarWidget } from './CalendarWidget'
import { MusicPlayerWidget } from './MusicPlayerWidget'
import { PortraitWidget } from './PortraitWidget'
import { DesktopFolder } from './DesktopFolder'
import { HeroCard } from './HeroCard'
import { AppLauncher } from './AppLauncher'
import { caseStudies } from '../../data/portfolioData'
import { CaseStudy } from '../../types'
import { FileText } from 'lucide-react'

interface DesktopProps {
  onOpenCaseStudy: (study: CaseStudy) => void
  onOpenCaseStudyWithAsset?: (studyId: string, galleryIdx?: number) => void
  onPlayVideo?: (videoSrc: string, title: string) => void
  onOpenReel: () => void
  onOpenTerminal: () => void
  onExploreWork: () => void
  onOpenContact: () => void
  onOpenProfile?: () => void
}

export const Desktop: React.FC<DesktopProps> = ({
  onOpenCaseStudy,
  onOpenCaseStudyWithAsset,
  onPlayVideo,
  onOpenReel,
  onOpenTerminal,
  onExploreWork,
  onOpenContact,
  onOpenProfile,
}) => {
  const handleItemClick = (study: CaseStudy) => {
    if (study.videoSrc && onPlayVideo) {
      onPlayVideo(study.videoSrc, study.folderName)
    } else if (study.id === 'ciper-analytics' && onPlayVideo) {
      onPlayVideo('/ciper/Top 5 CM Post.png', 'Ciper Analytics: Publication-Grade Infographics')
    } else {
      onOpenCaseStudy(study)
    }
  }

  return (
    <div className="relative flex min-h-[calc(100vh-1.75rem)] w-full flex-col items-center justify-center overflow-x-hidden bg-[#fafafa] pb-28 sm:pb-32 lg:pb-28">
      {/* Subtle macOS Desktop Wallpaper Grid */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-60" />

      {/* =========================================================================
          TOP-LEFT SIDE: 2x2 WIDGET GRID (STACKED AT TOP-LEFT WITH SMALL EQUAL MARGIN)
          Placement:
          1. Clock     2. Calendar
          3. Music     4. Photo
         ========================================================================= */}
      <div className="hidden lg:grid absolute top-4 lg:top-5 left-3 lg:left-4 min-[1380px]:left-6 grid-cols-2 gap-2.5 lg:gap-3 min-[1380px]:gap-3.5 z-20 select-none lg:scale-[0.85] min-[1380px]:scale-100 origin-top-left transition-transform duration-150">
        {/* 1. Clock */}
        <DraggableWidget style={{ position: 'relative' }}>
          <AnalogClockWidget />
        </DraggableWidget>

        {/* 2. Calendar */}
        <DraggableWidget style={{ position: 'relative' }}>
          <CalendarWidget onOpenBooking={onOpenContact} />
        </DraggableWidget>

        {/* 3. Music */}
        <DraggableWidget style={{ position: 'relative' }}>
          <MusicPlayerWidget />
        </DraggableWidget>

        {/* 4. Photo */}
        <DraggableWidget style={{ position: 'relative' }}>
          <PortraitWidget onClick={onOpenProfile} />
        </DraggableWidget>
      </div>

      {/* =========================================================================
          TOP-RIGHT SIDE: FOLDERS STACKED VERTICALLY (NO BUBBLES, SAME CLEAN ICONS)
         ========================================================================= */}
      <div className="hidden lg:flex absolute top-3.5 right-4 sm:right-6 xl:right-8 flex-col items-center gap-1.5 [@media(max-height:860px)]:gap-0.5 z-20 select-none">
        {caseStudies.map((study) => (
          <DesktopFolder
            key={study.id}
            id={study.id}
            name={study.folderName}
            format={study.id === 'ciper-analytics' ? 'MEDIA' : 'MP4'}
            onClick={() => handleItemClick(study)}
          />
        ))}

        {/* Direct CV File Link */}
        <a
          href="/CV_Yash_Jadhav.pdf"
          download
          className="group flex w-[86px] [@media(max-height:860px)]:w-[76px] flex-col items-center rounded-xl p-1 [@media(max-height:860px)]:p-0.5 transition-all duration-150 hover:bg-white/40 active:bg-white/60 cursor-pointer select-none"
        >
          <div className="relative flex h-10 w-10 [@media(max-height:860px)]:h-8 [@media(max-height:860px)]:w-8 items-center justify-center rounded-xl border border-black/10 bg-white p-1.5 [@media(max-height:860px)]:p-1 shadow-sm transition-transform duration-150 group-hover:scale-105">
            <FileText size={20} className="text-[#ef4444] [@media(max-height:860px)]:w-4 [@media(max-height:860px)]:h-4" />
          </div>
          <span className="mt-1 [@media(max-height:860px)]:mt-0.5 text-center font-sans text-[10.5px] [@media(max-height:860px)]:text-[9.5px] font-semibold text-neutral-800 drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)]">
            CV_Yash.pdf
          </span>
        </a>
      </div>

      {/* Mobile / Tablet Responsive Fallback: Top 2x2 Widgets (< lg) */}
      <div className="flex lg:hidden flex-col items-center w-full px-3 pt-5 pb-2">
        {/* 2x2 Clean Proportional Widget Grid */}
        <div className="grid grid-cols-2 gap-3 w-full max-w-[316px] mx-auto mb-2">
          <div className="flex items-center justify-center">
            <AnalogClockWidget />
          </div>
          <div className="flex items-center justify-center">
            <CalendarWidget onOpenBooking={onOpenContact} />
          </div>
          <div className="flex items-center justify-center">
            <MusicPlayerWidget />
          </div>
          <div className="flex items-center justify-center">
            <PortraitWidget onClick={onOpenProfile} />
          </div>
        </div>
      </div>

      {/* =========================================================================
          CENTERED HERO: CENTER-ALIGNED BOTH VERTICALLY & HORIZONTALLY
         ========================================================================= */}
      <div className="relative z-10 flex w-full flex-1 items-center justify-center text-center px-4 sm:px-6 lg:px-8 lg:pl-32 xl:pl-8 py-4 lg:py-6 my-auto">
        <HeroCard onExploreWork={onExploreWork} />
      </div>

      {/* Mobile / Tablet Responsive Fallback: Desktop Folders Placed AFTER Hero Card (< lg) */}
      <div className="flex lg:hidden flex-col items-center w-full px-3 pt-4 pb-4 z-10">
        <div className="grid grid-cols-3 gap-y-3.5 gap-x-2 w-full max-w-[320px] mx-auto justify-items-center">
          {caseStudies.map((study) => (
            <DesktopFolder
              key={study.id}
              id={study.id}
              name={study.folderName}
              format={study.id === 'ciper-analytics' ? 'MEDIA' : 'MP4'}
              onClick={() => handleItemClick(study)}
            />
          ))}
          <a
            href="/CV_Yash_Jadhav.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group col-start-2 flex w-[86px] flex-col items-center rounded-xl p-1 transition-all duration-150 hover:bg-white/40 active:bg-white/60 cursor-pointer select-none"
          >
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white p-1.5 shadow-sm transition-transform duration-150 group-hover:scale-105">
              <FileText size={20} className="text-[#ef4444]" />
            </div>
            <span className="mt-1 text-center font-sans text-[10.5px] font-semibold text-neutral-800 drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)]">
              CV_Yash.pdf
            </span>
          </a>
        </div>
      </div>

      {/* =========================================================================
          APP LAUNCHER (PRODUCTION TOOLS)
          Elena's verified placement: bottom: 120px; right: 48px;
         ========================================================================= */}
      <AppLauncher
        onOpenTerminal={onOpenTerminal}
        onOpenReel={onOpenReel}
        onPlayVideo={onPlayVideo}
        onOpenCaseStudyWithAsset={onOpenCaseStudyWithAsset}
      />
    </div>
  )
}