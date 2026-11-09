import { useLanguage } from '../i18n/LanguageContext'

export function About() {
  const { t } = useLanguage()

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">{t.about.eyebrow}</p>
          <h1>{t.about.title}</h1>
          <p>
            {t.school.name} {t.about.intro}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="media-frame">
            <img
              src={`${import.meta.env.BASE_URL}media/school/opening.jpg`}
              alt={t.about.courtyardAlt}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="panel">
            <h3>{t.about.missionTitle}</h3>
            <p className="muted">{t.about.missionBody}</p>
            <h3>{t.about.communityTitle}</h3>
            <p className="muted">{t.about.communityBody}</p>
          </div>
        </div>
      </section>

      <section className="section-tight" style={{ paddingBottom: '4rem' }}>
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">{t.about.principlesEyebrow}</p>
            <h2>{t.about.principlesTitle}</h2>
          </div>
          <div className="value-grid">
            {t.values.map((value) => (
              <article key={value.title} className="value-card">
                <h3>{value.title}</h3>
                <p>{value.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
