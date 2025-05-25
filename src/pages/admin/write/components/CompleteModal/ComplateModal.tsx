import CheckModal from "@/components/modal/checkModal/CheckModal";
interface CompleteModalProps {
  onClose: () => void;
}

const CompleteModal = ({ onClose }: CompleteModalProps) => {
  return (
    <CheckModal
      title="등록이 완료되었습니다"
      content={<>작성한 글을 확인하세요!</>}
      onClose={onClose}
    />
  );
};

export default CompleteModal;
