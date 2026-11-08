import { programs } from '../data/content'

export function Academics() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Academics</p>
          <h1>Learning that travels with students</h1>
          <p>
            From early years through senior school, our continuum balances depth, creativity, and
            university readiness — with bilingual strength in English and Arabic.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="program-grid">
            {programs.map((program) => (
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
          <h3>Signature strengths</h3>
          <ul className="list-clean">
            <li>
              <strong>STEM & design thinking</strong>
              <span className="muted">Labs, makerspaces, and robotics from middle school onward.</span>
            </li>
            <li>
              <strong>Languages & culture</strong>
              <span className="muted">English and Arabic pathways with global perspectives.</span>
            </li>
            <li>
              <strong>Arts & athletics</strong>
              <span className="muted">Studios and fields treated as essential learning spaces.</span>
            </li>
            <li>
              <strong>University counseling</strong>
              <span className="muted">Personalized guidance for local and international destinations.</span>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}
