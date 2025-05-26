import styled, { keyframes } from "styled-components";
import LogoImg from "/assets/landing/logo.png";
import HandSvg from "/assets/landing/hand.svg";
import FlowerImage from "/assets/landing/flower.png";
import { useEffect } from "react";

const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase());

export default function InAppLanding() {
  const url = "https://dirvana.co.kr";
  useEffect(() => {
    const ua = navigator.userAgent;

    const setLink = (finalUrl: string) => {
      setTimeout(() => {
        const bg = document.createElement("div");
        const box = document.createElement("div");
        const style = document.createElement("style");
        bg.className = "__inappBg__";
        box.className = "__inappBox__";
        box.innerHTML = `
        <p>인앱 브라우저에서는 일부 기능이 제한될 수 있습니다.</p>
        <p>오른쪽 위의 <span class="__inappHilite__">&ctdot;</span> 메뉴에서
        <span class="__inappHilite__">"Safari로 열기"</span>를 눌러주세요.</p>
      `;
        style.innerHTML = `
        .__inappBg__ { position:fixed; top:0; left:0; width:100vw; height:100vh; z-index:1000; background:black; opacity:.5; }
        .__inappBox__ { position:fixed; min-width: 80vw; top:50%; left:50%; transform: translate(-50%, -50%); z-index:1001; font-size:1em; background:#25252b; color:#7cacf8; padding:5px; border-radius:5px; }
        .__inappHilite__ { font-weight:bold; background:#413c26; color:#fdf3aa; }
      `;
        document.body.appendChild(bg);
        document.body.appendChild(box);
        document.body.appendChild(style);

        let click = 3;
        bg.addEventListener("click", () => {
          click--;
          if (!click) {
            document.body.removeChild(bg);
            document.body.removeChild(box);
            document.body.removeChild(style);
          }
        });
      }, 1000);

      window.location.href = finalUrl;
    };

    if (/kakaotalk/i.test(ua)) {
      setLink(`kakaotalk://web/openExternal?url=${encodeURIComponent(url)}`);
    } else if (/line\//i.test(ua)) {
      setLink(`${url}?openExternalBrowser=1`);
    } else if (
      /inapp|naver|snapchat|instagram|everytimeapp|whatsapp|electron|wadiz|aliapp|zumapp|kakaostory|band|twitter|daumapps|fb_iab|fb4a|fban|fbios|fbss|trill/i.test(
        ua
      )
    ) {
      if (/android/i.test(ua)) {
        setLink(
          url.replace(
            /^(https?):\/\/(.*)$/,
            "intent://$2#Intent;scheme=$1;package=com.android.chrome;end"
          )
        );
      } else if (/iphone|ipad/i.test(ua)) {
        setLink(url.replace(/^https?:\/\//, "googlechrome://"));
      }
    }
  }, []);

  return (
    <Wrapper>
      <Logo src={LogoImg} alt="logo" />
      <Subtext>with GDG on Campus</Subtext>
      <GraphicLayer>
        <HandImg src={HandSvg} alt="hand" />
        <FlowerImg src={FlowerImage} alt="flower" />
      </GraphicLayer>
      <StartButton
        onClick={() => {
          if (isIOS) {
            const a = document.createElement("a");
            a.href = url;
            a.target = "_blank";
            a.rel = "noopener noreferrer external";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
          } else {
            const chromeIntent = `intent://${url.replace(/^https?:\/\//, "")}#Intent;scheme=https;package=com.android.chrome;end`;
            window.location.href = chromeIntent;
          }
        }}
      >
        축제 사이트 열기
      </StartButton>
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
