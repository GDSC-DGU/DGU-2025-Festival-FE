importScripts(
  "https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyDqlKmIKqOkkkEwdID1_M-e7P0kth0Roxo",
  authDomain: "dgu-spring-featival.firebaseapp.com",
  projectId: "dgu-spring-featival",
  storageBucket: "dgu-spring-featival.firebasestorage.app",
  messagingSenderId: "387175466359",
  appId: "1:387175466359:web:567e0b70c0db6eaf88cd72",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("[firebase-messaging-sw.js] 백그라운드 메시지 수신:", payload);
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: "/icon.png",
  });
});
