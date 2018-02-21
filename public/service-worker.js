
const dataCacheName = 'trubr'
const cacheName = 'trubr-1'

const filesToCache = [
  '/',
  '../index.html',
  './style.css',
  './script.js',
  '../assets/fonts/GT-Walsheim-Bold.woff2',
  '../assets/fonts/GT-Walsheim-Light.woff2',
  '../assets/img/aline.png',
  '../assets/img/marison.png',
  '../assets/img/edelweis.png',
  '../assets/img/tech.jpg',

]

console.log('web')

const cacher = () => {
  caches.open(cacheName).then(cache => {
    cache.addAll(filesToCache)
  })
}


self.addEventListener('install', event => event.waitUntil( cacher() ) )

self.addEventListener('activate', e => {

  e.waitUntil(
    
    caches.keys().then(function(keyList) {
      
      return Promise.all(keyList.map(function(key) {
       
        if (key !== cacheName && key !== dataCacheName) {
          console.log('[ServiceWorker] Removing old cache', key)
          return caches.delete(key)
        }

      }))

    })
  )

  return self.clients.claim()

})
