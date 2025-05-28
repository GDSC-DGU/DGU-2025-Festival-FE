import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  background: ${({ theme }) => theme.gradients.rankingBox1};
  border-radius: 8px;
  padding: 20px;
  width: 70%;
  box-sizing: border-box;
  box-shadow: 0 0 10px ${({ theme }) => theme.colors.indigo900};
`;

export const Tag = styled.div`
  position: relative;
  padding: 6px 24px;
  border-radius: 20px;
  ${({ theme }) => theme.fonts.Button2}
  z-index: 0;
  overflow: hidden;
  background: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    padding: 1px;
    border-radius: 20px;
    background: ${({ theme }) => theme.colors.indigo700}; /* 보더 그라데이션 */
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    z-index: -1;
  }

  color: ${({ theme }) => theme.colors.indigo700};
`;

export const PerformerImage = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  object-fit: cover;
`;

export const PerformerInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
`;

export const Performer = styled.p`
  ${({ theme }) => theme.fonts.Body1B}
`;

export const Description = styled.p`
  ${({ theme }) => theme.fonts.Body3}
`;

export const TimeDescription = styled.p`
  ${({ theme }) => theme.fonts.Body2}
`;

export const EmptyContainer = styled.div`
  padding: 20px 0;
  width: 90%;
  text-align: center;
  background: ${({ theme }) => theme.gradients.rankingBox2};
  color: black;
  ${({ theme }) => theme.fonts.Head3}
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.5);
`;
