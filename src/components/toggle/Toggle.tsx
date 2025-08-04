import { ToggleContainer, TabButton } from "./Toggle.styles";

export interface ToggleOption {
  label: string;
  value: string;
}

export interface ToggleProps<T extends string = string> {
  options: [ToggleOption, ToggleOption];
  current: T;
  onChange: (val: T) => void;
}

const Toggle = <T extends string>({
  options,
  current,
  onChange,
}: ToggleProps<T>) => {
  return (
    <ToggleContainer>
      {options.map((option) => (
        <TabButton
          key={option.value}
          $isActive={current === option.value}
          onClick={() => onChange(option.value as T)}
        >
          {option.label}
        </TabButton>
      ))}
    </ToggleContainer>
  );
};

export default Toggle;
