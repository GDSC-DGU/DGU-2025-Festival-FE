import { useEffect, useState } from "react";
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
  } = useBoothAdminStore();

  const now = Date.now();
  const LATE_MINUTES = 10;

  useEffect(() => {
    fetchBooths();
    const interval = setInterval(() => {
      fetchBooths();
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const lateBooths = waitingBooths.filter(
    (booth) =>
      booth.calledAt &&
      !booth.visited &&
      !booth.cancelled &&
      (now - new Date(booth.calledAt).getTime()) / 60000 >= LATE_MINUTES
  );

  const calledBooths = waitingBooths.filter(
    (booth) =>
      booth.status === "CALLED" &&
      !booth.visited &&
      !booth.cancelled &&
      !lateBooths.some((late) => late.id === booth.id)
  );

  const waitingOnlyBooths = waitingBooths.filter(
    (booth) =>
      booth.status === "WAITING" &&
      !booth.visited &&
      !booth.cancelled
  );

  const notEnteredCount = waitingBooths.filter(
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

      {/* 늦은 대기자 */}
      {bottomTab === "late" && lateBooths.length > 0 && (
        <Section>
          <SectionTitle>늦은 대기자</SectionTitle>
          <SectionDescription>
            호출 후 10분 이상 지났지만 아직 방문하지 않은 대기자입니다.
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

      {/* 전체 대기자 (호출 + 미호출 분리) */}
      {bottomTab === "waiting" && (
        <>
          <Section>
            <SectionTitle>전체 대기자 목록</SectionTitle>
            <SectionDescription>
              현재 등록된 모든 대기자를 확인할 수 있어요.
            </SectionDescription>
            <TotalCount>대기 {notEnteredCount}팀</TotalCount>
          </Section>

          {calledBooths.length > 0 && (
            <Section>
              <SectionTitle>현재 호출된 인원입니다</SectionTitle>
              <BoothListWrapper>
                {calledBooths.map((booth) => (
                  <WaitingBoothCard
                    key={booth.id}
                    booth={booth}
                    showDeleteButton={true}
                    highlightLate={false}
                  />
                ))}
              </BoothListWrapper>
            </Section>
          )}

          {waitingOnlyBooths.length > 0 && (
            <Section>
              <SectionTitle>대기 중인 인원입니다</SectionTitle>
              <BoothListWrapper>
                {waitingOnlyBooths.map((booth) => (
                  <WaitingBoothCard
                    key={booth.id}
                    booth={booth}
                    showDeleteButton={false}
                    highlightLate={false}
                  />
                ))}
              </BoothListWrapper>
            </Section>
          )}
        </>
      )}

      <FloatingButton />

      {/* 모달들 */}
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
