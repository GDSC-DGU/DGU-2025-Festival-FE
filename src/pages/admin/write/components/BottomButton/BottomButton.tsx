import { Container } from "./BottomButton.styles";
import SubmitButton from "@/components/button/SubmitButton";

interface BottomButtonProps {
  onClick: () => void;
  title: string;
  disabled?: boolean;
}
const BottomButton = ({
  onClick,
  title,
  disabled = false,
}: BottomButtonProps) => {
  return (
    <Container>
      <SubmitButton disable={disabled} onClick={onClick} title={title} />
    </Container>
  );
};

export default BottomButton;
