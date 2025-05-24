import styled, { keyframes } from "styled-components";

const float = keyframes`
  0% {
    transform: translate(-50%, 0);
  }
  50% {
    transform: translate(-50%, -20px);
  }
  100% {
    transform: translate(-50%, 0);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-top: 54px;
`;

export const ImageContainer = styled.div`
  position: relative;
  height: calc(100vh - 50px);
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0;
  padding: 40px;
  box-sizing: border-box;
`;

export const MainSlogan = styled.p`
  color: white;
  font-size: 26px;
  padding: 24px 0;
  font-weight: 500;
`;

export const Slogan = styled.p`
  color: white;
  padding: 10px 0;
  ${({ theme }) => theme.fonts.Body3};
  font-weight: 400;
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Image = styled.img`
  position: absolute;
  width: 90%;
  bottom: 60px;
  z-index: 1;

  mask-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1) 60%,
    rgba(0, 0, 0, 0)
  );
  -webkit-mask-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1) 60%,
    rgba(0, 0, 0, 0)
  );
  mask-size: 100% 100%;
  mask-repeat: no-repeat;
`;

export const FlowerImage = styled.img`
  width: 40%;
  position: absolute;
  left: 50%;
  bottom: calc(60px + 90% * 0.4);
  z-index: 10;
  transform: translateX(-50%);
  animation: ${float} 3s ease-in-out infinite;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
  padding: 40px 20px;
  padding-bottom: 80px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

export const Title = styled.h1`
  ${({ theme }) => theme.fonts.Head2};
  color: white;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 100%;
  padding: 0px 10px;
`;
