import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(3px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
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
  font-size: 20px;
  font-weight: 600;
  color: #333c55;
  margin-bottom: 20px;
  text-align: center;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: #333c55;
  margin-left: 3px;
`;

export const Input = styled.input`
  width: 87%;
  height: 36px;
  padding: 8px 16px;
  border: 1px solid #d7d7d7;
  border-radius: 4px;
  font-size: 16px;
  margin: 8px 0;
`;

export const Notice = styled.p`
  font-size: 14px;
  color: #646e8b;
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
  background: #a7a7a7;
  border-radius: 100px;
  padding: 10px;
  font-weight: 500;
  border: none;
`;

export const ConfirmButton = styled.button<{ disabled?: boolean }>`
  flex: 1;
  background: ${({ disabled }) => (disabled ? '#a7a7a7' : '#575bdf')};
  color: ${({ disabled }) => (disabled ? 'black' : 'white')};
  border-radius: 100px;
  padding: 10px;
  font-weight: 500;
  border: none;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

export const PhoneInputWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
`;

export const SendCodeButton = styled.button<{ disabled?: boolean }>`
  padding: 10px 12px;
  background-color: ${({ disabled }) => (disabled ? '#c6c6c6' : '#575bdf')};
  color: white;
  border-radius: 8px;
  font-weight: 500;
  white-space: nowrap;
  height: 45px;
  align-self: center;
  text-align: center;
  align-items: center;
  border: none;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

export const SmallNotice = styled.p`
  font-size: 12px;
  color: #888;
  margin: -18px 0 20px;
  text-align: center;
  
`;
