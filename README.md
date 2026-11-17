# YashOS — Senior Video Editor & AI Video Production Portfolio

> An interactive **macOS desktop environment simulation ("YashOS")** crafted for **Yash Jadhav** (Senior Video Editor & AI Video Production Specialist, Pune, India), inspired by the ElenaOS architecture (`elenagonci.com`) and engineered with **React 19, Motion, and Tailwind CSS v4**.

---

## 🖥️ Live Features & Architecture Overview

### 1. The Desktop Environment (`YashOS`)
The entire landing experience is an operating system desktop canvas on `#fafafa` without generic hero sections or standard brochure navbars:
- **Sticky Frosted Top Menu Bar (28px / `h-7`)**:
  - `bg-white/75 backdrop-blur-md border-b border-black/5`
  - YJ Apple-style logo, YashOS branding, "Senior Video Editor & AI Specialist"
  - Live clock with day, date, hours, minutes, seconds updated via `setInterval`
  - Quick action links: Showreel, Superpowers, Metrics, Terminal, and one-click PDF CV download.
- **5 Floating & Draggable Widgets** (Motion spring-drag physics):
  1. **Analog Clock Widget (150×150px)**:
     - SVG clock face with 12 tick marks, hour hand, minute hand, and active red second hand (`#ef4444`)
     - City toggle (`PUNE` / `MIAMI` / `TOKYO`) with live digital subtext.
  2. **Calendar Widget (150×150px)**:
     - Current day number, weekday, and active 7-day dot strip with today highlighted in `#57A4F0`
     - Click triggers direct booking/contact action.
  3. **Music Player Widget (320×150px)**:
     - Frosted glass cassette/vinyl sleeve with interactive animated equalizer bars
     - Web Audio API real synthesizer generator for relaxing lofi edit suite background tone
     - Play/Pause, track switching, timeline scrubber, volume/mute control.
  4. **Weather Widget (320×110px)**:
     - Pune (and Madrid) 7-day forecast with custom inline SVG suns (`#FFB800`) and clouds (`#A8B0B9`).
  5. **Portrait Polaroid Widget (150×150px)**:
     - Framed photo of Yash (`yash-portrait.jpg`) with red recording indicator dot and caption.
- **Central Hero**:
  - 3-line staggered entry animation (`cubic-bezier(0.22, 1, 0.36, 1)`)
  - CSS shimmer sweep animation on **"Yash Jadhav."** (`.shimmer-text`)
  - Confident, numbers-first copy: Poligram News (0 → 55K+), Founder Brand (10K → 75K+), and sub-60-second news format
  - Quick action buttons: **Watch 4K Showreel**, **Explore Superpowers**, and **Download CV**.
- **Desktop Project Folders (Right Column)**:
  - 📁 Poligram News (0 → 55K+ Viral Hindi News)
  - 📁 Ciper Analytics (Data Visualisation & Governance)
  - 📁 Founder Brand (10K → 75K+ Instagram Scaling)
  - 📁 JNPA & Commercials (Infrastructure Films & Team Lead)
  - 📁 AI Video Suite (Generative AI, Firefly, Midjourney, Claude)
  - 📄 Direct CV PDF link
  - Double-clicking or clicking opens the corresponding project in a macOS Finder Window modal!
- **Secondary 2×5 App Launcher (Bottom-Right Corner)**:
  - 10 app icons: Adobe Premiere Pro, After Effects, Photoshop, Illustrator, Adobe Firefly, ZSH Terminal, Claude 3.7, ChatGPT, LinkedIn, YouTube.
  - Hover elevation (`-translate-y-1`) with tooltips.
- **Fixed Bottom Dock (6 Icons with Spring Magnification)**:
  - `bg-white/50 backdrop-blur-2xl border border-white/70 shadow-2xl rounded-2xl`
  - Spring physics magnification: `mass: 0.1, stiffness: 180, damping: 13`
  - Icons: YashOS Home, Finder Folders, 4K Showreel, Metrics, ZSH Terminal, Direct Contact.

---

### 2. Stacking Sticky "Finder Window" Cards (`#work`)
Below the desktop, the page transitions to stacked sticky superpower panels:
- Each card sticks to the viewport (`md:sticky md:top-20 md:h-[calc(100dvh-5rem)]`) and stacks on scroll.
- **Custom SVG `clip-path` tab shape**:
  `path("M0 80 L0 32 Q0 2 30 2 L210 2 Q238 2 252 20 C266 36 276 40 312 40 L340 40 L340 80 Z")`
  with `#e5e7eb` tab strip and uppercase tracking.
- **Yellow Post-It Note Aesthetic**:
  - Header: `#F4DA71 → #DFBA35` gradient tape with staple detail
  - Body: Frosted white `bg-white/75 backdrop-blur-2xl`, deep layered drop shadow (`[0_14px_30px_rgba(0,0,0,0.12)]`)
  - Hover lift `-translate-y-1.5` with shadow deepening.

---

### 3. Interactive Modals & Suites
- **macOS Finder Modal**:
  - Red, yellow, green traffic lights
  - Sidebar with favorites, folder navigator, deliverables checklist, tool tags, and full project breakdown.
- **Interactive ZSH Terminal Modal**:
  - Dark macOS terminal window with traffic lights
  - Commands: `help`, `cat brief.md`, `metrics`, `skills`, `experience`, `play reel`, `neofetch`, `contact`, `clear`.
- **4K Showreel Program Monitor**:
  - Plays real footage (`OpenClawdPromo.mp4`, `JNPA-reel.mp4`, `paper-craft-stars.mp4`)
  - SMPTE live timecode (`00:00:14:18`), scrubber, track selector tabs
  - Premiere Pro keyboard shortcuts: `[Space] Play/Pause`, `[J] Shuttle Back`, `[K] Pause`, `[L] Shuttle Forward`.

---

### 4. Diagnostics, Metrics & Marquee
- **Highlights Section (`#highlights`)**:
  - `0 → 55K+` (Poligram News organic growth)
  - `10K → 75K+` (Founder Instagram growth)
  - `3+ Years` (Hands-on editing & AI video pipelines)
  - `< 60 Sec` (Pacing for short-form retention)
  - `15+` (Video editors & designers led)
  - Career path timeline & Infosys, Microsoft, Anthropic certifications.
- **Featured Marquee**:
  - Infinite seamless horizontal scroll (`40s linear infinite`) pausing on hover.

---

## 🚀 Running the Project

```bash
# 1. Navigate to the project directory
cd "/Users/yash/Portfolio 2/yash-portfolio"

# 2. Start the local development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build
npm run preview
```
