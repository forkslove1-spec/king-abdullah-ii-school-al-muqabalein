import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'

export function DashboardCards() {
  const { t } = useLanguage()

  return (
    <section className="section" aria-labelledby="dashboard-heading">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">{t.dashboard.eyebrow}</p>
          <h2 id="dashboard-heading">{t.dashboard.title}</h2>
          <p>{t.dashboard.intro}</p>
        </div>
        <div className="card-grid four">
          {t.dashboard.cards.map((card) => (
            <Link key={card.title} to={card.to} className="dash-card">
              <div>
                <span className="metric">{card.metric}</span>
                <span className="metric-label">{card.metricLabel}</span>
              </div>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
              <span className="linkish">{t.common.viewSection}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
