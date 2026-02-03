const CACHE_NAME = "my-first-app-v2";
const ASSETS = ["./", "./index.html", "./manifest.json", "./sw.js", "./app.js"];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});
