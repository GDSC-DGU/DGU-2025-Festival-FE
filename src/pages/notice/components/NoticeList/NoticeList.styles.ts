import styled from "styled-components";

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  height: 100%;
  flex: 1;
`;

export const EmptyText = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.gray400};
  ${({ theme }) => theme.fonts.Body2};
  padding: 40px 0;
`;
