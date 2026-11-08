import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { SLIDE_MS, school, slides } from '../data/content'

export function HeroSlideshow() {
  const [index, setIndex] = useState(0)
  const [videoBlocked, setVideoBlocked] = useState(false)
  const [userPlayed, setUserPlayed] = useState(false)
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const reduceMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    if (reduceMotion) return
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length)
    }, SLIDE_MS)
    return () => window.clearInterval(timer)
  }, [reduceMotion])

  useEffect(() => {
    const slide = slides[index]
    if (slide.type !== 'video') {
      setVideoBlocked(false)
      setUserPlayed(false)
      return
    }

    const video = videoRef.current
    if (!video) return

    let cancelled = false
    const failTimer = window.setTimeout(() => {
      if (!cancelled) setVideoBlocked(true)
    }, 2500)

    const tryPlay = async () => {
      try {
        video.muted = true
        video.playsInline = true
        await video.play()
        if (!cancelled) {
          window.clearTimeout(failTimer)
          setVideoBlocked(false)
        }
      } catch {
        if (!cancelled) {
          window.clearTimeout(failTimer)
          setVideoBlocked(true)
        }
      }
    }

    void tryPlay()
    return () => {
      cancelled = true
      window.clearTimeout(failTimer)
    }
  }, [index])

  const playVideo = async () => {
    const video = videoRef.current
    if (!video) return
    try {
      await video.play()
      setVideoBlocked(false)
      setUserPlayed(true)
    } catch {
      setVideoBlocked(true)
    }
  }

  return (
    <section className="hero" aria-label="Campus showcase slideshow">
      <div className="hero-media" aria-hidden="true">
        {slides.map((slide, i) => (
          <div key={slide.id} className={`hero-slide${i === index ? ' active' : ''}`}>
            {slide.type === 'image' ? (
              <img
                src={slide.src}
                alt=""
                loading={i === 0 ? 'eager' : 'lazy'}
                decoding="async"
              />
            ) : (
              <>
                <img
                  src={slide.poster}
                  alt=""
                  loading={i === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                />
                <video
                  ref={i === index ? videoRef : undefined}
                  src={slide.src}
                  poster={slide.poster}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  style={{
                    opacity: i === index && !videoBlocked ? 1 : 0,
                    transition: 'opacity 0.4s ease',
                  }}
                />
                {i === index && videoBlocked && !userPlayed ? (
                  <div className="video-fallback">
                    <button type="button" onClick={() => void playVideo()}>
                      Play campus video
                    </button>
                  </div>
                ) : null}
              </>
            )}
          </div>
        ))}
      </div>
      <div className="hero-overlay" />

      <div className="container hero-content">
        <p className="eyebrow" style={{ color: 'var(--accent)' }}>
          {school.city}
        </p>
        <h1 className="hero-brand">{school.name}</h1>
        <p className="hero-copy">{school.tagline} A publicly accessible campus experience for families in Jordan and around the world.</p>
        <div className="hero-actions">
          <Link className="btn btn-primary" to="/admissions">
            Start admissions
          </Link>
          <Link className="btn btn-ghost" to="/campus">
            Explore campus
          </Link>
        </div>
        <div className="hero-meta">
          <span className="slide-caption">{slides[index].caption}</span>
          <div className="slide-dots" role="tablist" aria-label="Slideshow slides">
            {slides.map((slide, i) => (
              <button
                key={slide.id}
                type="button"
                className={i === index ? 'active' : undefined}
                aria-label={`Show slide ${i + 1}: ${slide.caption}`}
                aria-selected={i === index}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
