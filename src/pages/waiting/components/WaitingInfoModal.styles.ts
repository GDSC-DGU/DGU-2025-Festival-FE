import styled from 'styled-components';

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
  z-index: 999;
`;

export const ModalBox = styled.div`
  background: white;
  padding: 24px;
  border-radius: 12px;
  width: 90%;
  max-width: 300px;
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: #333C55;
  margin-bottom: 12px;
  text-align: center;
`;

export const Text = styled.p`
  font-size: 14px;
  line-height: 1.7;
  color: #646E8B;
  white-space: pre-line;
  margin-bottom: 20px;
  text-align: center;
`;

export const ConfirmButton = styled.button`
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  border: none;
  background: #575bdf;
  color: white;
  font-weight: 500;
`;
