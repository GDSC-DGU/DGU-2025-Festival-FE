import styled from 'styled-components';

export const Card = styled.div`
  padding: 20px;
  background: white;
  border-radius: 8px;
  display: flex;
  justify-content: left;
  align-items: center;
  height: 56px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-left: 10px;
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
