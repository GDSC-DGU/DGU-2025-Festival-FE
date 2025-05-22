import styled from "styled-components";

export const Card = styled.div`
  padding: 16px;
  background: white;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  box-shadow: 0 0 4px 0 ${({ theme }) => theme.colors.gray300};
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Image = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 8px;
  object-fit: cover;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: start;
  height: 100%;
  justify-content: space-between;
`;

export const BoothName = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: var(--gray-700);
  line-height: 1.5;
`;

export const Intro = styled.div`
  font-size: 12px;
  color: var(--gray-500);
`;

export const LikeButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const LikeButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
`;
