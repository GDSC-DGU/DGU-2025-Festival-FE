import styled from 'styled-components';

export const Card = styled.div`
  padding: 16px;
  background: white;
  border-radius: 8px;
  display: flex;
  justify-content: left;
  align-items: center;
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
`;

export const Intro = styled.div`
  font-size: 12px;
  color: #666;
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
