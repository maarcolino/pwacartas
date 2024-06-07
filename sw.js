// Nome do cache
const cachePWA = 'cache-v1';
// Arquivos a serem armazenados em cache
// Todos os arquivos devem ser adicionados ao vetor (exceto manifesto)
const urlsToCache = [
  '/',
  '/index.html',
  '/calculo.js',  
  '/foto.png',
  '/foto2.png'
]

// Instalando o Service Worker e armazenando os arquivos no cache
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cachePWA)
      .then((cache) => {
        return cache.addAll(urlsToCache)
      })
  )
})

// Interceptando as solicitações de rede e servindo arquivos do cache quando offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Se o arquivo está no cache, serve o arquivo do cache
        if (response) {
          return response
        }
        // Caso contrário, faz uma solicitação de rede
        return fetch(event.request)
      })
  )
})


self.addEventListener('activate', (event) => {
    event.waitUntil(
      caches.keys()
       .then((cacheNames) => {
          return Promise.all(
            cacheNames.map((cacheName) => {
              if (cacheName!== cachePWA) {
                return caches.delete(cacheName);
              }
            })
          );
        })
    );
  });