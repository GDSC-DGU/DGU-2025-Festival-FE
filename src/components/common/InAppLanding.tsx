import styled, { keyframes } from "styled-components";
import LogoImg from "/assets/landing/logo.png";
import HandSvg from "/assets/landing/hand.svg";
import FlowerImage from "/assets/landing/flower.png";

const userAgent = navigator.userAgent.toLowerCase();
const isIOS = /iphone|ipad|ipod/i.test(userAgent);
const isKakao = /kakaotalk/i.test(userAgent);
const isLine = /line\//i.test(userAgent);
const isOtherInApp =
  /inapp|naver|snapchat|wirtschaftswoche|thunderbird|instagram|everytimeapp|whatsapp|electron|wadiz|aliapp|zumapp|kakaostory|band|twitter|daumapps|daumdevice\/mobile|fb_iab|fb4a|fban|fbios|fbss|trill/i.test(
    userAgent
  );

const tryOpenChromeOrFallback = (url: string) => {
  // chrome 앱 열기
  const chromeUrl = url.replace(/^http/, "googlechrome");
  // safari 열기
  const safariUrl = url.replace(/^https?:\/\//, "x-safari-https://");

  const now = Date.now();
  // 크롬 앱 실행 시도
  const iframe = document.createElement("iframe");
  iframe.style.display = "none";
  iframe.src = chromeUrl;
  document.body.appendChild(iframe);

  // fallback: 크롬 앱 실행 실패로 1.5초 안에 페이지 이탈이 없으면 사파리 열기(각자 커스텀)
  setTimeout(() => {
    const elapsed = Date.now() - now;
    if (elapsed < 3000) {
      window.location.href = safariUrl;
    }
    document.body.removeChild(iframe);
  }, 3000);
};

export default function InAppLanding() {
  const handleClick = () => {
    const url = window.location.href;

    // 카카오톡
    if (isKakao) {
      window.location.href = `kakaotalk://web/openExternal?url=${encodeURIComponent(url)}`;
      setTimeout(() => {
        window.location.href = isIOS
          ? "kakaoweb://closeBrowser"
          : "kakaotalk://inappbrowser/close";
      }, 3000);
      return;
    }

    // 라인(LINE)
    if (isLine) {
      const lineUrl = url.includes("?")
        ? `${url}&openExternalBrowser=1`
        : `${url}?openExternalBrowser=1`;
      window.location.href = lineUrl;
      return;
    }

    // 그 외 인앱 브라우저(everytime, instagram, ...)
    if (isOtherInApp) {
      if (/android/i.test(userAgent)) {
        const intentUrl = url.replace(
          /^(https?):\/\/(.*)$/,
          "intent://$2#Intent;scheme=$1;package=com.android.chrome;end"
        );
        window.location.href = intentUrl;
      } else if (isIOS && isOtherInApp) {
        tryOpenChromeOrFallback(url);
        return;
      }
    }

    // 기본 동작 (안드로이드 크롬 앱 열기)
    if (isIOS) {
      window.open(url, "_blank");
    } else {
      const intentUrl = `intent://${url.replace(/^https?:\/\//, "")}#Intent;scheme=https;package=com.android.chrome;end`;
      window.location.href = intentUrl;
    }
  };

  return (
    <Wrapper>
      <Logo src={LogoImg} alt="logo" />
      <Subtext>with GDG on Campus</Subtext>
      <GraphicLayer>
        <HandImg src={HandSvg} alt="hand" />
        <FlowerImg src={FlowerImage} alt="flower" />
      </GraphicLayer>
      <StartButton onClick={handleClick}>축제 사이트 바로가기</StartButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-family: "Playfair Display", serif;
  background: linear-gradient(to bottom, #060032, #575bdf);
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
`;

const Logo = styled.img`
  width: 320px;
  margin: 0 auto;
`;

const Subtext = styled.div`
  font-size: 17px;
  font-weight: 400;
  margin-top: 6px;
  background: linear-gradient(to right, #060032, #e0e7ff, #dfe4f3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const GraphicLayer = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;
  margin-top: 30px;
  margin-bottom: 60px;
`;

const HandImg = styled.img`
  width: 60%;
  height: auto;
  position: relative;
  z-index: 1;
  margin: 0 auto;
  display: block;
`;

const float = keyframes`
  0% { transform: translate(-50%, 0); }
  50% { transform: translate(-50%, -20px); }
  100% { transform: translate(-50%, 0); }
`;

const FlowerImg = styled.img`
  position: absolute;
  top: 8%;
  left: 50%;
  transform: translateX(-50%);
  width: 90px;
  animation: ${float} 3s ease-in-out infinite;
  z-index: 2;
`;

const StartButton = styled.button`
  font-size: 16px;
  padding: 12px 28px;
  border-radius: 20px;
  border: 1.8px solid rgba(255, 255, 255, 0.6);
  background: transparent;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 12px rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(2px);
  }
`;