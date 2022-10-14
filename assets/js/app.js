if ("serviceWorker" in navigator) {
    navigator.serviceWorker
        // .register("./sw.js", { scope: "/" })
        .register("./sw.js")
        .then(function () {
            console.log('service worker registered')
        })
}