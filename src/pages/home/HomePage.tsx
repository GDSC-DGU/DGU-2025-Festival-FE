import {
  Container,
  MainContainer,
  Title,
  ContentContainer,
  TitleContainer,
} from "./HomePage.styles";
import Header from "./components/Header/Header";
import Flower from "@/assets/images/flower.png";
import TimeLine from "./components/TimeLine/TimeLine";
import { currentPerformer } from "./data/currentPerformer";
import Notice from "./components/Notice/Notice";
import { topNotices } from "./data/topNotices";
import BoothRanking from "./components/BoothRanking/BoothRanking";
import { topBooths } from "./data/topBooths";
import RankingIcon from "@/assets/icons/ranking.svg";
import { booths } from "../booth/data/booths";

const HomePage = () => {
  const mappedBooths = topBooths.map((item, index) => {
    const booth = booths.find((b) => b.id === `booth-${item.booth_id}`);
    return {
      ranking: index + 1,
      booth_id: `booth-${item.booth_id}`,
      name: booth?.name ?? "이름 없음",
      intro: booth?.intro ?? "설명 없음",
    };
  });

  return (
    <Container>
      <Header />
      <MainContainer>
        <img src={Flower} height={100} alt="flower" />
        <ContentContainer>
          <TitleContainer>
            <Title>타임라인</Title>
          </TitleContainer>
          <TimeLine currentPerformer={currentPerformer} />
        </ContentContainer>
        <ContentContainer>
          <TitleContainer>
            <Title>공지사항</Title>
          </TitleContainer>
          <Notice notices={topNotices} />
        </ContentContainer>
        <ContentContainer>
          <TitleContainer>
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
