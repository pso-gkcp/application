self.addEventListener("install", event => {
  console.log("Service Worker installing.");
  // キャッシュ処理などもここに書ける
});

self.addEventListener("fetch", event => {
  console.log("Fetching:", event.request.url);
});
