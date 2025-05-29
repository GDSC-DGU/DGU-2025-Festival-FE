import styled from "styled-components";

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 20px;
  box-sizing: border-box;
`;

export const TimeText = styled.div`
  text-align: left;
  color: white;
  ${({ theme }) => theme.fonts.Body1}
  width: 100px;
`;

export const LineContainer = styled.div<{ $isArtist: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  min-height: ${({ $isArtist }) => ($isArtist ? "330px" : "240px")};
`;

export const Circle = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 6px;
  background-color: white;
`;

export const VerticalLine = styled.div<{ $isArtist: boolean }>`
  width: 2px;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.9) 30%,
    rgba(255, 255, 255, 0) 100%
  );
  flex-grow: 1;
`;

export const Card = styled.div`
  background: white;
  border-radius: 8px;
  padding: 16px;
  min-width: 150px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background: ${({ theme }) => theme.gradients.rankingBox1};
  border: 1.5px solid white;
`;

interface AvatarProps {
  $isArtist?: boolean;
}

export const Avatar = styled.img<AvatarProps>`
  width: ${({ $isArtist }) => ($isArtist ? "150px" : "60px")};
  height: ${({ $isArtist }) => ($isArtist ? "150px" : "60px")};
  border-radius: ${({ $isArtist }) => ($isArtist ? "10px" : "50%")};
  align-self: center;
  object-fit: cover;
`;

export const Description = styled.p`
  ${({ theme }) => theme.fonts.Caption}
  color:black;
  text-align: center;
  word-break: keep-all;
`;

export const Title = styled.h4`
  ${({ theme }) => theme.fonts.Body2B}
  color:black;
  text-align: center;
`;

export const Button = styled.button`
  align-self: center;
  padding: 8px 40px;
  background: ${({ theme }) => theme.colors.indigo600};
  color: white;
  ${({ theme }) => theme.fonts.Button2}
  border-radius: 16px;
  border: none;
  font-size: 14px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;
