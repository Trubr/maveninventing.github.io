
const dataCacheName = 'trubr4'
const cacheName = 'trubr-4'

const staticAssets = [
  "/",
  "./public/styles.css",
  "./public/main.js",
  "./public/blog.js",
  "./assets/fonts/GT-Walsheim-Bold.woff2",
  "./assets/fonts/GT-Walsheim-Light.woff2",
  "./assets/fonts/GT-Walsheim-Bold.ttf",
  "./assets/fonts/GT-Walsheim-Light.ttf",
  "./assets/img/aline.png",
  "./assets/img/marison.png",
  "./assets/img/edelweis.png",
  "./assets/img/tech.jpg",
  "./assets/img/banner-team.jpg",
  "./assets/img/banner-team.jpg",
  "./assets/img/banner-services.jpg",
  "./assets/img/banner-about.jpg"
];

self.addEventListener('install', async () => {
	const cache = await caches.open(cacheName)
	cache.addAll(staticAssets)
})

self.addEventListener('activate', event => {
	event.waitUntil(self.clients.claim())
})

self.addEventListener('fetch', event => {

	const request = event.request
	const url = new URL(request.url)
  
	if (url.origin === location.origin) {
		event.respondWith(cacheFirst(request))
	} else {
		event.respondWith(networkFirst(request))
	}

})

async function cacheFirst(request) {
	const cachedResponse = await caches.match(request)
	return cachedResponse || fetch(request)
}

async function networkFirst(request) {
  
  const dynamicCache = await caches.open('dynamic')
  
	try {

		const networkResponse = await fetch(request)
		dynamicCache.put(request, networkResponse.clone())
    return networkResponse
    
	} catch (err) {
		return  dynamicCache.match(request)
  }
  
}