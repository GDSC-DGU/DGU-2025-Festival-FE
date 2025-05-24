import { useParams } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import ImagePagination from "./components/ImagePagination/ImagePagination";
import TopBar from "@/components/topbar/TopBar";
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
import { useNoticeStore } from "@/stores/useNoticeStore";
import { NoticeDetailAPI } from "@/api/notice/notice";

const NoticeDetailPage = () => {
  const { id } = useParams();
  const noticeId = Number(id);
  const [pageIndex, setPageIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const notice = useNoticeStore((state) => state.noticeDetail);

  useEffect(() => {
    const fetchDetail = async () => {
      await NoticeDetailAPI(noticeId);
    };

    fetchDetail();
  }, []);

  if (!notice) {
    return (
      <Container>
        <TopBar title="공지사항" showBackButton />
        <center>존재하지 않는 공지입니다.</center>
      </Container>
    );
  }

  const imageUrls = notice.image_urls ?? [];

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
          <TitleText>{notice.notice_title}</TitleText>
          <DateText>{formatDate(notice.publish_time)}</DateText>
        </ContentHeader>
        <Divider />
        {imageUrls.length > 0 && (
          <>
            <ImageScrollContainer ref={scrollRef} onScroll={handleScroll}>
              {imageUrls.slice(0, 5).map((url, i) => (
                <ImageItem key={i}>
                  <img
                    src={url.notice_image_url}
                    alt={`공지 이미지 ${i + 1}`}
                  />
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

        <ContentText>{notice.notice_content}</ContentText>
      </ContentContainer>
    </Container>
  );
};

export default NoticeDetailPage;
