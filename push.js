const publicVapidKey = 'BHYKsidI-muNkvZwepxrCNNzE3hGbBKPoUTPD4Pc44QZ3upswMqBCkREGQb8stvL6yKpAAVx3g9IdEP_bcj7XrY'; 


if ('serviceWorker' in navigator && 'PushManager' in window) {

  navigator.serviceWorker.register('sw.js').then(registration => {
    console.log('Service Worker registrado com sucesso:', registration);

  
    const subscribeButton = document.getElementById('subscribe-button');
    subscribeButton.addEventListener('click', () => {
    
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          console.log('Permissão para notificações concedida.');

         
          registration.pushManager.subscribe({
            userVisibleOnly: true, 
            applicationServerKey: urlBase64ToUint8Array(publicVapidKey)
          }).then(subscription => {
            console.log('Usuário inscrito.');
            console.log(JSON.stringify(subscription));
            key = JSON.stringify(subscription)
            localStorage.setItem("key", key)
          }).catch(error => {
            console.error('Falha na inscrição do usuário: ', error);
          });
        }
      });
    });
  }).catch(error => {
    console.error('Falha no registro do Service Worker:', error);
  });
} else {
  console.warn('Push messaging is not supported');
}

function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}
