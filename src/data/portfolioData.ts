import { CaseStudy } from '../types'

export const personalInfo = {
  name: 'Yash Jadhav',
  title: 'Senior Video Editor & AI Video Production Specialist',
  location: 'Pune, Maharashtra, India',
  email: 'yashjadhav8007@gmail.com',
  phone: '+91 9096833243',
  linkedin: 'https://www.linkedin.com/in/yashjadhav-yj/',
  currentRole: 'Senior Video Editor at Pepup HR Consulting Pvt. Ltd.',
  education: 'Bachelor of Commerce, SPPU Pune (Jul 2022 – Mar 2025)',
  bio: 'I am a creative and results-driven Senior Video Editor and AI Video Production Specialist with 3+ years of experience delivering high-velocity multimedia content across digital platforms. I translate complex data, political narratives, and founder stories into engaging visual stories under 60 seconds.',
}

export const stats = [
  { value: '0 → 55K+', label: 'Poligram News followers grown from scratch', highlight: 'Organic Growth' },
  { value: '10K → 75K+', label: 'Shubham Rode followers scaled', highlight: '7.5x Explosion' },
  { value: '3+ Years', label: 'Hands-on editing, motion graphics & AI video pipelines', highlight: 'Production Experience' },
  { value: '< 60 Sec', label: 'Average format for high-retention news', highlight: 'Speed & Retention' },
  { value: '100%', label: 'Team leadership & creative direction track record', highlight: 'Team Lead' },
]

