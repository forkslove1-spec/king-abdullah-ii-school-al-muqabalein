import { starStudents } from '../data/stars'
import { useLanguage } from '../i18n/LanguageContext'

export function StarsOfExcellence() {
  const { lang } = useLanguage()
  const ar = lang === 'ar'

  return (
    <div className="stars-page">
      <section className="page-hero stars-hero">
        <div className="container">
          <p className="eyebrow">{ar ? 'تكريم التفوّق' : 'HONOURING EXCELLENCE'}</p>
          <h1>{ar ? 'نجوم التميز' : 'Stars of Excellence'}</h1>
          <p>
            {ar
              ? 'منصةٌ تليق بأسماء صنعت الفرق؛ نحتفي بطلبة مدرسة الملك عبدالله الثاني للتميز – المقابلين الذين رفعوا راية التفوّق علماً وخلقاً وإبداعاً.'
              : 'A showcase worthy of those who rise higher — honouring students of King Abdullah II School for Excellence – Al-Muqabalein who lead in knowledge, character, and creativity.'}
          </p>
        </div>
      </section>

      <section className="section stars-constellation">
        <div className="container">
          <div className="section-heading-row stars-heading">
            <div>
              <p className="eyebrow">{ar ? 'مجموعة هذا العام' : 'THIS YEAR’S CONSTELLATION'}</p>
              <h2>{ar ? 'أسماء تُضيء سماء المدرسة' : 'Names that light our sky'}</h2>
            </div>
          </div>
          <div className="stars-grid">
            {starStudents.map((star, index) => (
              <article key={star.id} className="star-card" style={{ animationDelay: `${index * 0.12}s` }}>
                <div className="star-orb" aria-hidden="true">
                  <span>★</span>
                </div>
                <p className="star-year">{star.year}</p>
                <h3>{ar ? star.nameAr : star.nameEn}</h3>
                <p className="star-field">{ar ? star.fieldAr : star.fieldEn}</p>
                <p className="star-note">{ar ? star.noteAr : star.noteEn}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
