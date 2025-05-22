import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import type { MessagePayload } from 'firebase/messaging';

const firebaseConfig = {
  apiKey: "AIzaSyDqlKmIKqOkkkEwdID1_M-e7P0kth0Roxo",
  authDomain: "dgu-spring-featival.firebaseapp.com",
  projectId: "dgu-spring-featival",
  storageBucket: "dgu-spring-featival.firebasestorage.app",
  messagingSenderId: "387175466359",
  appId: "1:387175466359:web:567e0b70c0db6eaf88cd72",
  measurementId: "G-05XSE8PMWX",
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

// 알림 권한 요청 및 브라우저 토큰 발급
export const requestPermissionAndGetToken = async (): Promise<string | null> => {
  try {
    const permission = await Notification.requestPermission();
    if (permission !== 'granted') {
      console.warn('알림 권한 거부됨');
      return null;
    }

    const swReg = await navigator.serviceWorker.register('/firebase-messaging-sw.js');

    const token = await getToken(messaging, {
      vapidKey: import.meta.env.VITE_FIREBASE_VAPID_KEY,
      serviceWorkerRegistration: swReg,
    });

    console.log('FCM Token:', token);
    return token;
  } catch (err) {
    console.error('FCM 토큰 요청 실패:', err);
    return null;
  }
};

// 포그라운드 알림 수신 리스너
export const onForegroundMessage = (
  callback: (payload: MessagePayload) => void
): void => {
  onMessage(messaging, (payload) => {
    console.log('포그라운드 메시지:', payload);
    callback(payload);
  });
};
