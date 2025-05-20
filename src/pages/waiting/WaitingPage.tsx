import { useState } from 'react';
import { booths } from '@/pages/booth/data/booths';
import { useWaitingStore } from '@/stores/useWaitingStore';
import WaitingModal from '@/components/waitingModal/WaitingModal';
import WaitingInfoModal from './components/WaitingInfoModal';
import CancelConfirmModal from './components/CancelConfirmModal';
import * as S from './WaitingPage.styles';
import type { Booth } from '@/types/booth';
import QuestionIcon from '@/assets/icons/question.png';

const today = '2025-05-27'; // 실제 서비스에서는 new Date().toISOString().slice(0, 10) 등으로 대체

export default function WaitingPage() {
  const [showWaitingModal, setShowWaitingModal] = useState(false);
  const [selectedBooth, setSelectedBooth] = useState<Booth | null>(null);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [showCancelConfirm, setShowCancelConfirm] = useState(false); // ✅ 추가
  const { activeWaiting, addWaiting, cancelWaiting } = useWaitingStore();

  const handleClickBooth = (booth: Booth) => {
    if (!activeWaiting || activeWaiting.boothId === booth.id) {
      setSelectedBooth(booth);
      setShowWaitingModal(true);
    }
  };

  const filteredBooths: Booth[] = booths.filter(
    (b) => b.waitingAvailable && b.date === today
  );

  const getMyRank = (_boothId: string): number => {
    // TODO: 백엔드에서 내 phone 번호 기준으로 순번 조회
    return 12; // 임시 데이터
  };

  // const getWaitingCount = (_booth: Booth): number => {
  //   // TODO: 백엔드에서 boothId 기준 현재 대기 팀 수 조회
  //   return filteredBooths.reduce((sum, booth) => sum + (booth.waitingCount ?? 0), 0);
  // };

  return (
    <S.Page>
      <S.Header>
        <S.TitleWrapper>
          <S.Title>야간 부스 웨이팅</S.Title>
        </S.TitleWrapper>

        <S.QuestionWrapper>
          <S.QuestionIcon
            src={QuestionIcon}
            alt="웨이팅 안내"
            onClick={() => setShowInfoModal(true)}
          />
          <S.WaitingHint>웨이팅 안내</S.WaitingHint>
        </S.QuestionWrapper>
      </S.Header>

      {activeWaiting && (
        <S.MyWaitingBox>
          <S.SubTitle>내 웨이팅 순서</S.SubTitle>
          <S.WaitingCard>
            <S.WaitingCardContent>
              <S.BoothName>{activeWaiting.name}</S.BoothName>
              <S.BoothInfo>{activeWaiting.department}</S.BoothInfo>
              <S.Badge>내 순서 {getMyRank(activeWaiting.boothId)}번</S.Badge>
              <S.WaitingSummary>전체 대기 11팀</S.WaitingSummary>
              {/* 나중에 → {getTotalWaitingCount()} */}
            </S.WaitingCardContent>

            {/* ✅ 여기 변경 */}
            <S.CancelButton onClick={() => setShowCancelConfirm(true)}>
              웨이팅 취소
            </S.CancelButton>
          </S.WaitingCard>
        </S.MyWaitingBox>
      )}

      <S.SectionTitle>웨이팅 가능 부스</S.SectionTitle>
      <S.BoothList>
        {filteredBooths.map((booth) => {
          const isMyWaiting = activeWaiting?.boothId === booth.id;
          // const waitingCount = getWaitingCount(booth);
          const waitingCount = 3; // 임시 데이터
          // const waitingText = waitingCount > 0 ? `대기 ${waitingCount}팀` : '바로 입장 가능';

          return (
            <S.BoothCard key={booth.id}>
              <div>
                <S.BoothName>{booth.name}</S.BoothName>
                <S.BoothIntro>{booth.intro}</S.BoothIntro>
                <S.WaitingSummary>
                  전체 대기 11팀

                  {/* {getTotalWaitingCount()} */}
                </S.WaitingSummary>
              </div>
              {waitingCount > 0 ? (
                <S.BoothActionButton onClick={() => handleClickBooth(booth)}
                  $isCancel={isMyWaiting}>
                  {isMyWaiting ? '웨이팅 취소' : '웨이팅 하기'}
                </S.BoothActionButton>
              ) : (
                <S.ImmediateEntryText>바로 입장 가능</S.ImmediateEntryText>
              )}
            </S.BoothCard>
          );
        })}
      </S.BoothList>

      {showWaitingModal && selectedBooth && (
        <WaitingModal
          booth={selectedBooth}
          onConfirm={(data) => {
            addWaiting({
              ...data,
              name: selectedBooth.name,
              department: selectedBooth.department,
            });
            setShowWaitingModal(false);
          }}
          onCancel={() => setShowWaitingModal(false)}
        />
      )}

      {showInfoModal && (
        <WaitingInfoModal onClose={() => setShowInfoModal(false)} />
      )}

      {/* ✅ 취소 확인 모달 렌더링 */}
      {showCancelConfirm && (
        <CancelConfirmModal
          onConfirm={() => {
            cancelWaiting(activeWaiting!.boothId);
            setShowCancelConfirm(false);
          }}
          onCancel={() => setShowCancelConfirm(false)}
        />
      )}
    </S.Page>
  );
}
