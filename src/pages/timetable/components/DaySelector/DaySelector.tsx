import { Container, DayText } from "./DaySelector.styles";

interface DaySelectorProps {
  label: string;
  value: string;
  selected: boolean;
  onClick: () => void;
}

const DaySelector = ({ label, selected, onClick }: DaySelectorProps) => {
  return (
    <Container $selected={selected} onClick={onClick}>
      <DayText>{label}</DayText>
    </Container>
  );
};

export default DaySelector;
