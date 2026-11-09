import { getLiveEmbedSrc, liveStreamConfig } from '../data/liveStream'
import { useLanguage } from '../i18n/LanguageContext'

export function LiveStream() {
  const { lang } = useLanguage()
  const ar = lang === 'ar'
  const embedSrc = getLiveEmbedSrc()
  const configured = Boolean(embedSrc)

  return (
    <div className="live-page">
      <section className="page-hero live-hero">
        <div className="container">
          <p className="eyebrow">{ar ? 'من قلب الحدث' : 'FROM THE HEART OF THE MOMENT'}</p>
          <h1>{ar ? 'البث المباشر' : 'Live Streaming'}</h1>
          <p>
            {ar
              ? 'شاهد فعاليات المدرسة لحظة بلحظة عبر بثّ حيّ حقيقي على يوتيوب، يُعرض مباشرة داخل موقع المدرسة.'
              : 'Watch school events in real time through a genuine YouTube Live broadcast, embedded directly on the school website.'}
          </p>
        </div>
      </section>

      <section className="section live-stage-section">
        <div className="container">
          <div className="live-stage">
            {configured ? (
              <div className="live-frame">
                <iframe
                  title={ar ? 'البث المباشر للمدرسة' : 'School live stream'}
                  src={embedSrc!}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            ) : (
              <div className="live-offline" role="status">
                <span className="live-pulse" aria-hidden="true" />
                <h2>{ar ? 'لا يوجد بثّ نشط حالياً' : 'No live broadcast right now'}</h2>
                <p>
                  {ar
                    ? 'ضع معرّف قناة يوتيوب في ملف الإعدادات لعرض البث الحي تلقائياً عند بدء الإرسال.'
                    : 'Add your YouTube channel ID in the stream config to show the live broadcast automatically when you go live.'}
                </p>
                <code>src/data/liveStream.ts</code>
              </div>
            )}
          </div>

          <div className="live-guide">
            <article>
              <p className="eyebrow">{ar ? 'كيف يعمل النظام' : 'HOW IT WORKS'}</p>
              <h3>{ar ? 'بثّ حقيقي عبر YouTube Live' : 'Real broadcasting with YouTube Live'}</h3>
              <ol>
                <li>
                  {ar
                    ? 'فعّل البث المباشر من YouTube Studio على قناة المدرسة (حساب موثّق ومخوّل فقط).'
                    : 'Enable Live streaming in YouTube Studio on the school channel (authorized accounts only).'}
                </li>
                <li>
                  {ar
                    ? 'انسخ Channel ID (يبدأ بـ UC) إلى youtubeChannelId داخل src/data/liveStream.ts ثم أعد نشر الموقع.'
                    : 'Copy the Channel ID (starts with UC) into youtubeChannelId in src/data/liveStream.ts, then redeploy the site.'}
                </li>
                <li>
                  {ar
                    ? 'ابدأ البث من الهاتف أو الجهاز اللوحي عبر تطبيق YouTube، أو من الحاسوب عبر OBS باستخدام Stream Key من Studio.'
                    : 'Go live from a phone/tablet with the YouTube app, or from a computer with OBS using the Stream Key from Studio.'}
                </li>
                <li>
                  {ar
                    ? 'عند بدء البث، تظهر القناة مباشرة في هذه الصفحة عبر مشغّل يوتيوب المضمّن — دون قاعدة بيانات أو خادم خلفي.'
                    : 'When the broadcast starts, it appears on this page through the embedded YouTube player — no database or custom backend.'}
                </li>
                <li>
                  {ar
                    ? 'لإيقاف العرض: أوقف البث من YouTube/OBS. الصفحة تعود لحالة الانتظار حتى البث التالي.'
                    : 'To stop: end the stream in YouTube/OBS. This page returns to waiting until the next broadcast.'}
                </li>
              </ol>
            </article>
            <article>
              <p className="eyebrow">{ar ? 'الأمان والصلاحيات' : 'SECURITY & ACCESS'}</p>
              <h3>{ar ? 'من يمكنه البث؟' : 'Who can broadcast?'}</h3>
              <ul>
                <li>
                  {ar
                    ? 'فقط مالكو القناة أو المديرون المضافون في YouTube Studio.'
                    : 'Only channel owners or managers added in YouTube Studio.'}
                </li>
                <li>
                  {ar
                    ? 'مفتاح البث (Stream Key) سرّي — لا يُوضع في موقع GitHub Pages أبداً.'
                    : 'The Stream Key is secret — never place it in the GitHub Pages website.'}
                </li>
                <li>
                  {ar
                    ? 'اختياري: ضع activeLiveVideoId لفيديو بث محدد إذا أردت تثبيت رابط عرض معيّن.'
                    : 'Optional: set activeLiveVideoId to pin a specific live video embed.'}
                </li>
              </ul>
              <p className="live-config-status">
                {ar ? 'حالة الإعداد:' : 'Config status:'}{' '}
                <strong>
                  {configured
                    ? ar
                      ? 'مفعّل'
                      : 'Configured'
                    : ar
                      ? 'بانتظار Channel ID'
                      : 'Waiting for Channel ID'}
                </strong>
                {liveStreamConfig.youtubeChannelId
                  ? ` · ${liveStreamConfig.youtubeChannelId.slice(0, 8)}…`
                  : ''}
              </p>
            </article>
          </div>
        </div>
      </section>
    </div>
  )
}
