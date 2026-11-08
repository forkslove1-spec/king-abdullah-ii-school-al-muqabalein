import { media } from '../data/content'
import { useLanguage } from '../i18n/LanguageContext'

export function Campus() {
  const { t } = useLanguage()

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">{t.campus.eyebrow}</p>
          <h1>{t.campus.title}</h1>
          <p>{t.campus.intro}</p>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="media-frame">
            <img
              src={media.building}
              alt={t.campus.buildingAlt}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="panel">
            <h3>{t.campus.facilitiesTitle}</h3>
            <ul className="list-clean">
              {t.campus.facilities.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}</strong>
                  <span className="muted">{item.body}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-tight" style={{ paddingBottom: '4rem' }}>
        <div className="container">
          <div className="card-grid">
            <article className="program-card">
              <span className="chip">{t.campus.clubsChip}</span>
              <h3>{t.campus.clubsTitle}</h3>
              <p>{t.campus.clubsBody}</p>
            </article>
            <article className="program-card">
              <span className="chip">{t.campus.wellbeingChip}</span>
              <h3>{t.campus.wellbeingTitle}</h3>
              <p>{t.campus.wellbeingBody}</p>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}
