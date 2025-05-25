import { Container, EmptyContainer } from "./Notice.styles";
import type { NoticeItemType } from "@/pages/notice/types/noticeItems";
import NoticeCard from "./NoticeCard";

interface NoticeProps {
  notices: NoticeItemType[];
}

const Notice = ({ notices }: NoticeProps) => {
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
        <EmptyContainer>등록된 공지사항이 없습니다.</EmptyContainer>
      )}
    </Container>
  );
};

export default Notice;
