
// This is the "Offline page" service worker

const cacheName = 'sw-page';

// TODO: replace the following with the correct offline fallback page i.e.: const offlineFallbackPage = "offline.html";

const cacheAssets = [
'../indexApp.html',
'../javascript_nova/gzip1041-2.js',
'../gzipea95.js',
'../gzip1041.js',
'../gzipe0f1.js',
'../gzip8049.js',
'../gzip8252.js',
'../gzipdd81.js',
'../basica-a.min.js',
'../basica-c.min.js',
'../basica-e.min.js',
'../javascript_nova/bsc-a.min2.js',
'../css/uikit.min.css',
'../imagens/logo2',
'../imagens/branco/Prancheta1copia2.png',
'../imagens/branco/Prancheta1copia8.png',
'../imagens/branco/Prancheta1copia5.png',
'../imagens/branco/Prancheta1copia2.png',
'../imagens/branco/Prancheta1copia10.png',
'../imagens/branco/Prancheta1copia4.png',
'../imagens/branco/Prancheta1copia14.png',
'../imagens/branco/Prancheta1copia13.png',
'../imagens/branco/Prancheta1copia.png',
'../imagens/branco/Prancheta1copia12.png',
'../imagens/branco/Prancheta1copia9.png',
'../imagens/branco/Prancheta1copia7.png',	
'../imagens/branco/Prancheta1copia3.png',					
];

self.addEventListener('isntall' , e => {
console.log('Service Worker: Installed');

e.waitUntil(
  caches
   .open(cacheName)
   .then(cache => {
	  console.log('Service Worker: Cacging Files');
      cache.addAll(cacheAssets);
      });
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('isntall' , e => {
console.log('Service Worker: Installed');
e.waitUntil(
  caches.keys().then(cacheNames => {
   return Promise.all(
    cacheNames.map(cache => {
	 if (cache !== cacheName) {
	  console.log('Service Worker: Clearing Old Cache');
	  return cache.delete(cache);
	 }
    })
   );
  }) 
 );
});

self.addEventListener('fetch', e => {
	console.log('Service Worker: Fetching');
	e.respondWith(fetch(e.request).catch(()=> caches.match(e.request)));
});
