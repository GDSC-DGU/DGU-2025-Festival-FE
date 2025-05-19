import { ToggleContainer, ToggleButton } from './BoothTypeToggle.styles';

interface BoothTypeToggleProps {
  value: 'day' | 'night';
  onChange: (type: 'day' | 'night') => void;
}

export default function BoothTypeToggle({ value, onChange }: BoothTypeToggleProps) {
  return (
    <ToggleContainer>
      <ToggleButton
        selected={value === 'day'}
        onClick={() => onChange('day')}
      >
        오전 부스
      </ToggleButton>
      <ToggleButton
        selected={value === 'night'}
        onClick={() => onChange('night')}
      >
        야간 부스
      </ToggleButton>
    </ToggleContainer>
  );
}
