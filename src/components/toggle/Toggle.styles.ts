import styled from "styled-components";

export const ToggleContainer = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.gray100};
  border-radius: 999px;
  padding: 6px;
  width: fit-content;
`;

export const TabButton = styled.button<{ $isActive: boolean }>`
  border: none;
  background-color: ${({ $isActive }) => ($isActive ? "white" : "transparent")};
  color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.indigo600 : theme.colors.gray400};
  ${({ $isActive, theme }) =>
    $isActive ? theme.fonts.Body2B : theme.fonts.Body2};
  padding: 8px 12px;
  border-radius: 999px;
  cursor: pointer;
  transition: all 0.2s ease;
`;
