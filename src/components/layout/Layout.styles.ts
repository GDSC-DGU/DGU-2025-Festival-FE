import styled from "styled-components";

interface WrapperProps {
  $backgroundImage?: string;
}

export const AppContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const AppWrapper = styled.div<WrapperProps>`
  max-width: 430px;
  width: 100%;
  min-height: 100dvh;
  background: ${({ $backgroundImage }) =>
    $backgroundImage
      ? `url(${$backgroundImage}) no-repeat center top / cover`
      : "#FFFFFF"};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow-x: hidden;
  align-items: center;
`;

export const AppMain = styled.main`
  flex: 1;
  padding-bottom: 56px;
  width: 100%;
`;
