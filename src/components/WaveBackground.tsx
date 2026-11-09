import { useEffect, useRef } from 'react'

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

function applyPalette(node: HTMLElement, palette: WavePalette) {
  node.style.setProperty('--wave-deep', palette.deep)
  node.style.setProperty('--wave-mid', palette.mid)
  node.style.setProperty('--wave-accent', palette.accent)
  node.style.setProperty('--wave-light', palette.light)
  node.style.setProperty('--wave-glow', palette.glow)
}

export function WaveBackground() {
  const stageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const stage = stageRef.current
    if (!stage) return

    const shell = stage.closest('.inner-shell') as HTMLElement | null
    const targets = [stage, shell].filter(Boolean) as HTMLElement[]
    let index = 0

    for (const target of targets) applyPalette(target, WAVE_PALETTES[0])

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return

    const id = window.setInterval(() => {
      index = (index + 1) % WAVE_PALETTES.length
      const palette = WAVE_PALETTES[index]
      for (const target of targets) applyPalette(target, palette)
    }, CYCLE_MS)

    return () => window.clearInterval(id)
  }, [])

  return (
    <div className="wave-stage" ref={stageRef} aria-hidden="true">
      <div className="wave-base" />
      <div className="wave-glow wave-glow-a" />
      <div className="wave-glow wave-glow-b" />
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

      <div className="wave-veil" />
      <div className="wave-vignette" />
    </div>
  )
}
