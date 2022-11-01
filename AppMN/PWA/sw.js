// Este é o service worker "Página offline"

importScripts('https://storage.googleapis.com/workbox-cdn/releases/ 5.1 . 2 /workbox-sw.js');

const CACHE = "sw-page" ;

// TODO: substitui o seguinte pela página de fallback offline correto, ou seja: const offlineFallbackPage = "offline.html" ;
const offlineFallbackPage = "ToDo-replace-this-name.html" ;

self.addEventListener( "mensagem" , (evento) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

self.addEventListener('instalar', assíncrono (evento) => {
  event.waitAté(
    caches.open(CACHE)
      .then((cache) => cache.add(offlineFallbackPage))
  );
});

if (workbox.navigationPreload.isSupported()) {
  workbox.navigationPreload.enable();
}

self.addEventListener('buscar', (evento) => {
  if (evento.solicitação.modo === 'navegar') {
    event.respondWith((assíncrono () => {
      tentando {
        const preloadResp = espera event.preloadResponse;

        if (preloadResp) {
          return preloadResp;
        }

        const networkResp = espera buscar(event.request);
        retornar redeResp;
      } pegar (erro) {

        const cache = espera caches.open(CACHE);
        const cachedResp = aguarde cache.match(offlineFallbackPage);
        retornar cachedResp;
      }
    })());
  }
});
