import styled from "styled-components";

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalBox = styled.div`
  width: 80%;
  max-width: 270px;
  background: white;
  border-radius: 12px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const Title = styled.h2`
  ${({ theme }) => theme.fonts.Head3};
`;

export const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 8px;
  align-self: stretch;
`;

export const CloseButton = styled.button`
  flex: 1;
  ${({ theme }) => theme.fonts.Button2};
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.gray400};
  padding: 8px 16px;
  border: 1px solid ${({ theme }) => theme.colors.gray400};
  border-radius: 16px;
  cursor: pointer;
  ${({ theme }) => theme.fonts.Button1}
  width: 100%;
`;

export const DeleteButton = styled.button`
  flex: 1;
  ${({ theme }) => theme.fonts.Button2};
  background: ${({ theme }) => theme.colors.indigo600};
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  ${({ theme }) => theme.fonts.Button1}
`;

export const Description = styled.p`
  ${({ theme }) => theme.fonts.Body3};
  color: ${({ theme }) => theme.colors.gray500};
`;
