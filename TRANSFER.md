# TRANSFER.md - PLAY (YouTube-style video platform, React + Vite)

## Project
Frontend built from Figma file `ljlYiC5w3WMq4noBT9Tj9n` ("PLAY"). Dark theme, purple accent #AE7AFF, Inter font.
All data is local/mock (no backend). Stack: React, Vite, React Router, JS/JSX, plain CSS.

## Current Status: CHECKPOINT 2 (partial) - NOT RUNNABLE YET
`src/App.jsx` and `src/main.jsx` are NOT written, several pages are missing. Nothing has been executed or tested.

## Written but UNVERIFIED (never run)
- config: package.json, vite.config.js, index.html, public/favicon.svg
- data: channels, videos, playlists, comments, tweets
- utils: format.js (quick-tested in node), storage.js, search.js; hooks: useLocalStorage, useCatalog, useDocumentTitle
- context: AuthContext (mock login, requireAuth(action(user))), LibraryContext (likes, subs, history, playlists, comments, tweets)
- components: Icon, Logo, Avatar, Button, Menu, Navbar, Sidebar(+navItems), MobileNav, Layout, Modal, AuthModal, SaveModal, EditProfileModal, EmptyState, ErrorBoundary, VideoCard (grid/channel/row/compact), VideoGrid, VideoPlayer, CommentSection, Tabs, PlaylistCard
- pages: Home, Search, Watch
- scripts/generate-assets.mjs -> public/thumbs (16 svg), public/avatars (12 svg); public/media/sample.webm + sample.mp4 (ffmpeg-generated, 12s)

## Still to write (next steps, in order)
1. `src/components/ChannelHeader/ChannelHeader.jsx` (+css): 240px gradient banner, 168px avatar, name/handle/"600K Subscribers - 220 Subscribed", Follow/Following or Edit (owner)
2. `src/pages/Channel.jsx` (route `/channel/:channelId/:tab?`, tabs videos|playlist|tweets|following; reused by `/my-content/:tab?` with basePath). Tweets: seed + user tweets, like/dislike, owner composer. Following empty state: "No people subscribed".
3. pages: Liked, History (Clear history), Collection (playlist grid + create), Playlist (`/playlist/:playlistId`, card left + rows right), Subscribers (filter input + Follow/Following rows), MyContent (login prompt if guest), Support, Settings, NotFound
4. `src/routes` / `src/App.jsx` (Routes inside <Layout/>, catch-all 404), `src/main.jsx` (BrowserRouter > AuthProvider > LibraryProvider > App), import `./index.css`
5. Run + test; fix; responsive check at 1440/1366/768/390/360; PROGRESS.md/TRANSFER.md update

## Routes planned
/, /search?q=, /watch/:videoId, /channel/:channelId/:tab?, /my-content/:tab?, /liked, /history, /collection, /playlist/:playlistId, /subscribers, /support, /settings, *

## LocalStorage keys (prefix `play:`)
user, liked, disliked, subscriptions, history, playlists (default id `watch-later`), comments, tweets, tweetReactions

## Known limitations / honesty notes
- Sandbox had NO network: `npm install` returned 403, so Vite/React Router were never installed and `npm run dev/build` were never run. package.json versions are unverified.
- Figma MCP call limit (Starter plan) was hit. Inspected via screenshots: Home, Search results, Home/Search error, Watch, Channel Videos/Tweets/Following (guest + owner). NOT inspected visually: mobile frames, Sign up/Log in frame, modals, edit-default frames, dashboard (metrics/table, "Nav Bar v5"), playlist tab, profile-library. Those parts are inferred.
- Real Figma thumbnails/avatars could not be downloaded (no network) -> generated SVG placeholders. Replace files in public/thumbs and public/avatars.
- Auth is a local mock (no password). Library data is per browser, not per account.
- Video upload/edit-content is not implemented (edit frames not seen).
- Typo in Figma "No videos avaliable" corrected to "available".

## Do not rebuild
Everything listed under "Written" unless testing shows a bug.
