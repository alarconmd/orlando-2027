/* Service Worker · Orlando 2027 — funciona 100% offline después de la primera visita */
const CACHE = "orlando2027-v96";
const SHELL = ["./","./index.html","./styles.css","./data.js","./app.js","./manifest.json","./icon.svg"];
self.addEventListener("install", e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting()));
});
self.addEventListener("activate", e=>{
  e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
/* stale-while-revalidate: responde desde caché al instante y actualiza en segundo plano */
self.addEventListener("fetch", e=>{
  if(e.request.method!=="GET") return;
  const url = new URL(e.request.url);
  if(url.origin!==location.origin) return;
  e.respondWith(
    caches.match(e.request).then(hit=>{
      const fresh = fetch(e.request).then(res=>{
        if(res.ok){
          const copy = res.clone();
          caches.open(CACHE).then(c=>c.put(e.request, copy));
        }
        return res;
      }).catch(()=>hit||caches.match("./index.html"));
      return hit || fresh;
    })
  );
});
