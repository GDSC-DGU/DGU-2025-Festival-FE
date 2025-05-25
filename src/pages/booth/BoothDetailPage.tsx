import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState, useMemo } from "react";
import { booths } from "@/pages/booth/data/booths";
import HeartOn from "@/assets/icons/heart-on.png";
import HeartOff from "@/assets/icons/heart-off.png";
import MapContainer from "@/pages/booth/components/MapContainer";
import MiniBoothCard from "./components/MiniBoothCard";
import WaitingClosedModal from "@/pages/waiting/components/WaitingClosedModal";
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
  ReserveButton,
  ScrollWrapper,
  ContentContainer,
  SubContainer,
  Title,
  Dot,
  DotWrapper,
  ImageSlider,
  SlideImage,
  SliderArea,
} from "./BoothDetailPage.styles";
import { useLike } from "@/api/likes/hooks/useLike";
import SkeletonLoading from "@/components/common/SkeletonLoading";

export default function BoothDetailPage() {
  const { id } = useParams<{ id: string }>();
  const booth = booths.find((b) => b.id === id);
  const boothId = Number(id);
  const navigate = useNavigate();
  const [showWaitingModal, setShowWaitingModal] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setCurrentSlide(0);
  }, [boothId]);

  const { isLoading, totalLikes, toggleLike, isToggling, isLiked } =
    useLike(boothId);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [boothId]);

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
  if (isLoading)
    return <SkeletonLoading message="부스 정보를 불러오는 중입니다..." />;

  const totalSlides = booth.images.length;

  return (
    <Container>
      <TopBar
        title="부스 상세"
        showBackButton={true}
        onBack={() => navigate("/booth")}
      />
      <ContentContainer>
        <MapWrapper>
          <MapContainer
            date={booth.date}
            boothType={booth.type as "day" | "night"}
            boothId={booth.id}
            centerLat={booth.position.lat}
            centerLng={booth.position.lng}
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

          {/* 이미지 슬라이더 영역 */}
          <SliderArea
            onClick={() => setCurrentSlide((prev) => (prev + 1) % totalSlides)}
          >
            <ImageSlider>
              {booth.images.map((img: string, index: number) => (
                <SlideImage
                  key={index}
                  src={img}
                  alt={`부스 이미지 ${index + 1}`}
                  style={{ opacity: currentSlide === index ? 1 : 0 }}
                />
              ))}
            </ImageSlider>
            <DotWrapper>
              {booth.images.map((_: string, i: number) => (
                <Dot key={i} $active={i === currentSlide} />
              ))}
            </DotWrapper>
          </SliderArea>

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
                  image={b.images[0]}
                  intro={b.intro}
                  onClick={() => navigate(`/booth/${b.id}`)}
                />
              ))}
            </ScrollWrapper>
          )}
        </SubContainer>

        {showWaitingModal && (
          <WaitingClosedModal onClose={() => setShowWaitingModal(false)} />
        )}
      </ContentContainer>
    </Container>
  );
}
