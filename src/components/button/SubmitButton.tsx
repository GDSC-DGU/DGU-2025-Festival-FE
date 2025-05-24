import { ButtonContainer } from "./SubmitButton.styles";

interface SubmitButtonProps {
  onClick: () => void;
  title: string;
}
const SubmitButton = ({ onClick, title }: SubmitButtonProps) => {
  return (
    <ButtonContainer type="button" onClick={onClick}>
      {title}
    </ButtonContainer>
  );
};

export default SubmitButton;
