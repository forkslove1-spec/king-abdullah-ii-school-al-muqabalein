import { useLanguage } from '../i18n/LanguageContext'

/** Reserved shared sections — content cleared by request. */
export function HeritageSections(_props: { only?: 'history' | 'achievements' }) {
  return null
}

/** Reserved route: تاريخنا — content cleared by request. */
export function History() {
  const { lang, t } = useLanguage()
  const label = t.nav.find((item) => item.to === '/history')?.label ?? (lang === 'ar' ? 'تاريخنا' : 'Our History')
  return (
    <div className="empty-page" aria-label={label}>
      <h1 className="visually-hidden">{label}</h1>
    </div>
  )
}

/** Reserved route: إنجازاتنا — content cleared by request. */
export function Achievements() {
  const { lang, t } = useLanguage()
  const label =
    t.nav.find((item) => item.to === '/achievements')?.label ??
    (lang === 'ar' ? 'إنجازاتنا' : 'Our Achievements')
  return (
    <div className="empty-page" aria-label={label}>
      <h1 className="visually-hidden">{label}</h1>
    </div>
  )
}
