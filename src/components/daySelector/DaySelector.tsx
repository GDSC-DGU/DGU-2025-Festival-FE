import { Row, DayContainer, DayText } from "./DaySelector.styles";

interface Props {
  dates: { label: string; value: string }[];
  selectedDate: string;
  onSelect: (value: string) => void;
}

interface DaySelectorProps {
  label: string;
  value: string;
  selected: boolean;
  onClick: () => void;
}

const Day = ({ label, selected, onClick }: DaySelectorProps) => {
  return (
    <DayContainer $selected={selected} onClick={onClick}>
      <DayText>{label}</DayText>
    </DayContainer>
  );
};

const DaySelector = ({ dates, selectedDate, onSelect }: Props) => {
  return (
    <Row>
      {dates.map((date) => (
        <Day
          key={date.value}
          label={date.label}
          value={date.value}
          selected={selectedDate === date.value}
          onClick={() => onSelect(date.value)}
        />
      ))}
    </Row>
  );
};

export default DaySelector;
