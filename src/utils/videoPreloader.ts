import { useState, useEffect } from 'react'

type CacheUpdateListener = (src: string, blobUrl: string) => void

class BackgroundVideoPreloader {
  private cache: Map<string, string> = new Map()
  private isStarted = false
  private listeners: Set<CacheUpdateListener> = new Set()
  private queue: string[] = [
    '/videos/jnpa-yt-video.mp4',
    '/videos/shubham-rode-reel.mp4',
    '/videos/poligram-pr-1nov.mp4',
    '/videos/ai-openclawd-promo.mp4',
    '/videos/poligram-delimitation.mp4',
  ]

  public start() {
    if (this.isStarted || typeof window === 'undefined') return
    this.isStarted = true

    const schedulePreload = () => {
      // 1.5s delay after page load to ensure fonts, icons, and hero UI load completely first
      setTimeout(() => {
        this.preloadNext()
      }, 1500)
    }

    if (document.readyState === 'complete') {
      schedulePreload()
    } else {
      window.addEventListener('load', schedulePreload, { once: true })
    }
  }

  private async preloadNext() {
    if (this.queue.length === 0) return
    const src = this.queue.shift()!

    try {
      // Use low network priority so background loading never degrades user interactions
      const response = await fetch(src, { priority: 'low' } as any)
      if (response.ok) {
        const blob = await response.blob()
        const blobUrl = URL.createObjectURL(blob)
        this.cache.set(src, blobUrl)
        this.notifyListeners(src, blobUrl)
      }
    } catch {
      // Fallback silently if offline or blocked; regular streaming handles playback
    }

    // Gentle pacing between videos to keep mobile devices cool and responsive
    setTimeout(() => {
      this.preloadNext()
    }, 600)
  }

  public getVideoUrl(src: string): string {
    return this.cache.get(src) || src
  }

  public onCacheUpdate(listener: CacheUpdateListener): () => void {
    this.listeners.add(listener)
    return () => {
      this.listeners.delete(listener)
    }
  }

  private notifyListeners(src: string, blobUrl: string) {
    this.listeners.forEach((listener) => {
      try {
        listener(src, blobUrl)
      } catch {
        // Ignore listener error
      }
    })
  }
}

export const videoPreloader = new BackgroundVideoPreloader()

// Hook to automatically subscribe to preloaded Blob URLs in components
export const usePreloadedVideo = (src: string): string => {
  const [currentUrl, setCurrentUrl] = useState(() => videoPreloader.getVideoUrl(src))

  useEffect(() => {
    setCurrentUrl(videoPreloader.getVideoUrl(src))

    const unsubscribe = videoPreloader.onCacheUpdate((cachedSrc, blobUrl) => {
      if (cachedSrc === src) {
        setCurrentUrl(blobUrl)
      }
    })

    return unsubscribe
  }, [src])

  return currentUrl
}
