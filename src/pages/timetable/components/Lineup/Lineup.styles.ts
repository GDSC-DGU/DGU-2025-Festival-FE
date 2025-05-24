import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 260px;
`;

export const EmptyContainer = styled.div`
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.3) 0%,
    rgba(255, 255, 255, 0.1) 100%
  );
  width: 100%;
  padding: 10px 20px;
  box-sizing: border-box;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  ${({ theme }) => theme.fonts.Body1}
  border: 1px solid rgba(255, 255, 255, 0.5);
`;

export const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface SlideProps {
  $active: boolean;
  $side?: "left" | "right";
}

export const Slide = styled.img<SlideProps>`
  position: absolute;
  width: 70%;
  height: auto;
  transition: all 0.5s ease-in-out;
  object-fit: contain;
  opacity: 0.5;
  transform: scale(0.7);
  z-index: 1;

  ${({ $active }) =>
    $active &&
    css`
      opacity: 1;
      transform: scale(1);
      z-index: 2;
    `}

  ${({ $side }) =>
    $side === "left" &&
    css`
      left: -10%;
    `}

  ${({ $side }) =>
    $side === "right" &&
    css`
      right: -10%;
    `}
`;
