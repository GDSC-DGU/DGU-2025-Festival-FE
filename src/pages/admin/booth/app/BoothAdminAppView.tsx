import {
  Wrapper,
  BoothListWrapper,
  Section,
  SectionTitle,
  SectionDescription,
  TotalCount,
} from "./BoothAdminAppView.styles";
import Tabs from "./components/Tabs";
import FloatingButton from "./components/FloatingButton";
import { useBoothAdminStore } from "./stores/useBoothAdminStore";
import WaitingBoothCard from "./components/WaitingCard";
import ConfirmCallModal from "./Modal/ConfirmCallModal";
import ConfirmVisitModal from "./Modal/ConfirmVisitModal";
import ConfirmDeleteModal from "./Modal/ConfirmDeleteModal";
import BoothCloseModal from "./Modal/BoothCloseModal";
import PhoneModal from "./Modal/PhoneModal";
import TopBar from "@/components/topbar/TopBar";
import RoleTag from "@/components/role/RoleTag";
import BottomNav from "./components/BottomNav";
import { useEffect } from "react";
import { useState } from "react"; 

const BoothAdminAppView = () => {
  const [bottomTab, setBottomTab] = useState<"waiting" | "late">("waiting");

  const {
    tab,
    setTab,
    waitingBooths,
    modalType,
    selectedBooth,
    closeModal,
    confirmCall,
    confirmVisit,
    confirmDelete,
    confirmCloseBooth,
    fetchBooths,
    // openModal,
  } = useBoothAdminStore();

  useEffect(() => {
    fetchBooths();
  }, []);

  const now = Date.now();
  const LATE_MINUTES = 5;

  const lateBooths = waitingBooths.filter(
    (booth) =>
      booth.calledAt &&
      !booth.visited &&
      !booth.cancelled &&
      (now - new Date(booth.calledAt).getTime()) / 60000 >= LATE_MINUTES
  );

  const normalBooths = waitingBooths;

  const notEnteredCount = normalBooths.filter(
    (booth) => !booth.visited && !booth.cancelled
  ).length;

  return (
    <Wrapper>
      <RoleTag />
      <TopBar title="야간 부스 웨이팅 관리" />

      <Section>
        <SectionTitle>부스 좌석 현황 설정</SectionTitle>
        <SectionDescription>
          현재 부스의 좌석 상황을 설정하면, 방문자가 이를 확인할 수 있어요.
        </SectionDescription>
        <Tabs current={tab} onChange={setTab} />
      </Section>

      {bottomTab === "late" && lateBooths.length > 0 && (
        <Section>
          <SectionTitle>늦은 대기자</SectionTitle>
          <SectionDescription>
            호출 후 5분 이상 지났지만 아직 방문하지 않은 대기자입니다.
          </SectionDescription>
          <BoothListWrapper>
            {lateBooths.map((booth) => (
              <WaitingBoothCard
                key={booth.id}
                booth={booth}
                showDeleteButton={true}
                highlightLate
              />
            ))}
          </BoothListWrapper>
        </Section>
      )}

{bottomTab === "waiting" && (
  <Section>
    <SectionTitle>전체 대기자 목록</SectionTitle>
    <SectionDescription>
      현재 등록된 모든 대기자를 확인할 수 있어요.
    </SectionDescription>
    <TotalCount>대기 {notEnteredCount}팀</TotalCount>
    <BoothListWrapper>
      {normalBooths.map((booth) => {
        const isCalling = booth.calledAt;
        const elapsedMinutes = booth.calledAt
          ? (now - new Date(booth.calledAt).getTime()) / 60000
          : 0;
        const showDeleteButton =
          isCalling && elapsedMinutes >= LATE_MINUTES;

        const isLate = lateBooths.some((late) => late.id === booth.id); 

return (
  <WaitingBoothCard
    key={booth.id}
    booth={booth}
    showDeleteButton={!!showDeleteButton}
    highlightLate={isLate}
  />
);
      })}
    </BoothListWrapper>
  </Section>
)}



      <FloatingButton />

      {modalType === "call" && selectedBooth && (
        <ConfirmCallModal
          boothName={selectedBooth.name}
          onCancel={closeModal}
          onConfirm={() => {
            confirmCall(selectedBooth.id);
            closeModal();
          }}
        />
      )}

      {modalType === "visit" && selectedBooth && (
        <ConfirmVisitModal
          boothName={selectedBooth.name}
          onCancel={closeModal}
          onConfirm={() => {
            confirmVisit(selectedBooth.id);
            closeModal();
          }}
        />
      )}

      {modalType === "delete" && selectedBooth && (
        <ConfirmDeleteModal
          boothName={selectedBooth.name}
          onCancel={closeModal}
          onConfirm={() => {
            confirmDelete(selectedBooth.id);
            closeModal();
          }}
        />
      )}

      {modalType === "closeBooth" && (
        <BoothCloseModal
          onCancel={closeModal}
          onConfirm={(reason) => {
            confirmCloseBooth(reason);
            closeModal();
          }}
        />
      )}

      <PhoneModal />
      <BottomNav activeTab={bottomTab} onTabChange={setBottomTab} />
    </Wrapper>
  );
};

export default BoothAdminAppView;
