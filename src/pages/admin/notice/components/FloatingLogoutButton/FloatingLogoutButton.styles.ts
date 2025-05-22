import styled from "styled-components";

export const StyledButton = styled.button`
  position: fixed;
  bottom: 24px;
  right: 24px;
  background-color: ${({ theme }) => theme.colors.indigo50};
  padding: 12px;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
`;
