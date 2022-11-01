
// This is the "Offline page" service worker

importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

const CACHE = "sw-page";

// TODO: replace the following with the correct offline fallback page i.e.: const offlineFallbackPage = "offline.html";

const resourcesTo Precache = {
'/',
'./indexApp.html',
'/javascript_nova/gzip1041-2.js',
'./gzipea95.js',
'./gzip1041.js',
'./gzipe0f1.js',
'./gzip8049.js',
'./gzip8252.js',
'./gzipdd81.js',
'./basica-a.min.js',
'./basica-c.min.js',
'./basica-e.min.js',
'/javascript_nova/bsc-a.min2.js',
'/css/uikit.min.css',
'/imagens/logo2',
'/imagens/branco/Prancheta1copia2.png',
'/imagens/branco/Prancheta1copia8.png',
'/imagens/branco/Prancheta1copia5.png',
'/imagens/branco/Prancheta1copia2.png',
'/imagens/branco/Prancheta1copia10.png',
'/imagens/branco/Prancheta1copia4.png',
'/imagens/branco/Prancheta1copia14.png',
'/imagens/branco/Prancheta1copia13.png',
'/imagens/branco/Prancheta1copia.png',
'/imagens/branco/Prancheta1copia12.png',
'/imagens/branco/Prancheta1copia9.png',
'/imagens/branco/Prancheta1copia7.png',	
'/imagens/branco/Prancheta1copia3.png',					
};
const offlineFallbackPage = "offline.html";

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

self.addEventListener('install', async (event) => {
  event.waitUntil(
    caches.open(CACHE)
      .then((cache) => cache.add(offlineFallbackPage))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith (
    caches.match(event.request)  
       .then(cacheResponse =>(cacheResponse || fetch(event.request)))
   );
});
