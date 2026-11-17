import React, { useState, useEffect, useRef } from 'react'
import { MenuBar } from './components/desktop/MenuBar'
import { Desktop } from './components/desktop/Desktop'
import { Dock } from './components/dock/Dock'
import { SuperpowerSection } from './components/sections/SuperpowerSection'
import { HighlightsSection } from './components/sections/HighlightsSection'
import { PressMarquee } from './components/sections/PressMarquee'
import { Footer } from './components/sections/Footer'
import { FinderModal } from './components/modals/FinderModal'
import { TerminalModal } from './components/modals/TerminalModal'
import { ShowreelModal } from './components/modals/ShowreelModal'
import { ProfileCardModal } from './components/modals/ProfileCardModal'
import { caseStudies } from './data/portfolioData'
import { CaseStudy } from './types'
import { videoPreloader } from './utils/videoPreloader'

export const App: React.FC = () => {
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null)
  const [selectedGalleryIdx, setSelectedGalleryIdx] = useState<number>(0)
  const [terminalOpen, setTerminalOpen] = useState(false)
  const [reelOpen, setReelOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)
  const [activeVideo, setActiveVideo] = useState<{ src: string; title: string }>({
    src: '/videos/jnpa-yt-video.mp4',
    title: 'JNPA Port Visit: EXIM Practical Learning',
  })

  // Guard flag to prevent rapid double-history calls on Escape or tap
  const isClosingRef = useRef(false)

  const handleOpenCaseStudy = (study: CaseStudy, galleryIdx: number = 0) => {
    setSelectedStudy(study)
    setSelectedGalleryIdx(galleryIdx)
    window.history.pushState({ modalOpen: true, type: 'finder' }, '')
  }

  const handleOpenCaseStudyWithAsset = (studyId: string, galleryIdx: number = 0) => {
    const found = caseStudies.find((s) => s.id === studyId)
    if (found) {
      setSelectedStudy(found)
      setSelectedGalleryIdx(galleryIdx)
      window.history.pushState({ modalOpen: true, type: 'finder' }, '')
    }
  }

  const handlePlayVideo = (videoSrc: string, title: string) => {
    setActiveVideo({ src: videoSrc, title })
    setReelOpen(true)
    window.history.pushState({ modalOpen: true, type: 'reel' }, '')
  }

  const handleOpenProfile = () => {
    setProfileOpen(true)
    window.history.pushState({ modalOpen: true, type: 'profile' }, '')
  }

  const handleOpenTerminal = () => {
    setTerminalOpen(true)
    window.history.pushState({ modalOpen: true, type: 'terminal' }, '')
  }

  // Hierarchical modal closers with debounce to prevent accidental site exit
  const handleCloseReel = () => {
    if (isClosingRef.current) return
    isClosingRef.current = true
    setReelOpen(false)
    if (window.history.state?.modalOpen) {
      window.history.back()
    }
    setTimeout(() => {
      isClosingRef.current = false
    }, 200)
  }

  const handleCloseFinder = () => {
    if (isClosingRef.current) return
    isClosingRef.current = true
    setSelectedStudy(null)
    setSelectedGalleryIdx(0)
    if (window.history.state?.modalOpen) {
      window.history.back()
    }
    setTimeout(() => {
      isClosingRef.current = false
    }, 200)
  }

  const handleCloseTerminal = () => {
    if (isClosingRef.current) return
    isClosingRef.current = true
    setTerminalOpen(false)
    if (window.history.state?.modalOpen) {
      window.history.back()
    }
    setTimeout(() => {
      isClosingRef.current = false
    }, 200)
  }

  const handleCloseProfile = () => {
    if (isClosingRef.current) return
    isClosingRef.current = true
    setProfileOpen(false)
    if (window.history.state?.modalOpen) {
      window.history.back()
    }
    setTimeout(() => {
      isClosingRef.current = false
    }, 200)
  }

  // Start background video preloader once page initializes
  useEffect(() => {
    videoPreloader.start()
  }, [])

  // Browser & Hardware Back Button Listener (PopState)
  // Ensures pressing Back on mobile or desktop pops the top modal gracefully without leaving the site
  useEffect(() => {
    const handlePopState = () => {
      isClosingRef.current = true
      // Hierarchical pop: if video is open over a case study, close only the video
      if (reelOpen) {
        setReelOpen(false)
      } else if (selectedStudy) {
        setSelectedStudy(null)
        setSelectedGalleryIdx(0)
      } else if (terminalOpen) {
        setTerminalOpen(false)
      } else if (profileOpen) {
        setProfileOpen(false)
      }
      setTimeout(() => {
        isClosingRef.current = false
      }, 150)
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [reelOpen, selectedStudy, terminalOpen, profileOpen])

  const scrollToDesktop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToWork = () => {
    const el = document.getElementById('work')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToHighlights = () => {
    const el = document.getElementById('highlights')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToContact = () => {
    const el = document.getElementById('contact')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="relative min-h-screen bg-[#fafafa] text-[#171717]">
      {/* 1. Sticky 28px macOS Menu Bar */}
      <MenuBar />

      <main>
        {/* 2. Full-viewport macOS Desktop Canvas with Elena's Verified Layout */}
        <Desktop
          onOpenCaseStudy={handleOpenCaseStudy}
          onOpenCaseStudyWithAsset={handleOpenCaseStudyWithAsset}
          onPlayVideo={handlePlayVideo}
          onOpenReel={() => handlePlayVideo('/videos/jnpa-yt-video.mp4', 'JNPA Port Visit: EXIM Practical Learning')}
          onOpenTerminal={handleOpenTerminal}
          onExploreWork={scrollToWork}
          onOpenContact={scrollToContact}
          onOpenProfile={handleOpenProfile}
        />

        {/* 3. Below Desktop: Stacking Sticky "Finder Window" Superpowers */}
        <section id="work" className="relative z-10 mx-auto max-w-[1300px] px-4 sm:px-6 py-12 scroll-mt-8">
          <div className="mb-8 text-center select-none">
            <span className="font-mono text-xs font-bold text-[#57A4F0] uppercase tracking-widest">
              Stacking Sticky Work Pillars
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              Core Creative Superpowers
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-neutral-500 max-w-md mx-auto">
              Scroll down to explore my key creative pillars and production case studies. Each window highlights how I approach narrative structure, motion graphics, and audience growth.
            </p>
          </div>

          <div className="relative space-y-6 md:space-y-0">
            {caseStudies.map((study, idx) => (
              <SuperpowerSection
                key={study.id}
                caseStudy={study}
                zIndex={10 + idx}
                onOpenCaseStudy={handleOpenCaseStudy}
                onPlayVideo={handlePlayVideo}
              />
            ))}
          </div>
        </section>

        {/* 4. Verified Highlights & Career Timeline */}
        <HighlightsSection />

        {/* 5. Featured Channels & Platforms Marquee */}
        <PressMarquee />

        {/* 6. Footer & Direct Coordinates */}
        <Footer />
      </main>

      {/* Elena's Verified Placement: Fixed Bottom Dock (fixed bottom-6 left-1/2 -translate-x-1/2 z-40) */}
      <Dock
        onGoHome={scrollToDesktop}
        onOpenWork={scrollToWork}
        onOpenReel={() => handlePlayVideo('/videos/jnpa-yt-video.mp4', 'JNPA Port Visit: EXIM Practical Learning')}
        onOpenAchievements={scrollToHighlights}
        onOpenTerminal={handleOpenTerminal}
        onOpenContact={scrollToContact}
        terminalOpen={terminalOpen}
        reelOpen={reelOpen}
      />

      {/* ================= MODAL WINDOWS ================= */}

      {/* Interactive macOS Finder Window for Case Studies */}
      {selectedStudy && (
        <FinderModal
          caseStudy={selectedStudy}
          initialGalleryIdx={selectedGalleryIdx}
          onClose={handleCloseFinder}
          onSelectOtherStudy={(s) => {
            setSelectedStudy(s)
            setSelectedGalleryIdx(0)
            window.history.replaceState({ modalOpen: true, type: 'finder' }, '')
          }}
          allStudies={caseStudies}
          onPlayVideo={handlePlayVideo}
        />
      )}

      {/* Interactive ZSH Terminal CLI */}
      {terminalOpen && (
        <TerminalModal
          onClose={handleCloseTerminal}
          onPlayReel={() => {
            handleCloseTerminal()
            handlePlayVideo('/videos/ai-openclawd-promo.mp4', 'OpenClawd Master Promo Reel')
          }}
        />
      )}

      {/* 4K Video Showreel Program Monitor */}
      {reelOpen && (
        <ShowreelModal
          initialVideo={activeVideo.src}
          initialTitle={activeVideo.title}
          onClose={handleCloseReel}
        />
      )}

      {/* About Me / Personal Details Profile Card */}
      {profileOpen && (
        <ProfileCardModal onClose={handleCloseProfile} />
      )}
    </div>
  )
}

export default App
