export const isInAppBrowser = (): boolean => {
    const ua = navigator.userAgent.toLowerCase();
    return (
      ua.includes("kakaotalk") ||
      ua.includes("instagram") ||
      ua.includes("everytimeapp") ||
      ua.includes("line") ||
        ua.includes("naver") ||
        ua.includes("fbav") 

    );
  };
  