import { Container, EmptyContainer } from "./Notice.styles";
import type { NoticeItemType } from "@/pages/notice/types/noticeItems";
import NoticeCard from "./NoticeCard";
import { useOnScreenAnimation } from "@/hooks/useOnScreenAnimation";

interface NoticeProps {
  notices: NoticeItemType[];
}

const Notice = ({ notices }: NoticeProps) => {
  const { ref, isVisible } = useOnScreenAnimation<HTMLDivElement>();
  const hasNotices = notices && notices.length > 0;

  return (
    <Container>
      {hasNotices ? (
        notices
          .slice(0, 3)
          .map((notice) => (
            <NoticeCard key={notice.notice_id} notice={notice} />
          ))
      ) : (
        <EmptyContainer
          ref={ref}
          className={`fade-up ${isVisible ? "visible" : ""}`}
        >
          등록된 공지사항이 없어요
        </EmptyContainer>
      )}
    </Container>
  );
};

export default Notice;
