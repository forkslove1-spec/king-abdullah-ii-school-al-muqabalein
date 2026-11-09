/**
 * Facebook Live configuration (frontend-only).
 *
 * School page:
 * https://www.facebook.com/100075648769222
 * (share link: https://www.facebook.com/share/14ubdQ1BNHE/)
 *
 * While broadcasting on Facebook Live, paste the live video permalink into
 * `activeLiveVideoUrl` (Share on the live video → Copy link), then redeploy.
 * Leave it empty when offline — the page shows the elegant offline message.
 *
 * Never put Facebook passwords or access tokens in this repository.
 */
export const liveStreamConfig = {
  provider: 'facebook' as const,
  facebookPageId: '100075648769222',
  facebookPageUrl: 'https://www.facebook.com/100075648769222',
  facebookShareUrl: 'https://www.facebook.com/share/14ubdQ1BNHE/',
  /** Live video permalink from Facebook while the school is broadcasting. */
  activeLiveVideoUrl: '',
}

export function getLiveEmbedSrc(): string | null {
  const videoUrl = liveStreamConfig.activeLiveVideoUrl.trim()
  if (!videoUrl) return null

  const params = new URLSearchParams({
    href: videoUrl,
    show_text: 'false',
    width: '1280',
    height: '720',
    autoplay: 'true',
    allowfullscreen: 'true',
  })

  return `https://www.facebook.com/plugins/video.php?${params.toString()}`
}
