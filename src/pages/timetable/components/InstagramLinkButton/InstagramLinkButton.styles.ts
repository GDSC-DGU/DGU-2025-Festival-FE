import styled from "styled-components";

export const InstaButton = styled.button`
  padding: 6px 16px;
  background-color: ${({ theme }) => theme.colors.indigo50};
  color: ${({ theme }) => theme.colors.indigo800};
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-weight: bold;
  ${({ theme }) => theme.fonts.Caption};
`;
