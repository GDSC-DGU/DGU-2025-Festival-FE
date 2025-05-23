import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
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
  scrollbar-width: none;
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
  gap: 40px;
  padding: 0;
`;

export const Banner = styled.div`
  width: 100%;
  ${({ theme }) => theme.fonts.TimeTableSub}
  color: white;
  text-align: left;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 40px;
  width: 100%;
`;
