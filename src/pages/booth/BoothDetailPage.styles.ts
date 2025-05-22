import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  flex: 1;
  padding-top: 54px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  gap: 20px;
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
  color: var(--gray-700);
  line-height: 1.5;
`;

export const BoothIntro = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: var(--gray-500);
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
  display: block;
  margin: 16px auto 0;
  padding: 8px 16px;
  background-color: var(--indigo-600);
  color: white;
  font-weight: 600;
  font-size: 16px;
  border-radius: 16px;
  cursor: pointer;
  border: none;
`;

export const ScrollWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 12px;
  margin: 24px 0;
  padding-bottom: 8px;
  scrollbar-width: none;
  scroll-snap-type: x mandatory;

  &::-webkit-scrollbar {
    display: none;
  }
`;
