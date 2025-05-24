import styled from "styled-components";

export const TagContainer = styled.div`
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.indigo700};
  background-color: white;
  color: ${({ theme }) => theme.colors.indigo700};
  ${({ theme }) => theme.fonts.Button2};
  position: fixed;
  top: 14px;
  right: 10px;
  z-index: 100000;
  padding: 4px 12px;
`;
