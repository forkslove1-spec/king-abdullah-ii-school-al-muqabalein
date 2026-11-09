import { getLiveEmbedSrc } from '../data/liveStream'
import { useLanguage } from '../i18n/LanguageContext'

export function LiveStream() {
  const { lang } = useLanguage()
  const ar = lang === 'ar'
  const embedSrc = getLiveEmbedSrc()

  return (
    <div className="live-page live-page-clean">
      <section className="page-hero live-hero live-hero-minimal">
        <div className="container">
          <h1>{ar ? 'البث المباشر' : 'Live Streaming'}</h1>
        </div>
      </section>

      <section className="section live-stage-section">
        <div className="container">
          <div className="live-stage">
            {embedSrc ? (
              <div className="live-frame">
                <iframe
                  title={ar ? 'البث المباشر من صفحة المدرسة على فيسبوك' : 'School Facebook Live stream'}
                  src={embedSrc}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share; fullscreen"
                  allowFullScreen
                  scrolling="no"
                  frameBorder={0}
                />
              </div>
            ) : (
              <div className="live-offline" role="status">
                <span className="live-pulse" aria-hidden="true" />
                <h2>البث المباشر غير متاح حالياً</h2>
                <p> ترقّبوا بثّ فعاليات المدرسة عبر صفحتنا على فيسبوك قريباً.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
