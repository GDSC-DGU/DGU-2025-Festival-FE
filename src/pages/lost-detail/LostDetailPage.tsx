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
  QuestionContainer,
  QuestionText,
  QuestionHeader,
  QuestionContent,
  ImageScrollContainer,
  InfoField,
  Label,
  Value,
  Tag,
  TitleContainer,
} from "./LostDetailPage.styles";
import { formatDate } from "@/utils/date";
import QuestionIcons from "@/assets/icons/question.svg";
import { useState, useRef, useEffect } from "react";
import ImagePagination from "../notice-detail/components/ImagePagination/ImagePagination";
import { LostDetailAPI } from "@/api/notice/lost";
import { useLostStore } from "@/stores/useLostStore";

const LostDetailPage = () => {
  const { id } = useParams();
  const lostId = Number(id);
  const [pageIndex, setPageIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const lost = useLostStore((state) => state.lostDetail);

  useEffect(() => {
    const fetchDetail = async () => {
      await LostDetailAPI(lostId);
    };

    fetchDetail();
  }, [lostId]);

  if (!lost) {
    return (
      <Container>
        <TopBar title="분실물" showBackButton />
        <center>존재하지 않는 페이지입니다.</center>
      </Container>
    );
  }

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollX = scrollRef.current.scrollLeft;
    const width = scrollRef.current.clientWidth;

    const index = Math.round(scrollX / width);
    setPageIndex(index);
  };

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const width = scrollRef.current.clientWidth;
    scrollRef.current.scrollTo({
      left: index * width,
      behavior: "smooth",
    });
  };

  return (
    <Container>
      <TopBar title="분실물" showBackButton />
      <ContentContainer>
        <ContentHeader>
          <TitleContainer>
            <TitleText>{lost.lost_title}</TitleText>
            <Tag>{lost.lost_tag}</Tag>
          </TitleContainer>

          <DateText>{formatDate(lost.publish_time)}</DateText>
        </ContentHeader>
        <Divider />
        {lost.lost_item_image_urls.length > 0 && (
          <>
            <ImageScrollContainer ref={scrollRef} onScroll={handleScroll}>
              {lost.lost_item_image_urls.slice(0, 5).map((url, i) => (
                <ImageItem key={i}>
                  <img src={url} alt={`분실물 이미지 ${i + 1}`} />
                </ImageItem>
              ))}
            </ImageScrollContainer>
            {lost.lost_item_image_urls.length > 1 && (
              <ImagePagination
                total={lost.lost_item_image_urls.length}
                current={pageIndex}
                onDotClick={scrollToIndex}
              />
            )}
          </>
        )}
        <InfoField>
          <Label>색상</Label>
          <Value>{lost.lost_color}</Value>
        </InfoField>
        <InfoField>
          <Label>종류</Label>
          <Value>{lost.lost_category}</Value>
        </InfoField>
        <InfoField>
          <Label>브랜드</Label>
          <Value>{lost.lost_brand}</Value>
        </InfoField>
        <InfoField>
          <Label>분실 장소</Label>
          <Value>{lost.lost_location}</Value>
        </InfoField>
        <InfoField>
          <Label>특징</Label>
          <Value>{lost.lost_note}</Value>
        </InfoField>
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
