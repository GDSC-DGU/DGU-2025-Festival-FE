import { Container } from "./BottomButton.styles";
import SubmitButton from "@/components/button/SubmitButton";

interface BottomButtonProps {
  onClick: () => void;
  title: string;
}
const BottomButton = ({ onClick, title }: BottomButtonProps) => {
  return (
    <Container>
      <SubmitButton onClick={onClick} title={title} />
    </Container>
  );
};

export default BottomButton;
