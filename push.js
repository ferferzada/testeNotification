if ('serviceWorker' in navigator && 'PushManager' in window) {

    navigator.serviceWorker.register('service-worker.js')
    .then(function(swReg) {
        console.log('Service Worker foi registrado', swReg);

        swRegistration = swReg;

        return swRegistration.pushManager.getSubscription();
    })
    .then(function(subscription) {
        if (subscription === null) {
            // Ainda não inscrito para Push, vamos inscrever

            const applicationServerKey = urlB64ToUint8Array(applicationServerPublicKey);
            return swRegistration.pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey: applicationServerKey
            });
        }
    })
    .then(function(newSubscription) {
        console.log('Usuário agora inscrito para receber notificações push: ', newSubscription);
    })
    .catch(function(err) {
        console.error('Não foi possível registrar o service worker. ', err);
    });
} else {
  console.warn('Push messaging is not supported');
  pushButton.textContent = 'Push Not Supported';
}