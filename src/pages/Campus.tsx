import { media } from '../data/content'

export function Campus() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Campus</p>
          <h1>Spaces that invite energy</h1>
          <p>
            Learning commons, science labs, arts studios, and athletic fields — designed for Amman’s
            climate and for students who learn by doing.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="media-frame">
            <img
              src={media.building}
              alt="Modern school building exterior"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="panel">
            <h3>Facilities</h3>
            <ul className="list-clean">
              <li>
                <strong>Learning commons</strong>
                <span className="muted">Quiet zones, collaboration pods, and a digital library.</span>
              </li>
              <li>
                <strong>Innovation labs</strong>
                <span className="muted">Robotics, coding, and design workshops.</span>
              </li>
              <li>
                <strong>Arts wing</strong>
                <span className="muted">Music rehearsal rooms, gallery, and black-box theatre.</span>
              </li>
              <li>
                <strong>Athletics</strong>
                <span className="muted">Track, courts, and a multi-purpose sports hall.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-tight" style={{ paddingBottom: '4rem' }}>
        <div className="container">
          <div className="card-grid">
            <article className="program-card">
              <span className="chip">Clubs</span>
              <h3>40+ student-led activities</h3>
              <p>Debate, Model UN, eco club, coding, journalism, and more.</p>
            </article>
            <article className="program-card">
              <span className="chip">Wellbeing</span>
              <h3>Counseling & pastoral care</h3>
              <p>Dedicated mentors and counselors supporting every grade band.</p>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}
