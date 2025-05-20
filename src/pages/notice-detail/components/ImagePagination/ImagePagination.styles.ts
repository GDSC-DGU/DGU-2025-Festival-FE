import styled from "styled-components";

export const DotContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
`;

export const Dot = styled.div<{ $active: boolean }>`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: ${({ theme, $active }) =>
    $active ? theme.colors.indigo600 : theme.colors.gray200};
  transition: background-color 0.3s;
`;
