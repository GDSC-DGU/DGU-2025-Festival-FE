import { ToggleContainer, TabButton } from "./Toggle.styles";

export type ToggleOption = string;

export interface ToggleProps<T extends ToggleOption = string> {
  options: [T, T];
  current: T;
  onChange: (val: T) => void;
}

const Toggle = <T extends ToggleOption>({
  options,
  current,
  onChange,
}: ToggleProps<T>) => {
  return (
    <ToggleContainer>
      <TabButton
        $isActive={current === options[0]}
        onClick={() => onChange(options[0])}
      >
        {options[0]}
      </TabButton>
      <TabButton
        $isActive={current === options[1]}
        onClick={() => onChange(options[1])}
      >
        {options[1]}
      </TabButton>
    </ToggleContainer>
  );
};

export default Toggle;
