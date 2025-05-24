import { useState } from "react";
import styled from "styled-components";
import CommonModal from "@/components/modal/commonModal/CommonModal";

interface BoothCloseModalProps {
  onCancel: () => void;
  onConfirm: (type: "soldout" | "timeover") => void;
}

const BoothCloseModal = ({ onCancel, onConfirm }: BoothCloseModalProps) => {
  const [selectedType, setSelectedType] = useState<
    "soldout" | "timeover" | null
  >(null);

  const handleConfirm = () => {
    if (selectedType) {
      onConfirm(selectedType);
    }
  };

  return (
    <CommonModal
      title="부스를 종료 알리기"
      messages={
        <>
          대기자가 있는지 확인 후, 종료 유형을 선택해주세요. <br />
          종료 유형에 따라 대기자에게 안내가 나갑니다.
        </>
      }
      onCancel={onCancel}
      onConfirm={handleConfirm}
      cancelText="취소"
      confirmText="부스 종료"
      confirmDisabled={!selectedType}
    >
      <Options>
        <OptionButton
          selected={selectedType === "soldout"}
          onClick={() => setSelectedType("soldout")}
        >
          재료 소진
        </OptionButton>
        <OptionButton
          selected={selectedType === "timeover"}
          onClick={() => setSelectedType("timeover")}
        >
          운영 시간 종료
        </OptionButton>
      </Options>
    </CommonModal>
  );
};

export default BoothCloseModal;

const Options = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const OptionButton = styled.button<{ selected: boolean }>`
  padding: 10px;
  border-radius: 16px;
  ${({ theme }) => theme.fonts.Button2};
  color: ${({ selected }) => (selected ? "#4338CA" : "#646E8B")};
  background: ${({ selected }) => (selected ? "#E0E7FF" : "#F9FAFB")};
  border: ${({ selected }) =>
    selected ? "2px solid #4338CA" : "1px solid #CBD1E1"};
`;
