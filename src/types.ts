export interface CaseStudyGalleryItem {
  title: string
  src: string
  type?: 'image' | 'pdf'
  caption?: string
  pdfUrl?: string
}

export interface CaseStudy {
  id: string
  folderName: string
  number: number
  category: string
  title: string
  headline: string
  description: string
  metric: string
  metricLabel: string
  videoSrc?: string
  gallery?: CaseStudyGalleryItem[]
  tags: string[]
  noteItems: {
    title: string
    subtitle: string
  }[]
  highlights: string[]
  toolsUsed: string[]
  fullStory: string[]
}

export interface DockItemData {
  id: string
  label: string
  icon: string
  action: 'home' | 'work' | 'reel' | 'about' | 'terminal' | 'contact'
  badge?: string
}

export interface AppLauncherItem {
  id: string
  name: string
  category: string
  iconColor: string
  shortcut?: string
  action: () => void
  isExternal?: boolean
  url?: string
}
