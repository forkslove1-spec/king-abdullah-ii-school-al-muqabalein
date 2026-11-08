import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { Footer } from './Footer'
import { Header } from './Header'

export function Layout() {
  const location = useLocation()
  const { t } = useLanguage()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="app-shell">
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
