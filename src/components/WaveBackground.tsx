import { useEffect, useState, type CSSProperties } from 'react'

type WavePalette = {
  deep: string
  mid: string
  accent: string
  light: string
  glow: string
}

/** Harmonious premium palettes — each cycle is a distinct mood. */
const WAVE_PALETTES: WavePalette[] = [
  {
    deep: '#071526',
    mid: '#0d4a5c',
    accent: '#c9a35a',
    light: '#e8f6ff',
    glow: '#5ed7e8',
  },
  {
    deep: '#0a1228',
    mid: '#1a3f8f',
    accent: '#7ec8ff',
    light: '#f2f7ff',
    glow: '#4f8dff',
  },
  {
    deep: '#071c18',
    mid: '#0f5c4a',
    accent: '#d4c28a',
    light: '#e8fff6',
    glow: '#3fd6a8',
  },
  {
    deep: '#1a0f12',
    mid: '#6b2a32',
    accent: '#e0a878',
    light: '#fff4ea',
    glow: '#ff8f6b',
  },
  {
    deep: '#0c1422',
    mid: '#2a4568',
    accent: '#b7c9d9',
    light: '#f5f8fc',
    glow: '#89b4d8',
  },
  {
    deep: '#14101c',
    mid: '#5a3a55',
    accent: '#e8c4a8',
    light: '#fff0f5',
    glow: '#d98bb0',
  },
  {
    deep: '#081820',
    mid: '#156b78',
    accent: '#9be8c8',
    light: '#eefcff',
    glow: '#42d4c8',
  },
  {
    deep: '#180e12',
    mid: '#7a1f2e',
    accent: '#f0d7a8',
    light: '#fff8ee',
    glow: '#e85a5a',
  },
]

const CYCLE_MS = 5000

export function useWavePaletteStyle(): CSSProperties {
  const [index, setIndex] = useState(0)
  const palette = WAVE_PALETTES[index]

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return

    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % WAVE_PALETTES.length)
    }, CYCLE_MS)

    return () => window.clearInterval(id)
  }, [])

  return {
    '--wave-deep': palette.deep,
    '--wave-mid': palette.mid,
    '--wave-accent': palette.accent,
    '--wave-light': palette.light,
    '--wave-glow': palette.glow,
  } as CSSProperties
}

export function WaveBackground() {
  return (
    <div className="wave-stage" aria-hidden="true">
      <div className="wave-base" />
      <div className="wave-glow wave-glow-a" />
      <div className="wave-glow wave-glow-b" />
      <div className="wave-glow wave-glow-c" />
      <div className="wave-sheen" />

      <div className="wave-band wave-band-1">
        <svg viewBox="0 0 1440 220" preserveAspectRatio="none" focusable="false">
          <path
            className="wave-path-fill"
            d="M0,120 C180,40 360,200 540,120 C720,40 900,200 1080,120 C1260,40 1380,160 1440,110 L1440,220 L0,220 Z"
          />
        </svg>
        <svg viewBox="0 0 1440 220" preserveAspectRatio="none" focusable="false">
          <path
            className="wave-path-fill"
            d="M0,120 C180,40 360,200 540,120 C720,40 900,200 1080,120 C1260,40 1380,160 1440,110 L1440,220 L0,220 Z"
          />
        </svg>
      </div>

      <div className="wave-band wave-band-2">
        <svg viewBox="0 0 1440 240" preserveAspectRatio="none" focusable="false">
          <path
            className="wave-path-mid"
            d="M0,140 C220,60 380,210 560,130 C760,40 940,210 1120,130 C1280,70 1380,170 1440,130 L1440,240 L0,240 Z"
          />
        </svg>
        <svg viewBox="0 0 1440 240" preserveAspectRatio="none" focusable="false">
          <path
            className="wave-path-mid"
            d="M0,140 C220,60 380,210 560,130 C760,40 940,210 1120,130 C1280,70 1380,170 1440,130 L1440,240 L0,240 Z"
          />
        </svg>
      </div>

      <div className="wave-band wave-band-3">
        <svg viewBox="0 0 1440 260" preserveAspectRatio="none" focusable="false">
          <path
            className="wave-path-crest"
            d="M0,150 C200,80 340,220 520,150 C700,80 880,220 1060,140 C1240,70 1360,180 1440,140 L1440,260 L0,260 Z"
          />
        </svg>
        <svg viewBox="0 0 1440 260" preserveAspectRatio="none" focusable="false">
          <path
            className="wave-path-crest"
            d="M0,150 C200,80 340,220 520,150 C700,80 880,220 1060,140 C1240,70 1360,180 1440,140 L1440,260 L0,260 Z"
          />
        </svg>
      </div>

      <div className="wave-veil" />
      <div className="wave-vignette" />
    </div>
  )
}
