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
  gap: 24px;
`;

export const MapWrapper = styled.div`
  border-radius: 8px;
  overflow: hidden;
`;

export const Card = styled.div`
  background: white;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
  padding: 16px;
  border: 1px solid #d7d7d7;
`;

export const Header = styled.div`
  display: flex;
  gap: 4px;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
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
  flex-direction: row;
  right: 0;
  align-items: center;
  gap: 3px;
`;

export const LikeCount = styled.div`
  ${({ theme }) => theme.fonts.Body2}
  color: #333c55;
`;

// 기존 스타일 주석 처리
// export const ReserveButton = styled.button`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 4px 16px;
//   background-color: var(--indigo-600);
//   color: white;
//   ${({ theme }) => theme.fonts.Button2}
//   border-radius: 16px;
//   cursor: pointer;
//   border: none;
// `;

// 비활성화(회색) 스타일로 대체
export const ReserveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 16px;
  background-color: #f1f3f9;
  color: #949db8;
  ${({ theme }) => theme.fonts.Button2}
  border-radius: 16px;
  cursor: not-allowed;
  border: none;
  opacity: 0.7;
`;

export const ScrollWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 12px;
  padding: 16px 0;
  scroll-snap-type: x mandatory;
  width: 100%;

  &::-webkit-scrollbar {
    display: none;
  }

  > * {
    flex-shrink: 0;
    scroll-snap-align: center;
  }
`;

export const Title = styled.p`
  text-align: center;
  ${({ theme }) => theme.fonts.Head2}
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Description = styled.div`
  padding: 16px;
  font-size: 13px;
  color: #333;
  line-height: 1.5;
`;

// 이미지 스크롤 부분 스타일
export const ImageScrollContainer = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ImageItem = styled.div`
  flex: 0 0 100%;
  position: relative;
  scroll-snap-align: start;
  border-radius: 8px;
  background: rgba(245, 245, 245, 0);
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    object-fit: contain;
  }
`;

export const ImageScrollWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 16px;
`;
