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

const LostDetailPage = () => {
  const { id } = useParams();
  const lostId = Number(id);

  const dummyLosts = [
    {
      id: 1,
      title: "검은색 뉴발란스 백팩",
      date: new Date(),
      imageUrl:
        "https://www.lost112.go.kr/lostnfs/images/uploadImg/thumbnail/20230830/20230830033031521.jpg",
      content: `
        색 : 검은색
        브랜드 : 뉴발란스
        종류 : 백팩
        발견 장소 : 대운동장 무대앞
        특징 : 곰인형 키링이 달려있음
            `.trim(),
    },
    {
      id: 2,
      title: "검은색 지갑",
      date: new Date(),
      imageUrl:
        "https://www.lost112.go.kr/lostnfs/images/uploadImg/thumbnail/20240104/20240104091146627.jpeg",
      content: "만해광장에서 검은색 지갑을 습득하였습니다.",
    },
    {
      id: 3,
      title: "검은색 지갑",
      date: new Date(),
      imageUrl:
        "https://www.lost112.go.kr/lostnfs/images/uploadImg/thumbnail/20220228/20220228031042881.jpg",
      content: "팔정도에서 검은색 지갑을 습득하였습니다.",
    },
  ];

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
