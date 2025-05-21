import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-top: 54px;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  padding: 20px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  align-items: center;
  padding: 20px;
  gap: 8px;
`;

export const Title = styled.h1`
  ${({ theme }) => theme.fonts.Head2};
  color: white;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  padding: 0 10px;
`;
