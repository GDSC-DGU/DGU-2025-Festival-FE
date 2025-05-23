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
  flex-direction: column;
  align-items: start;
  border: none;
  width: 100%;

  background: ${({ theme }) => theme.gradients.rankingBox1};
  border: 1.5px solid white;
  color: ${({ theme }) => theme.colors.gray700};
`;

export const NoticeText = styled.p`
  ${({ theme }) => theme.fonts.Head3}
`;