export const caseStudies: CaseStudy[] = [
  {
    id: 'poligram-news',
    folderName: 'Poligram News',
    number: 1,
    category: 'VIRAL NEWS EDITING & AUDIENCE GROWTH',
    title: 'Poligram News: Scaling Hindi Political Journalism from 0 to 55K+ Followers',
    headline: 'High-retention Hindi news videos I engineered for sub-60-second attention spans.',
    description:
      'As the lead video editor and producer for Poligram News, I directed narrative sequencing, motion graphics, and punchy kinetic typography to distill breaking Indian political updates into high-impact visual stories under 60 seconds, scaling the brand from zero to over 55,000 engaged followers purely through organic reach.',
    metric: '0 → 55K+',
    metricLabel: 'Followers Grown Organically',
    videoSrc: '/videos/poligram-pr-1nov.mp4',
    tags: ['Hindi News', 'Reels & Shorts', 'Motion Graphics', 'Retention Editing', 'After Effects'],
    noteItems: [
      {
        title: '0 to 55,000+ Followers organically',
        subtitle: 'Built a loyal news audience purely through high-retention video craft without paid ad spend.',
      },
      {
        title: 'Sub-60s narrative architecture',
        subtitle: 'Engineered 3-second visual hooks, rapid B-roll cuts, and subtitles timed to beat-drops.',
      },
      {
        title: 'Motion graphics & Kinetic typography',
        subtitle: 'Designed bilingual typography (Hindi & English) for instant clarity on mobile screens.',
      },
      {
        title: 'Daily rapid turnaround pipeline',
        subtitle: 'Established a daily rapid-turnaround political coverage workflow under breaking news deadlines.',
      },
    ],
    highlights: [
      'Maintained high-velocity pacing keeping average watch percentage above 85%',
      'Integrated live archival footage with custom motion infographics',
      'Developed signature visual branding and animated lower-thirds',
    ],
    toolsUsed: ['Adobe Premiere Pro', 'Adobe After Effects', 'Photoshop', 'AI Scripting', 'Audition'],
    fullStory: [
      'Political journalism moves fast in India, and viewer retention on short-form feeds drops sharply after the first two seconds.',
      'At Pepup HR Consulting, I spearheaded the complete production pipeline for Poligram News. I structured every video with a strict timeline: a compelling 2.5-second visual hook, dynamic punch-ins, audio stingers, and kinetic typography that supports Hindi phonetics seamlessly.',
      'The result was explosive organic reach, growing the publication from ground zero to 55K+ highly engaged followers, with several videos crossing multi-hundred-thousand views.',
    ],
  },
  {
    id: 'poligram-explainer',
    folderName: 'Poligram Explainer',
    number: 2,
    category: 'LONG-FORM EXPLAINER & DATA MOTION GRAPHICS',
    title: 'Poligram Explainer: Electoral Delimitation & Constitutional Impact Deep-Dive',
    headline: 'High-clarity explainer documentary translating complex delimitation reforms into engaging visual journalism.',
    description:
      'A comprehensive, documentary-style explainer video I produced breaking down the controversial electoral delimitation process, constitutional amendments, demographic shifts, and geopolitical consequences. I combined dynamic map animations, data visualization, historical timelines, and cinematic pacing.',
    metric: 'Full Explainer',
    metricLabel: 'Constitutional Data Translated',
    videoSrc: '/videos/poligram-delimitation.mp4',
    tags: ['Explainer Video', 'Data Visualization', 'Motion Graphics', 'Delimitation', 'Documentary', 'Map Animations'],
    noteItems: [
      {
        title: 'Delimitation deep-dive documentary',
        subtitle: 'Translated complex constitutional articles and census demographics into easy-to-understand visual chapters.',
      },
      {
        title: 'Geopolitical & map motion graphics',
        subtitle: 'Designed custom vector map transitions, seat distribution charts, and state-wise boundary highlights.',
      },
      {
        title: 'Cinematic pacing & sound design',
        subtitle: 'Layered sound effects, risers, archival audio, and atmospheric scoring to sustain viewer engagement through long-form exposition.',
      },
      {
        title: 'Fact-checked data visualization',
        subtitle: 'Built clear, readable infograms and animated lower-thirds verified against parliamentary records.',
      },
    ],
    highlights: [
      'Engineered multi-chapter visual structure keeping retention high across 5+ minutes of analytical policy reporting',
      'Created custom vector cartography and animated state boundary seat-shifts in After Effects',
      'Synced voiceover, motion graphic accents, and archival footage into an authoritative documentary experience',
    ],
    toolsUsed: ['Adobe Premiere Pro', 'Adobe After Effects', 'Photoshop', 'Illustrator', 'Audition'],
    fullStory: [
      'Explaining electoral delimitation—a complex policy topic involving constitutional freezes, population growth differentials, and parliamentary seat reallocation—is a monumental editorial challenge.',
      'For Poligram Explainer, I conceptualized and edited a full-fledged visual documentary. Instead of static talking heads, I structured the narrative around fluid map animations, dynamic 2D motion graphics, and historical timeline markers to illustrate how the 42nd Amendment and impending delimitation will reshape Indian democracy.',
      'By fusing investigative rigor with cinematic editing, I delivered clarity on dense constitutional questions, establishing a high benchmark for Poligram’s long-form visual journalism.',
    ],
  },
  {
    id: 'ciper-analytics',
    folderName: 'Ciper Analytics',
    number: 3,
    category: 'DATA JOURNALISM, INFOGRAPHICS & REPORT DESIGN',
    title: 'Ciper Analytics: Publication-Grade Political Infographics, Report Covers & Data Decks',
    headline: 'Transforming dense political datasets, budget figures, and youth perception studies into publication-grade visual infographics and executive reports.',
    description:
      'As the visual data specialist and graphic designer for Ciper Analytics, I designed high-impact political infographic posts, comprehensive research report covers, and multi-slide fiscal carousels—including all-time Lok Sabha seat comparisons (1984–2024), Union Budget 2026 revenue breakdowns, and the Gen Z Perception Study in Andhra Pradesh.',
    metric: '100+ Visual Assets',
    metricLabel: 'Infographics, Reports & Carousels Published',
    gallery: [
      {
        title: 'Top 5 Chief Ministers (Longest Serving)',
        src: '/ciper/Top 5 CM Post.png',
        type: 'image',
        caption: 'High-engagement social infographic analyzing tenure and serving timelines of Indian Chief Ministers.',
      },
      {
        title: 'The Mandate: BJP vs INC All-Time Seat Comparison',
        src: '/ciper/LS Seat Comparison.png',
        type: 'image',
        caption: 'All-time Lok Sabha seat distribution comparison spanning 11 general elections (1984–2024).',
      },
      {
        title: 'Gen Z Perception Study in Andhra Pradesh (Report Cover)',
        src: '/ciper/Report Cover.jpg',
        type: 'image',
        caption: 'Executive research report publication cover design for qualitative youth sentiment & governance perception study.',
      },
      {
        title: 'Union Budget 2026: Receipts of India Carousel',
        src: '/ciper/budget-carousel-1.png',
        pdfUrl: '/ciper/Budget 2026 Carousel.pdf',
        type: 'image',
        caption: 'Multi-slide social carousel breaking down national revenue sources, tax splits, and fiscal receipts.',
      },
    ],
    tags: ['Data Journalism', 'Political Infographics', 'Report Cover Design', 'Social Carousels', 'Illustrator', 'Photoshop'],
    noteItems: [
      {
        title: 'High-retention social infographics',
        subtitle: 'Designed viral infographics like the Top 5 Longest-Serving CMs and 40-year Lok Sabha seat comparisons.',
      },
      {
        title: 'Executive report cover design',
        subtitle: 'Created authoritative publication cover layouts for in-depth studies like Gen Z Perception in Andhra Pradesh.',
      },
      {
        title: 'Budget 2026 educational carousels',
        subtitle: 'Simplified complex financial receipts, tax splits, and fiscal figures into 10-slide visual carousels.',
      },
      {
        title: 'Editorial & research precision',
        subtitle: 'Collaborated directly with political researchers and data analysts to ensure 100% data integrity and crisp typography.',
      },
    ],
    highlights: [
      'Created viral political infographics consumed across social channels with high shareability',
      'Standardized branding, typography, and color palettes for Ciper Analytics publications and reports',
      'Translated parliamentary records, budget PDFs, and survey findings into clear visual graphs',
    ],
    toolsUsed: ['Adobe Illustrator', 'Adobe Photoshop', 'Canva', 'Figma', 'InDesign', 'Data Visualization'],
    fullStory: [
      'Political data and policy reports are often locked behind dense PDFs and spreadsheets that everyday citizens rarely read. At Ciper Analytics, I played a pivotal role in translating that research into captivating visual stories.',
      'Specializing in static infographic posts, executive report covers, and educational carousels, I crafted visual assets covering critical national topics—from 40-year electoral seat comparisons between the BJP and INC, to tenure breakdowns of India’s longest-serving Chief Ministers, to the complete Union Budget 2026 revenue anatomy.',
      'My designs also anchored major field research publications, including the "Gen Z Perception Study in Andhra Pradesh" assessing governance attitudes among youth aged 16–30. Through sharp grid layouts, punchy typography, and intuitive data charts, my work established Ciper as a benchmark for accessible, modern data journalism.',
    ],
  },
  {
    id: 'shubham-rode',
    folderName: 'Shubham Rode',
    number: 4,
    category: 'PERSONAL BRAND & VIRAL SOCIAL STRATEGY',
    title: 'Shubham Rode: Scaling from 10K to 75K+ on Instagram',
    headline: 'End-to-end production, strategic scripting, and algorithm-optimized Reels.',
    description:
      'At Rode Exports & Services, I managed the complete content strategy and post-production for Shubham Rode. By refining his on-camera presence, script hooks, sound design, and retention-focused editing, I drove a 7.5x follower surge from 10K to 75K+ on Instagram.',
    metric: '10K → 75K+',
    metricLabel: 'Followers Scaled in 11 Months',
    videoSrc: '/videos/shubham-rode-reel.mp4',
    tags: ['Personal Branding', 'Instagram Growth', 'Short-form Strategy', 'Scripting', 'Sound Design'],
    noteItems: [
      {
        title: '7.5x Follower Growth in 11 Months',
        subtitle: 'Elevated executive thought-leadership into a top-performing business creator channel.',
      },
      {
        title: 'Content scripting & hook engineering',
        subtitle: 'Researched trending industry controversies, crafted pattern-interrupt hooks, and tightened pacing.',
      },
      {
        title: 'Multi-platform distribution',
        subtitle: 'Repurposed core master cuts into optimized formats for Instagram Reels, YouTube Shorts, and Stories.',
      },
      {
        title: 'Competitive analytics & SEO',
        subtitle: 'Monitored engagement drops, analyzed retention graphs, and iterated on thumbnail click-through rates.',
      },
    ],
    highlights: [
      'Maintained consistent 4-5 Reels/week production cadence without quality compromise',
      'Incorporated sound design with micro-swishes and pop effects to maintain viewer alertness',
      'Generated direct business export leads through high authority founder positioning',
    ],
    toolsUsed: ['Adobe Premiere Pro', 'After Effects', 'Photoshop', 'Canva', 'Instagram Insights'],
    fullStory: [
      'Founders often have immense domain expertise but struggle to translate it into modern vertical video formats that capture cold audiences.',
      'I introduced an executive content engine for Shubham Rode: structured weekly shoot batching, scripted conversational hooks, and cinematic yet authentic post-production that avoided stiff corporate cliches.',
      'Within months, engagement skyrocketed, community trust expanded internationally, and follower count scaled from 10,000 to over 75,000.',
    ],
  },
  {
    id: 'infrastructure-commercials',
    folderName: 'JNPA Port Visit',
    number: 5,
    category: 'CINEMATIC DOCUMENTARY & EXIM FIELD LEARNING',
    title: 'JNPA Port Visit: On-Field Import-Export Practical Learning Documentary',
    headline: 'Cinematic documentary chronicling Shubham Rode’s on-ground EXIM training at India’s premier container port.',
    description:
      'Produced for Shubham Rode (EXIM Business Coach), this cinematic documentary captures the complete JNPA (Jawaharlal Nehru Port Authority) port study visit. As one of the major container ports of India handling the country’s maritime trade, Shubham Rode organizes this visit to provide students with real-world practical learnings of import-export operations. I documented the full on-field journey—from transit and live port operations to container yard logistics and practical business coaching—packaged with cinematic pacing, evocative soundscapes, and rich color grading.',
    metric: 'Field Documentary',
    metricLabel: 'Cinematic Port Learning Experience',
    videoSrc: '/videos/jnpa-yt-video.mp4',
    tags: ['Cinematic Documentary', 'EXIM Coaching', 'Shubham Rode', 'JNPA Port Visit', 'Industrial Logistics', 'Sound Design', 'Color Grading'],
    noteItems: [
      {
        title: 'Real-world EXIM practical exposure',
        subtitle: 'Documented Shubham Rode mentoring students through live customs, cargo docks, and container freight stations.',
      },
      {
        title: 'Full-journey cinematic storytelling',
        subtitle: 'Structured the narrative arc from student road transit to massive port operations, creating high-retention cinematic pacing.',
      },
      {
        title: 'Industrial scale & multi-cam editing',
        subtitle: 'Synced multi-camera field footage, bus travel interactions, and ground-level logistics with dynamic audio punch-ins.',
      },
      {
        title: 'Cinematic color & sound grading',
        subtitle: 'Graded in natural cinematic Rec.709 tones with immersive maritime sound design, engine hums, and vocal clarity.',
      },
    ],
    highlights: [
      'Showcased India’s premier container port (JNPA) as an immersive classroom for practical trade education',
      'Captured raw on-field student enthusiasm, live lectures, and maritime logistics in high-energy cinematic cuts',
      'Elevated Shubham Rode’s brand authority as India’s leading on-ground import-export mentor',
    ],
    toolsUsed: ['Adobe Premiere Pro', 'Adobe After Effects', 'Lumetri Color', 'Sound Engineering', 'Multi-Cam Sync'],
    fullStory: [
      'Jawaharlal Nehru Port Authority (JNPA) in Navi Mumbai is one of India’s premier maritime gateways, handling over half of the nation’s containerized sea cargo. For EXIM business coach Shubham Rode, conducting an on-field port visit is essential to providing students with real-world, practical import-export learnings far beyond theoretical textbooks.',
      'I was commissioned to document this complete on-field journey into an evocative, cinematic film. My editorial goal was to balance educational clarity with high-production-value visual storytelling: capturing the students’ journey on the bus, on-site briefings, heavy crane movements, container yard inspections, and the sheer scale of global trade infrastructure.',
      'Through dynamic speed ramps, synchronized ambient soundscapes, sharp narrative framing, and polished color grading, I crafted a documentary that highlights the transformative power of practical on-field learning while reinforcing Shubham Rode’s stature as an elite EXIM mentor.',
    ],
  },
  {
    id: 'ai-video-workflows',
    folderName: 'AI Video Production',
    number: 6,
    category: 'AI-POWERED CREATIVE PRODUCTION',
    title: 'Next-Gen Video Production: Generative AI, Storyboarding & Fast Prototyping',
    headline: 'Integrating Claude, Firefly, Midjourney, and TTS to 10x pre-production velocity.',
    description:
      'I pioneer AI-assisted creative workflows, holding certifications in Generative AI (Microsoft & LinkedIn) and AI Fluency (Anthropic). I integrate modern LLMs, Firefly image synthesis, and AI Studio TTS to ideate b-roll, generate concept art, automate subtitling, and iterate storylines at 10x speed.',
    metric: '10x Faster',
    metricLabel: 'Pre-production & Prototyping Turnaround',
    videoSrc: '/videos/ai-openclawd-promo.mp4',
    tags: ['Generative AI', 'Firefly', 'Claude', 'TTS Audio', 'Prompt Engineering', 'AI Fluency'],
    noteItems: [
      {
        title: 'Certified in Generative AI & AI Fluency',
        subtitle: 'I hold the Anthropic AI Fluency Framework & Microsoft/LinkedIn GenAI credentials.',
      },
      {
        title: 'Synthetic B-roll & Visual Storyboarding',
        subtitle: 'I generate photo-realistic concept art and visual metaphors using Adobe Firefly and Gemini.',
      },
      {
        title: 'AI Script Polish & Structure Validation',
        subtitle: 'I use Claude and ChatGPT to stress-test narrative rhythm and hook retention.',
      },
      {
        title: 'Voiceover & Audio Prototyping',
        subtitle: 'I test pacing with Google AI Studio TTS before locking final narration tracks.',
      },
    ],
    highlights: [
      'I save 15+ hours weekly on rough cuts and moodboard ideation',
      'I build custom prompt libraries for short-form retention hooks',
      'I seamlessly blend AI-generated assets with human cinematic editing',
    ],
    toolsUsed: ['Claude 3.7', 'ChatGPT', 'Adobe Firefly', 'Google AI Studio', 'Premiere AI'],
    fullStory: [
      'AI does not replace the editor’s eye — it amplifies my craft. By embracing generative tools early, I built a hybrid production methodology.',
      'From generating missing historical b-roll concepts to scripting alternate hook angles in minutes, my AI-enhanced pipeline enables independent creators and brands to ship studio-grade content with agile budgets.',
    ],
  },
]

