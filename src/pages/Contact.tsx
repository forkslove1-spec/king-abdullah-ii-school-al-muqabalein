import { useState } from 'react'
import type { FormEvent } from 'react'
import { useLanguage } from '../i18n/LanguageContext'

export function Contact() {
  const { t } = useLanguage()
  const [sent, setSent] = useState(false)

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSent(true)
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">{t.contact.eyebrow}</p>
          <h1>{t.contact.title}</h1>
          <p>{t.contact.intro}</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1.5rem', paddingBottom: '4rem' }}>
        <div className="container contact-grid">
          <div className="panel">
            <h3>{t.contact.visitTitle}</h3>
            <p>{t.school.address}</p>
            <p>
              <a href={`tel:${t.school.phone.replace(/\s/g, '')}`}>{t.school.phone}</a>
            </p>
            <p>
              <a href={`mailto:${t.school.email}`}>{t.school.email}</a>
            </p>
            <p className="muted">{t.contact.hours}</p>
          </div>

          <div className="panel">
            <h3>{t.contact.formTitle}</h3>
            {sent ? (
              <p>{t.contact.thanks}</p>
            ) : (
              <form className="contact-form" onSubmit={onSubmit}>
                <label>
                  {t.contact.fullName}
                  <input name="name" required autoComplete="name" />
                </label>
                <label>
                  {t.contact.email}
                  <input name="email" type="email" required autoComplete="email" />
                </label>
                <label>
                  {t.contact.interest}
                  <select name="interest" defaultValue="tour">
                    <option value="tour">{t.contact.interestTour}</option>
                    <option value="admissions">{t.contact.interestAdmissions}</option>
                    <option value="general">{t.contact.interestGeneral}</option>
                  </select>
                </label>
                <label>
                  {t.contact.message}
                  <textarea name="message" required />
                </label>
                <button className="btn btn-primary" type="submit">
                  {t.contact.submit}
                </button>
                <p className="form-note">{t.contact.formNote}</p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
