/**
 * Real YouTube Live configuration (frontend-only).
 *
 * How broadcasting works:
 * 1. Create/use a YouTube channel with Live streaming enabled (YouTube Studio).
 * 2. Only authorized channel owners/managers can start a broadcast (phone app, tablet, or OBS/desktop).
 * 3. Paste your channel ID below (starts with "UC…"). Find it in YouTube Studio → Settings → Channel → Advanced.
 * 4. When you go live, this page embeds the channel’s current live stream automatically.
 * 5. Optional: set activeLiveVideoId to lock the embed to a specific live/premiere video ID.
 *
 * Security: stream keys never belong in this repo. Keep Stream Key private inside YouTube Studio / OBS.
 */
export const liveStreamConfig = {
  /** YouTube channel ID, e.g. "UCxxxxxxxxxxxxxxxxxxxxxx" */
  youtubeChannelId: '',
  /** Optional fixed live video ID (11 chars). Leave empty to use the channel live embed. */
  activeLiveVideoId: '',
  /** Public page title helpers */
  provider: 'youtube' as const,
}

export function getLiveEmbedSrc(): string | null {
  const videoId = liveStreamConfig.activeLiveVideoId.trim()
  if (videoId) {
    return `https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}?autoplay=1&rel=0&modestbranding=1&playsinline=1`
  }
  const channelId = liveStreamConfig.youtubeChannelId.trim()
  if (channelId) {
    return `https://www.youtube-nocookie.com/embed/live_stream?channel=${encodeURIComponent(channelId)}&autoplay=1&rel=0&modestbranding=1&playsinline=1`
  }
  return null
}
