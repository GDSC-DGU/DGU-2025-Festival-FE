import CommonModal from "@/components/modal/commonModal/CommonModal";

interface DeleteModalProps {
  onCancel: () => void;
  onDelete: () => void;
}

const DeleteModal = ({ onCancel, onDelete }: DeleteModalProps) => {
  return (
    <CommonModal
      title="삭제하시겠습니까?"
      messages={<>삭제 후 복구 불가합니다. 정말 삭제하시겠습니까?</>}
      cancelText="닫기"
      confirmText="삭제"
      onCancel={onCancel}
      onConfirm={onDelete}
    />
  );
};

export default DeleteModal;
