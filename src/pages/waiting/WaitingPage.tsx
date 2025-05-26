import { useEffect, useState } from "react";
import { booths } from "@/pages/booth/data/booths";
import { useWaitingStore } from "@/stores/useWaitingStore";
import WaitingModal from "@/components/waitingModal/WaitingModal";
import WaitingInfoModal from "./components/WaitingInfoModal";
import CancelConfirmModal from "./components/CancelConfirmModal";
import * as S from "./WaitingPage.styles";
import type { Booth } from "@/types/booth";
import QuestionIcon from "@/assets/icons/question.png";
import TopBar from "@/components/topbar/TopBar";
import { requestPermissionAndGetToken } from "@/firebase";
import { cancelReservation, fetchMyReservation } from "@/api/reservation";
import { useMyReservation } from "@/api/hooks/useMyReservation";
import { usePubStatuses } from "@/api/hooks/usePubStatuses";

const today = (() => {
  const now = new Date();
  now.setHours(now.getHours() + 9); // 한국 시간으로 변환
  return now.toISOString().slice(0, 10);
})();

export default function WaitingPage() {
  const [showWaitingModal, setShowWaitingModal] = useState(false);
  const [selectedBooth, setSelectedBooth] = useState<Booth | null>(null);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [showCancelConfirm, setShowCancelConfirm] = useState(false);

  const { activeWaiting, addWaiting, cancelWaiting } = useWaitingStore();
  const phoneNumber = localStorage.getItem("userPhoneNumber") ?? "";

  const { data: myReservation, refetch: refetchReservation } = useMyReservation(phoneNumber);
  const { data: pubStatuses = [] } = usePubStatuses();

  // 새로고침 후 상태 복원
  useEffect(() => {
    if (phoneNumber && !activeWaiting) {
      fetchMyReservation(phoneNumber).then((res) => {
        if (res.success && res.data?.reserveStatus === "WAITING") {
          const matchedBooth = booths.find((b) => b.date === today && b.waitingAvailable);
          if (matchedBooth) {
            addWaiting({
              boothId: matchedBooth.id,
              phone: phoneNumber,
            });
          }
        }
      });
    }
  }, []);

  const handleClickBooth = async (booth: Booth) => {
    if (!activeWaiting || activeWaiting.boothId === booth.id) {
      const token = await requestPermissionAndGetToken();
      if (token) console.log("알림 권한 OK:", token);
      setSelectedBooth(booth);
      setShowWaitingModal(true);
    }
  };

  const filteredBooths: Booth[] = booths
    .filter((b) => b.waitingAvailable && b.date === today)
    .map((b) => {
      const match = pubStatuses.find((s) => String(s.pubsId) === b.id);
      return {
        ...b,
        image: b.images?.[0] ?? "",
        waitingCount: match?.waitTeam ?? 0,
        pubStatus: match?.status ?? "PREPARING",
      };
    });

  return (
    <S.Page>
      <TopBar title="야간 부스 웨이팅" />
      <S.ContentContainer>
        <S.QuestionWrapper>
          <S.QuestionIcon
            src={QuestionIcon}
            alt="웨이팅 안내"
            onClick={() => setShowInfoModal(true)}
          />
          <S.WaitingHint>웨이팅 안내</S.WaitingHint>
        </S.QuestionWrapper>

        {/* 내 웨이팅 정보 */}
        {activeWaiting && (
          <S.MyWaitingBox>
            <S.SubTitle>내 웨이팅 순서</S.SubTitle>
            <S.WaitingCard>
              <S.WaitingCardContent>
                <S.BoothName>
                  {booths.find((b) => b.id === activeWaiting.boothId)?.name ?? "-"}
                </S.BoothName>
                <S.Badge>내 순서 {myReservation?.waitTeam ?? "?"}번</S.Badge>
                <S.WaitingSummary>
                  전체 대기 {
                    filteredBooths.find((b) => b.id === activeWaiting.boothId)?.waitingCount ?? "?"
                  }팀
                </S.WaitingSummary>
              </S.WaitingCardContent>
              <S.CancelButton onClick={() => setShowCancelConfirm(true)}>
                웨이팅 취소
              </S.CancelButton>
            </S.WaitingCard>
          </S.MyWaitingBox>
        )}

        {/* 예약 가능한 부스 */}
        <S.SectionTitle>웨이팅 가능 부스</S.SectionTitle>
        <S.BoothList>
          {filteredBooths.length === 0 ? (
            <S.EmptyBoothMessage>
              아직 예약 가능한 부스가 없어요. <br />
              조금만 기다려주세요!
            </S.EmptyBoothMessage>
          ) : (
            filteredBooths.map((booth) => {
              const isMyWaiting = activeWaiting?.boothId === booth.id;

              return (
                <S.BoothCard key={booth.id}>
                  <div>
                    <S.BoothName>{booth.name}</S.BoothName>
                    <S.BoothIntro>{booth.intro}</S.BoothIntro>
                    <S.WaitingSummary>
                      전체 대기 {booth.waitingCount}팀
                    </S.WaitingSummary>
                  </div>

                  {booth.pubStatus === "AVAILABLE" ? (
                    <S.ImmediateEntryText>바로 입장 가능</S.ImmediateEntryText>
                  ) : booth.pubStatus === "FULL" ? (
                    <S.BoothActionButton
                      onClick={() =>
                        isMyWaiting ? setShowCancelConfirm(true) : handleClickBooth(booth)
                      }
                      $isCancel={isMyWaiting}
                    >
                      {isMyWaiting ? "웨이팅 취소" : "웨이팅 하기"}
                    </S.BoothActionButton>
                  ) : booth.pubStatus === "PREPARING" ? (
                    <S.PreparingText>부스 준비 중</S.PreparingText>
                  ) : (
                    <S.EndedText>운영 종료</S.EndedText>
                  )}
                </S.BoothCard>
              );
            })
          )}
        </S.BoothList>

        {/* 웨이팅 모달 */}
        {showWaitingModal && selectedBooth && (
          <WaitingModal
            booth={selectedBooth}
            onConfirm={(data) => {
              localStorage.setItem("userPhoneNumber", data.phone);
              addWaiting({ boothId: selectedBooth.id, phone: data.phone });
              setShowWaitingModal(false);
              refetchReservation();
            }}
            onCancel={() => setShowWaitingModal(false)}
            onClose={() => setShowWaitingModal(false)}
          />
        )}

        {showInfoModal && (
          <WaitingInfoModal onClose={() => setShowInfoModal(false)} />
        )}

        {showCancelConfirm && (
          <CancelConfirmModal
            onConfirm={async () => {
              if (!phoneNumber) return alert("전화번호를 확인할 수 없습니다.");
              try {
                const res = await cancelReservation(phoneNumber);
                if (res.success) {
                  cancelWaiting(activeWaiting!.boothId);
                  localStorage.removeItem("userPhoneNumber");
                  alert("예약이 취소되었습니다.");
                  refetchReservation();
                } else {
                  alert("예약 취소에 실패했습니다.");
                }
              } catch (err) {
                console.error("예약 취소 실패:", err);
                alert("오류가 발생했습니다.");
              }
              setShowCancelConfirm(false);
            }}
            onCancel={() => setShowCancelConfirm(false)}
          />
        )}
      </S.ContentContainer>
    </S.Page>
  );
}
