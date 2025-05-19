import { DateSelectorWrapper, DateButton } from './DateSelector.styles';

interface DateSelectorProps {
  selected: string;
  onChange: (date: string) => void;
}

const dates = [
  { label: '5/27 화', value: '2025-05-27' },
  { label: '5/28 수', value: '2025-05-28' },
  { label: '5/29 목', value: '2025-05-29' },
];

export default function DateSelector({ selected, onChange }: DateSelectorProps) {
  return (
    <DateSelectorWrapper>
      {dates.map(({ label, value }) => (
        <DateButton
          key={value}
          selected={selected === value}
          onClick={() => onChange(value)}
        >
          {label}
        </DateButton>
      ))}
    </DateSelectorWrapper>
  );
}
