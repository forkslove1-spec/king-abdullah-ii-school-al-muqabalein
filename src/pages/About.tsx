import { media, school, values } from '../data/content'

export function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">About</p>
          <h1>A modern school with Ammani roots</h1>
          <p>
            {school.name} is an international day school serving families across Jordan and abroad.
            We combine academic ambition with belonging, wellbeing, and civic responsibility.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="media-frame">
            <img
              src={media.courtyard}
              alt="School courtyard with trees and pathways"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="panel">
            <h3>Our mission</h3>
            <p className="muted">
              To educate confident, compassionate learners who think critically, communicate
              clearly, and contribute meaningfully — in Amman and wherever life takes them.
            </p>
            <h3>Our community</h3>
            <p className="muted">
              Students represent 35+ nationalities. Teachers collaborate across disciplines.
              Families are partners in every stage of the journey.
            </p>
          </div>
        </div>
      </section>

      <section className="section-tight" style={{ paddingBottom: '4rem' }}>
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Principles</p>
            <h2>How we show up</h2>
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
    </>
  )
}
