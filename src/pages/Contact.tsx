import { useState } from 'react'
import type { FormEvent } from 'react'
import { school } from '../data/content'

export function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSent(true)
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Contact</p>
          <h1>We would love to meet you</h1>
          <p>
            Reach admissions, book a tour, or ask a question. This form stays on the frontend —
            submissions are simulated for this public demo site.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1.5rem', paddingBottom: '4rem' }}>
        <div className="container contact-grid">
          <div className="panel">
            <h3>Visit us</h3>
            <p>{school.address}</p>
            <p>
              <a href={`tel:${school.phone.replace(/\s/g, '')}`}>{school.phone}</a>
            </p>
            <p>
              <a href={`mailto:${school.email}`}>{school.email}</a>
            </p>
            <p className="muted">Sunday–Thursday · 8:00–15:30 (Jordan time)</p>
          </div>

          <div className="panel">
            <h3>Send a message</h3>
            {sent ? (
              <p>
                Thank you — your inquiry is ready to share with admissions. For a live production
                workflow, connect this frontend form to your preferred email or form service.
              </p>
            ) : (
              <form className="contact-form" onSubmit={onSubmit}>
                <label>
                  Full name
                  <input name="name" required autoComplete="name" />
                </label>
                <label>
                  Email
                  <input name="email" type="email" required autoComplete="email" />
                </label>
                <label>
                  Interest
                  <select name="interest" defaultValue="tour">
                    <option value="tour">Campus tour</option>
                    <option value="admissions">Admissions</option>
                    <option value="general">General question</option>
                  </select>
                </label>
                <label>
                  Message
                  <textarea name="message" required />
                </label>
                <button className="btn btn-primary" type="submit">
                  Submit inquiry
                </button>
                <p className="form-note">Frontend only — no backend or login required.</p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
