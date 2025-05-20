import ModalPortal from '@/components/common/ModalPortal';
import * as S from './WaitingInfoModal.styles';

interface WaitingInfoModalProps {
  onClose: () => void;
}

export default function WaitingInfoModal({ onClose }: WaitingInfoModalProps) {
  return (
    <ModalPortal>
      <S.Overlay>
        <S.ModalBox>
          <S.Title>웨이팅 기능 안내</S.Title>
          <S.Text>
          1인당 1개 부스만 웨이팅 가능해요.{"\n"}
        입장 전 푸시 알림 3회 발송 ( 3팀 전, 직전, 입장 ){"\n"}
        알림 후 10분 내 미입장 시 자동 취소돼요.{"\n"}
        내 순서와 현황은 이 화면에서 확인 가능해요.
          </S.Text>
          <S.ConfirmButton onClick={onClose}>확인</S.ConfirmButton>
        </S.ModalBox>
      </S.Overlay>
    </ModalPortal>
  );
}
