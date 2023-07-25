const webpush = require('web-push');

const subscription = {"endpoint":"https://wns2-bl2p.notify.windows.com/w/?token=BQYAAAATHUi5XidKjpLC4kqbEqZpXGDliPPJBmHET4%2f7UTfrLuRMEiXZjOV8qp%2fvx9ZU2AcEjP1l3vj50zcoWqTAiicjNAGAjQoFs5YIXVp7JvxBVhX%2f5jrrZbZ%2fOO3R6KuskNGcqEaRTNwcdGRPN%2fPGth8R9iy3V1JL8QWwtmegygVhFGIUn6qrQwrwdGDHankmR6FAO5%2bxTw%2bekSY%2bm4%2frsLugWiie031KPd0FZwStNjaEs2gO%2fV9xTkk%2f%2fGGf1cIlZRGg%2frKJCFevrmbhX7vIXYWgwMHoOKVDWLxmJb0HpBXkfyat3fwEBF8BXEvrWppxU0n6TafrqT4E9spD9H%2f7LYoM","expirationTime":null,"keys":{"p256dh":"BCSOL4twh17ztpHF6SYqwDhsdJNdnCmBcTvCZS7hpp6cV5TF6bpmE_Cyo1TWs61hreah9gKLQShJsLroGty045c","auth":"EnWijr_xxeEN3iK3iIX9NA"}}

const payload = 'Here is a payload!';

const options = {
  vapidDetails: {
    subject: 'mailto: moises@imaxis.com.br',
    publicKey: 'BHYKsidI-muNkvZwepxrCNNzE3hGbBKPoUTPD4Pc44QZ3upswMqBCkREGQb8stvL6yKpAAVx3g9IdEP_bcj7XrY',
    privateKey: 'wR45eXyxzIqohoHcuOjwDcLLEpB4UYcUeADE-ZmRLao'
  },
  TTL: 60
};

webpush.sendNotification(
  subscription,
  payload,
  options
);
