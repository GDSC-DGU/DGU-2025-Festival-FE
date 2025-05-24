import CheckModal from "@/components/modal/checkModal/CheckModal";

interface WaitingInfoModalProps {
  onClose: () => void;
}

export default function WaitingInfoModal({ onClose }: WaitingInfoModalProps) {
  const content = (
    <>
      {" "}
      1인당 1개 부스만 웨이팅 가능해요.
      <br />
      입장 전 푸시 알림 3회 발송 ( 3팀 전, 직전, 입장 )<br />
      알림 후 10분 내 미입장 시 자동 취소돼요.
      <br />내 순서와 현황은 이 화면에서 확인 가능해요.
    </>
  );
  return (
    <CheckModal title="웨이팅 기능 안내" content={content} onClose={onClose} />
  );
}
