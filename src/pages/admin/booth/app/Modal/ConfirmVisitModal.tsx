import CommonModal from "@/components/modal/commonModal/CommonModal";

interface ConfirmVisitModalProps {
  boothName: string;
  onCancel: () => void;
  onConfirm: () => void;
}

const ConfirmVisitModal = ({
  boothName,
  onCancel,
  onConfirm,
}: ConfirmVisitModalProps) => {
  return (
    <CommonModal
      title="입장 완료 처리"
      messages={<>{boothName}님을 입장 완료로 처리할까요?</>}
      cancelText="취소"
      confirmText="완료"
      onCancel={onCancel}
      onConfirm={onConfirm}
    />
  );
};

export default ConfirmVisitModal;
