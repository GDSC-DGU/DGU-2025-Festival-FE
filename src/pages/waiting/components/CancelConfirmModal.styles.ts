import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalBox = styled.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  width: 280px;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #333c55;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  font-size: 14px;
  color: #646e8b;
  margin-bottom: 20px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
`;

export const Button = styled.button<{ $gray?: boolean }>`
  flex: 1;
  padding: 10px 0;
  border: none;
  border-radius: 100px;
  font-weight: 500;
  font-size: 14px;
  background-color: ${({ $gray }) => ($gray ? '#a7a7a7' : '#575bdf')};
  color: white;
`;
