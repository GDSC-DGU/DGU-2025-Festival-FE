import CommonModal from "../commonModal/CommonModal";

interface LogoutModalProps {
  onCancel: () => void;
  onConfirm: () => void;
}

const LogoutModal = ({ onCancel, onConfirm }: LogoutModalProps) => {
  return (
    <CommonModal
      title="로그아웃 하시겠어요?"
      messages={<>현재 진행 중인 데이터는 저장되지 않을 수 있어요.</>}
      cancelText="취소"
      confirmText="로그아웃"
      onCancel={onCancel}
      onConfirm={onConfirm}
    />
  );
};

export default LogoutModal;
