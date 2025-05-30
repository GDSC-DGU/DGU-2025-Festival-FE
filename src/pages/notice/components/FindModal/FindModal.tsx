import CheckModal from "@/components/modal/checkModal/CheckModal";

interface FindModalProps {
  onClose: () => void;
}

const FindModal = ({ onClose }: FindModalProps) => {
  const content = (
    <>
      분실물 정보 및 신분증 정보를 확인한 후 <br />
      본인 물건이거나 확인을 훤하시는 학우분들은 <br />월 ~ 금 (10:00~18:00)
      총학생회실로 방문해주세요
    </>
  );

  return (
    <CheckModal
      title="분실물은 어디서 찾나요?"
      content={content}
      onClose={onClose}
    />
  );
};

export default FindModal;
