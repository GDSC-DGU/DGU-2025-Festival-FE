import styled from "styled-components";

export const QuestionContainer = styled.button`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  cursor: pointer;
  background: none;
  border: none;
  &:active {
    transform: scale(0.96);
  }
`;

export const QuestionText = styled.p`
  ${({ theme }) => theme.fonts.Caption};
  color: ${({ theme }) => theme.colors.indigo500};
  width: 100%;
`;
