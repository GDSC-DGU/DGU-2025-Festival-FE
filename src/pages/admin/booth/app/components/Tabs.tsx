import styled from "styled-components";

export type TabType = "available" | "full";

export interface TabsProps {
  current: TabType;
  onChange: (tab: TabType) => void;
}

const Tabs: React.FC<TabsProps> = ({ current, onChange }) => {
  return (
    <TabWrapper>
      <TabButton
        selected={current === "available"}
        onClick={() => onChange("available")}
      >
        자리 있음
      </TabButton>
      <TabButton selected={current === "full"} onClick={() => onChange("full")}>
        만석
      </TabButton>
    </TabWrapper>
  );
};

export default Tabs;

const TabWrapper = styled.div`
  display: inline-flex;
  background-color: #f1f3f9;
  border-radius: 100px;
  padding: 4px;
  gap: 4px;
`;

const TabButton = styled.button<{ selected: boolean }>`
  padding: 8px 12px;
  border-radius: 100px;
  ${({ theme }) => theme.fonts.Body2B};
  color: ${({ selected }) => (selected ? "#4F46E5" : "#949DB8")};
  background-color: ${({ selected }) => (selected ? "white" : "transparent")};
  border: none;
  cursor: pointer;
`;
