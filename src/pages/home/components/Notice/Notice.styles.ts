import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  width: 90%;
  box-sizing: border-box;
`;

export const NoticeContent = styled.div`
  padding: 10px 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: none;
  width: 90%;
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

export const EmptyContainer = styled.div`
  padding: 20px 0;
  width: 100%;
  text-align: center;
  background: ${({ theme }) => theme.gradients.rankingBox2};
  color: black;
  ${({ theme }) => theme.fonts.Head3}
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.5);
`;
