const CACHE_VERSION = "v4.0-20261028";
// Service Worker - PWA 离线缓存
// v4.0：题库/页面不再永久缓存旧版
//   - quiz-data.js   → stale-while-revalidate（先回旧题，后台拉新，下次即新题）
//   - index.html     → network-first（有网先取新版，断网回退缓存）
//   - 其余静态资源   → cache-first（离线优先）
const CACHE_NAME = 'erjian-quiz-v4.0';
const urlsToCache = [
  './',
  './index.html',
  './quiz-data.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  const path = url.pathname;

  // 1) 题库数据：stale-while-revalidate
  if (path.endsWith('/quiz-data.js')) {
    event.respondWith(
      caches.match(event.request).then(cached => {
        const network = fetch(event.request).then(res => {
          if (res && res.ok) {
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, res.clone()));
          }
          return res;
        }).catch(() => cached);
        return cached || network;
      })
    );
    return;
  }

  // 2) 页面入口：network-first（有网用新版，断网用缓存）
  if (path === '/' || path.endsWith('/index.html')) {
    event.respondWith(
      fetch(event.request).then(res => {
        if (res && res.ok) {
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, res.clone()));
        }
        return res;
      }).catch(() => caches.match(event.request))
    );
    return;
  }

  // 3) 其余：cache-first，离线兜底
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(res => {
        if (res && res.ok && (url.origin === self.location.origin)) {
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, res.clone()));
        }
        return res;
      });
    })
  );
});
