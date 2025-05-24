import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  width: 90%;
`;

export const BoothCard = styled.div<{ $rank: number }>`
  padding: 10px 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: none;
  gap: 10px;
  width: 100%;
  box-sizing: border-box;
  justify-content: space-between;
  background: ${({ theme }) => theme.gradients.rankingBox1};

  border: 1.5px solid white;
  color: ${({ theme }) => theme.colors.gray700};
`;

export const NumberCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.indigo800};
  width: 30px;
  height: 30px;
`;

export const Number = styled.p`
  ${({ theme }) => theme.fonts.Head3};
  color: white;
`;

export const BoothName = styled.p`
  ${({ theme }) => theme.fonts.Head3};
  color: ${({ theme }) => theme.colors.gray700};
`;

export const BoothDescription = styled.p`
  ${({ theme }) => theme.fonts.Body3};
  color: ${({ theme }) => theme.colors.gray700};
`;

export const BoothContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 4px;
`;

export const RightArrow = styled.img`
  transform: rotate(180deg);
  width: 24px;
  height: 24px;
  right: 0;
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;
