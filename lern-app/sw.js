// ══════════════════════════════════════════════════════════
// sw.js — Service Worker: Cache-first für die App-Shell, Network-first
// mit Cache-Fallback für ../app/data.js (kann unabhängig vom Lern-App-
// Release aktualisiert werden). Siehe 07_LERNAPP_KONZEPT.md §10, Plan §7.
//
// Release-Prozedur: CACHE_NAME hochzählen, um alte Caches zu invalidieren.
// ══════════════════════════════════════════════════════════
const CACHE_NAME = 'lernapp-shell-v2';

const SHELL_FILES = [
  './index.html',
  './lern.css',
  './lern-data.js',
  './lern-quiz-items.js',
  './storage.js',
  './leitner.js',
  './shared/render-kit.js',
  './shared/flow-diagram.js',
  './quiz-formats.js',
  './lern-engine.js',
  './main.js',
  './manifest.json',
  './assets/icons/apple-touch-icon-180.png',
  './assets/icons/icon-192.png',
  './assets/icons/icon-512.png',
  './assets/icons/icon-512-maskable.png',
  './assets/fonts/dm-serif-display.woff2',
  './assets/fonts/dm-sans-regular.woff2',
  './assets/fonts/dm-sans-medium.woff2',
  './assets/fonts/dm-sans-bold.woff2'
];

const DATA_URL = '../app/data.js';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll([...SHELL_FILES, DATA_URL]))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((names) =>
      Promise.all(names.filter((n) => n !== CACHE_NAME).map((n) => caches.delete(n)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const url = event.request.url;
  const isDataJs = url.endsWith('/app/data.js');

  if (isDataJs) {
    // Network-first: data.js ist die Wiki-Quelle und kann unabhängig aktualisiert
    // werden — bei Online-Zugriff immer die aktuelle Version holen, sonst Cache-Fallback.
    event.respondWith(
      fetch(event.request)
        .then((res) => {
          const clone = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          return res;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});
