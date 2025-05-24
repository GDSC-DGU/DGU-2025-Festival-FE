import styled from "styled-components";

export const Container = styled.div<{ $isDark: boolean }>`
  height: 54px;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: fixed;
  top: 0;
  max-width: 430px;
  width: 100%;
  background-color: ${({ $isDark }) =>
    $isDark ? "rgba(4, 0, 34, 0.6)" : "white"};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  z-index: 1000;
`;

export const Side = styled.div`
  width: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TitleContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.p<{ $isDark: boolean }>`
  color: ${({ theme, $isDark }) => ($isDark ? "white" : theme.colors.gray700)};
  ${({ theme }) => theme.fonts.Head2};
`;
