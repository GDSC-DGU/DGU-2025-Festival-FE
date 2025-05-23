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
