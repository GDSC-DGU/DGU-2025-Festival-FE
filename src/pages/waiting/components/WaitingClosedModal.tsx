import CheckModal from "@/components/modal/checkModal/CheckModal";

interface WaitingClosedModalProps {
  onClose: () => void;
}

export default function WaitingClosedModal({
  onClose,
}: WaitingClosedModalProps) {
  const content = (
    <>
      아직 오픈하지 않았습니다.
      <br />
      야간 부스 웨이팅은 05월 28일부터 가능합니다.
    </>
  );
  return (
    <CheckModal
      title="웨이팅 미오픈 안내"
      content={content}
      onClose={onClose}
    />
  );
}
