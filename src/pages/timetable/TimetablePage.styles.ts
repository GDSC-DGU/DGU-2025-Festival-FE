import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3px;
  position: fixed;
  top: 0;
  height: 190px;
  z-index: 100;
  max-width: 430px;
  width: 100%;
  background-color: rgba(4, 0, 34, 0.6);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(8px);
`;

export const SubTitle = styled.h1`
  ${({ theme }) => theme.fonts.Head2};
  color: white;
`;

export const MainTitle = styled.h2`
  ${({ theme }) => theme.fonts.TimeTable};
  color: white;
`;

export const BodyContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 32px;
  padding-top: 200px;
`;

export const SelectorContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  padding-top: 20px;
  gap: 20px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 0;
`;

export const Banner = styled.div`
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.4);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(255, 255, 255, 0.1) 100%
  );
  border-radius: 8px;
  padding: 10px;
  box-sizing: border-box;
  color: white;
  text-align: center;
`;
