import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  gap: 12px;
`;

export const DayContainer = styled.button<{ $selected: boolean }>`
  padding: 8px 16px;
  border-radius: 20px;
  border: none;
  background-color: ${({ $selected, theme }) =>
    $selected ? theme.colors.indigo600 : theme.colors.gray100};
  color: ${({ $selected, theme }) =>
    $selected ? "white" : theme.colors.gray500};
  cursor: pointer;
`;

export const DayText = styled.span`
  ${({ theme }) => theme.fonts.Button2};
`;
