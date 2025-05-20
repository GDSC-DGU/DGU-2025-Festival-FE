import { useParams } from "react-router-dom";
import { useState, useRef } from "react";
import ImagePagination from "./components/ImagePagination/ImagePagination";
import TopBar from "@/components/topbar/TopBar";
import { dummyNotices } from "./data/noticeDetails";
import {
  Container,
  ContentContainer,
  TitleText,
  DateText,
  ContentHeader,
  Divider,
  ImageScrollContainer,
  ImageItem,
  ContentText,
} from "./NoticeDetailPage.styles";
import { formatDate } from "@/utils/date";

const NoticeDetailPage = () => {
  const { id } = useParams();
  const noticeId = Number(id);
  const [pageIndex, setPageIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const notice = dummyNotices.find((n) => n.id === noticeId);

  if (!notice) {
    return (
      <Container>
        <TopBar title="공지사항" showBackButton />
        <center>존재하지 않는 공지입니다.</center>
      </Container>
    );
  }

  const imageUrls = notice.imageUrls ?? [];

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
      <TopBar title="공지사항" showBackButton />
      <ContentContainer>
        <ContentHeader>
          <TitleText>{notice.title}</TitleText>
          <DateText>{formatDate(notice.date)}</DateText>
        </ContentHeader>
        <Divider />
        {imageUrls.length > 0 && (
          <>
            <ImageScrollContainer ref={scrollRef} onScroll={handleScroll}>
              {imageUrls.slice(0, 5).map((url, i) => (
                <ImageItem key={i}>
                  <img src={url} alt={`공지 이미지 ${i + 1}`} />
                </ImageItem>
              ))}
            </ImageScrollContainer>

            <ImagePagination
              total={imageUrls.length}
              current={pageIndex}
              onDotClick={scrollToIndex}
            />
          </>
        )}

        <ContentText>{notice.content}</ContentText>
      </ContentContainer>
    </Container>
  );
};

export default NoticeDetailPage;
