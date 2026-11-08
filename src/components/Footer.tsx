import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-brand">{t.school.name}</div>
          <p>{t.footer.blurb.replace('{city}', t.school.city)}</p>
        </div>
        <div>
          <h3>{t.common.explore}</h3>
          <div style={{ display: 'grid', gap: '0.45rem' }}>
            {t.nav.map((link) => (
              <Link key={link.to} to={link.to}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3>{t.common.visit}</h3>
          <p>{t.school.address}</p>
          <p>
            <a href={`tel:${t.school.phone.replace(/\s/g, '')}`}>{t.school.phone}</a>
          </p>
          <p>
            <a href={`mailto:${t.school.email}`}>{t.school.email}</a>
          </p>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} {t.school.name}. {t.common.frontendOnly}
        </span>
        <span>{t.common.httpsNote}</span>
      </div>
    </footer>
  )
}
