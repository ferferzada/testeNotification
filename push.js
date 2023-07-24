

navigator.serviceWorker.register('sw.js')
.then((registration) => {
    // Use o objeto registration para configurar a inscrição para notificações push
})
.catch((error) => {
    console.error('Service Worker Error', error);
});
async function sendNotificationAsync() {
    // Request permission
    try {
        await Push.Permission.request();

        // Permission granted, notify the us r.
        Push.create("Hello!", {
            body: "This is an asynchronous test notification!",
            icon: '/path/to/icon.png',
            timeout: 4000, // Notification closes after 4 seconds
            onClick: function() {
                // Handle notification click
                window.focus();
                this.close();
            }
        });
    } catch (err) {
        // The request for permission was denied or there was another error
        alert("Notification permissions denied or there was an error.");
    }
}
