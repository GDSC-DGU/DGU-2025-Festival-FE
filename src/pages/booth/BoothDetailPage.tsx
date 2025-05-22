import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState, useMemo } from "react";
import { booths } from "@/pages/booth/data/booths";
import { useBoothStore } from "@/pages/booth/stores/useBoothStore";
import HeartOn from "@/assets/icons/heart-on.png";
import HeartOff from "@/assets/icons/heart-off.png";
import MapContainer from "@/pages/booth/components/MapContainer";
import MiniBoothCard from "./components/MiniBoothCard";
import WaitingModal from "@/components/waitingModal/WaitingModal";
import { useWaitingStore } from "@/stores/useWaitingStore";
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
} from "./BoothDetailPage.styles";

export default function BoothDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const booth = booths.find((b) => b.id === id);
  const toggleLike = useBoothStore((state) => state.toggleLike);
  const isLiked = useBoothStore((state) => state.isLiked(id || ""));
  const likeCount = useBoothStore((state) => state.getLikeCount(id || ""));

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const autoScrollIndex = useRef(0);
  const [showWaitingModal, setShowWaitingModal] = useState(false);
  const addWaiting = useWaitingStore((state) => state.addWaiting);

  const relatedBooths = booths.filter(
    (b) =>
      b.date === booth?.date && b.type === booth?.type && b.id !== booth?.id
  );

  // 무한 스크롤을 위해 관련 부스를 3배로 반복
  const loopedBooths = useMemo(() => {
    return [...relatedBooths, ...relatedBooths];
  }, [relatedBooths]);

  // 중앙 부스를 기준으로 시작 위치 설정
  useEffect(() => {
    const middleIndex = relatedBooths.length;
    const middleId = loopedBooths[middleIndex]?.id;
    const el = scrollRef.current?.querySelector(
      `[data-booth-id="${middleId}-${middleIndex}"]`
    );
    if (el) {
      (el as HTMLElement).scrollIntoView({
        behavior: "auto",
        inline: "center",
      });
      autoScrollIndex.current = middleIndex;
    }
  }, [relatedBooths.length]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 자동 스크롤 기능(컨펌 후 뺄수도 있음)
  // useEffect(() => {
  //   if (!scrollRef.current || loopedBooths.length === 0) return;

  //   const scrollEl = scrollRef.current;
  //   const cards = scrollEl.querySelectorAll("[data-booth-id]");

  //   const interval = setInterval(() => {
  //     autoScrollIndex.current++;
  //     if (
  //       autoScrollIndex.current >=
  //       loopedBooths.length - relatedBooths.length
  //     ) {
  //       // 거의 끝에 도달하면 → 중간 위치로 순간 점프
  //       autoScrollIndex.current = relatedBooths.length;
  //       const jumpTarget = cards[autoScrollIndex.current] as HTMLElement;
  //       scrollEl.scrollTo({
  //         left:
  //           jumpTarget.offsetLeft -
  //           scrollEl.offsetWidth / 2 +
  //           jumpTarget.offsetWidth / 2,
  //         behavior: "auto",
  //       });
  //       return;
  //     }

  //     const target = cards[autoScrollIndex.current] as HTMLElement;
  //     scrollEl.scrollTo({
  //       left:
  //         target.offsetLeft - scrollEl.offsetWidth / 2 + target.offsetWidth / 2,
  //       behavior: "smooth",
  //     });
  //   }, 3000); // 3초마다 슬라이드

  //   return () => clearInterval(interval);
  // }, [loopedBooths, relatedBooths]);

  if (!booth) return <div>부스를 찾을 수 없습니다.</div>;

  return (
    <Container>
      <TopBar title="부스 상세" showBackButton={true} isDark={true} />
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
              <BoothIntro>{booth.intro}</BoothIntro>
            </Info>
            <Like onClick={() => toggleLike(booth.id)}>
              <img src={isLiked ? HeartOn : HeartOff} alt="찜" width={30} />
              <LikeCount>{likeCount}</LikeCount>
            </Like>
          </Header>
          <BoothImage src={booth.image} alt="부스 이미지" />
          {booth.waitingAvailable && (
            <ReserveButton onClick={() => setShowWaitingModal(true)}>
              웨이팅 하기
            </ReserveButton>
          )}
        </Card>

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

        {showWaitingModal && booth && (
          <WaitingModal
            booth={booth}
            onConfirm={({ boothId, people, phone }) => {
              addWaiting({ boothId, people, phone });
            }}
            onCancel={() => setShowWaitingModal(false)}
          />
        )}
      </ContentContainer>
    </Container>
  );
}
