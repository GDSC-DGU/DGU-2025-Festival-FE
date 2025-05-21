import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 20px;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.gray300};
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 4px;
`;

export const TitleText = styled.p`
  ${({ theme }) => theme.fonts.Head3};
  color: ${({ theme }) => theme.colors.gray700};
`;

export const DateText = styled.p`
  ${({ theme }) => theme.fonts.Caption};
  color: ${({ theme }) => theme.colors.gray500};
`;
