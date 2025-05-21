import {
  ModalBackground,
  ModalBox,
  Title,
  CloseButton,
  GoButton,
  ButtonRow,
} from "./ComplateModal.styles";
import ModalPortal from "@/components/common/ModalPortal";

interface CompleteModalProps {
  onClose: () => void;
  onNavigate: () => void;
}

const CompleteModal = ({ onClose, onNavigate }: CompleteModalProps) => {
  return (
    <ModalPortal>
      <ModalBackground>
        <ModalBox>
          <Title>등록이 완료되었습니다!</Title>
          <ButtonRow>
            <CloseButton onClick={onClose}>닫기</CloseButton>
            <GoButton onClick={onNavigate}>바로가기</GoButton>
          </ButtonRow>
        </ModalBox>
      </ModalBackground>
    </ModalPortal>
  );
};

export default CompleteModal;
