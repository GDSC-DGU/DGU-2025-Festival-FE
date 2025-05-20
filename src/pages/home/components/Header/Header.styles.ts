import styled from "styled-components";

export const Container = styled.div`
  height: 54px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  max-width: 430px;
  width: 100%;
  z-index: 1000;
  background: ${({ theme }) => theme.gradients.header};
`;
