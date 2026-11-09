import { useLanguage } from '../i18n/LanguageContext'

/** Reserved route: مسيرة المدرسة — content cleared by request. */
export function SchoolStory() {
  const { lang, t } = useLanguage()
  const label = t.nav.find((item) => item.to === '/about')?.label ?? (lang === 'ar' ? 'مسيرة المدرسة' : 'School Journey')
  return (
    <div className="empty-page" aria-label={label}>
      <h1 className="visually-hidden">{label}</h1>
    </div>
  )
}
