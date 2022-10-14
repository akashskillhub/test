// console.log(self);
self.addEventListener("install", function (e) {
    console.log("INSTALLING...", e);
})
self.addEventListener("activate", function (e) {
    console.log("Activate...", e)
    // return self.clients.claim()
})
self.addEventListener("fetch", function (e) {
    console.log("Fetching ", e);
    e.respondWith(fetch(e.request))
})