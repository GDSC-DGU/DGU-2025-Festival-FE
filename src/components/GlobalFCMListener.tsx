// import { useEffect } from "react";
// import { onForegroundMessage } from "@/firebase";

// export default function GlobalFCMListener() {
//   useEffect(() => {
//     onForegroundMessage((payload) => {
//       const title = payload.notification?.title || "알림";
//       const body = payload.notification?.body || "";
//       alert(`🔔 ${title}\n${body}`);
//     });
//   }, []);

//   return null;
// }

import { useEffect } from "react";

export default function GlobalFCMListener() {
  useEffect(() => {
    const initMessaging = async () => {
      try {
        const { isSupported, getMessaging, onMessage } = await import(
          "firebase/messaging"
        );
        const supported = await isSupported();

        if (!supported) {
          console.log("FCM 미지원 브라우저");
          return;
        }

        const messaging = getMessaging();
        onMessage(messaging, (payload) => {
          const title = payload.notification?.title || "알림";
          const body = payload.notification?.body || "";
          alert(`🔔 ${title}\n${body}`);
        });
      } catch (e) {
        console.warn("FCM 초기화 실패:", e);
      }
    };

    initMessaging();
  }, []);

  return null;
}
