import styled from "styled-components";

export const GDGColorLogo = styled.img`
  width: 70%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

export const Info = styled.div`
  border-radius: 10px;
  ${({ theme }) => theme.fonts.Body3}
  text-align: center;
  word-break: keep-all;
`;

export const Highlight = styled.span<{ color: string }>`
  color: ${({ color }) => color};
  font-weight: 700;
`;
