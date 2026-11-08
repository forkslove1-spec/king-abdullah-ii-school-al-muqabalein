import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { navLinks, school } from '../data/content'

export function Header() {
  const [open, setOpen] = useState(false)

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
        <NavLink to="/" className="brand" onClick={close} aria-label={`${school.name} home`}>
          <span className="brand-mark" aria-hidden="true">
            AC
          </span>
          <span>{school.name}</span>
        </NavLink>

        <nav className="nav-links" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
              end={link.to === '/'}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
        </button>
      </div>

      <div id="mobile-nav" className={`mobile-panel${open ? ' open' : ''}`}>
        <div className="container">
          <nav aria-label="Mobile">
            {navLinks.map((link) => (
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
