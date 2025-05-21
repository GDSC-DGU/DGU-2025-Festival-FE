import styled from 'styled-components';

interface ConfirmDeleteModalProps {
  boothName: string;
  onCancel: () => void;
  onConfirm: () => void;
}

const ConfirmDeleteModal = ({ boothName, onCancel, onConfirm }: ConfirmDeleteModalProps) => {
  return (
    <Backdrop>
      <ModalContainer>
        <Title>대기자 삭제</Title>
        <Message>삭제 후 복구가 불가능합니다.</Message>
        <SubMessage>{boothName}님의 대기를 삭제할까요?</SubMessage>
        <ButtonGroup>
          <CancelButton onClick={onCancel}>취소</CancelButton>
          <ConfirmButton onClick={onConfirm}>삭제</ConfirmButton>
        </ButtonGroup>
      </ModalContainer>
    </Backdrop>
  );
};

export default ConfirmDeleteModal;

// 스타일
const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 999;
`;

const ModalContainer = styled.div`
  width: 80%;
  max-width: 320px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border-radius: 8px;
  padding: 24px 20px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 16px;
  font-weight: 600;
  color: #333c55;
  margin-bottom: 8px;
`;

const Message = styled.p`
  font-size: 13px;
  color: #646e8b;
`;

const SubMessage = styled.p`
  font-size: 13px;
  color: #646e8b;
  margin: 10px 0 24px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
`;

const CancelButton = styled.button`
  flex: 1;
  background: white;
  border: 1px solid #cbd1e1;
  border-radius: 16px;
  padding: 8px 0;
  font-weight: 600;
  color: #949db8;
`;

const ConfirmButton = styled.button`
  flex: 1;
  background: #4f46e5;
  border-radius: 16px;
  padding: 8px 0;
  font-weight: 600;
  color: white;
  border: none;
`;
