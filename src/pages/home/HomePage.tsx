import {
  Container,
  MainContainer,
  Title,
  ContentContainer,
  TitleContainer,
  ImageContainer,
  Image,
  FlowerImage,
  Slogan,
  Row,
  MainSlogan,
} from "./HomePage.styles";
import Header from "./components/Header/Header";
import Flower from "@/assets/images/flower.png";
import TimeLine from "./components/TimeLine/TimeLine";
import Notice from "./components/Notice/Notice";
import BoothRanking from "./components/BoothRanking/BoothRanking";
import RankingIcon from "@/assets/icons/ranking.svg";
import { booths } from "../booth/data/booths";
import { boothRankingAPI } from "@/api/booth/booth";
import { useEffect, useState } from "react";
import type { BoothRankingItem } from "@/types/booth";
import { NoticeListAPI } from "@/api/notice/notice";
import { useNoticeStore } from "@/stores/useNoticeStore";
import { useOnScreenAnimation } from "@/hooks/useOnScreenAnimation";
import HandImage from "@/assets/images/hand.webp";
import Logo from "/assets/landing/logo.svg";
import { getCurrentPerformance } from "./utils/getCurrentPerformance";
import type { PerformanceItemType } from "../timetable/types/performanceItem";

const HomePage = () => {
  const [mappedBooths, setMappedBooths] = useState<BoothRankingItem[]>([]);
  const previewNotices = useNoticeStore((state) => state.previewNotices);
  const timelineAnimation = useOnScreenAnimation<HTMLDivElement>();
  const noticeAnimation = useOnScreenAnimation<HTMLDivElement>();
  const rankingAnimation = useOnScreenAnimation<HTMLDivElement>();
  const [currentPerformance, setCurrentPerformance] =
    useState<PerformanceItemType | null>(null);

  useEffect(() => {
    const fetchRanking = async () => {
      const rankingData = await boothRankingAPI();
      if (!Array.isArray(rankingData)) return;
      const mapped = rankingData
        .map((item, index): BoothRankingItem | null => {
          const booth = booths.find((b) => b.id === item.booth_id);
          if (!booth) return null;
          return {
            ranking: index + 1,
            id: booth.id,
            name: booth.name,
            intro: booth.intro,
            image: booth.images?.[0],
            score: item.score,
          };
        })
        .filter((b): b is BoothRankingItem => b !== null); // ✅ 타입 좁히기
      setMappedBooths(mapped);
    };

    const fetchNoticeList = async () => {
      await NoticeListAPI();
    };

    fetchRanking();
    fetchNoticeList();
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const updatePerformer = () => {
      const performer = getCurrentPerformance();
      setCurrentPerformance(performer ?? null);
    };

    // 1. 첫 실행
    updatePerformer();

    // 2. 5분마다 반복
    const intervalId = setInterval(updatePerformer, 5 * 60 * 1000); // 5분 = 300,000ms

    // 3. 언마운트 시 인터벌 제거
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Container>
      <Header />
      <ImageContainer>
        <FlowerImage data={Flower} />
        <MainSlogan>동국대학교 대동제</MainSlogan>
        <object data={Logo} style={{ width: "100%", height: "auto" }} />
        <Row>
          <Slogan>(비우는) 만큼 </Slogan>
          <Slogan>(자유로워)지리라</Slogan>
        </Row>

        <Image src={HandImage} alt="hand.png" />
      </ImageContainer>

      <MainContainer>
        <ContentContainer>
          <TitleContainer
            ref={timelineAnimation.ref}
            className={`fade-up ${timelineAnimation.isVisible ? "visible" : ""}`}
          >
            <Title>실시간 공연 타임라인</Title>
          </TitleContainer>
          <TimeLine currentPerformer={currentPerformance} />
        </ContentContainer>
        <ContentContainer>
          <TitleContainer
            ref={noticeAnimation.ref}
            className={`fade-up ${noticeAnimation.isVisible ? "visible" : ""}`}
          >
            <Title>공지사항</Title>
          </TitleContainer>
          <Notice notices={previewNotices} />
        </ContentContainer>
        <ContentContainer>
          <TitleContainer
            ref={rankingAnimation.ref}
            className={`fade-up ${rankingAnimation.isVisible ? "visible" : ""}`}
          >
            <img src={RankingIcon} alt="ranking" width={20} height={16} />
            <Title>실시간 부스 순위</Title>
          </TitleContainer>

          <BoothRanking booths={mappedBooths} />
        </ContentContainer>
      </MainContainer>
    </Container>
  );
};

export default HomePage;
