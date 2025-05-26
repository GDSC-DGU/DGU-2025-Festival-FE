import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState, useMemo } from "react";
import { booths } from "@/pages/booth/data/booths";
import HeartOn from "@/assets/icons/heart-on.png";
import HeartOff from "@/assets/icons/heart-off.png";
import MapContainer from "@/pages/booth/components/MapContainer";
import MiniBoothCard from "./components/MiniBoothCard";
import WaitingClosedModal from "@/pages/waiting/components/WaitingClosedModal";
import WaitingModal from "@/components/waitingModal/WaitingModal";
import TopBar from "@/components/topbar/TopBar";
import ImagePagination from "../notice-detail/components/ImagePagination/ImagePagination";
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
  ImageScrollContainer,
  ImageItem,
  ImageScrollWrapper,
  EmptyContainer,
} from "./BoothDetailPage.styles";
import { useLike } from "@/api/likes/hooks/useLike";
import SkeletonLoading from "@/components/common/SkeletonLoading";
import { usePubStatus } from "@/api/hooks/usePubStatus";
import getDistance from "./utils/getDistance";

export default function BoothDetailPage() {
  const { id } = useParams<{ id: string }>();
  const booth = booths.find((b) => b.id === id);
  const boothId = Number(id);
  const navigate = useNavigate();
  const [showWaitingModal, setShowWaitingModal] = useState(false);
  const [showWaitingClosedModal, setShowWaitingClosedModal] = useState(false);
  const [waitingClosedModalMessage, setWaitingClosedModalMessage] =
    useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const imageScrollRef = useRef<HTMLDivElement>(null);
  const boothScrollRef = useRef<HTMLDivElement>(null);

  const { data: boothStatus } = usePubStatus(id!);
  const pubStatus = boothStatus?.status ?? null;

  const { isLoading, totalLikes, toggleLike, isToggling, isLiked } =
    useLike(boothId);

  const [localLiked, setLocalLiked] = useState(isLiked);
  const hasCalledLikeAPI = useRef(false);

  const handleLikeClick = () => {
    setLocalLiked((prev) => !prev);
    if (!hasCalledLikeAPI.current && !isLiked) {
      toggleLike();
      hasCalledLikeAPI.current = true;
    }
  };

  useEffect(() => {
    setCurrentSlide(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [boothId]);

  const relatedBooths = useMemo(() => {
    if (!booth) return [];

    const sameDateAndType = booths.filter(
      (b) => b.date === booth.date && b.type === booth.type && b.id !== booth.id
    );

    // 기준 좌표
    const baseLat = booth.position.lat;
    const baseLng = booth.position.lng;

    return sameDateAndType
      .map((b) => ({
        ...b,
        distance: getDistance(baseLat, baseLng, b.position.lat, b.position.lng),
      }))
      .filter((b) => b.distance < 50) // 50m 이내로 필터링
      .sort((a, b) => a.distance - b.distance); // 가까운 순 정렬
  }, [booth]);

  const loopedBooths = useMemo(
    () => [...relatedBooths, ...relatedBooths],
    [relatedBooths]
  );

  const autoScrollIndex = useRef(0);
  useEffect(() => {
    if (!boothScrollRef.current || loopedBooths.length === 0) return;
    const scrollEl = boothScrollRef.current;
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

  const scrollToIndex = (index: number) => {
    if (!imageScrollRef.current) return;
    const width = imageScrollRef.current.clientWidth;
    imageScrollRef.current.scrollTo({
      left: index * width,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (!imageScrollRef.current) return;
    const scrollX = imageScrollRef.current.scrollLeft;
    const width = imageScrollRef.current.clientWidth;
    const index = Math.round(scrollX / width);
    setCurrentSlide(index);
  };

  if (!booth) return <div>부스를 찾을 수 없습니다.</div>;
  if (isLoading)
    return <SkeletonLoading message="부스 정보를 불러오는 중입니다..." />;

  return (
    <Container>
      <TopBar
        title="부스 상세"
        showBackButton
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
                <ReserveButton
                  onClick={() => {
                    if (pubStatus === "AVAILABLE") {
                      setWaitingClosedModalMessage(
                        "현재 바로 입장 가능합니다."
                      );
                      setShowWaitingClosedModal(true);
                    } else if (pubStatus === "PREPARING") {
                      setWaitingClosedModalMessage(
                        "아직 부스가 시작되지 않았어요. 조금만 더 기다려주세요!"
                      );
                      setShowWaitingClosedModal(true);
                    } else if (pubStatus === "END") {
                      setWaitingClosedModalMessage("운영이 종료된 부스입니다.");
                      setShowWaitingClosedModal(true);
                    } else if (pubStatus === "FULL") {
                      setShowWaitingModal(true);
                    } else {
                      setWaitingClosedModalMessage(
                        "부스 상태를 확인할 수 없습니다."
                      );
                      setShowWaitingClosedModal(true);
                    }
                  }}
                >
                  웨이팅하기
                </ReserveButton>
              )}
            </Info>
            <BoothIntro>{booth.intro}</BoothIntro>
          </Header>
          {booth.images.length > 0 && (
            <ImageScrollWrapper>
              <ImageScrollContainer
                ref={imageScrollRef}
                onScroll={handleScroll}
              >
                {booth.images.map((img, idx) => (
                  <ImageItem key={idx}>
                    <img src={img} alt={`부스 이미지 ${idx + 1}`} />
                  </ImageItem>
                ))}
              </ImageScrollContainer>
              {booth.images.length > 1 && (
                <ImagePagination
                  total={booth.images.length}
                  current={currentSlide}
                  onDotClick={scrollToIndex}
                />
              )}
            </ImageScrollWrapper>
          )}
          <Like
            as="button"
            disabled={isToggling}
            onClick={handleLikeClick}
            style={{
              cursor: isToggling ? "not-allowed" : "pointer",
              background: "none",
              border: "none",
            }}
          >
            <LikeCount>{totalLikes}</LikeCount>
            <img src={localLiked ? HeartOn : HeartOff} alt="찜" width={24} />
          </Like>
        </Card>

        <SubContainer>
          <Title>근처 부스 둘러보기</Title>
          {relatedBooths.length > 0 ? (
            <ScrollWrapper ref={boothScrollRef}>
              {loopedBooths.map((b, idx) => (
                <MiniBoothCard
                  key={`${b.id}-${idx}`}
                  id={`${b.id}-${idx}`}
                  name={b.name}
                  image={b.images[0]}
                  intro={b.intro}
                  onClick={() => navigate(`/booth/${b.id}`)}
                />
              ))}
            </ScrollWrapper>
          ) : (
            <EmptyContainer>근처에 있는 부스를 찾을 수 없어요!</EmptyContainer>
          )}
        </SubContainer>

        {showWaitingModal && (
          <WaitingModal
            booth={booth}
            onClose={() => setShowWaitingModal(false)}
            onConfirm={() => setShowWaitingModal(false)}
            onCancel={() => setShowWaitingModal(false)}
          />
        )}

        {showWaitingClosedModal && (
          <WaitingClosedModal
            message={waitingClosedModalMessage}
            onClose={() => setShowWaitingClosedModal(false)}
          />
        )}
      </ContentContainer>
    </Container>
  );
}
