import styled from "styled-components";

export const Container = styled.button<{ $selected: boolean }>`
  padding: 8px 16px;
  border-radius: 20px;
  border: none;
  background-color: ${({ $selected, theme }) =>
    $selected ? theme.colors.indigo600 : theme.colors.gray300};
  color: ${({ $selected, theme }) =>
    $selected ? "white" : theme.colors.gray500};
  cursor: pointer;
`;

export const DayText = styled.span`
  ${({ theme }) => theme.fonts.Button1};
`;
