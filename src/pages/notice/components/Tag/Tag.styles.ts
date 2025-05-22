import styled from "styled-components";

export const TagContainer = styled.div<{ $isActive: boolean }>`
  border-radius: 16px;
  padding: 8px 16px;
  border: 1px solid
    ${({ theme, $isActive }) =>
      $isActive ? theme.colors.indigo600 : theme.colors.gray300};
  background-color: ${({ theme, $isActive }) =>
    $isActive ? theme.colors.indigo600 : theme.colors.white};
  white-space: nowrap;
  cursor: pointer;
`;

export const TagText = styled.p<{ $isActive: boolean }>`
  ${({ theme }) => theme.fonts.Button1};
  color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.white : theme.colors.gray400};
`;
