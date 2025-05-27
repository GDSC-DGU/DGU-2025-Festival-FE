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
    waitingBooths,
    modalType,
    selectedBooth,
    closeModal,
    confirmCall,
    confirmVisit,
    confirmDelete,
    confirmCloseBooth,
    fetchBooths,
    lateTotalCount,
    waitingTotalCount,
  } = useBoothAdminStore();

  useEffect(() => {
    fetchBooths();
    const interval = setInterval(() => {
      fetchBooths();
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const lateBooths = waitingBooths.filter(
    (booth) =>
      booth.status === "LATE" &&
      !booth.visited &&
      !booth.cancelled
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

  return (
    <Wrapper>
      <RoleTag />
      <TopBar title="야간 부스 웨이팅 관리" />

      <Section>
        <SectionTitle>부스 좌석 현황 설정</SectionTitle>
        <SectionDescription>
          현재 부스의 좌석 상황을 설정하면, 방문자가 이를 확인할 수 있어요.
        </SectionDescription>
        <Tabs />
      </Section>

      {bottomTab === "late" && (
        <Section>
          <SectionTitle>늦은 대기자</SectionTitle>
          <SectionDescription>
            호출 후 10분 이상 지났지만 아직 방문하지 않은 대기자입니다.
          </SectionDescription>
          <TotalCount>늦은 대기자 {lateTotalCount}팀</TotalCount>

          {lateBooths.length > 0 ? (
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
          ) : (
            <p>현재 늦은 대기자가 없습니다.</p>
          )}
        </Section>
      )}

      {bottomTab === "waiting" && (
        <>
          <Section>
            <SectionTitle>전체 대기자 목록</SectionTitle>
            <SectionDescription>
              현재 등록된 모든 대기자를 확인할 수 있어요.
            </SectionDescription>
            <TotalCount>대기 {waitingTotalCount}팀</TotalCount>
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
                  />
                ))}
              </BoothListWrapper>
            </Section>
          )}
        </>
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
