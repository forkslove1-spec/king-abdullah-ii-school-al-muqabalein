import { Link } from 'react-router-dom'
import { media } from '../data/content'
import { useLanguage } from '../i18n/LanguageContext'

export function Admissions() {
  const { t } = useLanguage()

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">{t.admissions.eyebrow}</p>
          <h1>{t.admissions.title}</h1>
          <p>{t.admissions.intro}</p>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="panel">
            <h3>{t.admissions.processTitle}</h3>
            <ul className="list-clean">
              {t.admissions.steps.map((step) => (
                <li key={step.title}>
                  <strong>{step.title}</strong>
                  <span className="muted">{step.body}</span>
                </li>
              ))}
            </ul>
            <div style={{ marginTop: '1.25rem' }}>
              <Link className="btn btn-primary" to="/contact">
                {t.admissions.cta}
              </Link>
            </div>
          </div>
          <div className="media-frame">
            <img
              src={media.family}
              alt={t.admissions.familyAlt}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>
    </>
  )
}
