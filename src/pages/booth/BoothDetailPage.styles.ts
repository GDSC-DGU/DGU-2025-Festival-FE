import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
`;

export const MapWrapper = styled.div`
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 20px;
`;

export const Card = styled.div`
  background: white;
  border-radius: 8px;
  padding: 16px;
  border: 1px solid #d7d7d7;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const BoothName = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #333c55;
`;

export const BoothIntro = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #475069;
`;

export const Like = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
`;

export const LikeCount = styled.div`
  font-size: 10px;
  color: #333c55;
`;

export const BoothImage = styled.img`
  width: 100%;
  height: 230px;
  margin-top: 16px;
  border-radius: 8px;
  object-fit: cover;
`;

export const ReserveButton = styled.button`
  margin-top: 16px;
  padding: 8px 16px;
  background-color: #4f46e5;
  color: white;
  font-weight: 600;
  font-size: 16px;
  border-radius: 16px;
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.25);
  cursor: pointer;
`;
