import {
  Backdrop,
  ModalContainer,
  Title,
  Message,
  ButtonGroup,
  CancelButton,
  ConfirmButton,
  ContentContainer,
} from "./CommonModal.styles";
import ModalPortal from "../common/ModalPortal";

interface CommonModalProps {
  title: string;
  messages: React.ReactNode;
  confirmText: string;
  cancelText: string;
  onConfirm: () => void;
  onCancel: () => void;
  children?: React.ReactNode;
  confirmDisabled?: boolean;
}

const CommonModal = ({
  title,
  messages,
  confirmText,
  cancelText,
  onConfirm,
  onCancel,
  children,
  confirmDisabled,
}: CommonModalProps) => {
  return (
    <ModalPortal>
      <Backdrop>
        <ModalContainer>
          <ContentContainer>
            <Title>{title}</Title>
            <Message>{messages}</Message>
          </ContentContainer>

          {children}
          <ButtonGroup>
            <CancelButton onClick={onCancel}>{cancelText}</CancelButton>
            <ConfirmButton disabled={confirmDisabled} onClick={onConfirm}>
              {confirmText ?? "확인"}
            </ConfirmButton>
          </ButtonGroup>
        </ModalContainer>
      </Backdrop>
    </ModalPortal>
  );
};

export default CommonModal;
