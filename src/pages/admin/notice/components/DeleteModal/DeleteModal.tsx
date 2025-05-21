import {
  ModalBackground,
  ModalBox,
  Title,
  CloseButton,
  DeleteButton,
  ButtonRow,
  Description,
} from "./DeleteModal.styles";
import ModalPortal from "@/components/common/ModalPortal";

interface DeleteModalProps {
  onCancel: () => void;
  onDelete: () => void;
}

const DeleteModal = ({ onCancel, onDelete }: DeleteModalProps) => {
  return (
    <ModalPortal>
      <ModalBackground>
        <ModalBox>
          <Title>삭제하시겠습니까?</Title>
          <Description>
            삭제 후 복구 불가합니다.{"\n"}정말 삭제하시겠습니까?
          </Description>
          <ButtonRow>
            <CloseButton onClick={onCancel}>닫기</CloseButton>
            <DeleteButton onClick={onDelete}>삭제</DeleteButton>
          </ButtonRow>
        </ModalBox>
      </ModalBackground>
    </ModalPortal>
  );
};

export default DeleteModal;
