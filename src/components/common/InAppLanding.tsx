import styled, { keyframes } from "styled-components";
import LogoImg from "/assets/landing/logo.png";
import HandSvg from "/assets/landing/hand.svg";
import FlowerImage from "/assets/landing/flower.png";
import { useEffect } from "react";

const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase());

export default function InAppLanding() {
  useEffect(() => {
    if (isIOS) {
      setTimeout(() => {
        const targetUrl = "https://dirvana.co.kr";
        const newTab = window.open(targetUrl, "_blank");
        if (!newTab) window.location.href = targetUrl;
      }, 1000); // 1초 후 실행
    }
  }, []);

  const handleClick = () => {
    const url = window.location.href;

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
