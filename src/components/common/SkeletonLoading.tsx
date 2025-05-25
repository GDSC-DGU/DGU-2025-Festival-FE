import styled, { keyframes } from "styled-components";
import FlowerImg from "/assets/landing/flower.png";

interface SkeletonLoadingProps {
  message?: string;
}

export default function SkeletonLoading({
  message = "Loading...",
}: SkeletonLoadingProps) {
  return (
    <SkeletonWrapper>
      <FloatingImage src={FlowerImg} alt="loading flower" />
      <LoadingText>{message}</LoadingText>
    </SkeletonWrapper>
  );
}

const float = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
  100% { transform: translateY(0); }
`;

const SkeletonWrapper = styled.div`
  height: 100vh;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FloatingImage = styled.img`
  width: 50px;
  animation: ${float} 2s ease-in-out infinite;
`;

const LoadingText = styled.p`
  margin-top: 20px;
  font-size: 15px;
  color: #888;
  font-weight: 500;
`;
