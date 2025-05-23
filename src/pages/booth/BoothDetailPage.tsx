import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState, useMemo } from "react";
import { booths } from "@/pages/booth/data/booths";
import HeartOn from "@/assets/icons/heart-on.png";
import HeartOff from "@/assets/icons/heart-off.png";
import MapContainer from "@/pages/booth/components/MapContainer";
import MiniBoothCard from "./components/MiniBoothCard";
// import WaitingModal from "@/components/waitingModal/WaitingModal"; // 비활성화
import WaitingClosedModal from "@/pages/waiting/components/WaitingClosedModal";
// import { useWaitingStore } from "@/stores/useWaitingStore";
import TopBar from "@/components/topbar/TopBar";
import {
  Container,
  MapWrapper,
  Card,
  Header,
  Info,
  BoothName,
  BoothIntro,
  Like,
  LikeCount,
  BoothImage,
  ReserveButton,
  ScrollWrapper,
  ContentContainer,
  SubContainer,
  Title,
} from "./BoothDetailPage.styles";
import { useLike } from "@/api/likes/hooks/useLike";

export default function BoothDetailPage() {
  const { id } = useParams<{ id: string }>();
  const booth = booths.find((b) => b.id === id);
  const boothId = Number(id);
  const navigate = useNavigate();
  const [showWaitingModal, setShowWaitingModal] = useState(false);
  // const addWaiting = useWaitingStore((state) => state.addWaiting);

  const {
    isLoading,
    totalLikes,
    toggleLike,
    isToggling,
    isLiked,
  } = useLike(boothId);

  const relatedBooths = useMemo(
    () =>
      booths.filter(
        (b) =>
          b.date === booth?.date && b.type === booth?.type && b.id !== booth?.id
      ),
    [booth]
  );

  const loopedBooths = useMemo(() => {
    return [...relatedBooths, ...relatedBooths];
  }, [relatedBooths]);

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const autoScrollIndex = useRef(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!scrollRef.current || loopedBooths.length === 0) return;

    const scrollEl = scrollRef.current;
    const cards = scrollEl.querySelectorAll("[data-booth-id]");

    const interval = setInterval(() => {
      autoScrollIndex.current++;
      if (
        autoScrollIndex.current >=
        loopedBooths.length - relatedBooths.length
      ) {
        autoScrollIndex.current = relatedBooths.length;
        const jumpTarget = cards[autoScrollIndex.current] as HTMLElement;
        scrollEl.scrollTo({
          left:
            jumpTarget.offsetLeft -
            scrollEl.offsetWidth / 2 +
            jumpTarget.offsetWidth / 2,
          behavior: "auto",
        });
        return;
      }

      const target = cards[autoScrollIndex.current] as HTMLElement;
      scrollEl.scrollTo({
        left:
          target.offsetLeft - scrollEl.offsetWidth / 2 + target.offsetWidth / 2,
        behavior: "smooth",
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [loopedBooths, relatedBooths]);

  if (!booth) return <div>부스를 찾을 수 없습니다.</div>;
  if (isLoading) return <div>로딩 중...</div>;

  return (
    <Container>
      <TopBar title="부스 상세" showBackButton={true} />
      <ContentContainer>
        <MapWrapper>
          <MapContainer
            date={booth.date}
            boothType={booth.type as "day" | "night"}
            boothId={booth.id}
          />
        </MapWrapper>

        <Card>
          <Header>
            <Info>
              <BoothName>{booth.name}</BoothName>
              {booth.waitingAvailable && (
                <ReserveButton onClick={() => setShowWaitingModal(true)}>
                  웨이팅하기
                </ReserveButton>
              )}
            </Info>
            <BoothIntro>{booth.intro}</BoothIntro>
          </Header>
          <BoothImage src={booth.image} alt="부스 이미지" />
          <Like
            as="button"
            disabled={isToggling || isLiked}
            onClick={() => toggleLike()}
            style={{
              cursor: isToggling || isLiked ? "not-allowed" : "pointer",
              background: "none",
              border: "none",
              padding: 0,
            }}
          >
            <LikeCount>{totalLikes}</LikeCount>
            <img src={isLiked ? HeartOn : HeartOff} alt="찜" width={24} />
          </Like>
        </Card>
        <SubContainer>
          <Title>근처 부스 둘러보기</Title>
          {relatedBooths.length > 0 && (
            <ScrollWrapper ref={scrollRef}>
              {loopedBooths.map((b, index) => (
                <MiniBoothCard
                  key={`${b.id}-${index}`}
                  id={`${b.id}-${index}`}
                  name={b.name}
                  image={b.image}
                  intro={b.intro}
                  onClick={() => navigate(`/booth/${b.id}`)}
                />
              ))}
            </ScrollWrapper>
          )}
        </SubContainer>

        {/* 기존 웨이팅 모달 비활성화, 대체 모달 사용 */}
        {/* 
        {showWaitingModal && booth && (
          <WaitingModal
            booth={booth}
            onConfirm={({ boothId, people, phone }) => {
              addWaiting({ boothId, people, phone });
            }}
            onCancel={() => setShowWaitingModal(false)}
          />
        )} 
        */}
        {showWaitingModal && (
          <WaitingClosedModal onClose={() => setShowWaitingModal(false)} />
        )}
      </ContentContainer>
    </Container>
  );
}
