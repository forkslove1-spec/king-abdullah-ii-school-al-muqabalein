import { Link } from 'react-router-dom'
import { dashboardCards } from '../data/content'

export function DashboardCards() {
  return (
    <section className="section" aria-labelledby="dashboard-heading">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">At a glance</p>
          <h2 id="dashboard-heading">A clear view of school life</h2>
          <p>
            Key pathways for families — academics, admissions, campus culture, and our global
            Amman community — in one responsive dashboard.
          </p>
        </div>
        <div className="card-grid four">
          {dashboardCards.map((card) => (
            <Link key={card.title} to={card.to} className="dash-card">
              <div>
                <span className="metric">{card.metric}</span>
                <span className="metric-label">{card.metricLabel}</span>
              </div>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
              <span className="linkish">View section →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
