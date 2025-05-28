import styled from "styled-components";

export const Wrapper = styled.div`
  width: 220px;
  height: 110px;
  position: relative;
  margin: 40px auto;
`;

export const ConnectedCircles = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background: transparent;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 110px;
    height: 110px;
    border: 3px solid #e94335;
    border-radius: 50%;
    background: white;
  }

  &::before {
    left: 0;
  }

  &::after {
    right: 0;
  }
`;

export const CenterText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 700;
  font-size: 20px;
  color: #e94335;
  z-index: 3;
`;

export const Mask = styled.div`
  position: absolute;
  top: 3px;
  left: 50%;
  transform: translateX(-50%);
  width: 6px;
  height: 104px;
  background-color: white;
  z-index: 2;
`;
