import { useEffect } from 'react';
import { onForegroundMessage } from '@/firebase';

export default function GlobalFCMListener() {
  useEffect(() => {
    onForegroundMessage((payload) => {
      const title = payload.notification?.title || '알림';
      const body = payload.notification?.body || '';
      alert(`🔔 ${title}\n${body}`);
    });
  }, []);

  return null; 
}
