/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/PWATest/sw.js').then(function(registration) {
            // Регистрация успешна
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }).catch(function(err) {
            // Регистрация не успешна
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}

let deferredPrompt;
const addBtn = document.querySelector('.add-button');
addBtn.style.display = 'none';
debugger;
window.addEventListener('beforeinstallprompt', (e) => {
	alert('hello from beforeinstallprompt ');
	debugger;
	// Prevent Chrome 67 and earlier from automatically showing the prompt
	e.preventDefault();
	// Stash the event so it can be triggered later.
	const deferredPrompt = e;
	// Update UI to notify the user they can add to home screen
	addBtn.style.display = 'block';
  
	addBtn.addEventListener('click', (e) => {
	  // hide our user interface that shows our A2HS button
	  addBtn.style.display = 'none';
	  // Show the prompt
	  deferredPrompt.prompt();
	  // Wait for the user to respond to the prompt
	  deferredPrompt.userChoice.then((choiceResult) => {
		  if (choiceResult.outcome === 'accepted') {
			console.log('User accepted the A2HS prompt');
		  } else {
			console.log('User dismissed the A2HS prompt');
		  }
		  deferredPrompt = null;
		});
	});
});