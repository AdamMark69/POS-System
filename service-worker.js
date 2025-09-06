self.addEventListener('install', (e) => {
  console.log('Service Worker Installed');
});

self.addEventListener('fetch', (e) => {
  // Let network handle everything for now
});