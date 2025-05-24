import ModalPortal from "@/components/common/ModalPortal";
import {
  Overlay,
  Text,
  Title,
  ModalBox,
  ConfirmButton,
} from "./CheckModal.styles";

interface CheckModalProps {
  onClose: () => void;
  title: string;
  content: React.ReactNode;
}

export default function CheckModal({
  onClose,
  title,
  content,
}: CheckModalProps) {
  return (
    <ModalPortal>
      <Overlay>
        <ModalBox>
          <Title>{title}</Title>
          <Text>{content}</Text>
          <ConfirmButton onClick={onClose}>확인</ConfirmButton>
        </ModalBox>
      </Overlay>
    </ModalPortal>
  );
}
