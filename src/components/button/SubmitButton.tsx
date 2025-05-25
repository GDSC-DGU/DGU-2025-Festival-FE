import { ButtonContainer } from "./SubmitButton.styles";

interface SubmitButtonProps {
  onClick: () => void;
  title: string;
  disable?: boolean;
}
const SubmitButton = ({
  onClick,
  title,
  disable = false,
}: SubmitButtonProps) => {
  return (
    <ButtonContainer
      $disabled={disable}
      disabled={disable}
      type="button"
      onClick={onClick}
    >
      {title}
    </ButtonContainer>
  );
};

export default SubmitButton;
