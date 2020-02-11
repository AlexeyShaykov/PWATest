self.addEventListener('install', function(e) {
	e.waitUntil(
	  caches.open('video-store').then(function(cache) {
		return cache.addAll([]);
	  })
	);
});