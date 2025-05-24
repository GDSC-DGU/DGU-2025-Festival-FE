import CheckModal from "@/components/modal/checkModal/CheckModal";

interface FindModalProps {
  onClose: () => void;
}

const FindModal = ({ onClose }: FindModalProps) => {
  const content = (
    <>
      잃어버린 분실물은 축제기획단 부스에서 찾으면 됩니다. <br /> 분실물을
      습득하셨다면 축제기획단 부스로 가져와주세요.
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
