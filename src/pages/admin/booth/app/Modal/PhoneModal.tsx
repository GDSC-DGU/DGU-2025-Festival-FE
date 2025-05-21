import styled from 'styled-components';
import { useBoothAdminStore } from '../stores/useBoothAdminStore';

const PhoneModal = () => {
  const { phoneModalBooth, closePhoneModal } = useBoothAdminStore();

  if (!phoneModalBooth) return null;

  return (
    <Backdrop onClick={closePhoneModal}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <Title>{phoneModalBooth.name}님의 연락처</Title>
        <Phone>{phoneModalBooth.phone}</Phone>
        <CloseButton onClick={closePhoneModal}>닫기</CloseButton>
      </ModalContainer>
    </Backdrop>
  );
};

export default PhoneModal;

const Backdrop = styled.div`
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background: white;
  border-radius: 8px;
  padding: 24px;
  min-width: 240px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 16px;
  color: #333c55;
  margin-bottom: 12px;
`;

const Phone = styled.div`
  font-size: 18px;
  font-weight: bold;
  color:rgb(68, 56, 202);
  margin-bottom: 20px;
`;

const CloseButton = styled.button`
    background: none;
    color: #949DB8;
    font-size: 14px;
    font-weight: 500;
    padding: 8px 16px;
    border-radius: 16px;
    border: 1px solid #CBD1E1;
    cursor: pointer;
    width: 80%;
`;
