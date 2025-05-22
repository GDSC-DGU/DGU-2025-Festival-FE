import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  width: 80%;
  max-width: 320px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 20px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

export const Title = styled.h2`
  ${({ theme }) => theme.fonts.Head3}
  color:  ${({ theme }) => theme.colors.gray700};
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-self: stretch;
`;

export const CancelButton = styled.button`
  flex: 1;
  background: white;
  border: 1px solid ${({ theme }) => theme.colors.gray300};
  border-radius: 16px;
  padding: 8px 0;
  ${({ theme }) => theme.fonts.Button2}
  color: ${({ theme }) => theme.colors.gray400};
`;

export const ConfirmButton = styled.button`
  flex: 1;
  background: ${({ theme }) => theme.colors.indigo600};
  border-radius: 16px;
  padding: 8px 0;
  ${({ theme }) => theme.fonts.Button2}
  color: white;
  border: none;
`;

export const Message = styled.p`
  ${({ theme }) => theme.fonts.Body3}
  color: ${({ theme }) => theme.colors.gray500};
`;
