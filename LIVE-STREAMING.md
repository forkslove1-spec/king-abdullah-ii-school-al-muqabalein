# Live Streaming — البث المباشر

Real live video on the school website using **YouTube Live** (no custom backend / database).

## How it works

1. Authorized staff start a **real** YouTube Live broadcast (phone, tablet, or computer).
2. YouTube hosts the stream securely on Google’s infrastructure.
3. This website embeds that live feed on `/live` (`البث المباشر`) with the official YouTube player.
4. Visitors watch on the school site. When the broadcast ends, the page shows the waiting state again.

Stream keys and login credentials stay inside YouTube / OBS — **never** in this repository.

## One-time setup

1. Use a school YouTube channel with **Live streaming** enabled  
   (YouTube Studio → Settings → Channel → Feature eligibility).
2. Copy the **Channel ID** (starts with `UC…`) from  
   YouTube Studio → Settings → Channel → Advanced settings.
3. Open `src/data/liveStream.ts` and set:

```ts
youtubeChannelId: 'UCxxxxxxxxxxxxxxxxxxxxxx',
activeLiveVideoId: '', // optional; leave empty for automatic channel live embed
```

4. Rebuild and publish the site (same GitHub Pages workflow you already use).

### Optional: pin a specific live video

If you prefer a fixed embed URL for one event:

```ts
activeLiveVideoId: 'xxxxxxxxxxx', // 11-character YouTube video ID
```

## Start broadcasting from anywhere

### Phone or tablet (easiest)

1. Open the **YouTube** app signed in as a channel owner/manager.
2. Create → **Go live** (or Live).
3. Allow camera/mic, add a title, start the stream.
4. Open the school site → **البث المباشر / Live Streaming** — the live player appears when YouTube marks the channel as live.
5. End the stream in the YouTube app when finished.

### Computer (higher quality)

1. In YouTube Studio → Create → Go live → **Streaming software**.
2. Copy the **Stream key** (keep it private).
3. In **OBS Studio** (or similar): Settings → Stream → Service: YouTube → paste the stream key.
4. Start streaming in OBS, then go live in YouTube Studio if required.
5. Watchers see it on `/live` automatically via the channel live embed.

## Stop a broadcast

- End live in the YouTube app / YouTube Studio / OBS.
- The website does not need a separate “stop” action; the embed simply has no active live stream.

## Security

| Item | Where it lives |
|---|---|
| YouTube login | Only on authorized devices/accounts |
| Stream key | YouTube Studio / OBS only — never commit to git |
| Public Channel ID | Safe to put in `liveStream.ts` |
| Website visitors | Can watch only; cannot start a broadcast |

Add broadcasters as **Managers** in YouTube Studio → Settings → Permissions.

## URLs

- Live page: `/live`
- Config file: `src/data/liveStream.ts`
