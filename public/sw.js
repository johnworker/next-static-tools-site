self.addEventListener('install', (e) => { self.skipWaiting(); });
self.addEventListener('activate', (e) => { clients.claim(); });
self.addEventListener('fetch', (event) => {
  event.respondWith((async () => {
    try {
      const resp = await fetch(event.request);
      const cache = await caches.open('runtime-cache');
      cache.put(event.request, resp.clone());
      return resp;
    } catch (err) {
      const cache = await caches.open('runtime-cache');
      const cached = await cache.match(event.request);
      if (cached) return cached;
      throw err;
    }
  })());
});
