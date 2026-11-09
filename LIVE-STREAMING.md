# Live Streaming — Facebook Live

The website Live page (`/live`) embeds **Facebook Live** from the school page:

- Page: https://www.facebook.com/100075648769222  
- Share link: https://www.facebook.com/share/14ubdQ1BNHE/

## Show a live broadcast on the site

1. Start Facebook Live on the school page (phone / tablet / computer) as a Page admin.
2. Open the live video → **Share** → **Copy link**.
3. Paste that permalink into `activeLiveVideoUrl` in `src/data/liveStream.ts`.
4. Rebuild and publish the site (`docs/` / GitHub Pages).
5. Visitors see the live player on **البث المباشر**.
6. When finished, clear `activeLiveVideoUrl` (empty string) and republish — the page shows the offline message.

Never store Facebook passwords or access tokens in the repository.
