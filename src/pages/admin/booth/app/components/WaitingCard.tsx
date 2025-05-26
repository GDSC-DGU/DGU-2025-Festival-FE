import * as S from "./WaitingBoothCard.styles";
import { useBoothAdminStore } from "../stores/useBoothAdminStore";
import Time from "@/assets/icons/time.png";

interface WaitingBoothCardProps {
  booth: import("../stores/useBoothAdminStore").WaitingBooth;
  showDeleteButton: boolean;
  highlightLate?: boolean;
}

const WaitingBoothCard = ({
  booth,
  showDeleteButton,
  highlightLate = false,
}: WaitingBoothCardProps) => {
  const { openModal, setSelectedBooth, openPhoneModal } = useBoothAdminStore();

  const handleClick = (type: "call" | "visit" | "delete") => {
    setSelectedBooth(booth);
    openModal(type, booth);
  };

  const handleCardClick = () => {
    openPhoneModal(booth);
  };

  const minutesPassed = booth.calledAt
    ? Math.floor((Date.now() - new Date(booth.calledAt).getTime()) / 60000)
    : null;

  const elapsed =
    minutesPassed !== null
      ? minutesPassed === 0
        ? "방금 호출됨"
        : `${minutesPassed}분 경과`
      : null;

  return (
    <S.CardWrapper onClick={handleCardClick} highlightLate={highlightLate}>
      <S.LeftSection>
        <S.OrderText>{booth.order ? `${booth.order}번째` : ""}</S.OrderText>
        <S.Title>{booth.name}</S.Title>
        <S.SubTitle>
          예약자 수 <span>{booth.waitingCount}명</span>
        </S.SubTitle>
      </S.LeftSection>

      <S.ButtonGroup>
        {booth.status === "CANCELED" ? (
          <S.CancelledText>대기 취소됨</S.CancelledText>
        ) : booth.visited ? (
          <S.VisitedText>입장 완료</S.VisitedText>
        ) : booth.status === "CALLED" ? (
          <>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
              <S.CalledText style={{ marginLeft: 16 }}>호출 중</S.CalledText>
              {elapsed && (
                <S.ElapsedText style={{ marginLeft: 16 }}>
                  <img
                    src={Time}
                    alt="경과 시간"
                    style={{
                      width: 10,
                      height: 10,
                      marginRight: -3,
                      verticalAlign: "middle",
                    }}
                  />
                  {elapsed}
                </S.ElapsedText>
              )}
            </div>
            <S.VisitButton
              onClick={(e) => {
                e.stopPropagation();
                handleClick("visit");
              }}
            >
              입장 완료
            </S.VisitButton>
            {showDeleteButton && (
              <S.DeleteButton
                onClick={(e) => {
                  e.stopPropagation();
                  handleClick("delete");
                }}
              >
                대기 취소
              </S.DeleteButton>
            )}
          </>
        ) : (
          <>
            <S.CallButton
              onClick={(e) => {
                e.stopPropagation();
                handleClick("call");
              }}
            >
              호출
            </S.CallButton>
            <S.DeleteButton
              onClick={(e) => {
                e.stopPropagation();
                handleClick("delete");
              }}
            >
              대기 취소
            </S.DeleteButton>
          </>
        )}
      </S.ButtonGroup>
    </S.CardWrapper>
  );
};

export default WaitingBoothCard;
