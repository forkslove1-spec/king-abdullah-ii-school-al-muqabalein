import { newsItems } from '../data/content'

export function News() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">News</p>
          <h1>Stories from campus</h1>
          <p>Updates that celebrate student achievement, community events, and campus growth.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1.5rem', paddingBottom: '4rem' }}>
        <div className="container news-grid">
          {newsItems.map((item) => (
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
