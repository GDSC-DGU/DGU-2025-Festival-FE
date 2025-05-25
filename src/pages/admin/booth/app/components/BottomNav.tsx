import styled from "styled-components";
import person_on from "@/assets/icons/person_on.png";
import person_off from "@/assets/icons/person_off.png";
import late_person_on from "@/assets/icons/late_person_on.png";
import late_person_off from "@/assets/icons/late_person_off.png";

const BottomNavContainer = styled.div`
    width: 100%;
    max-width: 450px;
    height: 65px;
    padding: 0 8px;
    background: white;
    box-shadow: 0px -2px 8px rgba(79, 70, 229, 0.1); /* 기존 box-shadow */
    box-shadow: 0px -2px 8px 0px rgba(79, 70, 229, 0.1); /* 좌우 그림자 제거, 아래만 */
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
`;


const NavItem = styled.div<{ active?: boolean }>`
  flex: 1;
  align-self: stretch;
  padding: 8px 24px;
  background: white;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

const Label = styled.div<{ active?: boolean }>`
  font-size: 12px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 400;
  line-height: 16px;
  text-align: center;
  color: ${(props) => (props.active ? "#4338CA" : "#949DB8")};
`;

type BottomNavProps = {
  activeTab: "waiting" | "late";
  onTabChange: (tab: "waiting" | "late") => void;
};

const BottomNav = ({ activeTab, onTabChange }: BottomNavProps) => {
  return (
    <BottomNavContainer>
      <NavItem active={activeTab === "waiting"} onClick={() => onTabChange("waiting")}>
        <Icon src={activeTab === "waiting" ? person_on : person_off} alt="대기자 아이콘" />
        <Label active={activeTab === "waiting"}>대기자 관리</Label>
      </NavItem>
      <NavItem active={activeTab === "late"} onClick={() => onTabChange("late")}>
        <Icon src={activeTab === "late" ? late_person_on : late_person_off} alt="늦은 대기자 아이콘" />
        <Label active={activeTab === "late"}>늦은 대기자 관리</Label>
      </NavItem>
    </BottomNavContainer>
  );
};

export default BottomNav;
