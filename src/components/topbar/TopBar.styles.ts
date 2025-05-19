import styled from "styled-components";

export const Container = styled.div`
  height: 54px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Side = styled.div`
  width: 24px;
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

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.gray700};
  ${({ theme }) => theme.fonts.Head2};
`;
