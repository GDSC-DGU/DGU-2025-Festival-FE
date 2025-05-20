import { useParams } from "react-router-dom";
import TopBar from "@/components/topbar/TopBar";
import {
  Container,
  ContentContainer,
  TitleText,
  DateText,
  ContentHeader,
  Divider,
  ImageItem,
  ContentText,
  QuestionContainer,
  QuestionText,
  QuestionHeader,
  QuestionContent,
} from "./LostDetailPage.styles";
import { formatDate } from "@/utils/date";
import QuestionIcons from "@/assets/icons/question.svg";
import { dummyLosts } from "./data/lostDetails";

const LostDetailPage = () => {
  const { id } = useParams();
  const lostId = Number(id);

  const lost = dummyLosts.find((n) => n.id === lostId);

  if (!lost) {
    return (
      <Container>
        <TopBar title="분실물" showBackButton />
        <center>존재하지 않는 페이지입니다.</center>
      </Container>
    );
  }

  return (
    <Container>
      <TopBar title="분실물" showBackButton />
      <ContentContainer>
        <ContentHeader>
          <TitleText>{lost.title}</TitleText>
          <DateText>{formatDate(lost.date)}</DateText>
        </ContentHeader>
        <Divider />
        {lost.imageUrl && (
          <ImageItem>
            <img src={lost.imageUrl} />
          </ImageItem>
        )}
        <ContentText>{lost.content}</ContentText>
        <QuestionContainer>
          <QuestionHeader>
            <img src={QuestionIcons} alt="?" />
            <QuestionText>어디서 찾나요?</QuestionText>
          </QuestionHeader>
          <QuestionContent>
            잃어버린 분실물은 000에서 찾으면 됩니다. {"\n"}분실물을 습득하셨다면
            000으로 가져와주세요.
          </QuestionContent>
        </QuestionContainer>
      </ContentContainer>
    </Container>
  );
};

export default LostDetailPage;