export const toolkit = [
  { name: 'Adobe Premiere Pro', category: 'Editing', level: 'Expert', icon: 'Pr' },
  { name: 'Adobe After Effects', category: 'Motion Design', level: 'Expert', icon: 'Ae' },
  { name: 'Adobe Photoshop', category: 'Graphics', level: 'Advanced', icon: 'Ps' },
  { name: 'Adobe Illustrator', category: 'Vector & Data', level: 'Advanced', icon: 'Ai' },
  { name: 'Adobe Firefly', category: 'Generative AI', level: 'Specialist', icon: 'Ff' },
  { name: 'Claude & ChatGPT', category: 'Prompting & Scripts', level: 'Specialist', icon: 'AI' },
  { name: 'Google AI Studio & TTS', category: 'Synthetic Audio', level: 'Specialist', icon: 'TTS' },
  { name: 'Canva Pro', category: 'Rapid Social Assets', level: 'Advanced', icon: 'Cv' },
]

export const certifications = [
  {
    title: 'Advanced Video Editing in Premiere',
    issuer: 'Infosys Springboard',
    year: '2024',
    badge: 'Video Production',
  },
  {
    title: 'Career Essentials in Generative AI',
    issuer: 'Microsoft & LinkedIn',
    year: '2025',
    badge: 'GenAI Certified',
  },
  {
    title: 'AI Fluency Framework & Foundations',
    issuer: 'Anthropic',
    year: '2025',
    badge: 'AI Fluency',
  },
]

