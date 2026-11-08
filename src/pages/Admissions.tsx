import { Link } from 'react-router-dom'
import { media } from '../data/content'

export function Admissions() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Admissions</p>
          <h1>Join the Crest community</h1>
          <p>
            Applications are open across KG–Grade 12. Tour campus, meet teachers, and learn how we
            support every learner — no account needed to browse this site.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="panel">
            <h3>Simple process</h3>
            <ul className="list-clean">
              <li>
                <strong>1. Inquire</strong>
                <span className="muted">Share family details and preferred grade level.</span>
              </li>
              <li>
                <strong>2. Visit</strong>
                <span className="muted">Book a campus tour or join an open house weekend.</span>
              </li>
              <li>
                <strong>3. Apply</strong>
                <span className="muted">Submit records and complete a friendly assessment.</span>
              </li>
              <li>
                <strong>4. Enroll</strong>
                <span className="muted">Receive a decision and welcome package.</span>
              </li>
            </ul>
            <div style={{ marginTop: '1.25rem' }}>
              <Link className="btn btn-primary" to="/contact">
                Contact admissions
              </Link>
            </div>
          </div>
          <div className="media-frame">
            <img
              src={media.family}
              alt="Family walking through a bright school corridor"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>
    </>
  )
}
