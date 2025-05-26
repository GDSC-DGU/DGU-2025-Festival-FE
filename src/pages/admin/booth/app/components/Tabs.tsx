import styled from "styled-components";
import { useBoothAdminStore } from "../stores/useBoothAdminStore";

type PubStatus = "AVAILABLE" | "FULL";

const Tabs = () => {
const { pubStatus, setBoothStatus } = useBoothAdminStore();

const handleTabClick = (tab: PubStatus) => {
  setBoothStatus(tab);
};


  return (
    <TabWrapper>
      <TabButton
        selected={pubStatus === "AVAILABLE"}
        onClick={() => handleTabClick("AVAILABLE")}
      >
        바로 입장 가능
      </TabButton>
      <TabButton
        selected={pubStatus === "FULL"}
        onClick={() => handleTabClick("FULL")}
      >
        대기 예약 받기
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
