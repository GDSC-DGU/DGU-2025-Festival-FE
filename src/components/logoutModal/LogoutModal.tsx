import styled from "styled-components";

interface LogoutModalProps {
  onCancel: () => void;
  onConfirm: () => void;
}

const LogoutModal = ({ onCancel, onConfirm }: LogoutModalProps) => {
  return (
    <Backdrop>
      <ModalContainer>
        <Title>로그아웃 하시겠어요?</Title>
        <SubMessage>
          현재 진행 중인 데이터는 저장되지 않을 수 있어요.
        </SubMessage>

        <ButtonGroup>
          <CancelButton onClick={onCancel}>취소</CancelButton>
          <ConfirmButton onClick={onConfirm}>로그아웃</ConfirmButton>
        </ButtonGroup>
      </ModalContainer>
    </Backdrop>
  );
};

export default LogoutModal;

// 스타일은 BoothCloseModal과 동일한 기준 유지

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1000;
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

const SubMessage = styled.p`
  font-size: 12px;
  color: #646e8b;
  margin-bottom: 20px;
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
  color: white;
  border-radius: 16px;
  padding: 8px 0;
  font-weight: 600;
  border: none;
  cursor: pointer;
`;
