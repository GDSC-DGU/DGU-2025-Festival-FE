import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  min-height: 50vh;
`;

export const TagScrollWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }
  padding-bottom: 10px;
`;

export const TagList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  width: max-content;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
`;

export const EmptyText = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.gray400};
  ${({ theme }) => theme.fonts.Body2};
  padding: 40px 0;
`;
