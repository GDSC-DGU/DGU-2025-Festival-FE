import styled from "styled-components";

export const ButtonContainer = styled.button`
  border: none;
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.indigo600};
  color: white;
  ${({ theme }) => theme.fonts.Button1};
`;
