import { useLanguage } from '../i18n/LanguageContext'

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { lang, setLang, t } = useLanguage()

  return (
    <div
      className={`lang-switcher${compact ? ' compact' : ''}`}
      role="group"
      aria-label={t.a11y.langSwitcher}
    >
      <button
        type="button"
        className={lang === 'en' ? 'active' : undefined}
        aria-pressed={lang === 'en'}
        onClick={() => setLang('en')}
      >
        EN
      </button>
      <button
        type="button"
        className={lang === 'ar' ? 'active' : undefined}
        aria-pressed={lang === 'ar'}
        onClick={() => setLang('ar')}
      >
        عربي
      </button>
    </div>
  )
}
