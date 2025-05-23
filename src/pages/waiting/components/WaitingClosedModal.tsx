import ModalPortal from '@/components/common/ModalPortal';
import * as S from './WaitingInfoModal.styles';

interface WaitingClosedModalProps {
  onClose: () => void;
}

export default function WaitingClosedModal({ onClose }: WaitingClosedModalProps) {
  return (
    <ModalPortal>
      <S.Overlay>
        <S.ModalBox>
          <S.Title>웨이팅 미오픈 안내</S.Title>
          <S.Text>
            아직 오픈하지 않았습니다.{"\n"}
            야간 부스 웨이팅은 05월 28일부터 가능합니다.
          </S.Text>
          <S.ConfirmButton onClick={onClose}>확인</S.ConfirmButton>
        </S.ModalBox>
      </S.Overlay>
    </ModalPortal>
  );
}
