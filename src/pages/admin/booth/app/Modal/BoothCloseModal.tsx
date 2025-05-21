import { useState } from 'react';
import styled from 'styled-components';

interface BoothCloseModalProps {
  onCancel: () => void;
  onConfirm: (type: 'soldout' | 'timeover') => void;
}

const BoothCloseModal = ({ onCancel, onConfirm }: BoothCloseModalProps) => {
  const [selectedType, setSelectedType] = useState<'soldout' | 'timeover' | null>(null);

  const handleConfirm = () => {
    if (selectedType) onConfirm(selectedType);
  };

  return (
    <Backdrop>
      <ModalContainer>
        <Title>부스를 종료 알리기</Title>
        <SubMessage>대기자가 있는지 확인 후, 종료 유형을 선택해주세요.</SubMessage>
        <SubMessage>종료 유형에 따라 대기자에게 안내가 나갑니다.</SubMessage>

        <Options>
          <OptionButton
            selected={selectedType === 'soldout'}
            onClick={() => setSelectedType('soldout')}
          >
            재료 소진
          </OptionButton>
          <OptionButton
            selected={selectedType === 'timeover'}
            onClick={() => setSelectedType('timeover')}
          >
            운영 시간 종료
          </OptionButton>
        </Options>

        <ButtonGroup>
          <CancelButton onClick={onCancel}>취소</CancelButton>
          <ConfirmButton disabled={!selectedType} onClick={handleConfirm}>
            부스 종료
          </ConfirmButton>
        </ButtonGroup>
      </ModalContainer>
    </Backdrop>
  );
};

export default BoothCloseModal;

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

const SubMessage = styled.p`
  font-size: 12px;
  color: #646e8b;
`;

const Options = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const OptionButton = styled.button<{ selected: boolean }>`
  padding: 10px;
  border-radius: 16px;
  font-weight: 600;
  color: ${({ selected }) => (selected ? '#4338CA' : '#646E8B')};
  background: ${({ selected }) => (selected ? '#E0E7FF' : '#F9FAFB')};
  border: ${({ selected }) => (selected ? '2px solid #4338CA' : '1px solid #CBD1E1')};
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

const ConfirmButton = styled.button<{ disabled: boolean }>`
  flex: 1;
  background: ${({ disabled }) => (disabled ? '#A5B4FC' : '#4f46e5')};
  color: white;
  border-radius: 16px;
  padding: 8px 0;
  font-weight: 600;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  border: none;
`;
