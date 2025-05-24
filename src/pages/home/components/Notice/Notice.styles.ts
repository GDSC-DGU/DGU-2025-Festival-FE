import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  width: 80%;
`;

export const NoticeContent = styled.div`
  padding: 10px 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  align-items: end;
  justify-content: space-between;
  border: none;
  width: 100%;
  gap: 10px;
  background: ${({ theme }) => theme.gradients.rankingBox1};
  border: 1.5px solid white;
  color: ${({ theme }) => theme.colors.gray700};
`;

export const NoticeText = styled.p`
  ${({ theme }) => theme.fonts.Head3}
  color: ${({ theme }) => theme.colors.gray800};
`;

export const DateText = styled.p`
  ${({ theme }) => theme.fonts.Caption}
  color: ${({ theme }) => theme.colors.gray500};
`;
