import { ToggleContainer, TabButton } from "./Toggle.styles";

interface ToggleProps {
  options: [string, string];
  isLeftSelected: boolean;
  setIsLeftSelected: (val: boolean) => void;
}

const Toggle = ({
  options,
  isLeftSelected,
  setIsLeftSelected,
}: ToggleProps) => {
  return (
    <ToggleContainer>
      <TabButton
        $isActive={isLeftSelected}
        onClick={() => setIsLeftSelected(true)}
      >
        {options[0]}
      </TabButton>
      <TabButton
        $isActive={!isLeftSelected}
        onClick={() => setIsLeftSelected(false)}
      >
        {options[1]}
      </TabButton>
    </ToggleContainer>
  );
};

export default Toggle;
