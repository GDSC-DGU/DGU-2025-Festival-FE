import CommonModal from "@/components/modal/commonModal/CommonModal";

interface ConfirmDeleteModalProps {
  boothName: string;
  onCancel: () => void;
  onConfirm: () => void;
}

const ConfirmDeleteModal = ({
  boothName,
  onCancel,
  onConfirm,
}: ConfirmDeleteModalProps) => {
  return (
    <CommonModal
      title="대기자 삭제"
      messages={
        <>
          삭제 후 복구가 불가능합니다. <br /> {boothName}님의 대기를 삭제할까요?
        </>
      }
      cancelText="취소"
      confirmText="삭제"
      onCancel={onCancel}
      onConfirm={onConfirm}
    />
  );
};

export default ConfirmDeleteModal;
