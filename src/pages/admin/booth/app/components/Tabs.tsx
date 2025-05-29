import styled from "styled-components";
import { useBoothAdminStore } from "../stores/useBoothAdminStore";
import { useState } from "react";
import CommonModal from "@/components/modal/commonModal/CommonModal";

type PubStatus = "AVAILABLE" | "FULL";

const Tabs = () => {
  const { pubStatus, setBoothStatus } = useBoothAdminStore();
  const [step, setStep] = useState<"IDLE" | "INIT" | "CONFIRM">("IDLE");
  const [nextStatus, setNextStatus] = useState<PubStatus | null>(null);

  const handleTabClick = (status: PubStatus) => {
    setNextStatus(status);
    setStep("INIT");
  };

  const handleInitialConfirm = () => {
    setStep("CONFIRM");
  };

  const handleFinalConfirm = () => {
    if (nextStatus) {
      setBoothStatus(nextStatus);
    }
    setStep("IDLE");
    setNextStatus(null);
  };

  const handleCancel = () => {
    setStep("IDLE");
    setNextStatus(null);
  };

  return (
    <>
      <TabWrapper>
        <TabButton
          selected={pubStatus === "AVAILABLE"}
          onClick={() => handleTabClick("AVAILABLE")}
        >
          바로 입장 가능
        </TabButton>
        <TabButton
          selected={pubStatus === "FULL"}
          onClick={() => handleTabClick("FULL")}
        >
          대기 예약 받기
        </TabButton>
      </TabWrapper>

      {step === "INIT" && (
        <CommonModal
          title="부스를 오픈하시겠습니까?"
          messages="부스를 오픈하면 사용자들이 현재 상태를 확인할 수 있습니다."
          confirmText="다음"
          cancelText="취소"
          onConfirm={handleInitialConfirm}
          onCancel={handleCancel}
        />
      )}

      {step === "CONFIRM" && nextStatus && (
        <CommonModal
          title="상태를 변경하시겠습니까?"
          messages={`현재 부스를 [${
            nextStatus === "AVAILABLE" ? "바로 입장 가능" : "대기 예약 받기"
          }] 상태로 변경하시겠습니까?`}
          confirmText="확인"
          cancelText="취소"
          onConfirm={handleFinalConfirm}
          onCancel={handleCancel}
        />
      )}
    </>
  );
};

export default Tabs;

const TabWrapper = styled.div`
  display: inline-flex;
  background-color: #f1f3f9;
  border-radius: 100px;
  padding: 4px;
  gap: 4px;
`;

const TabButton = styled.button<{ selected: boolean }>`
  padding: 8px 12px;
  border-radius: 100px;
  ${({ theme }) => theme.fonts.Body2B};
  color: ${({ selected }) => (selected ? "#4F46E5" : "#949DB8")};
  background-color: ${({ selected }) => (selected ? "white" : "transparent")};
  border: none;
  cursor: pointer;
`;
