import { Link } from 'react-router-dom'
import { navLinks, school } from '../data/content'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-brand">{school.name}</div>
          <p>
            An international day school in {school.city}, preparing students for university and life
            with curiosity, character, and community.
          </p>
        </div>
        <div>
          <h3>Explore</h3>
          <div style={{ display: 'grid', gap: '0.45rem' }}>
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3>Visit</h3>
          <p>{school.address}</p>
          <p>
            <a href={`tel:${school.phone.replace(/\s/g, '')}`}>{school.phone}</a>
          </p>
          <p>
            <a href={`mailto:${school.email}`}>{school.email}</a>
          </p>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} {school.name}. Frontend-only public website.</span>
        <span>HTTPS · CDN · Globally accessible</span>
      </div>
    </footer>
  )
}
