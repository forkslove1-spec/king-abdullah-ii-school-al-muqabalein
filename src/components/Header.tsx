import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { LanguageSwitcher } from './LanguageSwitcher'

export function Header() {
  const [open, setOpen] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 920) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const close = () => setOpen(false)

  return (
    <header className="site-header">
      <div className="container nav-bar">
        <NavLink
          to="/"
          className="brand"
          onClick={close}
          aria-label={`${t.school.name} ${t.a11y.home}`}
        >
          <span className="brand-mark" aria-hidden="true">
            {t.school.mark}
          </span>
          <span className="brand-text">
            <span className="brand-full">{t.school.name}</span>
            <span className="brand-short">{t.school.shortName}</span>
          </span>
        </NavLink>

        <nav className="nav-links" aria-label={t.a11y.primaryNav}>
          {t.nav.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
              end={link.to === '/'}
            >
              {link.label}
            </NavLink>
          ))}
          <LanguageSwitcher />
        </nav>

        <div className="nav-actions">
          <LanguageSwitcher compact />
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t.a11y.closeMenu : t.a11y.openMenu}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
          </button>
        </div>
      </div>

      <div id="mobile-nav" className={`mobile-panel${open ? ' open' : ''}`}>
        <div className="container">
          <nav aria-label={t.a11y.mobileNav}>
            {t.nav.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={close}
                className={({ isActive }) => (isActive ? 'active' : undefined)}
                end={link.to === '/'}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
