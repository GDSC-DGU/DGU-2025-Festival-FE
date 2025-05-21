import ModalPortal from '@/components/common/ModalPortal';
import * as S from './CancelConfirmModal.styles';

interface Props {
  onConfirm: () => void;
  onCancel: () => void;
}

export default function CancelConfirmModal({ onConfirm, onCancel }: Props) {
  return (
    <ModalPortal>
      <S.Overlay>
        <S.ModalBox>
          <S.Title>웨이팅 취소</S.Title>
          <S.Description>정말 취소하시겠습니까?</S.Description>
          <S.ButtonGroup>
            <S.Button onClick={onConfirm}>예</S.Button>
            <S.Button onClick={onCancel} $gray>
              아니요
            </S.Button>
          </S.ButtonGroup>
        </S.ModalBox>
      </S.Overlay>
    </ModalPortal>
  );
}
