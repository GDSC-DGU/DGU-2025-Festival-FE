import DaySelector from "../DaySelector/DaySelector";
import { Row } from "./DaySelectorList.styles";

interface Props {
  dates: { label: string; value: string }[];
  selectedDate: string;
  onSelect: (value: string) => void;
}

const DaySelectorList = ({ dates, selectedDate, onSelect }: Props) => {
  return (
    <Row>
      {dates.map((date) => (
        <DaySelector
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

export default DaySelectorList;
