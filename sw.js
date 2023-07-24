self.addEventListener('push', function(e) {
    var options = {
        body: 'This is a notification from your service worker!',
        icon: 'images/icon.png',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: '2'
        },
        actions: [
            {action: 'explore', title: 'Go to the site',
                icon: 'images/checkmark.png'},
            {action: 'close', title: 'Close the notification',
                icon: 'images/xmark.png'},
        ]
    };
    e.waitUntil(
        self.registration.showNotification('Hello!', options)
    );
});