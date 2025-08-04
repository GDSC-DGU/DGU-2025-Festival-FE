import { QuestionContainer, QuestionText } from "./questionButton.styles";
import QuestionIcon from "@/assets/icons/question.svg";

interface QuestionButtonProps {
  text: string;
  onClick: () => void;
}

const QuestionButton = ({ text, onClick }: QuestionButtonProps) => {
  return (
    <QuestionContainer onClick={onClick}>
      <img src={QuestionIcon} width={20} height={20} alt="?" />
      <QuestionText>{text}</QuestionText>
    </QuestionContainer>
  );
};

export default QuestionButton;
