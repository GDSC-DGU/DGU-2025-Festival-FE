import styled from "styled-components";

export const Card = styled.div`
  padding: 16px;
  background: white;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start; /* 텍스트와 이미지 수직 정렬 */
  gap: 16px;
  box-shadow: 0 0 4px 0 ${({ theme }) => theme.colors.gray300};
  cursor: pointer;
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
  flex-shrink: 0;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: flex-start;
  align-items: flex-start;
  flex: 1;
`;

export const BoothName = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: var(--gray-700);
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 1; /* 1줄만 표시 */
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const Intro = styled.div`
  font-size: 12px;
  color: var(--gray-500);
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* 2줄만 표시 */
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: keep-all;
`;

export const LikeButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
`;
