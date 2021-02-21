var cacheName = "petstore-v1";
var cacheFiles = [
    "index.html",
    "products.js",
    "check.webmanifest",
    "giraffe.jpg",
    "cat.jpg",
];

self.addEventListener("install", (e) =>{
    console.log('[Service Worker] Install');
    e.waitUntil(
        caches.open(cacheName).then((cache) =>{
            console.log('CACHING ALL FILES');
            return cache.addAll(cacheFiles);
        })
    );
});