export const workHistory = [
  {
    role: 'Senior Video Editor',
    company: 'Pepup HR Consulting Pvt. Ltd.',
    period: 'Aug 2025 – Present',
    location: 'Pune, India',
    description:
      'I lead video production for Poligram News (scaling 0 to 55K+ followers) and design infographics for Ciper Analytics data reports.',
  },
  {
    role: 'Senior Video Editor',
    company: 'Rode Exports & Services Pvt. Ltd.',
    period: 'Sep 2024 – Aug 2025',
    location: 'Pune, India',
    description:
      'I scaled Shubham Rode from 10K to 75K+ followers on Instagram. I managed end-to-end Reels, Shorts, and content scripts.',
  },
  {
    role: 'Team Leader, Video Editing & Design',
    company: 'Eazyfixit',
    period: 'Aug 2023 – Sep 2024',
    location: 'Pune, India',
    description:
      'I led a multi-disciplinary team of video editors and graphic designers, supervising YouTube and social post-production workflows.',
  },
]

export const publicationsMarquee = [
  { name: 'Poligram News', role: 'Lead Video Producer', note: '0 → 55K+ Followers' },
  { name: 'Ciper Analytics', role: 'Visual Data Infographics', note: 'Governance Reports' },
  { name: 'Rode Exports', role: 'Social Growth Strategy', note: '10K → 75K+ Reels' },
  { name: 'Eazyfixit Media', role: 'Team Leader Post-Production', note: 'Commercial Campaigns' },
  { name: 'JNPA Port Visit', role: 'Cinematic Documentary', note: 'Shubham Rode EXIM' },
  { name: 'Infosys Springboard', role: 'Advanced Video Certification', note: 'Premiere Pro' },
  { name: 'Anthropic AI Fluency', role: 'Prompting & Creative GenAI', note: 'LLM Pipelines' },
  { name: 'Microsoft & LinkedIn', role: 'Generative AI Specialist', note: 'Industry Credential' },
]
