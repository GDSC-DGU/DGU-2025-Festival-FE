import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-top: 54px;
`;

export const ContentContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ContentHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 8px;
`;

export const TitleText = styled.h1`
  ${({ theme }) => theme.fonts.Head3};
  color: ${({ theme }) => theme.colors.gray700};
`;

export const DateText = styled.p`
  ${({ theme }) => theme.fonts.Caption};
  color: ${({ theme }) => theme.colors.gray500};
`;

export const Divider = styled.hr`
  all: unset;
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.gray200};
`;

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
  margin: 0 20px;
  scroll-snap-align: start;
  border-radius: 8px;
  aspect-ratio: 1.6;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

export const ContentText = styled.p`
  ${({ theme }) => theme.fonts.Body2};
  color: ${({ theme }) => theme.colors.gray700};
  white-space: pre-line;
`;
