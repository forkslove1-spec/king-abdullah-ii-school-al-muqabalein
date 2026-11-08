import { useLanguage } from '../i18n/LanguageContext'

export function Academics() {
  const { t } = useLanguage()

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">{t.academics.eyebrow}</p>
          <h1>{t.academics.title}</h1>
          <p>{t.academics.intro}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="program-grid">
            {t.academics.programs.map((program) => (
              <article key={program.title} className="program-card">
                <span className="chip">{program.ages}</span>
                <h3>{program.title}</h3>
                <p>{program.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight" style={{ paddingBottom: '4rem' }}>
        <div className="container panel">
          <h3>{t.academics.strengthsTitle}</h3>
          <ul className="list-clean">
            {t.academics.strengths.map((item) => (
              <li key={item.title}>
                <strong>{item.title}</strong>
                <span className="muted">{item.body}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
