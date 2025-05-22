import CommonModal from "@/components/commonModal/CommonModal";

interface Props {
  onConfirm: () => void;
  onCancel: () => void;
}

export default function CancelConfirmModal({ onConfirm, onCancel }: Props) {
  return (
    <CommonModal
      title="웨이팅 취소"
      messages={<>정말 취소하시겠습니까?</>}
      onCancel={onCancel}
      onConfirm={onConfirm}
      cancelText="아니오"
      confirmText="예"
    />
  );
}
