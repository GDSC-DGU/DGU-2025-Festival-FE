import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(3px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalBox = styled.div`
  background: white;
  padding: 32px;
  border-radius: 12px;
  width: 90%;
  max-width: 270px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
`;

export const Title = styled.h2`
  ${({ theme }) => theme.fonts.Head3}
  color: #333c55;
  margin-bottom: 20px;
  text-align: center;
`;

export const Label = styled.label`
  ${({ theme }) => theme.fonts.Body2B}
  color: #333c55;
  margin-left: 3px;
`;

export const Input = styled.input`
  width: 87%;
  padding: 10px 16px;
  border: 1px solid ${({ theme }) => theme.colors.gray300};
  outline: none;
  border-radius: 8px;
  ${({ theme }) => theme.fonts.Body2};
  color: ${({ theme }) => theme.colors.gray700};
  margin: 8px 0;
`;

export const Notice = styled.p`
  ${({ theme }) => theme.fonts.Body3}
  color: ${({ theme }) => theme.colors.gray500};
  text-align: center;
  line-height: 1.6;
  margin-bottom: 24px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
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

export const ConfirmButton = styled.button<{ disabled?: boolean }>`
  flex: 1;
  background: ${({ disabled, theme }) =>
    disabled ? theme.colors.gray400 : theme.colors.indigo600};
  color: white;
  border-radius: 16px;
  ${({ theme }) => theme.fonts.Button2}
  border: none;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

export const PhoneInputWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
`;

export const SendCodeButton = styled.button<{ disabled?: boolean }>`
  padding: 10px 16px;
  background: ${({ disabled, theme }) =>
    disabled ? theme.colors.gray400 : theme.colors.indigo600};
  color: white;
  border-radius: 8px;
  ${({ theme }) => theme.fonts.Body2};
  white-space: nowrap;
  align-self: center;
  text-align: center;
  align-items: center;
  border: none;
  border: 1px solid
    ${({ disabled, theme }) =>
      disabled ? theme.colors.gray400 : theme.colors.indigo600};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

export const SmallNotice = styled.p`
  ${({ theme }) => theme.fonts.Caption}
  color: ${({ theme }) => theme.colors.gray400};
  margin: -18px 0 20px;
  text-align: start;
`;
