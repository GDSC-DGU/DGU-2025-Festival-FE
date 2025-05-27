import CheckModal from "@/components/modal/checkModal/CheckModal";

interface WaitingInfoModalProps {
  onClose: () => void;
}

export default function WaitingInfoModal({ onClose }: WaitingInfoModalProps) {
  const content = (
    <>
    한 사람당 한 개의 부스만 웨이팅할 수 있어요.  
    <br />
    순서가 되면 문자로 알려드려요.  
    <br />
    알림 후 3분 이내 입장하지 않으면 자동으로 취소돼요.  
    <br />
    내 순서와 현재 상태는 이 화면에서 확인할 수 있어요.
  </>
  
  );
  return (
    <CheckModal title="웨이팅 기능 안내" content={content} onClose={onClose} />
  );
}
