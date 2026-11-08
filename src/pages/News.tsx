import { useLanguage } from '../i18n/LanguageContext'

export function News() {
  const { t } = useLanguage()

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">{t.news.eyebrow}</p>
          <h1>{t.news.title}</h1>
          <p>{t.news.intro}</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1.5rem', paddingBottom: '4rem' }}>
        <div className="container news-grid">
          {t.news.items.map((item) => (
            <article key={item.title} className="news-card">
              <span className="chip">{item.date}</span>
              <h3>{item.title}</h3>
              <p>{item.excerpt}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
