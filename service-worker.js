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

// self.addEventListener('fetch', function(e){
//     e.respondWith(
//         caches.match(e.request).then(function (r){
//             console.log("FETCHING RESOURCE"+e.request.url);
//             return r
//         })
//     )
// })

self.addEventListener('fetch', function(e){
    e.respondWith(
        caches.match(e.request).then(function (r){
            console.log("FETCHING RESOURCE"+e.request.url);
            return r || fetch(e.request).then(function (response) {
                return caches.open(cacheName).then(function (cache){
                    cache.put(e.request, response.clone());
                    return response;
                })
            })
        })
    )
})