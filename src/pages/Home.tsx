import { Link } from 'react-router-dom'
import { DashboardCards } from '../components/DashboardCards'
import { HeroSlideshow } from '../components/HeroSlideshow'
import { newsItems, school, values } from '../data/content'

export function Home() {
  return (
    <>
      <HeroSlideshow />
      <DashboardCards />

      <section className="section-tight">
        <div className="container split">
          <div>
            <p className="eyebrow">Why Crest</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', marginTop: 0 }}>
              Rooted in Amman. Ready for the world.
            </h2>
            <p className="muted" style={{ lineHeight: 1.65, fontSize: '1.05rem' }}>
              {school.name} blends rigorous academics with wellbeing, arts, and athletics. Families
              visit from across Jordan and internationally — no login required to explore this site
              on any device.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '1.25rem' }}>
              <Link className="btn btn-primary" to="/about">
                Our story
              </Link>
              <Link className="btn btn-outline" to="/contact">
                Plan a visit
              </Link>
            </div>
          </div>
          <div className="media-frame">
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=80"
              alt="Students collaborating around a classroom table"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Values</p>
            <h2>What guides every day</h2>
            <p>Three commitments that shape teaching, coaching, and community life.</p>
          </div>
          <div className="value-grid">
            {values.map((value) => (
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
            <p className="eyebrow">Latest</p>
            <h2>School news</h2>
            <p>Highlights from campus — always available on mobile and desktop.</p>
          </div>
          <div className="news-grid">
            {newsItems.slice(0, 2).map((item) => (
              <article key={item.title} className="news-card">
                <span className="chip">{item.date}</span>
                <h3>{item.title}</h3>
                <p>{item.excerpt}</p>
              </article>
            ))}
          </div>
          <div style={{ marginTop: '1.25rem' }}>
            <Link className="btn btn-outline" to="/news">
              All news
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
