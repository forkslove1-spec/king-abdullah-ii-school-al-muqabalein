import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { Footer } from './Footer'
import { Header } from './Header'
import { useWavePaletteStyle, WaveBackground } from './WaveBackground'

function InnerShell() {
  const { t } = useLanguage()
  const waveStyle = useWavePaletteStyle()

  return (
    <div className="app-shell inner-shell" style={waveStyle}>
      <WaveBackground />
      <a className="skip-link" href="#main">
        {t.common.skip}
      </a>
      <Header />
      <main id="main" className="site-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

function HomeShell() {
  const { t } = useLanguage()

  return (
    <div className="app-shell home-shell">
      <a className="skip-link" href="#main">
        {t.common.skip}
      </a>
      <Header />
      <main id="main" className="site-main">
        <Outlet />
      </main>
    </div>
  )
}

export function Layout() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return isHome ? <HomeShell /> : <InnerShell />
}
