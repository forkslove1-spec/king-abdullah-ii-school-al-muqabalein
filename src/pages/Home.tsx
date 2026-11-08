import { Link } from 'react-router-dom'
import { DashboardCards } from '../components/DashboardCards'
import { HeroSlideshow } from '../components/HeroSlideshow'
import { media } from '../data/content'
import { useLanguage } from '../i18n/LanguageContext'

export function Home() {
  const { t } = useLanguage()

  return (
    <>
      <HeroSlideshow />
      <DashboardCards />

      <section className="section-tight">
        <div className="container split">
          <div>
            <p className="eyebrow">{t.home.whyEyebrow}</p>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                marginTop: 0,
              }}
            >
              {t.home.whyTitle}
            </h2>
            <p className="muted" style={{ lineHeight: 1.65, fontSize: '1.05rem' }}>
              {t.school.name} {t.home.whyBody}
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '1.25rem' }}>
              <Link className="btn btn-primary" to="/about">
                {t.home.whyStory}
              </Link>
              <Link className="btn btn-outline" to="/contact">
                {t.home.whyVisit}
              </Link>
            </div>
          </div>
          <div className="media-frame">
            <img
              src={media.classroom}
              alt={t.home.classroomAlt}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">{t.home.valuesEyebrow}</p>
            <h2>{t.home.valuesTitle}</h2>
            <p>{t.home.valuesIntro}</p>
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

      <section className="section-tight" style={{ paddingBottom: '4.5rem' }}>
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">{t.home.newsEyebrow}</p>
            <h2>{t.home.newsTitle}</h2>
            <p>{t.home.newsIntro}</p>
          </div>
          <div className="news-grid">
            {t.news.items.slice(0, 2).map((item) => (
              <article key={item.title} className="news-card">
                <span className="chip">{item.date}</span>
                <h3>{item.title}</h3>
                <p>{item.excerpt}</p>
              </article>
            ))}
          </div>
          <div style={{ marginTop: '1.25rem' }}>
            <Link className="btn btn-outline" to="/news">
              {t.home.allNews}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
