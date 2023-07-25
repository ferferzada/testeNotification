const webpush = require('web-push');

const subscription = {
  "endpoint": "https://fcm.googleapis.com/fcm/send/er3vW5e-c-4:APA91bGL0jizBfOmEdsoc2Gf7k639Eg3IXhb0CVvmpJUKuExfv22hln_qFp5jybXZKQ7SeboPLWXpG5iEIEvwd2XWcSoyGrLihPAWEqBr72tUrmcVnL6KqxR3xmYh237s9x-D6kh-eTA",
  "expirationTime": null,
  "keys": {
    "p256dh": "BDL416sEPR61-OXXS2KZZYgCPV7J3uvBxtNQMaDyU_7uUVxU0XkxXNuPNZT9zxRPfhTfhTJhgbSxcg8vBwDUSPc",
    "auth": "pDVjxY66OR44zvoL0gJF7w"
  }
};

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
