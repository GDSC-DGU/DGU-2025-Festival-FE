import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  width: 90%;
`;

export const NoticeContent = styled.button<{ $rank: number }>`
  padding: 10px 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: start;
  border: none;
  width: 100%;

  background: ${({ theme, $rank }) =>
    $rank === 0
      ? "white"
      : $rank === 1
        ? theme.gradients.rankingBox1
        : $rank === 2
          ? theme.gradients.rankingBox2
          : "white"};
  border: 1.5px solid white;
  color: ${({ theme }) => theme.colors.gray700};
`;

export const NoticeText = styled.p`
  ${({ theme }) => theme.fonts.Head3}
`;
