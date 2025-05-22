import { ToggleContainer, ToggleButton } from "./BoothTypeToggle.styles";

interface BoothTypeToggleProps {
  value: "day" | "night";
  onChange: (type: "day" | "night") => void;
}

export default function BoothTypeToggle({
  value,
  onChange,
}: BoothTypeToggleProps) {
  return (
    <ToggleContainer>
      <ToggleButton selected={value === "day"} onClick={() => onChange("day")}>
        부스
      </ToggleButton>
      <ToggleButton
        selected={value === "night"}
        onClick={() => onChange("night")}
      >
        주점
      </ToggleButton>
    </ToggleContainer>
  );
}
