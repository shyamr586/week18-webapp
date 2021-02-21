var cacheName = "petstore-v1";
var cacheFiles = [
    "index.html",
    "products.js",
    "petstore1.manifest",
    "https://upload.wikimedia.org/wikipedia/commons/9/9e/Giraffe_Mikumi_National_Park.jpg",
    "https://www.catster.com/wp-content/uploads/2015/06/cat-food-bowl-shutterstock_157112807_0.jpg",
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