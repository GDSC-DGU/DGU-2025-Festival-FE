import styled from "styled-components";
import { updateBoothStatus } from "@/api/booth/adminBooth";
import { useBoothAdminStore } from "../stores/useBoothAdminStore";

export type TabType = "available" | "full";

type TabsProps = {
  current: TabType;
  onChange: (tab: TabType) => void;
};

const Tabs: React.FC<TabsProps> = ({ current, onChange }) => {
  const handleTabChange = async (tab: TabType) => {
    const status = tab === "available" ? "AVAILABLE" : "FULL";
  
    try {
      await updateBoothStatus(status);
      alert(`부스 상태가 '${status}'로 변경되었습니다.`);
      onChange(tab);
    } catch (err) {
      console.error("상태 변경 실패:", err);
      alert("상태 변경에 실패했습니다.");
    }
  };
  
  
  return (
    <TabWrapper>
      <TabButton
        selected={current === "available"}
        onClick={() => handleTabChange("available")}
      >
        자리 있음
      </TabButton>
      <TabButton
        selected={current === "full"}
        onClick={() => handleTabChange("full")}
      >
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
