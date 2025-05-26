import { useState, useEffect } from "react";
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
import {
  fetchPubsStatus,
  type PubStatus,
  fetchMyReservation,
  type ReservationInfo,
  cancelReservation
} from "@/api/reservation";

// const today = "2025-05-27"; // 실제 서비스에서는 new Date().toISOString().slice(0, 10) 등으로 대체
const today = "2025-05-27"; // booth 데이터의 날짜와 일치하도록 수정 (테스트용)

export default function WaitingPage() {
  const [showWaitingModal, setShowWaitingModal] = useState(false);
  const [selectedBooth, setSelectedBooth] = useState<Booth | null>(null);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [showCancelConfirm, setShowCancelConfirm] = useState(false);
  const [pubStatuses, setPubStatuses] = useState<PubStatus[]>([]);
  const [myReservation, setMyReservation] = useState<ReservationInfo | null>(null);

  const { activeWaiting, addWaiting, cancelWaiting } = useWaitingStore();

  useEffect(() => {
    const phoneNumber = localStorage.getItem("userPhoneNumber");
    if (!phoneNumber) return;

    const fetchReservation = async () => {
      try {
        const res = await fetchMyReservation(phoneNumber);
        if (res.success) {
          setMyReservation(res.data);
          console.log("내 예약 정보:", res.data); // 디버깅 중
        } else {
          console.warn("예약 정보 없음");
        }
      } catch (err) {
        console.error("예약 정보 불러오기 오류:", err);
      }
    };

    fetchReservation();
  }, []);

  useEffect(() => {
    const loadPubStatuses = async () => {
      try {
        const res = await fetchPubsStatus();
        if (res.success) {
          setPubStatuses(res.data);
        } else {
          console.warn("대기 현황 불러오기 실패:", res);
        }
      } catch (err) {
        console.error("대기 현황 요청 오류:", err);
      }
    };

    loadPubStatuses();
  }, []);

  const handleClickBooth = async (booth: Booth) => {
    if (!activeWaiting || activeWaiting.boothId === booth.id) {
      const token = await requestPermissionAndGetToken();
      if (token) {
        console.log("알림 권한 부여 및 토큰 발급 완료");
      } else {
        console.warn("사용자에게 알림 권한 거부됨");
      }

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

        {activeWaiting && (
          <S.MyWaitingBox>
            <S.SubTitle>내 웨이팅 순서</S.SubTitle>
            <S.WaitingCard>
              <S.WaitingCardContent>
                <S.BoothName>{activeWaiting.name}</S.BoothName>
                <S.BoothInfo>{activeWaiting.department}</S.BoothInfo>
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
      const waitingCount = booth.waitingCount ?? 0;
      const status = booth.pubStatus;

      return (
        <S.BoothCard key={booth.id}>
          <div>
            <S.BoothName>{booth.name}</S.BoothName>
            <S.BoothIntro>{booth.intro}</S.BoothIntro>
            <S.WaitingSummary>전체 대기 {waitingCount}팀</S.WaitingSummary>
          </div>

          {status === "AVAILABLE" ? (
            <S.ImmediateEntryText>바로 입장 가능</S.ImmediateEntryText>
          ) : status === "FULL" ? (
            <S.BoothActionButton
              onClick={() => {
                if (isMyWaiting) {
                  setShowCancelConfirm(true);
                } else {
                  handleClickBooth(booth);
                }
              }}
              $isCancel={isMyWaiting}
            >
              {isMyWaiting ? "웨이팅 취소" : "웨이팅 하기"}
            </S.BoothActionButton>
          ) : status === "PREPARING" ? (
            <S.PreparingText>부스 준비 중</S.PreparingText>
          ) : (
            <S.EndedText>운영 종료</S.EndedText>
          )}
        </S.BoothCard>
      );
    })
  )}
</S.BoothList>


        {showWaitingModal && selectedBooth && (
          <WaitingModal
            booth={selectedBooth}
            onConfirm={(data) => {
              localStorage.setItem("userPhoneNumber", data.phone); 
              addWaiting({
                ...data,
                name: selectedBooth.name,
                department: selectedBooth.department,
              });
              setShowWaitingModal(false);
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
      const phoneNumber = localStorage.getItem("userPhoneNumber");
      if (!phoneNumber) {
        alert("전화번호를 확인할 수 없습니다.");
        return;
      }

      try {
        const res = await cancelReservation(phoneNumber);
        if (res.success) {
          cancelWaiting(activeWaiting!.boothId);
          localStorage.removeItem("userPhoneNumber"); 
          setMyReservation(null); 
          alert("예약이 취소되었습니다.");
        } else {
          alert("예약 취소에 실패했습니다.");
        }
      } catch (err) {
        alert("오류가 발생했습니다.");
        console.error("예약 취소 실패:", err);
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
