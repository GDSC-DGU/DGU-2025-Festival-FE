import CommonModal from "@/components/modal/commonModal/CommonModal";

interface CompleteModalProps {
  onClose: () => void;
  onNavigate: () => void;
}

const CompleteModal = ({ onClose, onNavigate }: CompleteModalProps) => {
  return (
    <CommonModal
      title="등록이 완료되었습니다"
      messages={<>작성한 글을 확인하세요!</>}
      cancelText="닫기"
      confirmText="바로가기"
      onCancel={onClose}
      onConfirm={onNavigate}
    />
  );
};

export default CompleteModal;
