import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalBox = styled.div`
  background: white;
  padding: 24px;
  border-radius: 12px;
  width: 90%;
  max-width: 300px;
`;

export const Title = styled.h2`
  ${({ theme }) => theme.fonts.Head3}
  color:  ${({ theme }) => theme.colors.gray700};
  margin-bottom: 12px;
  text-align: center;
`;

export const Text = styled.p`
  ${({ theme }) => theme.fonts.Body3}
  color: ${({ theme }) => theme.colors.gray500};
  white-space: pre-line;
  margin-bottom: 20px;
  text-align: center;
`;

export const ConfirmButton = styled.button`
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  border: none;
  background: ${({ theme }) => theme.colors.indigo600};
  color: white;
  ${({ theme }) => theme.fonts.Button2}
`;
