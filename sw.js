// Cache the page and the transformers.js library so the test page opens offline after the first visit.
// Model files are cached by transformers.js itself (Cache API).
const CACHE = "smolvlm2-shell-v1";
const SHELL = ["./", "./index.html", "./manifest.json", "./icon.svg"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(self.clients.claim()); });
self.addEventListener("fetch", e => {
  const u = new URL(e.request.url);
  if (e.request.method !== "GET") return;
  const ok = u.origin === location.origin || u.hostname === "cdn.jsdelivr.net";
  if (!ok) return;
  e.respondWith(caches.open(CACHE).then(async c => {
    const hit = await c.match(e.request, { ignoreSearch: false });
    if (hit) return hit;
    try { const r = await fetch(e.request); if (r.ok) c.put(e.request, r.clone()); return r; }
    catch (err) { const fb = await c.match("./index.html"); if (fb && e.request.mode === "navigate") return fb; throw err; }
  }));
});
