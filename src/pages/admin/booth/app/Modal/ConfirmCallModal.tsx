import CommonModal from "@/components/commonModal/CommonModal";

interface ConfirmCallModalProps {
  boothName: string;
  onCancel: () => void;
  onConfirm: () => void;
}

const ConfirmCallModal = ({
  boothName,
  onCancel,
  onConfirm,
}: ConfirmCallModalProps) => {
  return (
    <CommonModal
      title="대기자 호출"
      messages={<>{boothName}님을 호출하시겠어요?</>}
      cancelText="취소"
      confirmText="호출"
      onCancel={onCancel}
      onConfirm={onConfirm}
    />
  );
};

export default ConfirmCallModal;
